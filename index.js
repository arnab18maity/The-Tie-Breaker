var rand=Math.floor(Math.random()*6)+1;
var randimg="./dice" + rand + ".png";
document.querySelectorAll("img")[0].setAttribute("src",randimg);  
var rand1=Math.floor(Math.random()*6)+1;
var randimg1="./dice" + rand1 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randimg1);  
var head=document.querySelector("h2");
if(rand>rand1)
{
    head.innerHTML="P1 wins";
}
else if(rand<rand1)
{
    head.innerHTML="P2 wins";
}
else 
{
    head.innerHTML="It's a tie";
}