// ==UserScript==
// @name       WaniKani Yahoo辞書 vocab link
// @namespace acals-cave.com/userscripts
// @description Provides links to Yahoo辞書 for the target vocab word for example sentences
// @include    http://www.wanikani.com/vocabulary/*
// @version    0.1
// @run-at document-end
// @require http://code.jquery.com/jquery-1.9.1.min.js
// @grant GM_log
// ==/UserScript==

var vocabItem = $(".japanese-font-styling-correction").first();
$(".individual-item > .row > .span12").first().append("<section><h2>Dictionary Links</h2><p><a href='//dic.search.yahoo.co.jp/search?ei=UTF-8&p="+vocabItem.text()+"&fr=dic&stype=prefix#JJ' target='_blank'>Yahoo</a></p></section>");

