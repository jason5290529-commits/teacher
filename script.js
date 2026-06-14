// Click事件
function showWelcome() {
    alert("歡迎來到陳建彰教授介紹網站！");
}

// Mouseover事件
function cardOver(card) {
    card.style.transform = "scale(1.05)";
    card.style.backgroundColor = "#e6f2ff";
}

// Mouseout事件
function cardOut(card) {
    card.style.transform = "scale(1)";
    card.style.backgroundColor = "white";
}

// Keyup事件（之後contact.html會用到）
function showText(text) {
    document.getElementById("result").innerHTML =
        "您輸入的內容：" + text;
}