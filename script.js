const musica = document.getElementById("musica");
let musicaIniciada = false;

/* 🎵 reproducir música al PRIMER clic en cualquier parte */
document.addEventListener("click", function(){
    if(!musicaIniciada){
        musica.play().catch(()=>{});
        musicaIniciada = true;
    }
});

function abrir(){
    const heart = document.getElementById("heart");
    const contenido = document.getElementById("contenido");

    heart.classList.add("abrirCorazon");

    setTimeout(()=>{
        contenido.classList.add("mostrar");
    },900);
}
