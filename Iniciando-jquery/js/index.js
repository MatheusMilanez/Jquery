// manipulando eventos

$(function(){
    $(window).scroll(function(){
        //Evento de quando o scroll ocorre
    });

    var timer;
    $(window).resize(function(){
        //evento de quando redimensiona a tela.
        // console.log("Minha tela está sendo redimensionada!");
        clearTimeout(timer);

        timer = setTimeout(function(){
            location.href = "http://127.0.0.1:5500/index.html";
        },1000);
    });


});















/*
$(function(){
    $('.artigo1').click(function(){
        $('.section').css('background-color','purple');
    });
},function(){
    $('.section').css('background-color','#221144');
});

function validarHover(){
    $(function(){
        $('.artigo1').hover(function(){
            $('.section').css('background-color','purple');
        });
    },function(){
        $('.section').css('background-color','#221144');
    });
}
*/
/*
$(function(){
    $('textarea').on('focus',function(){
        alert("Estou dentro do textarea");
    });
});

$(function(){
    $('textarea').on('blur',function(){
        alert("Estou FORA do textarea!");
    });
});
*/

/*
function validarFormulario(){
    $('select').change(function(){
        alert("Meu select foi alterado!");
    });
}

validarFormulario();
validarHover();

*/









//Manipulando CSS com Jquery

$(function(){
    $('div').css('background-color','red');
    $('p').css('padding-top','20px');
    $('p').css('padding-bottom','20px');
    $('p').css('padding-left','20px');
    $('p').css('font-size','20px');
    $('p').css('font-style','italic');
    $('p').css('font-weight','bold');
    $('p').css('color','#fff');
    $('p').css('text-align','center');
});


$(function(){
    $('.section').css('background-color','#221144');
    $('.section').css('height','calc(100% - 63px)');
    $('.section').css('display','flex');
    $('.section').css('align-items','center');
    $('.section').css('justify-content','center');
    $('.section').css('font-size','78px');
    $('.section').css('font-weight','bold');
    $('.section').css('font-style','italic');
    $('.section').css('color','#fff');
    $('.section').css('text-transform','uppercase');
});

// função de tempo
$(function(){
    
    setTimeout(function(){
        $('.section').css('color','yellow');
    },5000);
    

});




//ATENÇÃO - CODIGOS DO JQUERY


/*Primeira Maneira de iniciar o Jquery*/

/*

$(function(){
    alert("Olá mundo!");
})

*/

/*Segunda Maneira de iniciar o Jquery*/

/*

$(document).ready(function(){
    alert("hello world!");
})

*/

/*Terceira Maneira de iniciar o Jquery*/

/*
$(window).on('load',function(){
    alert("hello world");
})

*/