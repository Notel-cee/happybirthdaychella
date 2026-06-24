setTimeout(function(){

document.getElementById("splash")
.style.display="none";

document.getElementById("giftPage")
.style.display="block";

},3000);

document.getElementById("openBtn")
.addEventListener("click",function(){

document.getElementById("giftPage")
.style.display="none";

document.getElementById("celebration")
.style.display="block";

});