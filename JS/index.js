let scoreJoueur = document.getElementById("score-joueur");
let scoreOrdinateur = document.getElementById("score-ordinateur");
let btnJoueur = [...document.getElementsByClassName("btn-joueur")];
let resultat = document.querySelector(".line");

const jouerManche = (e) => {
    let choix = e.target.closest(".btn-joueur")
    console.log(choix)

    let choixJoueur = choix.id; 
    //console.log(choixJoueur);

    let choixOrdi = faireChoixOridnateur();
    //console.log(choixOrdi);

    document.querySelector("#" + choixOrdi + "IA").classList.add("zoom") 

    verifierGagnant(choixJoueur, choixOrdi);


}

btnJoueur.forEach((btn) => btn.addEventListener("click", jouerManche));

let faireChoixOridnateur = () => {
    // 0 = pierre
    // 1 = feuille
    // 2 = ciseaux

    let nbAleatoire = Math.floor(Math.random() * 3);

    switch (nbAleatoire) {
        case 0:
            return PIERRE;
        case 1:
            return FEUILLE;
        default:
            return CISEAUX;
    }
};

const PIERRE = "pierre";
const FEUILLE = "feuille";
const CISEAUX = "ciseaux";

const  verifierGagnant = (choixJoueur, choixOrdi) => {  
if (choixJoueur == choixOrdi) {
    alert("L'ordinateur à choisi " + choixOrdi + ", Egalité !");
}

if (choixJoueur == PIERRE) {
    if (choixOrdi == FEUILLE) {
        
        return victoireOrdinateur();
    } else if (choixOrdi == CISEAUX) {
        
        return victoireJoueur(); 
    }
}

if (choixJoueur == FEUILLE) {
    if (choixOrdi == CISEAUX) {
        alert("L'ordinateur à choisi " + choixOrdi + ", vous avez perdu !");
        return victoireOrdinateur();
    } else if (choixOrdi == PIERRE) {
        alert("L'ordinateur à choisi " + choixOrdi + ", vous avez gagné !");
        return victoireJoueur(); 
    }
}

if (choixJoueur == CISEAUX) {
    if (choixOrdi == PIERRE) {
        alert("L'ordinateur à choisi " + choixOrdi + ", vous avez perdu !");
        return victoireOrdinateur();
    } else if (choixOrdi == FEUILLE) {
        alert("L'ordinateur à choisi " + choixOrdi + ", vous avez gagné !");
        return victoireJoueur(); 
    }
}
};

const victoireOrdinateur = () => {
    
    scoreOrdinateur.textContent++;
    resultat.classList.remove("win");
    resultat.classList.add("loose");
    alert("Perdu") 
    
    document.querySelector("#pierreIA").classList.remove("zoom");
    document.querySelector("#feuilleIA").classList.remove("zoom");
    document.querySelector("#ciseauxIA").classList.remove("zoom");
  };

  const victoireJoueur = () => {
    
    scoreJoueur.textContent++;
    resultat.classList.remove("loose");
    resultat.classList.add("win");
    alert("Gagné")
    
    document.querySelector("#pierreIA").classList.remove("zoom");
    document.querySelector("#feuilleIA").classList.remove("zoom");
    document.querySelector("#ciseauxIA").classList.remove("zoom");
  };