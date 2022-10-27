'use strict';

    let player = 5;
    let bot = 5;
    let resPlayer;
    let resBot;

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    const game = () => {
        let result = {
            player: 5,
            bot: 5,
            playerWin() {
                this.resPlayer++;
                console.log('Игрок выиграл');
            },
            botWin() {
                this.resBot++;
                console.log('Бот выиграл');
            },
        };
        
    function start() {
        let getPlayer = prompt('Введи число от 1 до 5');
        getPlayer = Number(getPlayer);
        console.log(getPlayer);

        let getBot = randomInteger(1, 5);
        console.log(getBot);
    
        if (getPlayer % 2 === 0 && getBot % 2 === 0) {
            resBot = bot + getPlayer;
            console.log('Bot:', resBot);
            resPlayer = player - getPlayer;
            console.log('Player:', resPlayer);
            result.botWin();
            return start();

        } else if (getPlayer % 2 === 0 && getBot % 2 === 1) {
            resPlayer = getPlayer + player;
            console.log('Player:', resPlayer);
            resBot = bot - getPlayer;
            console.log('Bot:', resBot);
            result.playerWin();
            return start();

        } else if (getPlayer % 2 === 1 && getBot % 2 === 1) {
            resBot = bot + getPlayer;
            console.log('Bot:', resBot);
            resPlayer = player - getPlayer;
            console.log('Player:', resPlayer);
            result.botWin();
            return start();

        } else if (resBot <= 0 || resPlayer <= 0) {
            console.log('Конец игры');
            result.playerWin();
            result.botWin();
        }  
    }
    start();
};

game();
