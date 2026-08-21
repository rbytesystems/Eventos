document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       CARROSSEL
    ========================================== */

    const slides = document.querySelectorAll(".slide");
    const indicadores = document.querySelectorAll(".indicador");

    let slideAtual = 0;
    let intervalo;


    // Mostra determinado slide
    function mostrarSlide(numero) {

        slides.forEach(function (slide) {
            slide.classList.remove("ativo");
        });

        indicadores.forEach(function (indicador) {
            indicador.classList.remove("ativo");
        });


        slides[numero].classList.add("ativo");

        if (indicadores[numero]) {
            indicadores[numero].classList.add("ativo");
        }

        slideAtual = numero;
    }


    // Próximo slide
    function proximoSlide() {

        slideAtual++;

        if (slideAtual >= slides.length) {
            slideAtual = 0;
        }

        mostrarSlide(slideAtual);
    }


    // Slide anterior
    function slideAnterior() {

        slideAtual--;

        if (slideAtual < 0) {
            slideAtual = slides.length - 1;
        }

        mostrarSlide(slideAtual);
    }


    // Botão próximo
    const botaoProximo =
        document.querySelector(".carousel-btn.proximo");

    if (botaoProximo) {

        botaoProximo.addEventListener("click", function () {

            proximoSlide();

            reiniciarCarrossel();

        });

    }


    // Botão anterior
    const botaoAnterior =
        document.querySelector(".carousel-btn.anterior");

    if (botaoAnterior) {

        botaoAnterior.addEventListener("click", function () {

            slideAnterior();

            reiniciarCarrossel();

        });

    }


    // Indicadores
    indicadores.forEach(function (indicador, numero) {

        indicador.addEventListener("click", function () {

            mostrarSlide(numero);

            reiniciarCarrossel();

        });

    });


    // Inicia carrossel automático
    function iniciarCarrossel() {

        intervalo = setInterval(function () {

            proximoSlide();

        }, 5000);

    }


    // Reinicia o contador quando o usuário clica
    function reiniciarCarrossel() {

        clearInterval(intervalo);

        iniciarCarrossel();

    }


    // Inicializa
    if (slides.length > 0) {

        mostrarSlide(0);

        iniciarCarrossel();

    }


    /* ==========================================
       MENU MOBILE
    ========================================== */

    const menu = document.getElementById("menu");

    const botaoMenu =
        document.querySelector(".menu-btn");


    if (botaoMenu && menu) {

        botaoMenu.addEventListener("click", function () {

            menu.classList.toggle("ativo");

        });

    }


    const linksMenu =
        document.querySelectorAll("#menu a");


    linksMenu.forEach(function (link) {

        link.addEventListener("click", function () {

            if (menu) {
                menu.classList.remove("ativo");
            }

        });

    });


    /* ==========================================
       FORMULÁRIO → WHATSAPP
    ========================================== */

    const formulario =
        document.getElementById("formulario");


    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();


            const nome =
                document.getElementById("nome").value;

            const telefone =
                document.getElementById("telefone").value;

            const tipoEvento =
                document.getElementById("tipoEvento").value;

            const mensagem =
                document.getElementById("mensagem").value;


            // ALTERE PARA O WHATSAPP DA EMPRESA
            const numeroWhatsApp =
                "5531999999999";


            const texto =
                "Olá! Meu nome é " +
                nome +
                ".%0A%0A" +

                "Gostaria de solicitar um orçamento para " +
                tipoEvento +
                ".%0A%0A" +

                "Telefone: " +
                telefone +
                "%0A%0A" +

                "Detalhes do evento:%0A" +
                mensagem;


            const url =
                "https://wa.me/" +
                numeroWhatsApp +
                "?text=" +
                texto;


            window.open(url, "_blank");

        });

    }

});