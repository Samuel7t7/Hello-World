var myVar;
function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
const body = document.querySelector("body");
const chekt = document.getElementById("chekt");
chekt.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  if(chekt.innerHTML ===' <i class="fa fa-moon"></i>'){
    chekt.innerHTML ='  <i class="fa fa-sun"></i>'
  }
  else{
    chekt.innerHTML =' <i class="fa fa-moon"></i>'
  }
});
var slideIndex=1;
showDivs(slideIndex);
function plusDivs(n){
    showDivs(slideIndex +=n);
}
function showDivs(n){
    var i;
    var x=document.getElementsByClassName("first");
    if(n>x.length) {slideIndex=1};
    if(n<1) {slideIndex=x.length};
    for(i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    x[slideIndex-1].style.display="block";
}