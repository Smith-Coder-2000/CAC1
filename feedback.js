var Name=document.getElementById('name');
var email=document.getElementById('email');
var address=document.getElementById('address');
var span=document.getElementsByTagName('span');
const radioButtons = document.querySelectorAll('input[name="interest"]');

function validate(){
    const regex1= /^([a-z0-9\.-]+)@(hospital)\.(in)$/;
    const regex2= /^[a-zA-Z]+$/

    if(Name.value.trim().length<3){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[0].innerText="length should be greater than two";
        span[0].className="invalid-feedback";
        return false
    }
    else if(!regex2.test(Name.value.trim())){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[0].innerText="special characters are not allowed";
        span[0].className="invalid-feedback";
        return false
    }
    else if(!regex1.test(email.value.trim())){
        $("#email").addClass("is-invalid")
        $("#email").removeClass("is-valid")
        span[1].innerText="invalid email";
        span[1].className="invalid-feedback";
        return false
    }
    else if(address.value.trim().length<=8){
        $("#address").addClass("is-invalid")
        $("#address").removeClass("is-valid")
        span[2].innerText="enter valid address";
        span[2].className="invalid-feedback";
        return false   
    }
    else if(radioButtons){
        let ck=false;
        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                ck = true;
            }
        }
        if(ck==false){
            span[3].innerText="select a choice";
            span[3].className="invalid-feedback";
            return false;
        }
    }
    else{
        $("#name").addClass("is-valid")
        $("#name").removeClass("is-invalid")
        $("#email").addClass("is-valid")
        $("#email").removeClass("is-invalid")
        $("#password").addClass("is-valid")
        $("#password").removeClass("is-invalid")
        $("#password2").addClass("is-valid")
        $("#password2").removeClass("is-invalid")
        $("#phno").addClass("is-valid")
        $("#phno").removeClass("is-invalid")
        $("#address").addClass("is-valid")
        $("#address").removeClass("is-invalid")
        return true
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