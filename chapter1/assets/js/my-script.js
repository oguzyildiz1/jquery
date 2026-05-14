$(function(){
    // my script goes here
    // sel h1, bck blue
    $('h1').addClass('');
    $('li:contains("week 1")').text('almond');


    $('li.hot').html(function(){
        return '<em>' + $(this).text() + '</em>';
    });

    $('ul.mylist-2 li:contains("week 3")').remove();



});