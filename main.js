const daysParagraph = document.querySelector('p.days-counter');
const hoursParagraph = document.querySelector('p.hours-counter');
const minutesParagraph = document.querySelector('p.minutes-counter');
const secondsParagraph = document.querySelector('p.seconds-counter');
const selectBox = document.querySelector('select');
const dateInput = document.querySelector('.users-date');
const preparedDatesBtn = document.querySelector('.prep-dates');
const usersDateBtn = document.querySelector('.users-date-submit');
let date, days, hours, minutes, seconds;

preparedDatesBtn.addEventListener('click', function () {
    switch (selectBox.value) {
        case '1':
            date = new Date('November 3, 2020 00:00:00');
            break;
        case '2':
            date = new Date('January 1, 2021 00:00:00');
            break;
        case '3':
            date = new Date('June 12, 2020 00:00:00');
            break;
        case '4':
            date = new Date('April 18, 2020 00:00:00');
            break;
        case '5':
            date = new Date('January 31, 2020 00:00:00');
            break;
        case '6':
            date = new Date('October 20, 2020 00:00:00');
            break;
        case '7':
            date = new Date('July 17, 2020 00:00:00');
            break;
    }
    setImmediateInterval(count, 1000);
    setImmediateInterval(uploadData, 1000);
})

usersDateBtn.addEventListener('click', function () {
    date = new Date(dateInput.value);
    if (date > (new Date())) {
        setImmediateInterval(count, 1000);
        setImmediateInterval(uploadData, 1000);
    } else {
        alert(`You can't go back in time :)`);
        clearData();
        return;
    }
})

function count() {
    const currentDate = new Date();
    let timeToNewYear = date - currentDate;
    days = Math.floor(timeToNewYear / (1000 * 60 * 60 * 24));
    hours = Math.floor(timeToNewYear % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    minutes = Math.floor(timeToNewYear % (1000 * 60 * 60) / (1000 * 60));
    seconds = Math.floor(timeToNewYear % (1000 * 60) / (1000));
}

function uploadData() {
    daysParagraph.textContent = days;
    hoursParagraph.textContent = hours;
    minutesParagraph.textContent = minutes;
    secondsParagraph.textContent = seconds;
}

function clearData() {
    daysParagraph.textContent = '';
    hoursParagraph.textContent = '';
    minutesParagraph.textContent = '';
    secondsParagraph.textContent = '';
}

function setImmediateInterval(funcToRun, ms) {
    funcToRun(date);
    return setInterval(funcToRun, ms);
}