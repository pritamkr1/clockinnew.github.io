var hour = document.querySelector('.hour');
var mini = document.querySelector('.minitue');
var sec = document.querySelector('.second');
var date = document.querySelector('.show-date');
var session = document.querySelector('.formate');

function showTime(){
    var d = new Date();
    var getHour = d.getHours();
    var getMini = d.getMinutes();
    var getSec = d.getSeconds();
    var period = 'AM'
   // in formate of 12 hour clock
    if(getHour == 0){
        getHour = 12;
        period = "AM"
    }
    if(getHour > 12){
        getHour = getHour - 12;
        period = 'PM';
    }

    getSec = getSec < 10 ? "0" + getSec : getSec
    getHour = getHour < 10 ? "0" + getHour : getHour
    getMini = getMini < 10 ? "0" + getMini : getMini

    session.innerHTML = period;
    hour.innerHTML = getHour;
    mini.innerHTML = getMini;
    sec.innerHTML = getSec;
    setTimeout(showTime, 1000);
    date.innerHTML = d.toDateString();
}

showTime();
