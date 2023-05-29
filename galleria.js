function rimuovi_foto(event){
  event.currentTarget.src="no_salva.png";
  const foto=event.currentTarget.parentNode;
  const img=foto.dataset.img;
  event.currentTarget.removeEventListener('click',rimuovi_foto)
  event.currentTarget.addEventListener('click',aggiungi_foto);

    
  fetch("remove_pic.php?q="+img).then(onResponse).then(onJsonQuery);

}

function onJsonQuery(json)
{
    if (!json.ok) {
        return null;
    }
}

function aggiungi_foto(event){
  event.currentTarget.src="salvato.png";
  const foto=event.currentTarget.parentNode;
  const title=foto.dataset.title;
  const img=foto.dataset.img;
  event.currentTarget.removeEventListener('click',aggiungi_foto)
  event.currentTarget.addEventListener('click',rimuovi_foto);

  const formData = new FormData();
    
  formData.append('title',title);
  formData.append('img',img);
  fetch("save_pic.php", {method: 'post', body: formData}).then(onResponse).then(onJsonQuery);
}


function search(event)
{
  event.preventDefault();
  const name_input=document.querySelector('#nome');
  const name_value=encodeURIComponent(name_input.value);

  fetch('api_galleria.php?q='+name_value).then(onResponse).then(onJsonPhotos);
}



function onJsonPhotos(json) {
    console.log(json);
    
    //PRIMA API
    const gallery = document.querySelector('#view');
    gallery.innerHTML = "";
   
    for(let i=0;i<9;i++){
      const item=json[i];

      if(item.links[0].href===null)
      {
        continue;  //salto se img è null
      }
      
      const foto = document.createElement('div');
      foto.classList.add('foto');
      foto.dataset.title=item.data[0].title;
      foto.dataset.img= item.links[0].href;

      const titolo = item.data[0].title;
      const caption = document.createElement('p');
      caption.textContent = titolo;
     
      const img = document.createElement('img');
      img.src = item.links[0].href;
     
      const svd = document.createElement('img');
      if(item.exists){
        svd.src = "salvato.png";
        svd.classList.add("saved");
        svd.addEventListener('click',rimuovi_foto);
      }else{
        svd.src = "no_salva.png";
        svd.classList.add("saved");
      svd.addEventListener('click',aggiungi_foto);
      }
      
      
      foto.appendChild(img);
      foto.appendChild(caption);
      foto.appendChild(svd);
      gallery.appendChild(foto);
      
    }
  }
  
  
  function onResponse(response) {
      return response.json();
    } 

const form = document.querySelector('form');
form.addEventListener('submit', search);
    

