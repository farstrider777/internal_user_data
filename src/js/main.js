import $ from 'jquery';

function getData (callback) {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: callback
    });
}

var info = {};

function print(data){
    console.log(data);
    info = data.results[0];
    $(".container").after(`
      <div class="individual-container">
        <div><img src="${info.picture.large}"/></div>
        <div class="name">${info.name.first} ${info.name.last}</div>
        <div class="line"></div>
        <div class="email">${info.email}</div>
        <div class="address">${info.location.street}</div>
        <div class="address">${info.location.city} ${info.location.state} ${info.location.postcode}</div>
        <div class="phone">${info.cell}</div>
        <div class="ss-num">${info.cell}</div>
      </div>
    `);
}

for(var count = 0; count < 12; count++){
    getData(print);
}
