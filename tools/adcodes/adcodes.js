function generateCode() {
    const Headcode = document.getElementById("HeadCode").value;
    const Adpath = document.getElementById("AdPath").value;
    const DeskTopAdSize = document.getElementById("DesktopAdSize").value;
    const MobilePhoneAdSize = document.getElementById("MobileAdSize").value;
    const Refreshval = document.getElementById("ReFreshValue").value;
    const CssInnovation = document.getElementById("AdType").value;


    const BodyAdCode = '       <div data-adslot= "' + Adpath + '" \n' +
        '           data-size-desktop="' + DeskTopAdSize + '"\n' +
        '           data-size-mobile="' + MobilePhoneAdSize + '"\n' +
        '           data-ad-refresh=' + Refreshval + '>\n' +
        '       </div>'


    if (Headcode === "DFP") {
        document.getElementById("HeadTag").value = '<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"><\/script>\n' +
            '<script src="https://rediads.com/code/headscripts/dfp.js" defer><\/script>\n' +
            '<link rel="stylesheet" href="https://rediads.com/code/headscripts/ads.css">';
    } else if (Headcode === "DFPandAmazon") {
        document.getElementById("HeadTag").value =
            '<script>\n' +
            '        (function () {\n' +
            '\n' +
            '            // Load APS library\n' +
            '            !function (a9, a, p, s, t, A, g) {\n' +
            '                if (a[a9]) return;\n' +
            '\n' +
            '                function q(c, r) {\n' +
            '                    a[a9]._Q.push([c, r])\n' +
            '                }\n' +
            '\n' +
            '                a[a9] = {\n' +
            '                    init: function () {\n' +
            '                        q("i", arguments)\n' +
            '                    }, fetchBids: function () {\n' +
            '                        q("f", arguments)\n' +
            '                    }, setDisplayBids: function () {\n' +
            '                    }, targetingKeys: function () {\n' +
            '                        return []\n' +
            '                    }, _Q: []\n' +
            '                };\n' +
            '                A = p.createElement(s);\n' +
            '                A.async = !0;\n' +
            '                A.src = t;\n' +
            '                g = p.getElementsByTagName(s)[0];\n' +
            '                g.parentNode.insertBefore(A, g)\n' +
            '            }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");\n' +
            '\n' +
            '        })();\n' +
            '    <\/script> \n' +
            '<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"><\/script> \n' +
            '<script src="https://rediads.com/code/headscripts/dfp_aps.js" defer><\/script> \n' +
            '<link rel="stylesheet" href="https://rediads.com/code/headscripts/ads.css">';
    } else if (Headcode === "DFPandHB") {
        document.getElementById("HeadTag").value =
            '<script src="https://rediads.com/code/global/prebid.js"><\/script> \n' +
            '<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"><\/script> \n' +
            '<script src="https://rediads.com/code/headscripts/dfp_pb.js" defer><\/script>\n' +
            '<link rel="stylesheet" href="https://rediads.com/code/headscripts/ads.css">';
    } else if (Headcode === "DFPandAmazonandHB") {
        document.getElementById("HeadTag").value =

            '<script>\n' +
            '        (function () {\n' +
            '\n' +
            '            // Load APS library\n' +
            '            !function (a9, a, p, s, t, A, g) {\n' +
            '                if (a[a9]) return;\n' +
            '\n' +
            '                function q(c, r) {\n' +
            '                    a[a9]._Q.push([c, r])\n' +
            '                }\n' +
            '\n' +
            '                a[a9] = {\n' +
            '                    init: function () {\n' +
            '                        q("i", arguments)\n' +
            '                    }, fetchBids: function () {\n' +
            '                        q("f", arguments)\n' +
            '                    }, setDisplayBids: function () {\n' +
            '                    }, targetingKeys: function () {\n' +
            '                        return []\n' +
            '                    }, _Q: []\n' +
            '                };\n' +
            '                A = p.createElement(s);\n' +
            '                A.async = !0;\n' +
            '                A.src = t;\n' +
            '                g = p.getElementsByTagName(s)[0];\n' +
            '                g.parentNode.insertBefore(A, g)\n' +
            '            }("apstag", window, document, "script", "//c.amazon-adsystem.com/aax2/apstag.js");\n' +
            '\n' +
            '        })();\n' +
            '    <\/script> \n' +
            '<script src="https://rediads.com/code/global/prebid.js"><\/script> \n' +
            '<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"><\/script> \n' +
            '<script src="https://rediads.com/code/headscripts/dfp_aps_pb.js" defer><\/script>\n' +
            '<link rel="stylesheet" href="https://rediads.com/code/headscripts/ads.css">';


    } else {
        alert("Please Select Head Code");
    }

    if (CssInnovation === "Sticky") {
        var bodydiv = '<div class="Rediads_BottomSticky">\n' +
            BodyAdCode +
            '</div>';
        document.getElementById("bodyadTag").value = bodydiv;

    } else if (CssInnovation === "Parallax") {

        var bodydiv = '<div style="height:340px; text-align: center;" class="parallax_container">\n' +
            '    <div class="parallax_container_one">\n' +
            '        <div class="parallax_container_two" style="top: 20px;">\n' +
            BodyAdCode +
            '        </div>\n' +
            '    </div>\n' +
            '</div>'
        document.getElementById("bodyadTag").value = bodydiv;

    } else if (CssInnovation === "In-Container-Scroll") {

        var bodydiv = '<div class="paisa-banner">\n' +
            BodyAdCode +
            '</div>';
        document.getElementById("bodyadTag").value = bodydiv;


    } else if (CssInnovation === "double-ad-Fixed") {

        var bodydiv = '<div class="Rediads_flex_adcontainer">\n' +
            '     <div class="Rediads_Ad_Card_MTF">\n' +
            '         <div class="Rediads_Ad_Lable">advertisement</div>\n' +
            BodyAdCode +
            '     </div>\n' +
            '\n' +
            '     <div class="Rediads_Ad_Card_MTF_A">\n' +
            '         <div class="Rediads_Ad_Lable">advertisement</div>\n' +
            BodyAdCode +
            '</div>';
        document.getElementById("bodyadTag").value = bodydiv;

    } else if (CssInnovation === "normal") {
        var bodydiv = BodyAdCode;
        document.getElementById("bodyadTag").value = bodydiv;
    } else {
        alert("Please Select Css Innovation");
    }
}