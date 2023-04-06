const myInput = document.getElementById('Psw');
const upper = document.getElementById('uppercase');
const lower = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const special = document.getElementById('special');

myInput.onblur = function(){
    document.getElementById('lgnCard').style.display = "none"
}


myInput.onkeyup = function(){
    //Validate uppercase Letters
    const uppercaseLetters = /[A-Z]/g;
    if (myInput.value.match(uppercaseLetters)) {
        upper.classList.remove("invalid");
        upper.classList.add("valid");
    } else {
        upper.classList.remove("valid");
        upper.classList.add("invalid");
    }

    //validate lowercase Letters
    const lowercaseLetters = /[a-z]/g;
    if(myInput.value.match(lowercaseLetters)){
        lower.classList.remove("invalid");
        lower.classList.add("valid");
    }else{
        lower.classList.remove("valid");
        lower,classList.add("invalid");
    }

    //validate numbers
    const nums = /[0-9]/g;
    if(myInput.value.match(nums)){
        numbers.classList.remove('invalid');
        numbers.classList.add('valid');
    }else{
        numbers.classList.remove('valid');
        numbers.classList.add('invalid');
    }

    const sym = /[$-/:-?{-~!"^_`\[\]]/;
    if(myInput.value.match(sym)){
        special.classList.remove('invalid');
        special.classList.add('valid');
    }else{
        special.classList.remove('valid');
        special.classList.add('invalid');
    }


// Validate special
if(myInput.value.length >= 8) {
length.classList.remove("invalid");
length.classList.add("valid");
} else {
length.classList.remove("valid");
length.classList.add("invalid");
}

};