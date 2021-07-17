//functions run on all pages
/* Open when someone clicks on the span element */
function openNav() {
    document.querySelector('#my-nav').style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.querySelector('#my-nav').style.width = "0%";
  }


//Next sibling content toggle
const opener = document.querySelectorAll('.opener');

for(let each of opener){
  each.addEventListener('click', function(){
  const content = each.nextElementSibling;
  content.classList.toggle('content');
});
}


//home design image text toggle
const design = document.querySelectorAll('.design-img');

for(let each of design){
  each.addEventListener('mouseover', function(){
  const text = each.parentElement.nextElementSibling;
  text.classList.remove('design-text-hide');
  each.addEventListener('mouseleave', function(){
    text.classList.add('design-text-hide');
  });
  });
}

//A random number
const num = Math.floor(Math.random()*7);

//random quotes
function quotes (){
const quotes1st = [
  '\"Follow the bell that rings...',
  "\"And all we're ever building...",
  "\"When I can't find my place...",
  '\"Surrender to the next breath...',
  "\"You don't have to add, add your name...",
  '\"If I could find the words...',
  '\"You\'re in my name, yeah, you\'re in my tongue...'
];

const quotes2nd = [
  'every sound is inside nothing.\"',
  'is a window to the soul.\"',
  'I look and I see your face.\"',
  'every moment is pregnant.\"',
  'to the slaughter, to the slaughter.\"',
  'I would write them, for you.\"',
  'all I think about, all I want.\"'
];

const song = [
  '-Catch a Break',
  '-Here Tonight',
  '-Catch A Break',
  '-Catch A Break',
  '-The Slaughter',
  '-Directions to Now',
  '-Her'
];

const quoteBox = document.querySelector('.quote');
const quote1 = document.createElement('p');
const quote2 = document.createElement('p');
const space = document.createElement('br');
const quote3 = document.createElement('p');


quote1.innerText = quotes1st[num];
quote1.classList.add('quote-1');
quote2.innerText = quotes2nd[num];
quote2.classList.add('quote-2');
quote3.innerText = song[num];
quote3.classList.add('quote-3');
quoteBox.appendChild(quote1);
quoteBox.appendChild(quote2);
quoteBox.appendChild(space);
quoteBox.appendChild(quote3);
}

quotes();

console.log('updated');
//functions only on index.html
if(window.location.pathname === '/Jdallosmusic/index.html'){

//homepage player appear
function homePlayer(){
const homeBut = document.querySelector('.listen-button');
const player = document.querySelector('.hide-player');

homeBut.addEventListener('click', function(){
player.classList.toggle('hide-player');
homeBut.classList.add('fade-button');
});
}
homePlayer();


//nav appear
function navAppear(){
const nav = document.querySelector('.nav-open-home');

document.body.addEventListener('scroll', function(){
  nav.classList.remove('nav-open-home');
});
}
navAppear();



//button shimmers
const button = document.querySelector('.button-shimmer');

setInterval(() =>{
  button.style.backgroundColor = 'rgba(160, 183, 190, 0.9)';
  button.style.border = '2px solid rgba(65, 108, 116, 1)';
  // button.style.color = '#416A74';
  button.style.transition = '3s';
  setTimeout(()=>{
    button.style.backgroundColor = 'rgba(65, 108, 116, 0.9)';
  button.style.border = '2px solid rgba(160, 183, 190, 1)';
  // button.style.color = '#A0B7BE';
  button.style.transition = '3s';
  },3000);
},6000);

//randomise home page music
function randSong(){
const homePlayer = document.querySelector('.hide-player');

const songs = [
  'https://open.spotify.com/embed/track/5o0Byvc1Vv3XAFuYvzgUeP', //Does a dog have buddha nature?
  'https://open.spotify.com/embed/track/5SAuNUqcuwqfSPgxnrr5vv', //Are you Here?
  'https://open.spotify.com/embed/track/0YUbX5TZfrAxe8ETYwmICj', //Your Light
  'https://open.spotify.com/embed/track/5EYUyVEW00zTnqxAfVUOiu', //Directions to now
  'https://open.spotify.com/embed/track/7dT0ISF6ekR2qLUuycvsez', //Catch A Break
  'https://open.spotify.com/embed/track/722RAVQRvLGLd0CrvZ6yMZ', //Her
  'https://open.spotify.com/embed/track/0DEL22YuB4aFnxCOcFRP19'  //Here Tonight
];

// console.log(songs[num]);
homePlayer.src = songs[num];

}
randSong();
}


//functions run only on live page
if(window.location.pathname === '/Jdallosmusic/live.html'){
//Youtube video randomize
function randVid(){
const vidPlayer = document.querySelector('.rand-video');

const videos = [
  'https://www.youtube.com/embed/XdbElqhD5G0?', //Can you Let Go?
  'https://www.youtube.com/embed/glQfIXs5UjE?', //Starts in the Soul
  'https://www.youtube.com/embed/VPB8J8crHW0?', //Remember Before
  'https://www.youtube.com/embed/xJzvWJQrWFs?', //My Hope
  'https://www.youtube.com/embed/55M8gTtwY9g?', //See the Sun Again
  'https://www.youtube.com/embed/gOD0WWrHK_s?'  //See You Again.
];

const num6 = Math.floor(Math.random()*6);
// console.log(videos[num6]);

vidPlayer.src = videos[num6];
}
randVid();
}
