'use strict';
(() => {
    const game = () => {
        const ball = {
            player: 5,
            bot: 5,
        };

    const randomInteger = (min, max) => {
        max = Math.floor(max);
        min = Math.ceil(min);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    
    return function start()  {
        const randomNum = randomInteger(0, 1); 
        let getPlayer = prompt(`Введи число от 1 до ${ball.player}`, '');
        if (randomNum === 0) {
            console.log('Бот загадал Четное!');
        } else {
            console.log('Бот загадал Нечетное!');
        }
        if (!(getPlayer === null) && !(getPlayer === "") && ball.player > 0 && ball.bot > 0 && !isNaN(getPlayer)) {
            if (getPlayer % 2 === randomNum) {
                ball.player -= +getPlayer;
                ball.bot += +getPlayer;
                alert('Бот угадал!');
                alert(`Счет: Бот - ${ball.bot}  Игрок - ${ball.player}`);
            } else {
                ball.player += +getPlayer;
                ball.bot -= +getPlayer;
                alert('Игрок угадал!');
                alert(`Счет: Бот - ${ball.bot}  Игрок - ${ball.player}`);
            }
        }
        if (getPlayer === null || ball.player <= 0 || ball.bot <= 0) {
            alert(`Счет: Бот - ${ball.bot}  Игрок - ${ball.player}`);
        } else {
            return start();
        }
    };
};

window.RPS = game;
})();
