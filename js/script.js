let counter = 0;
let scrolling = false;

function play_sound(sound_name) {
    let audio = new Audio();
    audio.preload = 'auto';
    audio.src = 'chexnik.github.io/sounds/' + sound_name;
    audio.play();
}


function redirect(url) {
    play_sound('click.mp3')
    window.open(url, '_blank').focus();
}


function scroll_to_up() {
    play_sound('click.mp3')
    window.scrollTo({top:0,behavior:"smooth"})
}
// document.addEventListener("scroll",()=>{const e=window.pageYOffset;let t;e<=600?t=1-e/600:t=0,document.getElementById("scroll-tip-cont").style.opacity=String(t)},{passive:!0,capture:!0});


function hru_hru(){
    play_sound('click.mp3')

    let button = document.getElementById('mybutton');
    let fon = document.getElementById('fon');
    let text_counter = document.getElementById('text_counter')

    text_counter.textContent = 'Нахрюканно ' + (parseInt(button.dataset.count) + 1).toString() + '/10🐷';
    button.dataset.count = (parseInt(button.dataset.count) + 1).toString();

    fon.style.opacity = (1 - parseInt(button.dataset.count)/10).toString();

    if(button.dataset.count === "10"){
        button.textContent = "Этот DUNGEON нашёл своего DUNGEON MASTER!!!"
        play_sound('Slaves.mp3');
        button.onclick = "redirect('https://t.me/chexnik')"
    }
}



// Get the block element by ID
var block = document.querySelector('#stop-scrolling');

function checkBlockInView() {
  var blockPosition = block.getBoundingClientRect().top + window.pageYOffset;

  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (scrollPosition >= blockPosition) {
    window.addEventListener('mousemove', function() {});
    window.addEventListener('wheel', handleWheelEvent);
  }else if(scrollPosition <= blockPosition){
    console.log('Not on Scrolled to block with ID:', block.id);
    window.removeEventListener('wheel', handleWheelEvent);
  }
}

window.addEventListener('scroll', checkBlockInView);

let scrollCount = 0;

function handleWheelEvent() {
    
    scrollCount++;
    
    if(scrollCount > 70){
        document.querySelector('#hruk-block').style.display = "flex"
    }
}