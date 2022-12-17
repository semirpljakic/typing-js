let playerArea = document.querySelector('#playerArea');
let playerBtn = document.querySelector('#playerBtn');
let comp1Area = document.querySelector('#comp1Area');
let comp1Btn = document.querySelector('#comp1Btn');
let comp2Area = document.querySelector('#comp2Area');
let comp2Btn = document.querySelector('#comp2Btn');
let comp3Area = document.querySelector('#comp3Area');
let comp3Btn = document.querySelector('#comp3Btn');
let startBtn = document.querySelector('#startBtn');
let info = document.querySelector('#info');

let texts = [
  'Today is a beautiful day!',
  'Tomorrow is a wonderful day!',
  'Yesterday is a beautiful day!',
];
let rand;
let winner = 0;

startBtn.addEventListener('click', function () {
  let time = 3;
  startBtn.innerHTML = time;
  let loop = setInterval(function () {
    time--;
    startBtn.innerHTML = time;
    if (time == 0) {
      clearInterval(loop);
      startBtn.style.display = 'none';
      startTyping();
    } else {
    }
  }, 1000);
});

function startTyping() {
  rand = Math.floor(Math.random() * texts.length);
  info.style.display = 'block';
  info.innerHTML = '<h3>' + texts[rand] + '</h3>';
  playerArea.focus();
  comp1StartTyping();
  comp2StartTyping();
  comp3StartTyping();
  playerStartTyping();
  kraJ();
  function kraJ() {
    if (winner == 4) {
      alert('GAME OVER!');
      winner = 0;
    } else {
      winner = 0;
    }
  }
}

function playerStartTyping() {
  playerArea.addEventListener('keyup', function (e) {
    if (e.keyCode == 13) {
      let text = playerArea.value.trim();
      if (text == texts[rand]) {
        winner++;
        playerBtn.classList = 'form-control btn btn-success';
        playerBtn.innerHTML = 'Position: ' + winner;
      } else {
        playerBtn.classList = 'form-control btn btn-danger';
        playerBtn.innerHTML = 'Warning Typing';
      }
    }
  });
}

function comp1StartTyping() {
  let text = texts[rand];
  let textArray = text.split('');
  let loop = setInterval(function () {
    if (textArray.length != 0) {
      comp1Area.value += textArray.shift();
    } else {
      winner++;
      clearInterval(loop);
      comp1Btn.className = 'form-control btn btn-success';
      comp1Btn.innerHTML = 'Position: ' + winner;
    }
  }, 150);
}

function comp2StartTyping() {
  let text = texts[rand];
  let textArray = text.split('');
  let loop = setInterval(function () {
    if (textArray.length != 0) {
      comp2Area.value += textArray.shift();
    } else {
      clearInterval(loop);
      winner++;
      comp2Btn.classList = 'form-control btn btn-success';
      comp2Btn.innerHTML = 'Position: ' + winner;
    }
  }, 200);
}
function comp3StartTyping() {
  let text = texts[rand];
  let textArray = text.split('');
  let loop = setInterval(function () {
    if (textArray.length != 0) {
      comp3Area.value += textArray.shift();
    } else {
      clearInterval(loop);
      winner++;
      comp3Btn.classList = 'form-control btn btn-success';
      comp3Btn.innerHTML = 'Position: ' + winner;
    }
  }, 250);
}
