
  $(function(){
   var canvas = document.getElementById('img');
    var ctx = canvas.getContext('2d');
   var mouseX;
 var mouseY;
 alltime=0;
  max_obj=3;
  points=max_obj
  destroy_obj=-max_obj
  max_x=492;
  max_y=340;  
  time_refresh=5000;
  time_to_draw=time_refresh;
  obj_x=[];
  obj_y=[];
 max_speed_refresh=time_refresh;
 
 
  function drawCanvas(){  

  alltime=10+alltime;
  //когда успеваешь
  if(destroy_obj==0){
  time_to_draw=time_refresh
  
  }
  clear();
ctx.fillStyle = 'rgba(0,0,255,1.0)';
  ctx.beginPath();
ctx.font = "12px serif";
ctx.fillText("Points: "+points, 430, 20);
  ctx.closePath();
  ctx.fill();
    if(time_to_draw==time_refresh){
  //когда не успеваешь
  if(destroy_obj<=0){
  points=points+destroy_obj;
  destroy_obj=-max_obj;
  }
  for(i=0;i<max_obj;i++){
  obj_x[i]=Math.floor(Math.random()*max_x);
  obj_y[i]=Math.floor(Math.random()*max_y);
ctx.fillStyle = 'rgba(255,35,35,1.0)';
  ctx.beginPath();
  ctx.arc(obj_x,obj_y,15,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  }
  time_to_draw=0
}else{
time_to_draw=time_to_draw+10
}
   for(i=0;i<max_obj;i++){
ctx.fillStyle = 'rgba(255,35,35,1.0)';
  ctx.beginPath();
  ctx.arc(obj_x[i],obj_y[i],15,0,Math.PI*2,true);
  ctx.closePath();
  ctx.fill();
  }
  
  
  $('#img').click(function(){
  for(i=0;i<max_obj;i++){
  if(mouseX-obj_x[i]>=-15&&mouseX-obj_x[i]<=15&&mouseY-obj_y[i]>=-15&&mouseY-obj_y[i]<=15){
  obj_x[i]=-100
  destroy_obj++
  points++
  }
  }
  })
   $('#img').mousemove(function(e){
  
  mouseX=e.pageX || 0;
  mouseY=e.pageY || 0;
   })
  }

  drawCanvas();
  setInterval(drawCanvas,10);
 function clear(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  function sound3() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'snd3.wav'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
})