const pages = {
    "100": "Willkommen beim Teletext!\nHier erscheinen aktuelle Nachrichten und Infos.",
    "101": "Breaking News: Das ist nur ein Test im Retrodesign!\nNeue Hardware im Retro-Stil.",
    "200": "Wetter: \nSonne und 22°C in Gmunden\nMorgen Regen erwartet.",
    "108": "Was kann man mit so einer Sache machen?",
    
};

function loadTeletextPage() {
    const pageNumber = document.getElementById("page-input").value;
    const contentDiv = document.getElementById("teletext-content");
    const pageNumberDisplay = document.getElementById("page-number");
    
    if (pages[pageNumber]) {
        contentDiv.innerText = pages[pageNumber];
        pageNumberDisplay.innerText = pageNumber;
    } else {
        contentDiv.innerText = "Seite nicht gefunden!";
    }
}