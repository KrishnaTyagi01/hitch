
const removeRed = (element) => {
    (element.classList.remove('borderRed'));
}


export const Validate = ({
    Title,
    Tagline,
    Overview,
    TimeH1,
    TimeH2,
    TimeM1,
    TimeM2,
    DurationH1,
    DurationH2,
    DurationM1,
    DurationM2,
    Image,
    preview,
    Tags,
    duration,
    singleDay,
    price,
    freeEvent,
    onlineEvent,
    address,
    selectedDay,


}) => {
    const checkDuration = () => {
        for (let i = 0; i < duration.length; ++i) {
            if (duration[i] < '0' || duration[i] > '9')
                return false;
        }
        return true;
    }


    const titleRef = document.querySelector('.sec_container .event_name');
    const taglineRef = document.querySelector('.sec_container .event_tagline');
    const overviewRef = document.querySelector('.sec_container .event_overview');
    const timeRef = document.querySelectorAll('.sec_container .event_schedule_time .event_schedule_time_blanks input');
    const durRef = document.querySelectorAll('.sec_container .duration_days .event_schedule_time_blanks input');
    const durationsDaysRef = document.querySelectorAll('.sec_container .duration_days input')[1];
    const imageRef = document.querySelectorAll('.sec_container .imgButtons .addImage');
    const priceRef = document.querySelectorAll('.sec_container .event_pricePlan input')[1];
    const selectedDayRef = document.querySelector('.sec_container .event_schedule_date_blanks .Calendar');
    const addressRef = document.querySelectorAll('.sec_container .address input');

    removeRed(titleRef);
    removeRed(taglineRef);
    removeRed(overviewRef);
    removeRed(timeRef[0]);
    removeRed(timeRef[1]);
    removeRed(timeRef[2]);
    removeRed(timeRef[3]);
    removeRed(imageRef[0]);

    if (!freeEvent)
        removeRed(priceRef);

    removeRed(selectedDayRef);

    if (singleDay) {
        removeRed(durRef[0]);
        removeRed(durRef[1]);
        removeRed(durRef[2]);
        removeRed(durRef[3]);
    }
    else {
        removeRed(durationsDaysRef);
    }
    if (!onlineEvent) {
        removeRed(addressRef[1]);
        removeRed(addressRef[3]);
        removeRed(addressRef[4]);
    }



    let ret = true;

    if (Title === '') { titleRef.classList.add('borderRed'); ret = false };
    if (Tagline === '') { taglineRef.classList.add('borderRed'); ret = false; }
    if (Overview === '') { overviewRef.classList.add('borderRed'); ret = false; }
    if (TimeH1 === '' || TimeH1 < '0' || TimeH1 > '2') { timeRef[0].classList.add('borderRed'); ret = false; }
    if (TimeH2 === '' || TimeH2 < '0' || TimeH2 > '9') { timeRef[1].classList.add('borderRed'); ret = false; }
    if (TimeM1 === '' || TimeM1 < '0' || TimeM1 > '5') { timeRef[2].classList.add('borderRed'); ret = false; }
    if (TimeM2 === '' || TimeM2 < '0' || TimeM2 > '9') { timeRef[3].classList.add('borderRed'); ret = false; }

    if (Image.img0 === null) { imageRef[0].classList.add('borderRed'); ret = false; }

    if (singleDay) {
        if (DurationH1 === '' || DurationH1 < '0' || DurationH1 > '2') { durRef[0].classList.add('borderRed'); ret = false; }
        if (DurationH2 === '' || DurationH2 < '0' || DurationH2 > '9') { durRef[1].classList.add('borderRed'); ret = false; }
        if (DurationM1 === '' || DurationM1 < '0' || DurationM1 > '5') { durRef[2].classList.add('borderRed'); ret = false; }
        if (DurationM2 === '' || DurationM2 < '0' || DurationM2 > '9') { durRef[3].classList.add('borderRed'); ret = false; }
    }
    else {
        if (duration === '' || checkDuration() === false) { durationsDaysRef.classList.add('borderRed'); ret = false; }
    }

    if (!freeEvent && price == '') { priceRef.classList.add('borderRed'); ret = false; }

    if (selectedDay === null) { selectedDayRef.classList.add('borderRed'); ret = false; }

    if (!onlineEvent) {
        if (address.lineOne === '') { addressRef[1].classList.add('borderRed'); ret = false; }
        if (address.city === '') { addressRef[3].classList.add('borderRed'); ret = false; }
        if (address.state === '') { addressRef[4].classList.add('borderRed'); ret = false; }
    }

    return ret;
}

