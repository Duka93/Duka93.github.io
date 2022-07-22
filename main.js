let enlarge = document.getElementsByClassName('navbar')[0];


const eventHandle = function(){
    enlarge.style.zoom = '115%'
}
const eventHandle1 = function(){
    enlarge.style.zoom = '100%'
}

enlarge.addEventListener('mouseover', eventHandle);
enlarge.addEventListener('mouseout', eventHandle1);