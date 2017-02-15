import $ from 'jquery';

function getData (callback) {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: callback
    });
}

getData(print);

function print(data, status, xmlstuff){
    console.log(data)
    console.log(status)
    console.log(xmlstuff)
}
