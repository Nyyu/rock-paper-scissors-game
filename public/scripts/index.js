const btn = $("#mButtons div i");
const score = $("#score span div");
const rDiv = $("#result");
let points = 0;

rDiv.fadeOut(0);
btn.on("click", function () {
    result($(this).parent().attr("id"), btnRandom(rNumber(3)));

    $(this).parent().addClass("btnAnimation");
    setTimeout(() => {
        $(this).parent().removeClass("btnAnimation");
    }, 1500);
});

// Comparing
function result(p1, p2) {
    const btn1 = p1;
    const btn2 = p2;
    let rText;

    // Draw
    if (btn1 === btn2) rText = `DRAW`;

    // The rest of it
    if (btn1 === "paper" && btn2 === "rock") {
        rText = `P1 WON`;
        addScore();
    } else if (btn2 === "paper" && btn1 === "rock") {
        rText = `BOT WON`;
    }

    if (btn1 === "scissor" && btn2 === "paper") {
        rText = `P1 WON`;
        addScore();
    } else if (btn2 === "scissor" && btn1 === "paper") {
        rText = `BOT WON`;
    }

    if (btn1 === "rock" && btn2 === "scissor") {
        rText = `P1 WON`;
        addScore();
    } else if (btn2 === "rock" && btn1 === "scissor") {
        rText = `BOT WON`;
    }

    // Tracking values
    setTab(rText + ` (P1: ${btn1}, BOT: ${btn2})`);
}

// Tabs
function addScore() {
    points++;
    score.html(points);
}

function setTab(text) {
    rDiv.html(text.toUpperCase());
    rDiv.fadeIn(300);
    setTimeout(() => {
        rDiv.fadeOut(600);
    }, 5500);
}

// [bot]
function btnRandom(value) {
    switch (value) {
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissor";

        default:
            console.error("[btn-random] Something went wrong");
            break;
    }
}

// Others
/*
function sleep(delay) {
    const time = Date.now();
    let cTime = undefined;
    do {
        cTime = Date.now();
    } while (time + delay > cTime);
    console.log("W-what happend? I fell asleep for [" + delay + "s]");
} */

// Random number
function rNumber(limit) {
    return Math.floor(Math.random() * limit);
}
