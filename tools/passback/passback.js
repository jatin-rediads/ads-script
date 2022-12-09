function generateCode() {
    const Headcode = document.getElementById("HeadCode").value;
    const Adpath = document.getElementById("AdPath").value;
    const DeskTopAdSize = document.getElementById("DesktopAdSize").value;
    const MobilePhoneAdSize = document.getElementById("MobileAdSize").value;
    const Refreshval = document.getElementById("ReFreshValue").value;


    const BodyAdCode = '       <div data-adslot= "' + Adpath + '" \n' +
        '           data-size-desktop="' + DeskTopAdSize + '"\n' +
        '           data-size-mobile="' + MobilePhoneAdSize + '"\n' +
        '           data-ad-refresh=' + Refreshval + '>\n' +
        '       </div>'


    if (Headcode === "DFP") {
        document.getElementById("HeadTag").value =
            '<script>\n' +
            '(function (d, s, id) {\n' +
            '    var js, fjs = d.getElementsByTagName(s)[0];\n' +
            '    if (d.getElementById(id)) {\n' +
            '        return;\n' +
            '    }\n' +
            '    js = d.createElement(s);\n' +
            '    js.id = id;\n' +
            '    js.src = "//rediads.com/code/headscripts/passback_dfp.js";\n' +
            '    fjs.parentNode.insertBefore(js, fjs);\n' +
            '}(document, \'script\', \'Rediads-Pixel-1\'));  <\/script>'

    } else if (Headcode === "DFPandAmazon") {
        document.getElementById("HeadTag").value =
            '<script>\n' +
            '(function (d, s, id) {\n' +
            '    var js, fjs = d.getElementsByTagName(s)[0];\n' +
            '    if (d.getElementById(id)) {\n' +
            '        return;\n' +
            '    }\n' +
            '    js = d.createElement(s);\n' +
            '    js.id = id;\n' +
            '    js.src = "//rediads.com/code/headscripts/passback_dfp_aps.js";\n' +
            '    fjs.parentNode.insertBefore(js, fjs);\n' +
            '}(document, \'script\', \'Rediads-Pixel-1\')); <\/script>'

    } else if (Headcode === "DFPandHB") {
        document.getElementById("HeadTag").value =
            '<script>\n' +
            '(function (d, s, id) {\n' +
            '    var js, fjs = d.getElementsByTagName(s)[0];\n' +
            '    if (d.getElementById(id)) {\n' +
            '        return;\n' +
            '    }\n' +
            '    js = d.createElement(s);\n' +
            '    js.id = id;\n' +
            '    js.src = "//rediads.com/code/headscripts/passback_dfp_pb.js";\n' +
            '    fjs.parentNode.insertBefore(js, fjs);\n' +
            '}(document, \'script\', \'Rediads-Pixel-1\')); <\/script>'

    } else if (Headcode === "DFPandAmazonandHB") {
        document.getElementById("HeadTag").value =
            '<script>\n' +
            '(function (d, s, id) {\n' +
            '    var js, fjs = d.getElementsByTagName(s)[0];\n' +
            '    if (d.getElementById(id)) {\n' +
            '        return;\n' +
            '    }\n' +
            '    js = d.createElement(s);\n' +
            '    js.id = id;\n' +
            '    js.src = "//rediads.com/code/headscripts/passback_dfp_aps_pb.js";\n' +
            '    fjs.parentNode.insertBefore(js, fjs);\n' +
            '}(document, \'script\', \'Rediads-Pixel-1\')); <\/script>'

    } else {
        alert("Please Select Head Code");
    }
    ;

    var bodydiv = BodyAdCode;
    document.getElementById("bodyadTag").value = bodydiv;

}