
let radio = document.querySelector('.manual-btn') //selecionando a classe .manual-btn
let cont = 1


document.getElementById('radio1').checked = true; // adicioando uma checage para que sempre que o usuario abrir a pagina uma bolinha esta marcada

setInterval(() => {
    proximaImg()
}, 5000); //Arrowfunction que faz a passagem automatica dos sllides

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }
    document.getElementById('radio'+cont).checked = true;
}; //Função conplementar da Arrowfunction