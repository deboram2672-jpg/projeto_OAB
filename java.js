function exibir_G(){
    if(S_geral.style.display === "none"){
document.getElementById("S_geral").style.display = "block";
document.getElementById("S_emocional").style.display = "none";
document.getElementById("S_dentista").style.display = "none";

    }else{
        document.getElementById("S_geral").style.display = "none";
    }
}
function exibir_E(){
    if(S_emocional.style.display === "none"){
document.getElementById("S_geral").style.display = "none";
document.getElementById("S_emocional").style.display = "block";
document.getElementById("S_dentista").style.display = "none";
    }else{
        document.getElementById("S_emocional").style.display = "none";
    }
}
