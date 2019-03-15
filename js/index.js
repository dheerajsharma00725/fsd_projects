var moda = document.getElementById('id01');
var mod = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == moda) {
        moda.style.display = "none";
    }
    else  if (event.target == mod) {
        mod.style.display = "none";
    }
}
function fun1(){
    document.getElementById('signIn').style.display="none";
    document.getElementById('signUp').style.display="block";
    
}






