const scrollWrapper = document.getElementById("scroll");
const aboutSection = document.getElementById("about");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            scrollWrapper.classList.add("open")
        }
    })
},{
    threshold:0.8
}
)
observer.observe(aboutSection);

if('ontouchstart' in window || navigator.maxTouchPoints > 0){
    document.querySelectorAll('flip-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('flipped');
        })
    })
}