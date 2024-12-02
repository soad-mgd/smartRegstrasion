var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var logInBtn = document.getElementById("logInbtn");
var baseURL = ''
var usersList=[];

logInBtn.addEventListener('click',function(){
    login();
});


if(localStorage.getItem('users')!=null){
    usersList = JSON.parse(localStorage.getItem('users'))
}


function login(){
    if(isLoginEmpty()==false){
         document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
         return false;
    }
    var email = loginEmail.value;
    var password = loginPassword.value;
    for(var i =0; i<usersList.length;i++){
    if(usersList[i].email==email&&usersList[i].password==password){
        localStorage.setItem("userName",usersList[i].name);
        if (baseURL == '/') {
            location.replace('https://' + location.hostname + '/home.html')

        } else {
            location.replace(baseURL + '/home.html')

        }
    }
    else {
        document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
    }
    }
}




function checkEmailAndPassword(){
    for(var i = 0 ;i<usersList.length;i++){
        if(usersList[i]==loginEmail.value && usersList[i] == loginPassword.value){
            localStorage.setItem('userName',usersList[i].name);
            return true;
        }
    }
}



function isLoginEmpty(){
    if(loginEmail.value == "" ||loginPassword.value == ""){
           document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    else{
    return true
    }
}
