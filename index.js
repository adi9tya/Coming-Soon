const Day = document.querySelector('.day');
const Hour = document.querySelector('.hour');
const Minute = document.querySelector('.minute');
const Second = document.querySelector('.second');

const startTimer = function() {
        const tick = function() {
            
        if(d<0){
            window.location.reload();
        }
        let day = d; 
        let hour = h;
        let min = m;
        let sec = s;
        Day.textContent = `${day}`.padStart(2,0);
        Hour.textContent = `${hour}`.padStart(2,0);
        Minute.textContent = `${min}`.padStart(2,0);
        Second.textContent = `${sec}`.padStart(2,0);
        s--;
        if(s < 0){
        m--;
        if(m < 0){
        h--;
        if(h < 0)
        d--;
    }
    }

        if(s<0){
        s = 60;
        if(m<0){
        m = 60;
        if(h<0)
        h = 23;}
    }

    }
    let d = 10;
    let h = 12;
    let m = 60;
    let s = 60;
    tick();
    const timer = setInterval(tick, 1000);
    return timer;
}

startTimer();

