function mostra_pwd(event)
{
    if(form.password.type==="password")
    {
        form.password.type="text";
        event.currentTarget.src="eyeopen.png";
    }else 
    {
        form.password.type="password"; 
        event.currentTarget.src="eyeclosed.png";
    }
}

function validazione(event)
{
    if(form.username.value.length == 0 || form.password.value.length == 0)
    {

        const errore=document.querySelector(".errore");
        errore.classList.remove("hidden");

        event.preventDefault();

        const errore_valid=document.querySelector(".errorevalid");
        errore_valid.classList.add('hidden');
       
    }
        
}

const form = document.forms['login'];
form.addEventListener('submit', validazione);

const button = document.querySelector(".show");
button.addEventListener('click',mostra_pwd);