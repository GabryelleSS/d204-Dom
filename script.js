const quadrado = document.querySelector('.quadrado');
const img = document.querySelector('img')


// Não utilizamos os (), pois pegamos a função toda;
// Por isso não colocamos, porque não queremos executar


const mostrarQuadrado = function(){
    quadrado.classList.toggle('visivel');
}

const efeitoImg = function(){
    img.classList.toggle('destaque');
}

// Funciona da mesma forma
// mostrarQuadrado.onmouseover = function(){
//     quadrado.classList.toggle('visivel');
    
// }

// quadrado.onmouseover = mostrarQuadrado;
quadrado.onmouseenter = mostrarQuadrado;
quadrado.onmouseout = mostrarQuadrado;

img.onmouseenter = efeitoImg;
img.onmouseout = efeitoImg;


// 1 - Seletores
// 2 - Função
// 3 - Código de execução ou atribuição de evento
