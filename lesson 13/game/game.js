'use strict';

(() => {
    
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    const getRandomInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const getComp = (selectionFigures) => {
        if (Array.isArray(selectionFigures)) {
            const ran = getRandomInclusive(0, selectionFigures.length - 1);
            return selectionFigures[ran];
        }
        return;
    };

    const game = () => {
        const selectionFigures = FIGURES_RUS;
        const result = {
            player: 0,
            computer: 0,
            playerWin() {
                this.player++;
                alert('Игрок выиграл');
            },
            computerWin() {
                this.computer++;
                alert('Компьютер выиграл');
            },
        };

        return function start() {
            const answerComp = getComp(selectionFigures).charAt(0).toLowerCase();
            console.log(answerComp);
            let answerPlayer = prompt("Камень, ножницы, бумага?");
            if (answerPlayer === null || answerPlayer === '') {
                console.log('Отмена');
            
                if (confirm('Закончить игру?')) {
                    alert(`Компьютер ${result.computer} Игрок ${result.player}`,);
                    return null;
                } else {
                    return start();
                } 
            } else {
                answerPlayer = answerPlayer.charAt().toLowerCase();

                if (answerPlayer !== 'к' && answerPlayer !== 'н' && answerPlayer !== 'б') {
                    alert('Введите правильно!');
                    return start();
                }

                if (answerPlayer === answerComp) {
                    alert('Ничья');
                    return start();
                }
                

                if (answerComp === 'к') {
                    if (answerPlayer === 'н') {
                        console.log('Компьютер выиграл');
                        result.computerWin();
                        return start();
                    } else {
                        console.log('Игрок выиграл');
                        result.playerWin();
                        return start();
                    }
                }
                if (answerComp === 'н') {
                    if (answerPlayer === 'б') {
                        console.log('Компьютер выиграл');
                        result.computerWin();
                        return start();
                    } else {
                        console.log('Игрок выиграл');
                        result.playerWin();
                        return start();
                    }
                }
                if (answerComp === 'б') {
                    if (answerPlayer === 'к') {
                        console.log('Компьютер выиграл');
                        result.computerWin();
                        return start();
                    } else {
                        console.log('Игрок выиграл');
                        result.playerWin();
                        return start();
                    }
                }
                return start();
            }
        };

    };

    window.RPS = game;
})();
