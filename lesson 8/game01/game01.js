
const imput = document.querySelector('imput');
const button = document.querySelector('button');
const answer = Math.floor(Math.random()*100)+1;

button.addEventListener('click', play);

function play(){
    const userNumber = document.querySelector('#one').value;
    if (userNumber < 1 || userNumber > 100){
       alert('Введи число от 1 до 100!')
    }
    else{
        if (userNumber > answer) {
           alert('МЕНЬШЕ!')
                
              }
        else if (userNumber < answer) {
            alert('БОЛЬШЕ!')
                    }
        else{
            alert('ПРАВИЛЬНО!')
        }
    }
}
play();