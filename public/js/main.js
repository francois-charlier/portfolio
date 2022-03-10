
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}

const goTo = el => {
    if(el == "") {
        window.scrollTo({
            top: "#",
            behavior: 'smooth'
        })
    }
    else {
        el = el.trim();
        let position = document.querySelector(el).offsetTop;
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        })
    }
}

const checksection = section => {
    let elems = document.querySelectorAll(".nav");
    elems.forEach(e => e.classList.remove("active"))
    section.classList.add('active')
}

function setup() {
    let sections = document.querySelectorAll("section");
    let navbar_title = document.querySelectorAll("#navigation ul li");
    let back_to_top = document.querySelector("#back-to-top");

    const followScroll = () => {
        var current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 50) {
                current = section.getAttribute("id");
            }
        });

        navbar_title.forEach((li) => {
            li.children[0].classList.remove("active");
            if (li.classList.contains(current)) {
                li.children[0].classList.add("active");
            }
        });
    }
    document.addEventListener('scroll', followScroll)

    if (back_to_top) {
        const displayBacktotop = () => {
            if (window.scrollY >= 100) {
                back_to_top.classList.add('active')
            } else {
                back_to_top.classList.remove('active')
            }
        }
        displayBacktotop()
        goTo("a[href='#']");
        checksection(document.querySelector("a[href='#']"));
        document.addEventListener('scroll', displayBacktotop)
    }

    back_to_top.addEventListener("click", function(i) {
        goTo()
    })

    let elems = document.querySelectorAll(".nav");
    elems.forEach( e => {
        e.addEventListener("click", function(i) {
            i.preventDefault();
            goTo(this.hash)
        })

        e.addEventListener("click", function(i) {
            let elems = document.querySelectorAll(".nav");
            elems.forEach( e => e.classList.remove("active"))
            this.classList.add("active")
        })
    })


    for (let i = 0; i < 5; i++) {
        let str_btn = "open-modal-" + (i + 1);
        let str_modal = "modal-" + (i + 1);
        let str_close = "close-modal-" + (i + 1);

        let btn_open = document.getElementById(str_btn);
        let btn_close = document.getElementById(str_close);
        let modal = document.getElementById(str_modal);

        btn_open.addEventListener("click", () => {
            modal.classList.add("show");
            document.documentElement.style.overflow = 'hidden';
        })

        btn_close.addEventListener("click", () => {
            modal.classList.remove("show");
            document.documentElement.style.overflow = 'auto';
        })
    }
}