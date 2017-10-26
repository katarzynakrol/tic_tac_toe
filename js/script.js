window.onload = function () {
    var startGameBtn = document.getElementById('startGameBtn');
    startGameBtn.onclick = startGame;
    disabledStep2();
};

function startGame() {
    selectWhoStarts();
}

function disabledStep2() {
    var step2 = document.getElementById('step2');
    step2.className = 'disabled';
    startGameBtn.disabled = true;
}

function selectWhoStarts() {
    var randomNumber = Math.random();
    var whoStarts = document.getElementById('whoStarts');
    var imageOfWhoStarts = document.createElement('img');
    var squares = document.getElementsByTagName('td');
    var crossArray = [];
    var circleArray = [];

    if (randomNumber >= 0 && randomNumber <= 0.5) {
        imageOfWhoStarts.setAttribute('src', 'images/cirkle.png');
        whoStarts.appendChild(imageOfWhoStarts);
        startGameBtn.disabled = true;
        addMarks();
    } else {
        imageOfWhoStarts.setAttribute('src', 'images/cross.png');
        whoStarts.appendChild(imageOfWhoStarts);
        startGameBtn.disabled = true;
        addMarks();
    }

    function addMarks() {
        for (var i = 0; i < squares.length; i++) {
            imageOfWhoStarts.setAttribute('class', 'marks');
            squares[i].appendChild(imageOfWhoStarts.cloneNode(true));
            squares[i].style.padding = '20px';
            squares[i].firstChild.setAttribute('id', i);
            squares[i].firstChild.onclick = clickMark;
        }
    }

    function clickMark(e) {
        e.target.style.opacity = '1';
        e.target.onclick = null;
        e.target.clicked = true;
        if (e.target.getAttribute('src') === 'images/cirkle.png') {
            circleArray.push(e.target.id);
            checkWinner(circleArray, e);
        } else if (e.target.getAttribute('src') === 'images/cross.png') {
            crossArray.push(e.target.id);
            checkWinner(crossArray, e);
        }
        changeUnclickedMarks();
    }

    function checkWinner(arrayToCheck) {
        var loss = document.getElementById('loss');
        switch (true) {
            case (arrayToCheck.indexOf('0') > -1) && (arrayToCheck.indexOf('1') > -1) && (arrayToCheck.indexOf('2') > -1):
                stopGame();
                break;
            case (arrayToCheck.indexOf('3') > -1) && (arrayToCheck.indexOf('4') > -1) && (arrayToCheck.indexOf('5') > -1):
                stopGame();
                break;
            case (arrayToCheck.indexOf('6') > -1) && (arrayToCheck.indexOf('7') > -1) && (arrayToCheck.indexOf('8') > -1):
                stopGame();
                break;

            case (arrayToCheck.indexOf('0') > -1) && (arrayToCheck.indexOf('4') > -1) && (arrayToCheck.indexOf('8') > -1):
                stopGame();
                break;
            case (arrayToCheck.indexOf('2') > -1) && (arrayToCheck.indexOf('4') > -1) && (arrayToCheck.indexOf('6') > -1):
                stopGame();
                break;

            case (arrayToCheck.indexOf('0') > -1) && (arrayToCheck.indexOf('3') > -1) && (arrayToCheck.indexOf('6') > -1):
                stopGame();
                break;
            case (arrayToCheck.indexOf('1') > -1) && (arrayToCheck.indexOf('4') > -1) && (arrayToCheck.indexOf('7') > -1):
                stopGame();
                break;
            case (arrayToCheck.indexOf('2') > -1) && (arrayToCheck.indexOf('5') > -1) && (arrayToCheck.indexOf('8') > -1):
                stopGame();
                break;
            case (arrayToCheck.length == 5):
                loss.style.display = 'block';
                stopGame();
                break;
        }

        function stopGame() {
            var reload = document.getElementById('startAgain');
            var yesBtn = document.getElementById('yes');
            var noBtn = document.getElementById('no');
            var thanks = document.getElementById('endOfTheGame');
            for (var i = 0; i < squares.length; i++) {
                squares[i].firstChild.setAttribute('class', 'stopGame');
                squares[i].firstChild.onclick = null;
            }
            reload.style.display = 'block';

            function startAgain() {
                location.reload();
            }
            yesBtn.addEventListener('click', startAgain);

            function endOfTheGame() {
                reload.style.display = 'none';
                loss.style.display = 'none';
                thanks.style.display = 'block';
            }
            noBtn.addEventListener('click', endOfTheGame);
        }
    }

    function changeUnclickedMarks(e) {
        var img;
        for (i = 0; i < squares.length; i++) {
            img = document.getElementById(i);
            if (!img.clicked) {
                img.clicked = false;
            }
            if (img.clicked === false && img.getAttribute('src') === 'images/cirkle.png') {
                img.src = 'images/cross.png';
            } else if (img.clicked === false && img.getAttribute('src') === 'images/cross.png') {
                img.src = 'images/cirkle.png';
            }
        }
    }
}

function activatedStep2() {
    step2.classList.remove('disabled');
    startGameBtn.disabled = false;
    startGameBtn.style.cursor = 'pointer';
}

document.addEventListener('DOMContentLoaded', function () {
    var circle1 = document.getElementById('circle1');
    var circle2 = document.getElementById('circle2');
    var cross1 = document.getElementById('cross1');
    var cross2 = document.getElementById('cross2');

    circle1.onclick = function () {
        cross1.style.display = 'none';
        circle2.style.display = 'none';
        activatedStep2();
    };
    cross1.onclick = function () {
        circle1.style.display = 'none';
        cross2.style.display = 'none';
        activatedStep2();
    };
    circle2.onclick = function () {
        circle1.style.display = 'none';
        cross2.style.display = 'none';
        activatedStep2();
    };
    cross2.onclick = function () {
        cross1.style.display = 'none';
        circle2.style.display = 'none';
        activatedStep2();
    };

});