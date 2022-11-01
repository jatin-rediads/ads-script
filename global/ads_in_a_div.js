window.googletag = window.googletag || {cmd: []};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

googletag.cmd.push(function () {
    googletag.pubads().disableInitialLoad();
});
if (typeof apstag != "undefined") {
    apstag.init({
        pubID: 'ac0d98fe-1a9c-4701-aede-efc3ec6932fa',
        adServer: 'googletag',
        bidTimeout: 2e3
    });
}
var prebidAdUnits = [];
var amazonTamUnits = [];
var currentPageSlots = [];
var REFRESH_KEY = "refresh";
var REFRESH_VALUE = "true";
var SECONDS_TO_WAIT_AFTER_VIEWABILITY = Math.floor(Math.random() * (35 - 30 + 1)) + 30;
googletag.cmd.push(function () {
    googletag.pubads().addEventListener("impressionViewable", function (event) {
        var slot = event.slot;
        var slotName = event.slot.getSlotId().getName();
        var slotId = event.slot.getSlotElementId();
        var slotSize = event.slot.getSizes()
        if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
            setTimeout(function () {
                refreshBid(slot, slotName, slotId, slotSize);
            }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
        }
    });

});
//re
function refreshBid(slot, slotName, slotId, slotSize) {
    pbjs.que.push(function () {
        pbjs.requestBids({
            timeout: PREBID_TIMEOUT,
            adUnitCodes: [slotName],
            bidsBackHandler: function () {
                pbjs.setTargetingForGPTAsync([slotName]);
                googletag.pubads().refresh([slot]);

            }
        });

    });
    var amazonRefUnits = [];
    var ele = document.getElementById(slotId);
    if (getDeviceType() == "desktop") {
        adSize = JSON.parse(ele.getAttribute('data-size-desktop'));
        window.parent.document.getElementById(window.name).style.cssText = "width: 728px; height: 90px;";
    }
    if (getDeviceType() == "mobile" || getDeviceType() == "tablet") {
        adSize = JSON.parse(ele.getAttribute('data-size-mobile'));
        window.parent.document.getElementById(window.name).style.cssText = "width: 300px; height: 250px;";
    }

    if (slotId && adSize && slotName) {
        var objrefAd = {
            slotID: slotId,
            sizes: adSize,
            slotName: slotName
        };
        amazonRefUnits.push(objrefAd);
    }
    apstag.fetchBids({
            slots: amazonRefUnits,
            timeout: 2e3
        }, function (bids) {
            googletag.cmd.push(function () {
                apstag.setDisplayBids();
                requestManager.aps = true; // signals that APS request has completed

            });
        }
    );
}


function getDeviceType() {
    try {
        var ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return "tablet";
        }
        if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return "mobile";
        }
        return "desktop";
    } catch (e) {
        console.log("getDeviceType:" + e);
    }
}


var PREBID_TIMEOUT = 1500;
var FAILSAFE_TIMEOUT = 2000;

var requestManager = {
    adserverRequestSent: false,
    aps: false,
    prebid: false,
};

var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

function prebid() {
    try {

        var allAds = document.querySelectorAll("div[data-adslot]");
        if (allAds.length > 0) {
            allAds.forEach(function (ele) {
                var adSlot = ele.getAttribute('data-adslot');
                //var adSize = JSON.parse(ele.getAttribute('data-size'));
                let r = (Math.random() + 1).toString(36).substring(7);
                ele.setAttribute('id', r);

                if (getDeviceType() == "desktop") {
                    adSize = JSON.parse(ele.getAttribute('data-size-desktop'));
                }
                if (getDeviceType() == "mobile" || getDeviceType() == "tablet") {
                    adSize = JSON.parse(ele.getAttribute('data-size-mobile'));
                }
                var objPrebid = { //prebid
                    code: adSlot,
                    mediaTypes: {
                        banner: {
                            sizes: adSize
                        }
                    },
                    bids: [
                        {
                            bidder: 'rubicon',
                            params: {
                                accountId: 24482,
                                siteId: 440604,
                                zoneId: 2532348
                            }
                        }, {
                            bidder: 'criteo',
                            params: {
                                networkId: 11390
                            }
                        }
                    ]
                };

                pbjs.setConfig({
                    "currency": {
                        // enables currency feature
                        "adServerCurrency": "USD",
                        "granularityMultiplier": 80, // 0.50 increment up to 5 is fine for GBP
                        // optionally override the default rate file
                        "conversionRateFile": "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json",
                        // optionally provide a default rate in case the file can't be read
                        "defaultRates": {"USD": {"INR": 80}}
                    }
                });

                prebidAdUnits.push(objPrebid); //prebid
                var divId = ele.getAttribute('id') ? ele.getAttribute('id') : '';
                if (divId && adSize && adSlot) {
                    var objAmazon = {
                        slotID: divId,
                        sizes: adSize,
                        slotName: adSlot
                    };
                    amazonTamUnits.push(objAmazon);
                }

            });

        }
    } catch (e) {
        console.log("prebid:" + e);
    }

}


function constructAds() {
    try {
        var allAds = document.querySelectorAll("div[data-adslot]");
        if (allAds.length > 0) {
            allAds.forEach(function (ele) {

                var adSlot = ele.getAttribute('data-adslot');
                var adSize = JSON.parse(ele.getAttribute('data-size'));
                var refresh = ele.getAttribute('data-ad-refresh');
                var divId = ele.getAttribute('id');
                if (getDeviceType() == "desktop") {
                    adSize = JSON.parse(ele.getAttribute('data-size-desktop'));
                }
                if (getDeviceType() == "mobile" || getDeviceType() == "tablet") {
                    adSize = JSON.parse(ele.getAttribute('data-size-mobile'));
                }

                if (typeof googletag != 'undefined') {
                    googletag.cmd.push(function () {
                        var slot = googletag.defineSlot(adSlot, adSize, divId);
                        currentPageSlots && currentPageSlots.push(slot);


                        if (refresh === 'true') {

                            slot.setTargeting(REFRESH_KEY, REFRESH_VALUE);
                        }

                        slot.addService(googletag.pubads());
                        googletag.enableServices();
                    });
                }

            });
        }
    } catch (e) {
        console.log("constructAd:" + e);
    }
}


/** Executes a parallel auction with prebid **/
function executeParallelAuctionAlongsidePrebid() {
    try {
        var FAILSAFE_TIMEOUT = 2000;
        var requestManager = {
            adserverRequestSent: false,
            aps: false,
            prebid: false
        };

        // when both APS and Prebid have returned, initiate ad request
        function biddersBack() {
            try {
                if (requestManager.aps && requestManager.prebid) {
                    sendAdserverRequest();
                }
                return;
            } catch (e) {
                console.log("biddersBack", e);
            }
        }

        // sends adserver request
        function sendAdserverRequest() {
            try {
                if (requestManager.adserverRequestSent === true) {
                    return;
                }
                requestManager.adserverRequestSent = true;
                googletag.cmd.push(function () {
                    googletag.pubads().refresh(currentPageSlots);
                });
            } catch (e) {
                console.log("sendAdserverRequest", e);
            }
        }

        // sends bid request to APS and Prebid
        function requestHeaderBids() {
            try {
                // APS request
                apstag.fetchBids({
                        slots: amazonTamUnits
                    }, function (bids) {
                        googletag.cmd.push(function () {
                            apstag.setDisplayBids();
                            requestManager.aps = true; // signals that APS request has completed
                            biddersBack(); // checks whether both APS and Prebid have returned
                        });
                    }
                );

                // put prebid request here
                pbjs.que.push(function () {
                    pbjs.addAdUnits(prebidAdUnits);
                    pbjs.requestBids({
                        bidsBackHandler: function () {
                            googletag.cmd.push(function () {
                                pbjs.setTargetingForGPTAsync();
                                requestManager.prebid = true; // signals that Prebid request has completed
                                biddersBack(); // checks whether both APS and Prebid have returned
                            })
                        }
                    });
                });
            } catch (e) {
                console.log("requestHeaderBids", e);
            }
        }

        // initiate bid request
        requestHeaderBids();

        // set failsafe timeout
        window.setTimeout(function () {
            sendAdserverRequest();
        }, FAILSAFE_TIMEOUT);
    } catch (e) {
        console.log("executeParallelAuctionAlongsidePrebid", e);
    }
};


async function displayAds() {
    try {
        await prebid();
        await executeParallelAuctionAlongsidePrebid();
        await constructAds();

        var allAds = document.querySelectorAll("div[data-adslot]");
        if (allAds.length > 0) {
            allAds.forEach(function (ele) {
                var adSlot = ele.getAttribute('data-adslot');
                var divId = ele.getAttribute('id');

                if (typeof googletag != 'undefined') {
                    googletag.cmd.push(function () {
                        googletag.display(divId);
                    });
                    ele.removeAttribute('data-adslot');
                }

            });

        }
    } catch (e) {
        console.log("displayAds:" + e);
    }
}


window.addEventListener('DOMContentLoaded', function () {

    var refInterval = setInterval(function () {
        if (typeof googletag != 'undefined' && googletag.apiReady && typeof pbjs.setConfig != 'undefined' && typeof apstag != 'undefined') {
            displayAds();
            clearInterval(refInterval);
        }
    }, 300);

});

setTimeout(function () {

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.onload = function () {
            // remote script has loaded
        };
        js.src = "//rediads.com/code/Redias_Pixel/dist/snippet.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'Rediads-Pixel'));
}, 4000);

