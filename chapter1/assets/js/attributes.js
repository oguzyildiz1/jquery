$(function(){
    // my script goes here
    // sel h1, bck blue
    $('h1').addClass('');
    $('li:contains("week 1")').text('almond');


    /* ------- insert from page 319------------*/
    $('p').before('<p>this is inserted by jquery before()</p>');
    $('li.hot').prepend('+');

    var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
    $('li:last').after($newListItem);

    /* changing attributes*/
    $('li#three').removeClass('hot');
    $('li#icon').addClass('favorite');


});