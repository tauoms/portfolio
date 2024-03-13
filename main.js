const backToTopBtn = document.querySelector('#back-to-top');
const mobileBtn = document.querySelector('.mobile');
const navUl = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} 

const toggleMobMenu = () => {
    navUl.classList.toggle('responsive')
  }

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
