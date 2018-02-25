var storage = localStorage;

document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementsByClassName("textArea")){
        load();
    }
    
    if (document.getElementsByName("progressCell")){
        loadProgress();
    }
}

/*
Saves contents of divs on the page to local storage
*/
function save() {
    var text = document.getElementsByClassName("textArea");
    for (i = 0; i < text.length; i++) {
        storage.setItem(text[i].id, text[i].innerHTML);
    }
}

/*
See if textArea divs have local storage data, if so, populate them
*/
function load() {
    var text = document.getElementsByClassName("textArea");
    for (i = 0; i < text.length; i++) {
        if (storage.getItem(text[i].id) !== (undefined || null)) {
            text[i].innerHTML = storage.getItem(text[i].id);
        }
        text[i].addEventListener("keyup", save);
    }
}

/*
Load data into progress tracker
//TODO: Rewrite to be more modular with goal of eventually adding DTG tracker
*/
function loadProgress() {
    scanStorage("faith");
    scanStorage("divineNature");
    scanStorage("individualWorth");
    scanStorage("knowledge");
    scanStorage("choiceAndAccountability");
    scanStorage("goodWorks");
    scanStorage("integrity");
    scanStorage("virtue");
}
/*
Sub-function of loadProgress for each YW Value
@param val - The value being scanned for
*/
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