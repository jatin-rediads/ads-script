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


var REFRESH_KEY = "refresh";
var REFRESH_VALUE = "true";
var SECONDS_TO_WAIT_AFTER_VIEWABILITY = Math.floor(Math.random() * (35 - 30 + 1)) + 30;

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

function setupGoogleTag() {
    googletag
        .pubads()
        .addEventListener("impressionViewable", function (event) {
            var slot = event.slot;
            if (slot.getTargeting(REFRESH_KEY).indexOf(REFRESH_VALUE) > -1) {
                setTimeout(function () {
                    googletag.pubads().refresh([slot]);
                }, SECONDS_TO_WAIT_AFTER_VIEWABILITY * 1000);
            }
        });
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
}


function constructAds() {
    try {

        googletag.cmd.push(function () {
            setupGoogleTag();
        });

        var allAds = document.querySelectorAll("div[data-adslot]");
        if (allAds.length > 0) {


            allAds.forEach(function (ele) {
                var adSlot = ele.getAttribute('data-adslot');
                var adSize = ele.getAttribute('data-adsize-desktop');
                if (getDeviceType() == "desktop") {
                    adSize = JSON.parse(ele.getAttribute('data-size-desktop'));
                }
                if (getDeviceType() == "mobile" || getDeviceType() == "tablet") {
                    adSize = JSON.parse(ele.getAttribute('data-size-mobile'));
                }
                var refresh = ele.getAttribute('data-ad-refresh');
                let r = (Math.random() + 1).toString(36).substring(7);
                ele.setAttribute('id', r);
                if (typeof googletag != 'undefined') {


                    googletag.cmd.push(function () {

                        var slot = googletag.defineSlot(adSlot, adSize, r);

                        if (refresh === 'true') {

                            slot.setTargeting(REFRESH_KEY, REFRESH_VALUE);
                        }

                        slot.addService(googletag.pubads());
                    });
                }
                googletag.enableServices();

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

var refInterval = setInterval(function () {
    if (typeof googletag != 'undefined' && googletag.apiReady && typeof pbjs != 'undefined') {
        displayAds();
        clearInterval(refInterval);
    }
}, 300);