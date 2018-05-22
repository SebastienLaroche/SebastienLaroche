$('.photoportfolio').hover(function () {
    $(this).css("transform","scale(1.1)");
});

$('.photoportfolio').mouseleave(function () {
    $(this).css("transform","scale(1)");
});

var zoom = 0 ;

$('#couleurpatte').change(function () {
    $('#pattechien').css("color",$('#couleurpatte').val())
});
$('#couleurbg').change(function () {
    $('#pattechien').css("background-color",$('#couleurbg').val())
});

$('#plus').click(function () {
    zoom++;
    switch (zoom){
        case -5:
            $('#pattechien').attr("class","fas fa-paw fa-xs");
            break;
        case -4:
            $('#pattechien').attr("class","fas fa-paw fa-sm");
            break;
        case -3:
            $('#pattechien').attr("class","fas fa-paw fa-lg");
            break;
        case -2:
            $('#pattechien').attr("class","fas fa-paw fa-2x");
            break;
        case -1:
            $('#pattechien').attr("class","fas fa-paw fa-3x");
            break;
        case 0:
            $('#pattechien').attr("class","fas fa-paw fa-5x");
            break;
        case 1:
            $('#pattechien').attr("class","fas fa-paw fa-7x");
            break;
        case 2:
            $('#pattechien').attr("class","fas fa-paw fa-10x");
            break;
        default:
            zoom=2;
            break;
    }
});
$('#moins').click(function () {
    zoom--;
    switch (zoom){
        case -5:
            $('#pattechien').attr("class","fas fa-paw fa-xs");
            break;
        case -4:
            $('#pattechien').attr("class","fas fa-paw fa-sm");
            break;
        case -3:
            $('#pattechien').attr("class","fas fa-paw fa-lg");
            break;
        case -2:
            $('#pattechien').attr("class","fas fa-paw fa-2x");
            break;
        case -1:
            $('#pattechien').attr("class","fas fa-paw fa-3x");
            break;
        case 0:
            $('#pattechien').attr("class","fas fa-paw fa-5x");
            break;
        case 1:
            $('#pattechien').attr("class","fas fa-paw fa-7x");
            break;
        case 2:
            $('#pattechien').attr("class","fas fa-paw fa-10x");
            break;
        default:
            zoom=-5;
            break;
    }
});
var rotation =0;

setInterval(function(){$('#spinningteckelhg').css("transform","rotate("+rotation+"deg)");rotation++;},30);
setInterval(function(){$('#spinningteckelbg').css("transform","rotate("+rotation+"deg)");rotation++;},30);
setInterval(function(){$('#spinningteckelhd').css("transform","rotate("+-rotation+"deg)");rotation++;},30);
setInterval(function(){$('#spinningteckelbd').css("transform","rotate("+-rotation+"deg)");rotation++;},30);

setInterval(function(){$('#txtflsh').css("color",getRandomColor())},60);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}