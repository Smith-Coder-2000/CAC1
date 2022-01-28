
var Name=document.getElementById('username');
var password=document.getElementById('password');
var span=document.getElementsByTagName('span');

function validate(){
    const regex1= /^[a-zA-Z]+$/
    const regex2 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-z])([a-zA-Z0-9!@#$%^&*])(.*[a-z])?$/;
    const isValidLength = /^.{8,16}$/;
    //name validation
    if(Name.value.trim().length<3){
        $("#username").addClass("is-invalid")
        $("#username").removeClass("is-valid")
        span[0].innerText="length should be greater than two";
        span[0].className="invalid-feedback";
        return false
    }
    else if(!regex1.test(username.value.trim())){
        $("#username").addClass("is-invalid")
        $("#username").removeClass("is-valid")
        span[0].innerText="special characters are not allowed";
        span[0].className="invalid-feedback";
        return false
    }
    else if(!regex2.test(password.value.trim()) || !isValidLength.test(password.value.trim())){
        $("#password").addClass("is-invalid")
        $("#password").removeClass("is-valid")
        span[1].innerText="provide a strong password";
        span[1].className="invalid-feedback";
        return false
    }
    else{
        $("#username").addClass("is-valid")
        $("#username").removeClass("is-invalid")
        $("#password").addClass("is-valid")
        $("#password").removeClass("is-invalid")
        return true
    }
}

Name.onkeyup=function(){
    const regex1= /^[a-zA-Z]+$/
    if(Name.value.trim().length<3){
        $("#username").addClass("is-invalid")
        $("#username").removeClass("is-valid")
        span[0].innerText="length should be greater than two";
        span[0].className="invalid-feedback";
    }
    else if(!regex1.test(Name.value.trim())){
        $("#username").addClass("is-invalid")
        $("#username").removeClass("is-valid")
        span[0].innerText="special characters are not allowed";
        span[0].className="invalid-feedback";
    }
    else{
        $("#username").addClass("is-valid")
        $("#username").removeClass("is-invalid")
        span[0].innerText="looks good";
        span[0].className="valid-feedback";
    }
}

password.onkeyup=function(){
    const regex1 = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])([a-z])([a-zA-Z0-9!@#$%^&*])(.*[a-z])?$/;
    const isValidLength = /^.{8,16}$/;
    if(regex1.test(password.value.trim()) && isValidLength.test(password.value.trim())){
        $("#password").addClass("is-valid")
        $("#password").removeClass("is-invalid")
        span[1].innerText="looks good";
        span[1].className="valid-feedback";
    }
    else{
        $("#password").addClass("is-invalid")
        $("#password").removeClass("is-valid")
        span[1].innerText="provide a strong password";
        span[1].className="invalid-feedback";
    }
}

function numlock(event)
{
    let code=event.which;
    if(code>47&&code<58)
    return false;
    else
    return true;
}