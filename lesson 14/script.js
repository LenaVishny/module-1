'use strict';
(() => {
    const balls = [1, 2, 3, 4, 5];
    let player = 5;
    let bot = 5;
    let resPlayer;
    let resBot;

    const randomInteger = (m, n) => {
        const min = Math.floor(m < n ? m : n);
        const max = Math.ceil(m > n ? m : n);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    

    const getBotA = (ball) => {
        if (Array.isArray(ball)) {
            const ran = randomInteger(0, ball.length - 1);
            return ball[ran];
        }
        return;
    };

    const game = () => {
        const ball = balls;

        const result = {
            player: 0,
            bot: 0,
            playerWin() {
                this.resPlayer++;
                console.log('Игрок выиграл');
            },
            botWin() {
                this.resBot++;
                console.log('Бот выиграл');
            },
        };
        
    const start = () => {
        
        let getPlayer = prompt('Введи число от 1 до 5');
        getPlayer = Number(getPlayer);
        console.log(getPlayer);

        const botAnswer = getBotA(ball);
        console.log(botAnswer);
    
        if (getPlayer % 2 === 0 && botAnswer % 2 === 0) {
            resBot = bot + getPlayer;
            console.log('Bot:', resBot);
            resPlayer = player - getPlayer;
            console.log('Player:', resPlayer);
            result.botWin();
            return start();

        } else if (getPlayer % 2 === 0 && botAnswer % 2 === 1) {
            resPlayer = getPlayer + player;
            console.log('Player:', resPlayer);
            resBot = bot - getPlayer;
            console.log('Bot:', resBot);
            result.playerWin();
            return start();

        } else if (getPlayer % 2 === 1 && botAnswer % 2 === 1) {
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
    

return start();
};

window.RPS = game();
})();
