var storage = localStorage;

var save = function(){
  var text = document.getElementsByClassName("textArea");
  for (i=0;i<text.length;i++){
    storage.setItem(text[i].id, text[i].innerText);
  }
  console.log("saving");
};

var load = function (){
  var text = document.getElementsByClassName("textArea");
  for (i=0;i<text.length;i++){
    if (storage.getItem(text[i].id) !== undefined){
      text[i].innerText = storage.getItem(text[i].id);
    }else{
      text[i].innerText = "";
    }
    
    console.log(text[i]);
    text[i].addEventListener("keyup", save);
  }
};

document.addEventListener("DOMContentLoaded", function(){
  load();
});
