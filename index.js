let scoreCardHome = document.getElementById("home-scorecard")
let scoreCardGuest = document.getElementById("guest-scorecard")
let homeScored = 0;
let guestScored = 0;
// console.log(scoreCardGuest)

function homeScored1() {
    homeScored += 1;
    scoreCardHome.innerText = homeScored;
}

function homeScored2() {
    homeScored += 2;
    scoreCardHome.innerText = homeScored;
}

function homeScored3() {
    homeScored += 3;
    scoreCardHome.innerText = homeScored;
}

function guestScored1() {
    guestScored += 1;
    scoreCardGuest.innerText = guestScored;
}

function guestScored2() {
    guestScored += 2;
    scoreCardGuest.innerText = guestScored;
}

function guestScored3() {
    guestScored += 3;
    scoreCardGuest.innerText = guestScored;
}

function newGame() {
    guestScored = 0;
    homeScored = 0;
    scoreCardHome.innerText = homeScored;
    scoreCardGuest.innerText = guestScored;
}