const btn = $("#mButtons div i");
const score = $("#score span div");
const rDiv = $("#result");
const wDiv = $("#warning-layer");
var points = 0;
var timeout = true;
var cTime = 0;

rDiv.fadeOut(0);
wDiv.fadeOut(0);

btn.on("click", function () {
    if (timeout) {
        let bot = btnRandom(rNumber(3));
        result($(this).parent().attr("id"), bot);

        $(this).parent().addClass("btnAnimation");
        setTimeout(() => {
            $(this).parent().removeClass("btnAnimation");
        }, 1500);

        setTimeout(() => {
            $("#" + bot).addClass("btnFade");
        }, 200);
        setTimeout(() => {
            $("#" + bot).removeClass("btnFade");
        }, 1500);

        cTime = 1;
        timeout = false;
    } else if (timeout === false) {
        if (cTime === 1) {
            setTimeout(() => {
                timeout = true;
            }, 1500);
        }

        // rWarning();
        cTime = 0;
    }
});

// Comparing
function result(p1, p2) {
    const btn1 = p1;
    const btn2 = p2;
    let rText;

    // Draw
    if (btn1 === btn2) rText = "DRAW";

    // The rest of it
    if (btn1 === "paper" && btn2 === "rock") {
        rText = "P1 WON";
        addScore();
    } else if (btn2 === "paper" && btn1 === "rock") {
        rText = "BOT WON";
    }

    if (btn1 === "scissor" && btn2 === "paper") {
        rText = "P1 WON";
        addScore();
    } else if (btn2 === "scissor" && btn1 === "paper") {
        rText = "BOT WON";
    }

    if (btn1 === "rock" && btn2 === "scissor") {
        rText = "P1 WON";
        addScore();
    } else if (btn2 === "rock" && btn1 === "scissor") {
        rText = "BOT WON";
    }

    // Tracking values
    setTab(rText);
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
        rDiv.fadeOut(300);
    }, 1500);
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
function rWarning() {
    wDiv.fadeIn(0).fadeOut(400);
    wDiv.html("WAIT A FEW SECONDS.");
    setTimeout(() => {
        wDiv.html("");
    }, 300);
}

// Random number
function rNumber(limit) {
    return Math.floor(Math.random() * limit);
}
