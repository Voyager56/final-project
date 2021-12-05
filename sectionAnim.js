const bars = document.querySelector(`.progress-bar`);
let progBar = Array.from(bars.children);


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
let fired = false;
document.addEventListener('scroll', () => {
    if(!fired && isInViewport(progBar[0])){
    progBar.forEach((bar,index) => {
                const id = bar.childNodes[1].childNodes[3].innerText.slice(2,4);
                let element = document.querySelector(`#p${id}`)
                let width = 0;
                setInterval(() => {
                    if(width < id){
                        width++
                        element.style.width = width + "%"
                    }
                    }, 10);
                fired = true;
        })
    }
        isRunning = true;
},)
