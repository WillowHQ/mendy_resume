//click input
$('document').ready(function () {
    console.log('hello');
    
    $('li').click(function(){
        //console.log('LIst items are being clicked');
        $('li').css('color', 'red');
        $('li').removeClass('.container');
        $('li').hide(500);
    })
})