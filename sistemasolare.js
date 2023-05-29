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

function onResponse(response) {
  return response.json();
} 

function search(event)
{
  event.preventDefault();
  console.log('Eseguo ricerca');
  const name_input=document.querySelector('#nome');
  const name_value=encodeURIComponent(name_input.value);

  fetch('api_sistemasolare.php?q='+name_value).then(onResponse).then(onJson);
}



function onJson(json) {
    console.log(json);
    
    const info = document.querySelector('#view');
    info.innerHTML = "";

    const bodies= json.bodies[0];

    const container=document.createElement('div');
    container.classList.add('foto');

    const nome = bodies.englishName;
    const name = document.createElement('h2');
    name.textContent =nome;

    const massa = bodies.mass.massValue;
    const esponente = bodies.mass.massExponent;
    const mass= document.createElement('p');
    mass.textContent = "Massa: " + massa + "x10^" + esponente + " kg";

    const densita = bodies.density;
    const dens= document.createElement('p');
    dens.textContent = "Densità: " + densita + " g/cm³";
  

    const gravita = bodies.gravity;
    const grav = document.createElement('p');
    grav.textContent = "Gravità: " + gravita;

    const radius = bodies.meanRadius;
    const raggio = document.createElement('p');
    raggio.textContent = "Raggio: " + radius + " km";

    const incl = bodies.inclination;
    const inclinazione = document.createElement('p');
    inclinazione.textContent = "Inclinazione: " + incl + "°";


    container.appendChild(name);
    container.appendChild(mass);
    container.appendChild(grav);
    container.appendChild(dens);
    container.appendChild(raggio);
    container.appendChild(inclinazione);
    info.appendChild(container);


    if  (bodies.discoveryDate !== "undefined" && bodies.discoveryDate !== "") {
    const disc = document.createElement('p');
    disc.textContent = "Scoperto il: " +  bodies.discoveryDate;;
    container.appendChild(disc);
    } 
    
   


  
    const numero = document.createElement('p');
    if(bodies.moons!==null){

      if(bodies.moons.length==1){
        numero.textContent="Questo pianeta ha " + bodies.moons.length + " luna:";
      }else{
        numero.textContent="Questo pianeta ha " + bodies.moons.length + " lune:";
      }
      numero.classList.add('nomesis');
      container.appendChild(numero);

      const moons=bodies.moons;
      let len=moons.length;
      if(bodies.moons.length>=10){
        len=10;
        const mes = document.createElement('p');
        mes.textContent= "ecco a te il nome delle prime 10."
        container.appendChild(mes);
      }
      for(let i=0; i<len; i++){
        const moon=moons[i].moon;
        const luna = document.createElement('p');
        luna.textContent = moon;   
        container.appendChild(luna);
      }
    }

    fetch('api_galleria.php?q='+form.nome.value).then(onResponse).then(onJsonPhotos);
}

function onJsonPhotos(json) {
  console.log(json);
  
  const foto = document.querySelector('#view');
  const foto_view=document.createElement('div');
  foto_view.classList.add('foto_view');
  foto.appendChild(foto_view);
  for(let i=0;i<2;i++){
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
      foto_view.appendChild(foto);
      
    }
    
}


const form = document.querySelector('form');
form.addEventListener('submit', search);

    
