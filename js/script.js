let counter = 0;

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


document.addEventListener('scroll', () => {
    let offset = window.scrollY;
    const start = Math.round(window.innerHeight) * 6;
    console.log(start)
    const stop = 100;

    if (offset >= start && counter <= stop) {
        window.scrollTo({
            top: start,
            behavior: 'smooth'
        });
        counter += 1;
    }
});
