"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', (response) => {
      $('#fortune-text').html(response);
    });
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url, formData, (response) => {
        $('#weather-info').html(response.forecast);
    });

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();
    // const input_form = {"melon_type": $("#melon-type-field").val(), 
    //                     "qty": $('#qty-field').val()};

    const inputValues = $('#order-form').serialize();


    $.post('/order-melons.json', inputValues, (res) => {
        $('#order-status').html(`${res.code} ${res.msg}`);
    });

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


