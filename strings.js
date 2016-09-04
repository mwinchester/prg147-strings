/**
 * Created by meri on 9/4/16.
 */
// JavaScript Document
var $ = function (id) {
    return document.getElementById(id);
}
var demo = function()
{
    var display = "\tOften you will want to format strings in JavaScript. You may want to indent a paragraph, " +
        "or force a new line, or include a quote. The way to do this is using an escape sequence which normally " +
        "will begin with a \\ and be followed by a letter or series of letters.\n\n\t\"I love deadlines." +
        " I like the whooshing sound they make as they fly by.\"\n\t\t\tDouglas Adams";



    $("display").value = display;

}

window.onload = function()
{
    $("demo").onclick = demo;
}