console.log('Loaded!');
var button= document.getElementById("btn");

button.onclick = function(){
    var request =new XMLHttpRequest();
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
        if(request.status === 200){
             var span=document.getElementById("num");
             span.innerHTML=request.responseText.toString();
        }  
      }  
    };
    request.open('GET','http://u98philips.imad.hasura-app.io/counter',true);
    request.send(null);
  
};
var submit=document.getElementById('submit_btn');
submit.onclick = function(){
     var request =new XMLHttpRequest();
    request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE){
        if(request.status === 200){
             var names=request.responseText;
             names=JSON.parse(names);
             var list='';
             for(var i=0;i<names.length;i++){
                 list += '<li>'+names[i]+'</li>';
             }
             var ul= document.getElementById('list');
             ul.innerHTML=list;
        }  
      }  
    };
    var name_input=document.getElementById('name');
    var val=name_input.value;
    request.open('GET','http://u98philips.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};