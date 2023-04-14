function mostrarHora() {
    var horaAtual = new Date();
    var hora = horaAtual.getHours();
    var minutos = horaAtual.getMinutes();
    var horaFormatada = `${hora}:${minutos}`;
    document.getElementById("hora-atual").innerHTML = horaFormatada;

    var imagens = {
        manha: "img/manha.jpg",
        tarde: "img/tarde.png",
        noite: "img/noite.jpg"
    }

    var imagem;

    if(hora < 6 || hora >= 18) {
        imagem = imagens.noite
    } else if(hora >= 12) {
        imagem = imagens.tarde 
    } else {
        imagem = imagens.manha
    }

    document.getElementById("foto").src = imagem;
}
setInterval(mostrarHora, 1000)