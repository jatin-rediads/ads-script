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
var currentPageSlots = [];
var amazonTamUnits = [];
var REFRESH_KEY = "refresh";
var REFRESH_VALUE = "true";
var SECONDS_TO_WAIT_AFTER_VIEWABILITY = Math.floor(Math.random() * (35 - 30 + 1)) + 30;

//Math.floor(Math.random() * (35 - 30 + 1)) + 30;
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


function refreshBid(slot, slotName, slotId, slotSize) {
    var apstagSlots = [];
    var ele = document.getElementById(slotId);
    if (getDeviceType() == "desktop") {
        adSize = JSON.parse(ele.getAttribute('data-size-desktop'));
    }
    if (getDeviceType() == "mobile" || getDeviceType() == "tablet") {
        adSize = JSON.parse(ele.getAttribute('data-size-mobile'));
    }

    if (slotId && adSize && slotName) {
        var amazonRefUnits = {
            slotID: slotId,
            sizes: adSize,
            slotName: slotName
        };
        apstagSlots.push(amazonRefUnits);
    }

    function _getGPTSlots(apstagSlots) {
        var slotIDs = apstagSlots.map(function (slot) {
            return slot.slotID;
        });
        return googletag.pubads().getSlots().filter(function (slot) {
            return slotIDs.indexOf(slot.getSlotElementId()) > -1;
        });
    }

    apstag.fetchBids({
        slots: apstagSlots,
        timeout: 2e3
    }, function (bids) {

        googletag.cmd.push(function () {
            apstag.setDisplayBids();
            googletag.pubads().refresh(_getGPTSlots(apstagSlots));
        });
    });
}


function constructAds() {
    try {


        var allAds = document.querySelectorAll("div[data-adslot]");
        if (allAds.length > 0) {


            allAds.forEach(function (ele) {
                var adSlot = ele.getAttribute('data-adslot');
                var adSize = ele.getAttribute('data-adsize-desktop');
                if (getDeviceType() == "desktop") {
                    adSize = JSON.parse(ele.getAttribute('data-size-desktop'));
                }
                if (getDeviceType() == "mobile") {
                    adSize = JSON.parse(ele.getAttribute('data-size-mobile'));
                }
                var refresh = ele.getAttribute('data-ad-refresh');
                let r = (Math.random() + 1).toString(36).substring(7);
                ele.setAttribute('id', r);
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
            googletag.pubads().enableSingleRequest();
            apstag.fetchBids({
                slots: amazonTamUnits,
            }, function (bids) {
                // set apstag bids, then trigger the first request to GAM
                googletag.cmd.push(function () {
                    apstag.setDisplayBids();
                    googletag.pubads().refresh(currentPageSlots);
                });
            });

        }
    } catch (e) {
        console.log("constructAd:" + e);
    }
}

async function displayAds() {
    try {
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
        if (typeof googletag != 'undefined' && googletag.apiReady && typeof apstag != 'undefined') {
            displayAds();
            clearInterval(refInterval);
        }
    }, 300);

});

