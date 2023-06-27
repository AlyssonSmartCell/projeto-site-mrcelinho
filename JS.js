
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







// ===============================================Mobile================================================

const control = document.querySelectorAll('.control');

let currentItem = 0;

const items = document.querySelectorAll('.item ');

const maxItems = items.length;


control.forEach(control =>{
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains('arrow-left')
        console.log('control clicked', isLeft, currentItem)

        if(isLeft){
            currentItem -= 1;
        }else{
            currentItem += 1;
        }

        if(currentItem >= maxItems){
            currentItem = 0;
        }

        if(currentItem < 0){
            currentItem = maxItems -1;
        }
        
        items.forEach(item => item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            behavior:"smooth",
            inline:"center"

            
        });
        items[currentItem].classList.add('current-item');


        });
            



});





