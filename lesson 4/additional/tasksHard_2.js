const incomeTwo = + prompt("Ваш доход?");

if (incomeTwo < 15000){
    console.log(incomeTwo * 13 / 100)
} else if (incomeTwo >= 15000 && incomeTwo <= 50000) { 
    console.log((incomeTwo - 15000) * 20 / 100)
} else {
    console.log((incomeTwo - 50000) * 30 / 100)
};