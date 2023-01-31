// let counter = 0;

function redirect(url) {
    window.open(url, '_blank').focus();
}
function scroll_to_up() {
    window.scrollTo({top:0,behavior:"smooth"})
}
// const o=document.getElementById("scroll");
// o.addEventListener("click",()=>{});
// document.addEventListener("scroll",()=>{const e=window.pageYOffset;let t;e<=600?t=1-e/600:t=0,document.getElementById("scroll-tip-cont").style.opacity=String(t)},{passive:!0,capture:!0});

// document.addEventListener('scroll', () => {
//     let offset = window.scrollY;
//     const start = 7927;
//     const stop = 1;
//
//     if (offset >= start && counter <= stop) {
//         window.scrollTo(0,start)
//         counter += 1;
//     }
// });
