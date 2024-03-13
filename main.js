const backToTopBtn = document.querySelector('#back-to-top');
const mobileBtn = document.querySelector('.mobile');
const navUl = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul a');

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} 

// Scroll function

const scrollFunction = () => {
    
    if (
        document.body.scrollTop > 400 || 
        document.documentElement.scrollTop > 400) {
      backToTopBtn.style.visibility = 'visible';
      backToTopBtn.style.opacity = '1';

    } else {
      backToTopBtn.style.visibility = 'hidden';
      backToTopBtn.style.opacity = '0';
    }
  }

  // Throttle function from stackoverflow: https://stackoverflow.com/questions/12009367/javascript-event-handling-scroll-event-with-a-delay

  function throttle(func, timeFrame) {
    let lastTime = 0;
    return function () {
        const now = new Date();
        if (now - lastTime >= timeFrame) {
            func();
            lastTime = now;
        }
    };
  }

const throttledScrollFunction = throttle(scrollFunction, 300);

window.onscroll = () => throttledScrollFunction();


// Mobile menu

const toggleMobMenu = () => {
    navUl.classList.toggle('responsive')
  }

menuItems.forEach(item => item.addEventListener('click', toggleMobMenu));


// End greeting

const greetingOutput = document.querySelector('#greeting');

function greetVisitor () {
    const today = new Date();
    const currentDay = today.getDay();
    const currentHour = today.getHours();
    let todIndex;

    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const timesOfDay = ['morning', 'afternoon', 'evening', 'night'];

    if (currentHour < 11) todIndex = 0;
    else if (currentHour < 16) todIndex = 1;
    else if (currentHour < 21) todIndex = 2;
    else todIndex = 3;

    greetingOutput.textContent = `${weekDays[currentDay]} ${timesOfDay[todIndex]}`;
}

greetVisitor();

backToTopBtn.addEventListener('click', getToTop);
mobileBtn.addEventListener('click', toggleMobMenu);
menuItems.forEach(item => item.addEventListener('click', toggleMobMenu));
