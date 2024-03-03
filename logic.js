+

    // page scolling Animation 

    AOS.init();

// <============ TEXT CHANGER"s Styling  ================>

document.addEventListener('DOMContentLoaded', function () {
    const words = ['Student', 'Coder', 'Web Developer'];
    let currentIndex = 0;
    const wordElement = document.getElementById('word');

    function typewriterEffect(text, speed) {
        let i = 0;
        const interval = setInterval(function () {
            if (i < text.length) {
                wordElement.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                setTimeout(function () {
                    eraseText();
                }, 1000); // Change word after 1 second delay
            }
        }, speed);
    }

    function eraseText() {
        const text = wordElement.textContent;
        let i = text.length - 1;
        const interval = setInterval(function () {
            if (i >= 0) {
                wordElement.textContent = text.substring(0, i);
                i--;
            } else {
                clearInterval(interval);
                changeWord();
            }
        }, 50);
    }

    function changeWord() {
        currentIndex = (currentIndex + 1) % words.length;
        typewriterEffect(words[currentIndex], 200);
    }

    typewriterEffect(words[currentIndex], 200);
});


// <===============================>

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*=============== CHANGE BACKGROUND HEADER ===============*/


function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// porfolio logic 


function toggleDetails(project) {
    const description = document.getElementById(`${project}-description`);
    description.style.display = (description.style.display === 'block') ? 'none' : 'block';
}




// contact page 


// Responsive navigation menu



// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelector('.nav-links');

// navToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
// });



// scolling Animation  logic 

// footer page 



document.addEventListener('DOMContentLoaded', function () {
    const socialLinks = document.querySelectorAll('.social-link');

    socialLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            window.open(this.href, '_blank');
        });
    });
});




function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}






