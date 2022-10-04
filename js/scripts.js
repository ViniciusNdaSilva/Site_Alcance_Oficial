$( document ).ready(function() {

  // scroll para as seções

  let navBtn = $('.nav-item');

  let bannerSection = $('#mainSlider');
  let pastoresSection = $('#pastores');
  let palavraSection = $('#Palavra-semana');
  let redessociaisSection = $('#Redes-Sociais');
  let celulaSection = $('#Celula');
  let contribuicoesSection = $('#Contribuicoes-menu');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'pastores-menu') {
      scrollTo = pastoresSection;
    } else if(btnId == 'Palavra-menu') {
      scrollTo = palavraSection;
    } else if(btnId == 'Redes-Sociais-menu') {
      scrollTo = redessociaisSection;
    } else if(btnId == 'Celula-menu') {
      scrollTo = celulaSection;
    } else if(btnId == 'Contri-menu') {
      scrollTo = contribuicoesSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

});