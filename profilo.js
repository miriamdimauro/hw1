function rimuovi_foto(event) {
    const foto=event.currentTarget.parentNode;
    const img=foto.dataset.img;
    foto.classList.add("hidden");
    fetch("remove_pic.php?q="+img).then(onResponse).then(onJsonQuery);
}

function onJsonQuery(json)
{
    if (!json.ok) {
        return null;
    }
}

function onJsonInfo(json) {
    console.log(json);
    const dati=document.querySelector("#dati");
    const nome = document.createElement('p');
    nome.textContent = "Name: " + json.data.nome + ".";

    const surname = document.createElement('p');
    surname.textContent = "Surname: "+ json.data.cognome + ".";

    const genere = document.createElement('p');
    genere.textContent = "Gender: " + json.data.genere + ".";

    const username = document.createElement('p');
    username.textContent = "Username: " + json.data.username + ".";

    const email = document.createElement('p');
    email.textContent = "Email: " + json.data.email+ ".";

    dati.appendChild(nome);
    dati.appendChild(surname);
    dati.appendChild(genere);
    dati.appendChild(username);
    dati.appendChild(email);
}

function onJsonImmagini(json) {
 
    const gallery = document.querySelector('#view');
    gallery.innerHTML = "";
    for(let i=0;i<json.data.length;i++){
        const item=json.data[i];
        
        const foto = document.createElement('div');
        foto.classList.add('foto');
        foto.dataset.title=item.titolo;
        foto.dataset.img=item.immagine;

        const titolo = item.titolo;
        const caption = document.createElement('p');
        caption.textContent = titolo;
        
        const img = document.createElement('img');
        img.src = item.immagine;
        
        const svd = document.createElement('img');
        svd.src = "salvato.png";
        svd.classList.add("saved");
        svd.addEventListener('click',rimuovi_foto);
              
        foto.appendChild(img);
        foto.appendChild(caption);
        foto.appendChild(svd);
        gallery.appendChild(foto);
    }
    
     
}



function onResponse(response) 
{
    return response.json();
}

function onJsonQuote(json)
{
    const div = document.querySelector('#random_quote');
    div.innerHTML="";
    const q=document.createElement('p');
    q.textContent=json[0].q;
    const a=document.createElement('em');
    a.textContent="- "+json[0].a;
    div.appendChild(q);
    div.appendChild(a);
}


fetch('immagini_profilo.php').then(onResponse).then(onJsonImmagini);
fetch('random_quote.php').then(onResponse).then(onJsonQuote);
fetch('info.php').then(onResponse).then(onJsonInfo);