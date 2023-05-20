$(function(){

    // variaveis (OBS: crie variaveis e adicione os objetos dentro das variaveis)
    var menu = $('.div-menu');
    var div1 = $('.div1');
    var div2 = $('.div2');
    var div3 = $('.div3');

    var section = $('.main');

    var box = $('.box');

    function styleDivs(){

        menu.css('display','flex').css('width','100%').css('height','100px').css('background-color','purple').css('justify-content','space-between');

        div1.css('background-color','red').css('width','50px').css('height','50px').css('margin-top','25px').css('margin-left','20px').css('border-radius','50px');

        div2.css('background-color','green').css('width','70px').css('height','70px').css('margin-left','20px').css('margin-right','20px').css('margin-top','15px');

        div3.css('background-color','yellow').css('width','90px').css('height','90px').css('margin-top','5px');

        section.css('color','red').css('font-size','50px').css('text-align','center');

        box.css('text-align','center').css('margin-top','40px');

    }

    styleDivs();
   
    // Manipulando textos
    
/*
    function TextoSection1(){
        section.html('<h1>Hello World</h1>');

        section.html(section.html()+ '<p>Olá mundo</p>');
        /*
        section.text(section.html()+'<div>TEXTO usando a função Text</div>');
  
    }

    TextoSection1();
*/

    function MinupulandoABOX(){

        //função append() para adicionar conteudo / elementos no final do elemento html
        /*

        $('.box').append('<h3>Meu elemento adicionado dinamicamente</h3>');
        $('.box-div').append('<h1>Conteudo adicionado dinamicamente dentro de uma div</h1>');
        

        var elemento = $('<h1>Conteudo adicionado dinamicamente</h1>').appendTo($('.box'));

        elemento.css('color','green').css('font-size','50px').css('font-style','italic');


        // Função prepend() adiciona o elemento no inicio 

        /*$('.box').prepend('<p>Funçãp prepend</p>');

        var el = $('<h1>Meu Contéudo</h1>').prependTo($('.box')).css('color','yellow');

        */

        //var A = 'Texto adicionando via função after()';

        //var B = 'Texto adicionando via função before()';

        //$('.box').after(A);
        //$('.box').before(B);

        //$(A).insertAfter($('.box')).css('color','red');
        //$(B).insertBefore($('.box')).css('color','green');


    }

    MinupulandoABOX();

/*
    function removendoBox(){
        $('h1').remove();
    }

    removendoBox();
*/




// EVENTOS DINAMICOS E MAIS CONCEITOS


$('a').click(function(){
    $('.div2').remove();
});



















});