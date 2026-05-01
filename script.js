function check(){
  let p=document.getElementById("pass").value;
  if(p=="salma123"){
    document.getElementById("lock").style.display="none";
    document.getElementById("main").style.display="block";

    document.getElementById("music").play();

    document.getElementById("title").innerHTML="🎉 Happy Birthday Salma 🎉";

    type();
    countdown();
    fireworks();
    confetti();
  }else{
    alert("Wrong Password 😅");
  }
}

let text="May your every new chapter be better than your last 🤍 Peace & Joy ✨";
let i=0;

function type(){
  if(i<text.length){
    document.getElementById("typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(type,120);
  }
}

function countdown(){
  let time=10;
  setInterval(()=>{
    document.getElementById("countdown").innerHTML="Surprise in "+time;
    time--;
  },1000);
}

function cutCake(){
  alert("🎂 Happy Birthday Salma 🤍");
}

function playVoice(){
  document.getElementById("voice").play();
}

let imgs=[
  "https://i.imgur.com/3ZQ3Z6K.png",
  "https://i.imgur.com/oYiTqum.jpg"
];

let j=0;
setInterval(()=>{
  document.getElementById("slide").src=imgs[j];
  j=(j+1)%imgs.length;
},2000);

function fireworks(){
  let c=document.getElementById("fireworks");
  let ctx=c.getContext("2d");
  c.width=window.innerWidth;
  c.height=window.innerHeight;

  setInterval(()=>{
    ctx.fillStyle="rgba(0,0,0,0.1)";
    ctx.fillRect(0,0,c.width,c.height);

    for(let i=0;i<10;i++){
      ctx.beginPath();
      ctx.arc(Math.random()*c.width,Math.random()*c.height,2,0,Math.PI*2);
      ctx.fillStyle=["red","yellow","blue","pink"][Math.floor(Math.random()*4)];
      ctx.fill();
    }
  },100);
}

function confetti(){
  for(let i=0;i<40;i++){
    let d=document.createElement("div");
    d.style.position="fixed";
    d.style.left=Math.random()*100+"vw";
    d.style.top="-10px";
    d.style.width="8px";
    d.style.height="8px";
    d.style.background=["red","blue","yellow","pink"][Math.floor(Math.random()*4)];
    document.body.appendChild(d);

    let fall=setInterval(()=>{
      d.style.top=d.offsetTop+5+"px";
      if(d.offsetTop>window.innerHeight){
        d.remove();
        clearInterval(fall);
      }
    },20);
  }
}
