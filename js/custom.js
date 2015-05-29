var critical = function(msg){
    var div = "<div id='critical'>";
    div += msg;
    div += "</div>";
    $("body").append(div);
    window.setTimeout(function(){
        $("#critical").remove();
    }, 3000)
}