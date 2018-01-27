var storage = localStorage;

//Take the innerHTML of all textArea divs and saves it to local storage
function save() {
    var text = document.getElementsByClassName("textArea");
    for (i = 0; i < text.length; i++) {
        storage.setItem(text[i].id, text[i].innerHTML);
    }
}

//See if textArea divs have local storage data, if so, populate them
function load() {
    var text = document.getElementsByClassName("textArea");
    for (i = 0; i < text.length; i++) {
        if (storage.getItem(text[i].id) !== (undefined || null)) {
            text[i].innerHTML = storage.getItem(text[i].id);
        }

        text[i].addEventListener("keyup", save);
    }
}

function loadProgress() {
    var text = document.getElementsByClassName("progressCell");
    for (i = 0; i < text.length; i++) {

    }
    //Faith
    scanStorage("faith");
    scanStorage("divineNature");
    scanStorage("individualWorth");
    scanStorage("knowledge");
    scanStorage("choiceAndAccountability");
    scanStorage("goodWorks");
    scanStorage("integrity");
    scanStorage("virtue");
}

function scanStorage(val) {
    var value;
    var element;

    //Loop through storage and find all of the signed off numbers
    for (i = 1; i < 10; i++) {
        value = storage[val + "Signoff" + i.toString()];

        //If the storage slot has something in it, then...
        if (value !== undefined && value !== "") {

            //...loop through the record sheet, find the next empty box, and put the value in it
            for (j = 1; j < 6; j++) {
                element = document.getElementById(val + j.toString());
                if (element.innerText === "") {
                    element.innerText = value;
                    j = 9999;
                }
            }
        }
    }

    //Access storage slot for the value project
    value = storage[val + "SignoffVP"];
    //If the storage slot has something in it, then...
    if (value !== undefined && value !== "") {
        element = document.getElementById(val + "VP");
        if (element.innerText === "") {
            element.innerText = value;
            j = 9999;
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementsByClassName("textArea")) {
        load();
    }

    if (document.getElementsByClassName("progressCell")) {
        loadProgress();
    }
});

//Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js').then(function() { console.log('Service Worker registered'); });
}