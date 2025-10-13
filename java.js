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
function exibir_T(){
    if(T_geral.style.display === "none"){
document.getElementById("T_geral").style.display = "block";
document.getElementById("T_aposentadoria").style.display = "none";
    }else{
        document.getElementById("T_geral").style.display = "none";
    }
}
function exibir_A(){
    if(T_aposentadoria.style.display === "none"){
document.getElementById("T_geral").style.display = "none";
document.getElementById("T_aposentadoria").style.display = "block";
    }else{
        document.getElementById("T_aposetadoria").style.display = "none";
    }
}
function exibir_Edu(){
    if(Edu.style.display === "none"){
document.getElementById("Edu").style.display = "block";
    }else{
        document.getElementById("Edu").style.display = "none";
    }
}