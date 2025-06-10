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
