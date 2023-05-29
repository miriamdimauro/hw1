
function onResponse(response){
    return response.json();
}

function onJson1(json){
        console.log(json);

        const info = document.querySelector('#view');
        info.innerHTML = "";
       
        for(let i=0;i<10;i++){
          const res=json.results[i];

          const blocco=document.createElement('div');
          blocco.classList.add('launches');

          const nome = res.name;
          const nome_astr= document.createElement('h1');
          nome_astr.textContent = nome;
            
          const bio = res.bio;
          const descr = document.createElement('p');
          descr.textContent = "Bio: "+ bio;

          const foto = document.createElement('img');
          foto.src = res.profile_image;
          foto.classList.add('foto');
          blocco.appendChild(foto);
        
          const stato = res.status.name;
          const stat = document.createElement('p');
          stat.textContent = "Status: "+ stato;

          const eta = res.age;
          const old = document.createElement('p');
          old.textContent = "Age: "+ eta;

          const birth=res.date_of_birth;
          const compleanno = document.createElement('p');
          compleanno.textContent = "Date of birth: "+ birth;

          const agenzia = res.agency.name;
          const agen = document.createElement('p');
          agen.textContent = "Agency: "+ agenzia;
        

          const primo = res.first_flight;
          const uno = document.createElement('p');
          uno.textContent = "First flight: "+ primo;

          const ultimo = res.last_flight;
          const last = document.createElement('p');
          last.textContent = "Last flight: "+ ultimo;

        blocco.appendChild(nome_astr);
        blocco.appendChild(descr);
        blocco.appendChild(stat);
        blocco.appendChild(old);
        blocco.appendChild(compleanno);
        blocco.appendChild(agen);
        blocco.appendChild(uno);
        blocco.appendChild(last); 

        if (res.spacewalks_count!==0){
            const walk = res.spacewalks_count;
            const camminate = document.createElement('p');
            camminate.textContent = "Spacewalks: "+ walk;
            blocco.appendChild(camminate);
            }

          if  (res.wiki !== null ) {
          const wikip = document.createElement('a');
          wikip.href=res.wiki;
          const foto_wiki = document.createElement('img');
          foto_wiki.src= "wiki.png"
          foto_wiki.classList.add("social");
          wikip.appendChild(foto_wiki);
          blocco.appendChild(wikip);
          }

          if (res.instagram !== null){
          const insta = document.createElement('a');
          insta.href=res.instagram;
          const foto_insta = document.createElement('img');
          foto_insta.src = "instagram.png";
          foto_insta.classList.add("social");
          insta.appendChild(foto_insta);
          blocco.appendChild(insta);
          }

          if (res.twitter!=null) {
          const twit = document.createElement('a');
          twit.href = res.twitter;
          const foto_twit= document.createElement('img');
          foto_twit.src= "twitter.png"
          foto_twit.classList.add("social");
          twit.appendChild(foto_twit);
          blocco.appendChild(twit);
          }
         
        info.appendChild(blocco);      
        }
    }


fetch('api_astronauts.php').then(onResponse).then(onJson1);


    