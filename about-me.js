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