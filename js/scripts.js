Pas$( document ).ready(function() {
    // Scroll para seções // 

    let navBtn = $('.nav-item');

    let homeSection = $('#nav-container');
    let pastoresSection = $('#pastores');
    let palavraSection = $('#Palavra-semana');
    let RedesSociaisSection = $('#Redes-Sociais');
    let CelulaSection = $('#Celula');
    let ContribuicoesSection = $('#Contribuicoes-menu');

    let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'pastores-menu') {
      scrollTo = pastoresSection;
    }
    else if(btnId == 'Palavra-menu') {
      scrollTo = palavraSection;
    }
    else if(btnId == 'Redes-Sociais-menu') {
      scrollTo = RedesSociaisSection;
    }
    else if(btnId == 'Celula-menu') {
      scrollTo = CelulaSection;
    }
    else if(btnId == 'Contri-menu') {
      scrollTo = ContribuicoesSection;
    }
    else {
      scrollTo = homeSection;
    };

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });
});