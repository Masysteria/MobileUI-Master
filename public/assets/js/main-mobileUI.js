/*
 * Author: Kevin Taylor
 * Date: 2015
 */

(function(){
    // load mobileUI.js
    $('body').append("<script src='assets/mobileUI/js/mobileUI.js'></script>");

    // localhost
    // var socket = io.connect('http://localhost:8888');

    // Server
    var socket = io.connect('http://your-site:8000');

    // --------------------------------------
    //              Socket.io
    // --------------------------------------

    // Button 1 on click
    socket.on('btnClick1', function (message){
        // your code goes here
    });

    // Button 2 on click
    socket.on('btnClick2', function (message){
        // your code goes here
    });

    // Button 3 on click
    socket.on('btnClick3', function (message){
        // your code goes here
    });

    // Button 4 on click
    socket.on('btnClick4', function (message){
        // your code goes here
    });

    // Button 5 on click
    socket.on('btnClick5', function (message){
        // your code goes here
    });

    // Button 6 on click
    socket.on('btnClick6', function (message){
        // your code goes here
    });

    // Checkbox 1
    socket.on('checkbox1checked', function (message){
        // your code goes here
    });

    socket.on('checkbox1unchecked', function (message){
        // your code goes here
    });

    // Checkbox 2
    socket.on('checkbox2checked', function (message){
        // your code goes here
    });

    socket.on('checkbox2unchecked', function (message){
        // your code goes here
    });

    // Checkbox 3
    socket.on('checkbox3checked', function (message){
        // your code goes here
    });

    socket.on('checkbox3unchecked', function (message){
        // your code goes here
    });

    // Checkbox 4
    socket.on('checkbox4checked', function (message){
        // your code goes here
    });

    socket.on('checkbox4unchecked', function (message){
        // your code goes here
    });

    // Checkbox 5
    socket.on('checkbox5checked', function (message){
        // your code goes here
    });

    socket.on('checkbox5unchecked', function (message){
        // your code goes here
    });

    // Checkbox 6
    socket.on('checkbox6checked', function (message){
        // your code goes here
    });

    socket.on('checkbox6unchecked', function (message){
        // your code goes here
    });

    // Slider 1 on change
    socket.on('slider1changed', function (val){
        // your code goes here
    });

    // Slider 2 on change
    socket.on('slider2changed', function (val){
        // your code goes here
    });

    // Slider 3 on change
    socket.on('slider3changed', function (val){
        // your code goes here
    });

    // Slider 4 on change
    socket.on('slider4changed', function (val){
        // your code goes here
    });

    // Slider 5 on change
    socket.on('slider5changed', function (val){
        // your code goes here
    });

    // Slider 6 on change
    socket.on('slider6changed', function (val){
        // your code goes here
    });

    // Slider 7 on change
    socket.on('slider7changed', function (val){
        // your code goes here
    });

    // player-play on click
    socket.on('player-play-click', function (message){
        // your code goes here
    });

    // player-pause on click
    socket.on('player-pause-click', function (message){
        // your code goes here
    });

    // player-stop on click
    socket.on('player-stop-click', function (message){
        // your code goes here
    });

    // player-previous on click
    socket.on('player-previous-click', function (message){
        // your code goes here
    });

    // player-next on click
    socket.on('player-next-click', function (message){
        // your code goes here
    });

})();

