
function onResponse(response){
    return response.json();
}

function onJson1(json){
        console.log(json);
 
        const info = document.querySelector('#view');
        info.innerHTML = "";
       
        for(let i=0;i<5;i++){
          const res=json.results[i];

          const blocco=document.createElement('div');
          blocco.classList.add('launches');

          const nome_volo = res.name;
          const nome = document.createElement('h1');
          nome.textContent = nome_volo;
            
          const foto = document.createElement('img');
          foto.src = res.image;
          foto.classList.add('foto');
        
          const agg = res.last_updated;
          const aggiornamento = document.createElement('p');
          aggiornamento.textContent = "Last update: "+ agg;

          const luogo = res.location;
          const dove = document.createElement('p');
          dove.textContent = "Location: "+ luogo;

          const stato_volo = res.status.abbrev;
          const stato = document.createElement('p');
          stato.textContent = "Status: "+ stato_volo;

          const descr = res.status.description;
          const descrizione = document.createElement('p');
          descrizione.textContent = "Description: "+ descr;


        blocco.appendChild(nome);
        blocco.appendChild(aggiornamento);
        blocco.appendChild(dove);
        blocco.appendChild(stato);
        blocco.appendChild(descrizione);


      if  (res.missions !== null || res.missions !== "undefined") {
          const missione = document.createElement('p');
          missione.textContent = "Mission: " +  res.missions;
          blocco.appendChild(missione);
          } 

        blocco.appendChild(foto);
        info.appendChild(blocco);
        }
    }

    function onJson2(json){
      console.log(json);

      const info = document.querySelector('#view');
     
      for(let i=0;i<5;i++){
        const res=json.results[i];

        const blocco=document.createElement('div');
        blocco.classList.add('launches');

        const nome_volo = res.name;
        const nome = document.createElement('h1');
        nome.textContent = nome_volo;
          
        const foto = document.createElement('img');
        foto.src = res.image;
        foto.classList.add('foto');
      
        const agg = res.last_updated;
        const aggiornamento = document.createElement('p');
        aggiornamento.textContent = "Last update: "+ agg;

        const luogo = res.location;
        const dove = document.createElement('p');
        dove.textContent = "Location: "+ luogo;

        const stato_volo = res.status.abbrev;
        const stato = document.createElement('p');
        stato.textContent = "Status: "+ stato_volo;

        const descr = res.status.description;
        const descrizione = document.createElement('p');
        descrizione.textContent = "Description: "+ descr;


      blocco.appendChild(nome);
      blocco.appendChild(aggiornamento);
      blocco.appendChild(dove);
      blocco.appendChild(stato);
      blocco.appendChild(descrizione);
      blocco.appendChild(foto);
      info.appendChild(blocco);
      }
  }


    fetch('api1_lanci.php').then(onResponse).then(onJson1);
    fetch('api2_lanci.php').then(onResponse).then(onJson2);
  
  