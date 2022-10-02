'use strict';
(() => {
    
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    
    
    const getRandomInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

   

    const game = () => {
        
        const result = {
            player: 0,
            computer: 0,
        };
        return function start() {
            getRandomInclusive();
            //const computer = FIGURES_RUS;
            const player = prompt("Камень, ножницы, бумага?");
            if (computer === 'камень' && player === 'ножницы') {
                return 'Победа компьютера';
            } else if (computer === 'бумага' && player === 'камень') {
                return 'Победа игрока';
            } else if (computer === 'ножницы' && player === 'бумага') {
                return 'Победа компьютера';
            } else if (player === 'камень' && computer === 'ножницы') {
                return 'Победа компьютера';
            } else if (player === 'бумага' && computer === 'камень') {
                return 'Победа игрока';
            } else if (player === 'ножницы' && computer === 'бумага') {
                return 'Победа игрока';
            } else {
                return 'Ничья';
            }
        };
    }

    window.RPS = game;
})();