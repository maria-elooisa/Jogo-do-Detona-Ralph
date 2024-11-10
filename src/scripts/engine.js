const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"), 
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
} ,

    values:{
        timeId: null,
        countDownTimerID: setInterval(countDown, 1000),
        gameVelocity: 1000,
        hitPosition:0,
        result: 0,
        curretTime: 60,
    },
};

function countDown(){
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

    if (state.values.curretTime <= 0){
        clearInterval(state.values.countDownTimerID);
        clearInterval(state.values.timeId);
        alert("Game Over! O seu resultado foi: " + state.values.result);

        // Reinicia o score e o tempo
        state.values.result = 0;
        state.values.curretTime = 60;
        
        // Atualiza o display de score e tempo na tela
        state.view.score.textContent = state.values.result;
        state.view.timeLeft.textContent = state.values.curretTime;
    }
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");

    state.values.hitPosition = randomSquare.id;
};

function moveEnemy(){
    state.values.timeId = setInterval(randomSquare, state.values.gameVelocity);
};

function addListenerHitBox(){
    state.view.squares.forEach((square) => { // Corrigido para state.view.squares
        square.addEventListener("mousedown", () => {
            if(square.id == state.values.hitPosition){
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
            }
        });
    });
}


function init (){
    moveEnemy();
    addListenerHitBox(); // Adicione esta linha
    countDown();
}


init()