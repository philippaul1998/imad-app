console.log('Loaded!');
var button= document.getElementById("btn");

button.onclick = function(){
    var request =new XMLHttpRequest();
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
        if(request.status === 200){
             var counter=request.reponseText;
             var span=document.getElementById("num");
             span.innerHTML=counter;
        }  
      }  
    };
    request.open('GET','http://u98philips.imad.hasura-app.io/counter',true);
    request.send(null);
  
};
