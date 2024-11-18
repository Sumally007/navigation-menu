let menu = document.getElementById("menu");
let topNav = document.getElementById("topnav");



menu.addEventListener('click', () => {
    menu.classList.toggle("openmenu");
    topNav.classList.toggle('mobilemenu');
    
   
});

document.onclick = function(e){
    if (!menu.contains(e.target) && !topNav.contains(e.target)){
        topNav.classList.remove('mobilemenu');
    }
}