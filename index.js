//alert('Welcome. Press to start button to see the site build itself');

var timerId = 0;
var timeEl = 0;

let elements = [
  [1, 'html', 'myApp', 'afterbegin', "<div id='header'></div>", 'adding header div'],
  [2, 'html', 'header', 'afterbegin', '<div id="headerOne"></div>', 'adding headerOne div'],
  [3, 'html', 'header', 'beforeend', '<div id="headerTwo"></div>', 'adding headerTwo div'],
  [4, 'html', 'headerOne', 'afterbegin', '<ul id="headerUl"></div>', 'adding ul in header'],
  [5, 'html', 'headerUl', 'afterbegin', '<li class="headerLi" id="headerHome"><a href="#" class="headerLink">home</a></div>', 'adding li for home'],
  [6, 'html', 'headerUl', 'beforeend', '<li class="headerLi" id="headerAbout"><a href="#" class="headerLink">about</a></div>', 'adding li for about'],
  [7, 'html', 'headerUl', 'beforeend', '<li class="headerLi" id="headerProjects"><a href="#" class="headerLink">projects</a></div>', 'adding li for projects'],
  [8, 'cssId', 'header', 'backgroundColor', '#598234', 'setting header background color to green'],
  [9, 'cssClass', 'headerLink', 'color', 'white', 'setting link color to white'],
  [10, 'cssClass', 'headerLink', 'textDecoration', 'none', 'setting link text-decoration to none'],
  [11, 'cssId', 'headerHome', 'fontWeight', 'bold', 'setting home link font-weight to bold'],
  [12, 'cssId', 'headerHome', 'borderBottom', '2px solid white', 'setting border bottom to 1px white'],
  [13, 'cssId', 'headerAbout', 'opacity', '0.8', 'setting opacity of about link to 0.8'],
  [14, 'cssId', 'headerProjects', 'opacity', '0.8', 'setting opacity of projects link to 0.8'],
  [15, 'cssClass', 'headerLi', 'display', 'inline-block', 'setting li display to inline-block'],
  [16, 'cssClass', 'headerLi', 'margin', '5px', 'setting li margin to 5px'],
  [17, 'cssClass', 'headerLi', 'fontSize', '20px', 'setting li font-size to 20px'],
  [18, 'cssClass', 'headerLi:hover', 'opcacity', '0.5', 'setting opacity of hovered item to 0.5'],
  [19, 'html', 'headerTwo', 'afterbegin', '<input id="headerInput" placeholder="Search"/>', 'adding input to headerTwo'],
  [20, 'cssId', 'header', 'display', 'flex', 'setting display to flex on header'],
  [21, 'cssId', 'header', 'flex-direction', 'row', 'setting flex-direction to row'],
  [22, 'cssId', 'header', 'justify-content', 'space-between', 'setting justify-content to space-between'],
  [23, 'cssId', 'header', 'padding', '8px', 'setting header\'s padding to 8px']
];

function start() {
  time();
}

function checkTime(time) {
  time = parseInt(time, 10);
  if(elements[0] === undefined) {
    return 0;
  } else if(time === elements[0][0] && elements[0]) {
    let tempEx = document.getElementById('explanation');
    if(elements[0][1] === 'html') {
      let tempId = elements[0][2];
      let tempTag = document.getElementById(tempId);
      tempTag.insertAdjacentHTML(`${elements[0][3]}`, elements[0][4]);
      tempEx.innerHTML = elements[0][5];
    } else if(elements[0][1] === 'cssId') {
      let tempId = elements[0][2];
      let tempTag = document.querySelector(`#${tempId}`);
      tempTag.style[elements[0][3]] = elements[0][4];
      tempEx.innerHTML = elements[0][5];
    } else {
      let tempClass = elements[0][2];
      let tempTag = document.querySelectorAll(`.${tempClass}`);
      console.log(tempTag);
      for(let i = 0; i < tempTag.length; i++) {
        tempTag[i].style[elements[0][3]] = elements[0][4];
      }
      tempEx.innerHTML = elements[0][5];
    }
    elements.shift();
  }
}

function time() {
  timerId = setTimeout(() => {
    timeEl = timeEl + .1;
    timeEnd = timeEl.toFixed(1);
    document.getElementById('time').innerHTML = timeEnd;
    checkTime(timeEnd);
    time();
  }, 100);
}

var startButton = document.getElementById('start');
startButton.addEventListener('click', () => {
  if(timerId !== 0) {
    clearTimeout(timerId);
    timerId = 0;
  } else {
    start();
  }
}, false);










// Old

function addElement () {
  var newDiv = document.createElement('div');
  var newContent = document.createTextNode('This div added');
  newDiv.appendChild(newContent);

  var topDiv = document.getElementById('myApp');
  topDiv.insertAdjacentHTML('afterbegin', '<header id="myHeader"></header>');
  var header = document.getElementById('myHeader');
  header.insertAdjacentHTML('afterbegin', '<ul id="myUl"></ul');
}



// addElement();