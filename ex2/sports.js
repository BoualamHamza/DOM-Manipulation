"use strict";
/*---------------------------------*/
function athlete(sportName) {
    if(!info.textContent.includes(sportName.textContent)){
        let sportModifie = sportName.textContent.toLowerCase().replace('é', 'e');
        let p = document.createElement('p');
        let info = document.getElementById("info");
        let details = document.createTextNode(sportName.textContent + ": " + sportsV2[sportModifie].licences + " licenciés");
        p.appendChild(details);
        
        let h2 = document.createElement("h2");
        let nbrLicenies = document.createElement('p');
        let site = document.createElement('a');
        let img = document.createElement('img');
        let text = document.createTextNode(sportsV2[sportModifie].licences + " licencieés ");
        nbrLicenies.appendChild(text);
        h2.appendChild(document.createTextNode(sportName.textContent));
        info.appendChild(h2);
        info.appendChild(nbrLicenies);
        
        if(sportsV2[sportModifie].hasOwnProperty('site')){
            site.appendChild(document.createTextNode(sportsV2[sportModifie].site));
            site.href = sportsV2[sportModifie].site;
            info.appendChild(site);

        }
        if(sportsV2[sportModifie].hasOwnProperty('logo')){
            img.src = "logos/"+ sportsV2[sportModifie].logo;
            info.appendChild(img);
        }
        


}
}
/*let str  = document.getElementById('info');
let btn = document.createElement("button");
btn.appendChild(document.createTextNode("delete shiit"));
str.appendChild(btn);
btn.onclick = function() {
    location.reload()
}*/

function myButton(){
    location.reload();
}