function accordion1() {
document.getElementsByClassName("panel")[0].style.display ='block';
document.getElementsByClassName("icon")[0].innerHTML = '<i class="fa fa-caret-down" aria-hidden="true"></i>';
document.getElementsByClassName("panel")[1].style.display ='none';
document.getElementsByClassName("icon")[1].innerHTML = '<i class="fa fa-caret-right left" aria-hidden="true"></i>';
document.getElementsByClassName("panel")[2].style.display ='none';
document.getElementsByClassName("icon")[2].innerHTML = '<i class="fa fa-caret-right left" aria-hidden="true"></i>';
}

function accordion2() {
document.getElementsByClassName("panel")[0].style.display ='none';
document.getElementsByClassName("icon")[0].innerHTML = '<i class="fa fa-caret-right left" aria-hidden="true"></i>';
document.getElementsByClassName("panel")[1].style.display ='block';
document.getElementsByClassName("icon")[1].innerHTML = '<i class="fa fa-caret-down" aria-hidden="true"></i>';
document.getElementsByClassName("panel")[2].style.display ='none';
document.getElementsByClassName("icon")[2].innerHTML = '<i class="fa fa-caret-right left" aria-hidden="true"></i>';
}
function accordion3() {
document.getElementsByClassName("panel")[0].style.display ='none';
document.getElementsByClassName("icon")[0].innerHTML = '<i class="fa fa-caret-right left" aria-hidden="true"></i>';
document.getElementsByClassName("panel")[1].style.display ='none';
document.getElementsByClassName("icon")[1].innerHTML = '<i class="fa fa-caret-right left" aria-hidden="true"></i>';
document.getElementsByClassName("panel")[2].style.display ='block';
document.getElementsByClassName("icon")[2].innerHTML = '<i class="fa fa-caret-down" aria-hidden="true"></i>';
}
