var p1Btn = document.querySelector("#p1Button");
var p2Btn = document.querySelector("#p2Button");
var resetBtn = document.getElementById("reset");
var p1Score = document.querySelector("#p1Score");
var p2Score = document.querySelector("#p2Score");
var input = document.querySelector("input");
var playingTo = document.querySelector("p span");
var score1 = 0;
var score2 = 0;
var gameOver = false;
var gameFinish = 5;


p1Btn.addEventListener("click", function(){
	
	if(!gameOver){
		score1++;
		if (score1 === gameFinish) {
		p1Score.classList.add("gameover");
		gameOver = true;
		let h1 = document.createElement('h1')
		h1.id = 'gameOver'
		h1.innerHTML = 'Game Over'
		let scoreParent = document.getElementById('score').parentNode
		let score = document.getElementById('score')
		scoreParent.insertBefore(h1, score)
		};
		p1Score.textContent = score1;
	}

});

p2Btn.addEventListener("click", function(){	
	if (!gameOver) {
		score2++;
		if (score2 === gameFinish) {
		gameOver = true;
		p2Score.classList.add("gameover");
		let h1 = document.createElement('h1')
		h1.id = 'gameOver'
		h1.innerHTML = 'Game Over'
		let scoreParent = document.getElementById('score').parentNode
		let score = document.getElementById('score')
		scoreParent.insertBefore(h1, score)
		}
		p2Score.textContent = score2;
	}

});

resetBtn.addEventListener("click", function() {
	reset();
})

input.addEventListener("change", function(){
	playingTo.textContent = input.value;
	gameFinish = Number(input.value);
	reset();

})

function reset (){
	gameOver = false;
	score1 = 0;
	score2 = 0;
	p1Score.textContent = 0;
	p2Score.textContent = 0;
	p1Score.classList.remove("gameover");
	p2Score.classList.remove("gameover");
	let message = document.getElementById('gameOver')
	if(message !== null){
		document.getElementById('gameOver').remove()
	}
}