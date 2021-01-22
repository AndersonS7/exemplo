/* AUXILIANDO O CSS */
// ativando o popover
$(function () {
    $('[data-toggle="popover"]').popover()
})

// alterações no carrocel - intervalo 
$('.carousel').carousel({ // carrocel principal abaixo do menú
    interval: 2500
})

// colapse (manipula as perguntas da aba SUPORTE)
$('.collapse').collapse()

// Efeito transparente do menú
jQuery(document).ready(function ($) {
    var controleNav = false;
    $(document).scroll(function (e) {
        var scrollTop = $(document).scrollTop();

        if (scrollTop > $('#carouselExampleIndicators').height()) {
            if (controleNav == false) {
                $('.navbar').addClass('bg-color');
                controleNav = true;
            }
        } else {
            if (controleNav == true) {
                $('.navbar').removeClass('bg-color');
                controleNav = false;
            }
        }
    })
})
/* --------------------------------------------------------------- */
// PEGANDO OS DADOS DA HORA DA COMPRA

window.onload = ativar;

function ativar() {
    btn = document.querySelector('#btn-enviar')

    btn.addEventListener('click', () => {
        dados()
    })
}

function dados() {

    var dataA = dataF(); // retorna a data já formatada
    var d = new Date(); // retorna a data não formatada = Dia da Semana, Mês, Dia do Mês, Ano, Hora, Fuso-horário

    /* campos */
    nomeA = document.querySelector('#nome').value
    sobrenomeA = document.querySelector('#sobrenome').value
    emailA = document.querySelector('#email').value

    /* elementos */
    nomeD = document.querySelector('#nomeD')
    sobrenomeD = document.querySelector('#sobrenomeD')
    emailD = document.querySelector('#emailD')
    data = document.querySelector('#data')
    id = document.querySelector('#inD')


    if (nomeA == "" || sobrenomeA == "" || emailA == "") {
        alert("Verifique se todos os campos foram preenchidos!");
    } else {

        alert("Tudo certo! Cadastro realizado com sucesso ;) !!");

        /* Objeto gerado com os dados do cliente | vai para o banco de dados */
        var cliente = {
            id: d.getTime(), // milissegundos
            dataAtual: dataA,
            nome: nomeA,
            sobrenome: sobrenomeA,
            email: emailA,
        }

        console.log(cliente)
    }

    nomeD.innerHTML = nomeA
    sobrenomeD.innerHTML = sobrenomeA
    emailD.innerHTML = emailA
    data.innerHTML = dataA
    id.innerHTML = d.getTime()

}

// função para retornar a data no formato dia / mês / ano
function dataF(data = new Date()) {
    var dia = data.getDate();
    var mes = data.getMonth() + 1; // +1 pq o getMonth retorna o mês de 0 a 11
    var ano = data.getFullYear();

    if (dia.toString().length == 1) dia = '0' + dia;
    if (mes.toString().length == 1) mes = '0' + mes;

    return dia + '/' + mes + '/' + ano;
}
