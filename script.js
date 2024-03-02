const backToTopBtn = document.querySelector('#back-to-top');

const getToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
} 

backToTopBtn.addEventListener('click', getToTop);

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
