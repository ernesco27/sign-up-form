const password = document.querySelector('#pass');
const passwordConf = document.querySelector('#pass-conf');
const passMismatch = document.querySelector('.error');
const submitBtn = document.querySelector('button');




function validatePass(){
    let pass = password.value;
    let passConf = passwordConf.value;

    if(pass == passConf){
        passMismatch.textContent = "";
        return true
        
    }else{
        passMismatch.textContent = `Passwords do not match!`;
        passMismatch.style.color = 'red'
        password.classList.add('error-state');
        return false;
    
    }

}



