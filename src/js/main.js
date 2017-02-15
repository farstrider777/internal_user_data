import $ from 'jquery';

function getData (callback) {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: callback
    });
}

getData(print);

var info = {};

function print(data, status, xmlstuff){
    console.log(data.results[0]);
    console.log(status);
    console.log(xmlstuff);
    info = data.results[0];
    $(".container").after(`<div><img src="${info.picture.large}"/></div>`);
}


$(".container").after(`<div>${info.gender}</div>`);
