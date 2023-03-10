(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//rediads.com/code/global/prebid.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'Rediads-Pixel-4'));

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "//securepubads.g.doubleclick.net/tag/js/gpt.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'Rediads-Pixel-2'));


window.googletag = window.googletag || {cmd: []};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

googletag.cmd.push(function () {
    googletag.pubads().disableInitialLoad();
});
var currentPageSlots = [];
var REFRESH_KEY = "refresh";
var REFRESH_VALUE = "true";
var SECONDS_TO_WAIT_AFTER_VIEWABILITY = Math.floor(Math.random() * (35 - 30 + 1)) + 30;
googletag.cmd.push(function () {
    googletag.pubads().addEventListener("impressionViewable", function (event) {
        var slot = event.slot;
        var slotId = event.slot.getSlotId().getName();
        if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
            setTimeout(function () {
                refreshBid(slot, slotId);
            }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
        }
    });

});

function refreshBid(slot, slotId) {
    pbjs.que.push(function () {
        pbjs.requestBids({
            timeout: PREBID_TIMEOUT,
            adUnitCodes: [slotId],
            bidsBackHandler: function () {
                pbjs.setTargetingForGPTAsync([slotId]);
                googletag.pubads().refresh([slot]);
            }
        });
    });
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

function initAdserver() {
    if (pbjs.initAdserverSet) return;

    googletag.cmd.push(function () {
        pbjs.que.push(function () {
            pbjs.setTargetingForGPTAsync();
            googletag.pubads().refresh(currentPageSlots);
        });
    });
    pbjs.initAdserverSet = true;
}

function prebid() {
    try {
        var prebidAdUnits = [];
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
                    bids: [{
                        bidder: 'criteo',
                        params: {
                            networkId: 11390
                        }
                    }]
                };
                prebidAdUnits.push(objPrebid); //prebid
            });

            pbjs.que.push(function () {
                pbjs.addAdUnits(prebidAdUnits);
                pbjs.requestBids({
                    timeout: PREBID_TIMEOUT,
                    bidsBackHandler: function (bidResponses) {
                        initAdserver();
                    }
                });
            });
            setTimeout(initAdserver, FAILSAFE_TIMEOUT);
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
                if (getDeviceType() == "desktop") {
                    adSize = JSON.parse(ele.getAttribute('data-size-desktop'));
                }
                if (getDeviceType() == "mobile" || getDeviceType() == "tablet") {
                    adSize = JSON.parse(ele.getAttribute('data-size-mobile'));
                }

                var divId = ele.getAttribute('id');
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


async function displayAds() {
    try {
        await prebid();

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


var refInterval = setInterval(function () {
    if (typeof googletag != 'undefined' && googletag.apiReady && typeof pbjs != 'undefined') {
        displayAds();
        clearInterval(refInterval);
    }
}, 300);

