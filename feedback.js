var Name=document.getElementById('name');
var email=document.getElementById('email');
var address=document.getElementById('address');
var comments=document.getElementById('comments');
var span=document.getElementsByTagName('span');
const radioButtons = document.querySelectorAll('input[name="interest"]');
let checkboxes = document.querySelectorAll('input[name="likes"]');

function validate(){
    const regex1= /^([a-z0-9\.-]+)@(university)\.(in)$/;
    const regex2= /^[a-zA-Z]+$/
    let ck=false;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            ck = true;
        }
    }

    let values = [];
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            values.push(checkbox.value);
        }
    }

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
    else if(ck==false){
        span[3].innerText="select a choice";
        span[3].className="invalid";
        return false;
    }
    else if(values.length<=0){
        span[4].innerText="Checkbox is not checked";
        span[4].className="invalid";
        return false;
    }
    else if(comments.value.trim().length<=2){
        $("#comments").addClass("is-invalid")
        $("#comments").removeClass("is-valid")
        span[5].innerText="please provide some comments";
        span[5].className="invalid-feedback";
        return false   
    }
    else{
        return true
    }
}

Name.onkeyup=function(){
    const regex1= /^[a-zA-Z]+$/
    if(Name.value.trim().length<3){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[0].innerText="length should be greater than two";
        span[0].className="invalid-feedback";
    }
    else if(!regex1.test(Name.value.trim())){
        $("#name").addClass("is-invalid")
        $("#name").removeClass("is-valid")
        span[0].innerText="special characters are not allowed";
        span[0].className="invalid-feedback";
    }
    else{
        $("#name").addClass("is-valid")
        $("#name").removeClass("is-invalid")
        span[0].innerText="looks good";
        span[0].className="valid-feedback";
    }
}

email.onkeyup=function()
{
    const regex1= /^([a-z0-9\.-]+)@(university)\.(in)$/;
    if(regex1.test(email.value.trim()))
    {

            $("#email").addClass("is-valid")
            $("#email").removeClass("is-invalid")
            span[1].innerText="looks good";
            span[1].className="valid-feedback";
    }
    else{
            $("#email").addClass("is-invalid")
            $("#email").removeClass("is-valid")
            span[1].innerText="invalid email";
            span[1].className="invalid-feedback";
    }
}

address.onkeyup=function(){
    if(address.value.trim().length<=8){
        $("#address").addClass("is-invalid")
        $("#address").removeClass("is-valid")
        span[2].innerText="enter valid address";
        span[2].className="invalid-feedback";  
    }
    else{
        $("#address").addClass("is-valid")
        $("#address").removeClass("is-invalid")
        span[2].innerText="looks good";
        span[2].className="valid-feedback";
    }
}


for(var i = 0, max = radioButtons.length; i < max; i++) {
    radioButtons[i].onclick = function() {
        span[3].innerText="looks good";
        span[3].className="valid";
    }
}


for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", checkedOrNot);
  }
function checkedOrNot() {
    let ck1=false;
    for (const checkbox of checkboxes) {
        if (checkbox.checked) {
            ck1=true;
        }
    }
        if (ck1) {
            span[4].innerText="looks good";
            span[4].className="valid";
        }
        else{
            span[4].innerText="Checkbox is not checked";
            span[4].className="invalid";
        }
}


comments.onkeyup=function(){
    if(comments.value.trim().length<2){
        $("#comments").addClass("is-invalid")
        $("#comments").removeClass("is-valid")
        span[5].innerText="please provide some comments";
        span[5].className="invalid-feedback";  
    }
    else{
        $("#comments").addClass("is-valid")
        $("#comments").removeClass("is-invalid")
        span[5].innerText="looks good";
        span[5].className="valid-feedback";
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