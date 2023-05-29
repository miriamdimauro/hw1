function onResponse(response) {
    if (!response.ok) return null;
    return response.json();
}

function jsonCheckEmail(json) {
    console.log(json);
    if (!json.exists) {
        document.querySelector("#errore_email_u").classList.add("hidden");
    } else {
        document.querySelector("#errore_email_u").classList.remove("hidden");
        document.querySelector("#errore_email_e").classList.add("hidden");
    }
}

function checkEmail(event) 
{
    const input = event.currentTarget;
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(input.value).toLowerCase())) 
    {
        document.querySelector("#errore_email_r").classList.remove("hidden");
        document.querySelector("#errore_email_e").classList.add("hidden");
        input.classList.add('errore_bordo');
    }else 
    {
        fetch("check_email.php?q="+encodeURIComponent(String(input.value).toLowerCase())).then(onResponse).then(jsonCheckEmail);
        input.classList.remove('errore_bordo');
    }
}

function jsonCheckUsername(json) 
{
    if (!json.exists) 
    {
        document.querySelector("#errore_username_u").classList.add("hidden");
    } else 
    {
        document.querySelector("#errore_username_u").classList.remove("hidden");
        document.querySelector("#errore_username_e").classList.add("hidden");
    }
}

function checkUsername(event) {
    const input = event.currentTarget;
    const regex = /^[a-zA-Z0-9_]{4,16}$/;

    if(!regex.test(input.value)) 
    {
        document.querySelector("#errore_username_r").classList.remove("hidden");
        document.querySelector("#errore_username_e").classList.add("hidden");
        input.classList.add('errore_bordo');
    }else 
    {
        fetch("check_username.php?q="+encodeURIComponent(input.value)).then(onResponse).then(jsonCheckUsername);
        input.classList.remove('errore_bordo');
    }    
}


function checkPassword(event) {
    const input = event.currentTarget;
    const regex = /[!@#$&^&*(),.?":{}|<>]/;
    if (regex.test(input.value)) {
        document.querySelector("#errore_password").classList.add("hidden");
        input.classList.remove('errore_bordo');
    } else {
        document.querySelector("#errore_password").classList.remove("hidden");
        input.classList.add('errore_bordo');
    }

    if(input.value.length>=8) {
     document.querySelector("#errore_password").classList.add("hidden");
     input.classList.remove('errore_bordo');
    } else {
        document.querySelector("#errore_password").classList.remove("hidden");
        input.classList.add('errore_bordo');
    }
}

function checkConfirmPassword(event) 
{
    const input = event.currentTarget;
    
    if (input.value !== document.querySelector('#password input').value) 
    {
        document.querySelector("#errore_different_password").classList.remove("hidden");
        document.querySelector("#errore_password2").classList.add("hidden");
        input.classList.add('errore_bordo');

    } else 
    {
        document.querySelector("#errore_different_password").classList.add("hidden");
        input.classList.remove('errore_bordo');
    }
}


function validazione(event)
{
    
    if(form.name.value.length === 0)
    {     
        document.querySelector("#errore_name").classList.remove("hidden"); 
        event.preventDefault();
    }else
    {
        document.querySelector("#errore_name").classList.add("hidden");
    }
    
    if(form.surname.value.length === 0)
    {     
        document.querySelector("#errore_surname").classList.remove("hidden");
        event.preventDefault();
    }else
    {
        document.querySelector("#errore_surname").classList.add("hidden");
    }

    if(form.genere.value.length === 0)
    {     
        document.querySelector("#errore_genere").classList.remove("hidden");
        event.preventDefault();
    }else
    {
        document.querySelector("#errore_genere").classList.add("hidden");
    }
    
    if(form.email.value.length === 0)
    {     
        document.querySelector("#errore_email_e").classList.remove("hidden");
        event.preventDefault();
    }else
    {
        document.querySelector("#errore_email_e").classList.add("hidden");
    }
    
    if(form.username.value.length === 0)
    {   
        document.querySelector("#errore_username_e").classList.remove("hidden");
        event.preventDefault();
    }else
    {
        document.querySelector("#errore_username_e").classList.add("hidden");
    }
    
    if(form.password.value.length === 0)
    {    
        document.querySelector("#errore_password_e").classList.remove("hidden");
        event.preventDefault();
    }else
    {
        document.querySelector("#errore_password_e").classList.add("hidden");
    }

    if(form.confirm_password.value.length === 0)
    {
        document.querySelector("#errore_password2").classList.remove("hidden");
        event.preventDefault();
    }else
    {
        document.querySelector("#errore_password2").classList.add("hidden");
    }
  
}

const form = document.forms['signup'];
form.addEventListener('submit', validazione);
document.querySelector('#email input').addEventListener('blur', checkEmail);
document.querySelector('#username input').addEventListener('blur', checkUsername);
document.querySelector('#password input').addEventListener('blur', checkPassword);
document.querySelector('#confirm_password input').addEventListener('blur', checkConfirmPassword);


function mostra_pwd(event)
{
    const label=event.currentTarget.parentNode;
    const input=label.querySelector('input');
    if(input.type==="password")
    {
        input.type="text";
        event.currentTarget.src="eyeopen.png";
    }else 
    {
        input.type="password";
        event.currentTarget.src="eyeclosed.png";
    }
}

const buttons = document.querySelectorAll(".show");
for (const b of buttons)
{
    b.addEventListener('click',mostra_pwd);
}