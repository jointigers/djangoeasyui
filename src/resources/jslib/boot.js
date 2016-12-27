﻿__CreateJSPath = function (js) {
    var scripts = document.getElementsByTagName("script");
    var path = "";
    for (var i = 0, l = scripts.length; i < l; i++) {
        var src = scripts[i].src;
        if (src.indexOf(js) != -1) {
            var ss = src.split(js);
            path = ss[0];
            break;
        }
    }
    var href = location.href;
    href = href.split("#")[0];
    href = href.split("?")[0];
    var ss = href.split("/");
    ss.length = ss.length - 1;
    href = ss.join("/");
    if (path.indexOf("https:") == -1 && path.indexOf("http:") == -1 && path.indexOf("file:") == -1 && path.indexOf("\/") != 0) {
        path = href + "/" + path;
    }
    return path;
}

var bootPATH = __CreateJSPath("boot.js");

document.write('<script type="text/javascript" src="'+bootPATH+'jquery-1.8.0.min.js" charset="utf-8"></script>');
document.write('<script type="text/javascript" src="'+bootPATH+'jquery-easyui-1.3.1/jquery.easyui.min.js" charset="utf-8"></script>');
document.write('<script type="text/javascript" src="'+bootPATH+'jquery-easyui-1.3.1/locale/easyui-lang-zh_CN.js" charset="utf-8"></script>');
document.write('<script type="text/javascript" src="'+bootPATH+'jsutil.js" charset="utf-8"></script>');

document.write('<link rel="stylesheet" href="'+bootPATH+'jquery-easyui-1.3.1/themes/default/easyui.css" type="text/css"></link>');
document.write('<link rel="stylesheet" href="'+bootPATH+'jquery-easyui-1.3.1/themes/icon.css" type="text/css"></link>');

//skin
//var skin = getCookie("miniuiSkin");
//if (skin) {
//    document.write('<link href="' + bootPATH + 'miniui/themes/' + skin + '/skin.css" rel="stylesheet" type="text/css" />');
//}


////////////////////////////////////////////////////////////////////////////////////////
function getCookie(sName) {
    var aCookie = document.cookie.split("; ");
    var lastMatch = null;
    for (var i = 0; i < aCookie.length; i++) {
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0]) {
            lastMatch = aCrumb;
        }
    }
    if (lastMatch) {
        var v = lastMatch[1];
        if (v === undefined) return v;
        return unescape(v);
    }
    return null;
}