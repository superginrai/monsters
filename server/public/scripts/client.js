$(document).ready(onReady);

function onReady() { 
    $.ajax({
        type: 'GET',
        url: '/monsters'
    })
    .then(function(response) {
        response.forEach(element => {
        $('#monsters').append('<li>'+ element + '</li>');
        });
       
    });
}