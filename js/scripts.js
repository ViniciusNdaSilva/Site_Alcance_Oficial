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
let e=$(this).attr("id")
;s="pastores-menu"==e?n:"Palavra-menu"==e?t:"Redes-Sociais-menu"==e?i:"Celula-menu"==e?o:"Contri-menu"==e?l:a:"Missao-menu"==e?m
,$([document.documentElement,document.body]).animate({scrollTop:$(s).offset().top-70},1500)})
});