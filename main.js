var storage = localStorage;

var save = function(){
  var text = document.getElementsByClassName("textArea");
  for (i=0;i<text.length();i++){
    storage.setItem(text[i].id) = text[i].innerText;
    console.log(text[i].innerText);
  }
}

var load = function (){
  var text = document.getElementsByClassName("textArea");
  for (i=0;i<text.length();i++){
    text[i].innerText = storage.getItem(text[i].id)
    console.log(text[i].innerText);
  }
}
