console.log('Loaded!');
var element = document.getElementById('text');
element.innerHTML='Philip';
var img= document.getElementById('img');
var marginRight=0;
function moveLeft(){
    marginRight+=1;
    img.style.marginRight=marginRight+'px';
}
img.onclick =function(){
  var interval = setInterval(moveLeft,5);  
};
