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
    $(".container").after(`
      <div><img src="${info.picture.large}"/></div>
      <div class="name">${info.name.first} ${info.name.last}</div>
      <div class="line"></div>
      <div class="email">${info.email}</div>
      <div class="address">${info.location.street}</div>
      <div class="address">${info.location.city} ${info.location.state} ${info.location.postcode}</div>
      <div class="phone">${info.cell}</div>
      <div class="ss-num">${info.cell}</div>
    `);
}


$(".container").after(`<div>${info.gender}</div>`);
