console.log('Loaded!');
var button= document.getElementById("btn");

button.onclick = function(){
    var request =new XMLHttpRequest();
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
        if(request.status === 200){
             var span=document.getElementById("num");
             span.innerHTML=request.responseText;
        }  
      }  
    };
    request.open('GET','http://u98philips.imad.hasura-app.io/counter',true);
    request.send(null);
  
};
