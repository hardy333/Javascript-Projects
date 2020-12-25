(() => {
	const container = document.querySelector('.container');
	let boxes = document.querySelectorAll('.box');
	const levelSpan = document.querySelector('.level');
	const startGameBtn = document.querySelector('.start-btn');
	const info = document.querySelector('.info');
	const livesSpan = document.querySelector('.lives');

	// time
	const PAUSE_AFTER_SHOWING_ALL_CORRECT = 500;
	const INTERVAL_BETWEEN_SHOWING_CORRECT = 300;
	const PAUSE_BETWIN_LOSING_AND_SHOWING_INFO = 50;

	let level = 1;
	let lives = 3;

	let boxSize = '100px';

	let gridSize = 9;
	let rowSize = Math.sqrt(gridSize);
	let correctBoxes = 3;

	let onesArr = Array.from(new Array(correctBoxes)).map((x) => 1);
	let zerosArr = Array.from({ length: gridSize - correctBoxes }).map((x) => 0);

	let binArr = [ ...onesArr, ...zerosArr ];
	let binArrXXX = [ ...binArr ];
	let randomGridArr = [];

	document.body.style.setProperty('--row-size', rowSize);
	document.body.style.setProperty('--box-size', boxSize);

	function createBoxes() {

		Array.from({ length: gridSize }).forEach((x) => {
			const box = document.createElement('div');
			box.classList.add('box');

			container.append(box);
		});

		boxes = document.querySelectorAll('.box');
	}
	createBoxes();

	/******************************* */
	/******************************* */
	/******************************* */
	function clearGrid() {
		boxes.forEach((box) => {
			box.removeAttribute('data-type');
			box.className = 'box';
		});
	}
	clearGrid();

	startGameBtn.addEventListener('click', () => {
		START_GAME();
		startGameBtn.classList.add('disabled-btn');
		lives = 3;
		livesSpan.innerText = lives;
	});

	function START_GAME() {
		randomGridArr = [];
		clearGrid();

		function generateRandomGridArr() {
			for (let i = 0; i < binArr.length; i++) {
				let randIndex = Math.floor(Math.random() * binArrXXX.length);

				randomGridArr.push(binArrXXX[randIndex]);

				binArrXXX.splice(randIndex, 1);
			}

			binArrXXX = [ ...binArr ];
		}

		generateRandomGridArr();

		function updateGrid() {
			let interval = 0;
			let counter = 0;

			boxes.forEach((box, index) => {
				if (randomGridArr[index] === 1) {
					setTimeout(() => {
						box.classList.add('correct');
						box.setAttribute('data-type', 'correct');

						counter++;
						if (counter === correctBoxes) {
							setTimeout(() => {
								activateBoxes();
								hideCorrectBoxes();
							}, PAUSE_AFTER_SHOWING_ALL_CORRECT);
						}
					}, (interval += INTERVAL_BETWEEN_SHOWING_CORRECT));
				}
			});
		}

		updateGrid();

		function hideCorrectBoxes() {
			boxes.forEach((box, index) => {
				if (randomGridArr[index] === 1) {
					box.classList.remove('correct');
				}
			});
		}
	}

	/****************************************************** */
	/****************************************************** */
	/****************************************************** */
	/****************************************************** */

	function checkBox() {
		this.removeEventListener('click', checkBox);

		if (this.dataset.type === 'correct') {
			this.classList.add('correct');
		} else {
			this.classList.add('incorrect');
			lives--;
			livesSpan.innerText = lives;

			if (lives <= 0) {
				endGame();
			}
		}
		checkGrid();
	}

	function checkGrid() {
		let counter = 0;

		boxes.forEach((box) => {
			if (box.dataset.type && box.dataset.type === 'correct' && box.classList.contains('correct')) {
				counter++;
			}
		});

		if (counter === correctBoxes) {
			goToNextLevel();
		}
	}

	function endGame() {
		deactivateBoxes();

		setTimeout(() => {
			
			info.classList.remove('disabled');
		}, PAUSE_BETWIN_LOSING_AND_SHOWING_INFO);
	}

	function goToNextLevel() {
		deactivateBoxes();

		setTimeout(() => {
			level++;
			updateLevel(level);

			if (level === 3) {
				// 16 / 4
				updateGameSize(Math.pow(4, 2), 4, '100px');
			}
			if (level === 5) {
				// 16 / 5
				updateGameSize(Math.pow(4, 2), 5, '100px');
			}
			if (level === 6) {
				// 16 / 5
				updateGameSize(Math.pow(4, 2), 6, '100px');
			}
			if (level === 7) {
				// 16 / 6
				updateGameSize(Math.pow(5, 2), 7, '70px');
			}
			if (level === 10) {
				// 16 / 7
				updateGameSize(Math.pow(5, 2), 8, '70px');
			}
			if (level === 12) {
				// 16 / 7
				updateGameSize(Math.pow(5, 2), 9, '70px');
			}
			if (level === 15) {
				// 25 / 7
				updateGameSize(Math.pow(6, 2), 10, '50px');
			}
			if (level === 17) {
				// 25 / 8
				updateGameSize(Math.pow(6, 2), 11, '50px');
			}
			if (level === 18) {
				// 25 / 9
				updateGameSize(Math.pow(6, 2), 11, '50px');
			}
			if (level === 25) {
				// 36 / 9
				updateGameSize(Math.pow(7, 2), 12, '50px');
			}
			if (level === 30) {
				// 36 / 10
				updateGameSize(Math.pow(7, 2), 13, '50px');
			}
			if (level === 35) {
				// 36 / 11
				updateGameSize(Math.pow(7, 2), 14, '50px');
			}
			if (level === 40) {
				// 36 / 12
				updateGameSize(Math.pow(7, 2), 15, '50px');
			}
			if (level === 45) {
				// 36 / 13
				updateGameSize(Math.pow(7, 2), 16, '50px');
			}
			if (level === 60) {
				// 36 / 13
				updateGameSize(Math.pow(7, 2), 17, '50px');
			}

			START_GAME();
		}, 200);
	}

	function activateBoxes() {
		boxes.forEach((box) => {
			box.addEventListener('click', checkBox);
			box.classList.add('active');
		});
	}

	function deactivateBoxes() {
		boxes.forEach((box) => {
			box.removeEventListener('click', checkBox);
			box.classList.remove('active');
		});
	}

	function updateLevel(lvl) {
		levelSpan.textContent = level;
	}
	updateLevel();

	info.querySelector('button:nth-child(1)').addEventListener('click', () => {
        info.classList.add('disabled');
        
        level = 1;
		updateLevel(level);

		lives = 3;
		livesSpan.innerText = lives;

		updateGameSize(Math.pow(3, 2), 3, '100px');

		START_GAME();
	});

	info.querySelector('button:nth-child(2)').addEventListener('click', () => {
		info.classList.add('disabled');
		startGameBtn.classList.remove('disabled-btn');

        level = 1;
        updateLevel(level);

        lives = 3;
        livesSpan.innerText = lives;
        
        clearGrid();

		updateGameSize(Math.pow(3, 2), 3, '100px');
    });
    

	function updateGameSize(numberOfBoxes, numberOfCorrectBoxes, sizeOfBox) {
		container.innerHTML = "";

		boxSize = sizeOfBox;

		gridSize = numberOfBoxes;
		rowSize = Math.sqrt(gridSize);
		correctBoxes = numberOfCorrectBoxes;

		document.body.style.setProperty('--row-size', rowSize);
		document.body.style.setProperty('--box-size', boxSize);

		onesArr = Array.from(new Array(correctBoxes)).map((x) => 1);
		zerosArr = Array.from({ length: gridSize - correctBoxes }).map((x) => 0);

		binArr = [ ...onesArr, ...zerosArr ];
		binArrXXX = [ ...binArr ];
		randomGridArr = [];

	

		createBoxes();
	}
})();
