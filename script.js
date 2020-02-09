let getId = id => document.getElementById(id);
setInterval(() => {
    const d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    let dd = d.getDate();
    let mn = d.getMonth();
    mn++;
    let yy = d.getFullYear();
    getId('watch').innerText = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    getId('date').innerText = (dd<10? '0'+ dd: dd)  + '.' + (mn < 10 ? '0' + mn : mn) + '.' + yy;

});

let m = 0;
let s = 0;
let ms = 0;
let chronog;
getId('start2').onclick = function start() {
    chronog = setInterval(run, 10)
}

function run() {
    getId('chronog').innerText = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
    ms++;
    if (ms == 100) {
        ms = 0;
        s++;
    }
    if (s == 60) {
        s = 0;
        m++;
    }
}

getId('stop2').onclick = function () {
    clearInterval(chronog)
}
getId('reset2').onclick = function () {
    ms = 0;
    s = 0;
    m = 0;
    getId('chronog').innerText = (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
    getId('loops-disp').innerText = '';
}

function getChronog() {
    return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s) + ':' + (ms < 10 ? '0' + ms : ms);
}
getId('loop2').onclick = function () {
    if (chronog) {
        let p = document.createElement('p');
        p.innerText = getChronog();
        getId('loops-disp').appendChild(p)
    }
}


let min = 0;
let count = 0;
let interalId;

getId('timer').innerHTML = `${min}`;
getId('plus').onclick = function () {
    min++;
    getId('timer').innerHTML = `${min}`;
    return min;
}
getId('minus').onclick = function () {
    min--;
    getId('timer').innerHTML = `${min}`;
    return min;
}

function convertSeconds(s) {
    let min = Math.floor((s / 60));
    let sec = s % 60;
    return (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
}

function coutDown() {
    let timeLeft = min * 60;
    count++;
    let timer = convertSeconds((timeLeft - count));
    getId('timer-disp').innerHTML = `${timer}`;
    if (count == timeLeft) {
        clearInterval(intervalId)
    }
}
getId('start').onclick = function () {
    intervalId = setInterval(coutDown, 1000);
    getId('stop').onclick = function () {
        clearInterval(intervalId)
    }
    getId('reset').onclick = function () {
        min = 0;
        sec = 0;
        getId('timer').innerHTML = min;
        clearInterval(intervalId);
        getId('timer-disp').innerHTML = (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);

    }
}
