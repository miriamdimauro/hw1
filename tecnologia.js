function onResponse(response){
    return response.json();
}

function onJsonNews(json){
        console.log(json);
 
        const articoli = document.querySelector('#view');
        articoli.innerHTML = "";
       
        for(let i=0;i<10;i++){
          const ris=json.results[i];

          const blocco=document.createElement('div');
          blocco.classList.add("news");

          const titolo = ris.title;
          const caption = document.createElement('h3');
          caption.classList.add("titolonews");
          caption.textContent = titolo;

          const descrizione = ris.description;
          const contenuto = document.createElement('p');
          contenuto.textContent = descrizione;

          const p=document.createElement('p');
          p.textContent="To continue reading: ";
          const link=document.createElement('a');
          link.classList.add("continue");
          link.href=ris.link;
          link.textContent="click here";
          p.appendChild(link)


          articoli.appendChild(blocco);
          blocco.appendChild(caption);
          blocco.appendChild(contenuto);
          blocco.appendChild(p);
        }
}

fetch('news_technology.php').then(onResponse).then(onJsonNews);
