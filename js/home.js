var logOutBtn= document.getElementById('logout-btn');
var welcomeMassage =document.getElementById("username");



var username = localStorage.getItem('sessionUsername')
if(localStorage.getItem('userName') !=null){
    welcomeMassage.innerHTML=`Welcom
    ${localStorage.getItem('userName')}`
    }


logOutBtn.addEventListener('click',function(){
    logOut();
})
  



function logOut(){
    window.location.href='index.html';
    localStorage.removeItem('userName')

}