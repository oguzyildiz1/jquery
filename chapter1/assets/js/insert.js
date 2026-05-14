$(function(){
    // my script goes here
    // sel h1, bck blue
    $('h1').addClass('');
    $('li:contains("week 1")').text('almond');


    $('li.hot').html(function(){
        return '<em>' + $(this).text() + '</em>';
    });

    $('ul.mylist-2 li:contains("week 3")').remove();

    /* ------- insert from page 319------------*/
    $('p').before('<p>this is inserted by jquery before()</p>');
    $('li.hot').prepend('+');

    var $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
    $('li:last').after($newListItem);


});