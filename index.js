let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
console.log(form);
form.addEventListener('submit',function(e){
    e.preventDefault();
    myfunction();
});
function myfunction(){
    if(name.value ==""){
        document.getElementById("error1").innerHTML ="please enter your name";
    }
    else if(name.value !==""){
        document.getElementById("error1").innerHTML ="";
    }
    if(email.value ==""){
        document.getElementById("error2").innerHTML ="please enter your email";
    }
    else if(email.value !==""){
        document.getElementById("error2").innerHTML ="";
    }
    if(subject.value ==""){
        document.getElementById("error3").innerHTML ="please enter the subject here";
    }
    else if(name.value !==""){
        document.getElementById("error3").innerHTML ="";
    }
    
    if(message.value ==""){
        document.getElementById("error4").innerHTML ="please enter the message here";
    }
    else if(message.value !==""){
        document.getElementById("error4").innerHTML ="";
    }
}
let popup = document.getElementById("popup");

function openpopup(){
    popup.classList.add("open-popup");
}
function closepopup(){
    popup.classList.remove("open-popup");
}
let navlinks = document.getElementById("navlinks");

function opennavlinks(){
    navlinks.classList.add("open-navlinks")
}

function closenavlinks(){
    navlinks.classList.remove("open-navlinks")
}

