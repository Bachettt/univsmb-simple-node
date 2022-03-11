const fs = require("fs");

class Fichier {

    constructor(fichier){
        this.fichier= fichier
    }

    Lire(){
        this.contenu = fs.readFileSync(this.fichier,
                    {encoding:"utf8", flag:"r"});
        
        console.log(this.contenu);
    }


    Ecrire(contenu){
        fs.writeFile(this.fichier, this.contenu + '\n' + contenu,(err) => {
        if (err)
            console.log(err);
        else {
        console.log("Fichier a ecrit : "+ contenu);
            }
        });

    }



    Supprimer(){
    
    const path = this.fichier;
    fs.unlink(path, (err) => {
        if (err) {
        console.error(err);
            return;
        }
    });

    console.log("Fichier supprimé");
    
    }
}


class GestionFichierJSON extends Fichier {
    LireJSON(){
        let donnée = fs.readFileSync(this.fichier,
            {encoding:"utf8", flag:"r"});
        let Objet = JSON.parse(donnée) 
        console.log(Objet)
    }
}

var myFile = new Fichier('texte.txt')

var myJSONfile = new GestionFichierJSON('oui.json')


myFile.Lire();

console.log("----------------------");

myFile.Ecrire("Fichier ouvert et modifié");
myFile.Lire();

console.log("----------------------");

myJSONfile.LireJSON();


//myFile.Supprimer();