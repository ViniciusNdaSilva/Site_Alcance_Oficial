$(document).ready(function(){
let e=$(".nav-item")
,a=$("#mainSlider")
,n=$("#pastores")
,t=$("#Palavra-semana")
,i=$("#Redes-Sociais")
,o=$("#Celula")
,l=$("#contribuicoes")
,m=$("#missoes")
,s=""
;
$(e).click(function(){
$("#navbar-links").toggle();
let e=$(this).attr("id")
;s="pastores-menu"==e?n:"Palavra-menu"==e?t:"Redes-Sociais-menu"==e?i:"Celula-menu"==e?o:"Contri-menu"==e?l:"Missao-menu"==e?m:a
,$([document.documentElement,document.body]).animate({scrollTop:$(s).offset().top-70},1500)})
});
$("#menu").click(function(e){
e.preventDefault();
$("#navbar-links").toggle();
});
