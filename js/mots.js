function mots_a_trouver()
{
	return 	str = "Trigonometrique : Un cercle*Denominateur : Dans une fraction, le numerateur et le...*Abscisse : L'une des coordonnees d'un point du plan*Ordonnee : L'une des coordonnees d'un point du plan*Paralleles : Deux droites de meme direction*Perpendiculaires : Deux droites a 90 degres*Le perimetre : 2xPIxR est -- --------- d'un cercle*aire : PIxR<sup>2</sup> est L'---- d'un cercle*Segment : [AB]xPythagore : La somme des carres des cotes est egale au carre de l'Hypotenuse*Triangle : La somme de ses angles est 180 degres*Concentriques : Des cercles de memes centres*inverse : 1/2 est L'------- de 2*oppose : -2 est L'------ de 2*Factoriser : Reduire une equation*Rectangle : Un triangle ABC avec un angle de 90 degres en A*Translation : Dans le plan, transformer le point A en B*Demontrer : CQFD, Ce qu'il fallait...*Discriminant : Sert a trouver les solutions d'une equation du 2nd degre*Identite remarquable : (x - 1)<sup>2</sup> = x<sup>2</sup> - 2x + 1*Nombre premier : N'est divisible que par 1 et lui meme*Nombre entier : N'a pas de decimale*Mediatrice : Coupe orthogonalement un segment en son milieu*Bissectrice : Divise un angle en deux parties egales*Thales : Des rapports egaux dans un triangle, theoreme de*Vecteur : Le ------- directeur d'une droite*Derivee : 2x est la ------- de x<sup>2</sup>*integrale : x<sup>2</sup>/2 est L'--------- de x*Tangente : Le sinus d'un angle divise par le cosinus du meme angle*Logarithme : Le ---------- neperien*Valeur absolue : |x|*Inequation : -5x<-2*Racine carre : 4 est la ------ ----- de 16*Trinome : Equation du 2nd degre*Symetrique : Le point (2,2) est le point ---------- de (-2,-2) par rapport au point (0,0)*Limite : Lorsque X tend vers l'infini, 1/X tend vers 0, on parle de*Parabole : La representation graphique de la fonction f(x) = x<sup>2</sup> est une*Complexe : i<sup>2</sup> = -1, Nombre*Logarithme Neperien : Ln*Logarithme Decimal : Log*Exponentielle : e<sup>2</sup>*Derivee : uv = u'v + uv'*Multiplication : Est prioritaire sur l'addition*Division : Est prioritaire sur l'addition*Marmotte : un animal qui dors beaucoup!";
}

var fin = true;
var nb_erreurs = 0;
var nb_passe = 0;
var tab_mots;
var nb_mots = 0;
var chaine_rangee = "";
var le_mot = ""; var lindication = "";
var mem_mot = "";
var le_scrore = 20;
var lettres_ok ="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
var la_touche ="";

recuperer();

function recuperer()
{
		tab_mots = mots_a_trouver().split('*');
		nb_mots = tab_mots.length;
		console.log(nb_mots);
		console.log(tab_mots[0]);
		console.log(tab_mots[43]);
		
}

function start()
{
	if(la_touche == " ")
		return;
	fin = false;  //on debute le pendu du coup le var fin=truequi est au debut passe en false;;;
	nb_coups = 0;
	chaine_rangee = "";
	nb_passe = 0;
	nb_erreurs = 0;
	le_score = 20;
	suivant();
}

function init_calques()
{
	var parent = document.getElementById("le_clavier");                  //rinitialiser le claviers virtuelle enlever lettres grisée;;;
	var enfants = parent.getElementsByTagName('div');
	for(var i = 0; i < enfants.length; i ++)
	{
		if(enfants[i].id != "apercu" || enfants[i].id != "saut1" || enfants[i].id != "saut2");     //il faut que je laisse 3 calques donc j'ajoute le id des calques que je ne touche pas;;;
		enfants[i].style.backgroundColor = "#EDEEEE";  //atribution de la couleurs backgroundColor mais a l'ensemble de calques;;;;  et cest erreur;;;   
	}
}

function suivant()
{
	var tab_enigme;
	var nb_alea = Math.floor(Math.random()*nb_mots);
	console.log(nb_alea);
	le_score = le_score - nb_erreurs/8; // avant c'etais 10/10 score et 4 erreurs nb_erreurs/4
	document.getElementById("leScore").innerHTML = "Votre score : <strong>" + le_score + " / 20</strong> - Mots restants : <strong>" + (10 - nb_passe) + "</strong>";
	document.getElementById("lePendu").src = "img_pendu/pendu_defaut.png";
	nb_erreurs = 0;
	init_calques();
		while(chaine_rangee.indexOf("-" + nb_alea + "-")>-1){
			nb_alea = Math.floor(Math.random()*nb_mots);  // generation de nombre aleotoire
		}	
		chaine_rangee += "-" + nb_alea + "-";
		tab_enigme = tab_mots[nb_alea].split(':');
		le_mot = tab_enigme[0];
		lindication = tab_enigme[1];
		mem_mot = le_mot.toUpperCase();
		le_mot = le_mot.toUpperCase().replace(/[A-Z0-9]/g,"_");
		console.log(lindication + "_-Reponse_: " + mem_mot + chaine_rangee + nb_erreurs);
		
		document.getElementById("indication").innerHTML = "Indication : <br /><strong>" +lindication + "</strong>";
		document.getElementById('leMot').innerHTML = le_mot;
		
}
	
function clavier(evenement)
{ 
	var indice = 0;  // une boucle qui parcours lensemble des lettres a tapper;;;
	var la_lettre = "";
	var trouve = false;
	if (fin==true)  // si var fin=true  fin de function et apres on clique start et var fin passe en false;;;
		return;   //mettre fin a la function;;;
	var touche = window.event ? evenement.keyCode : evenement.which;
	touche = String.fromCharCode(touche).substr(0,1); 
	console.log(touche);
	if(touche == " "){
		la_touche =" "
		return;
	}
	if(lettres_ok.indexOf(touche) == -1)
		return;
	document.getElementById("calque_" + touche.toLowerCase()).style.backgroundColor="#666666"; //griser les lettres deja saisie en attibuant un backgroundColor
	console.log(la_lettre);
	
	for(indice = 0 ; indice <= mem_mot.length-1; indice ++){
		la_lettre = mem_mot.substr(indice,1);  // recuperer une letre tapé
			if (la_lettre == touche){
				trouve = true;
				le_mot = le_mot.substr(0,indice) + la_lettre + le_mot.substr(indice+1);
				document.getElementById("leMot").innerHTML = le_mot;
				 //bucle for pour gerer prochiene mot;;; enchener le prochien mot, controler la saisie pour la comparer mem_mot avec les letres qui sont presentes dans le mot a devoiler, pour savoir si elle est presente ou pas dans le mot;;;
			}
	}   
	if(trouve == true){
		if(le_mot == mem_mot){
			nb_passe ++;
			if(nb_passe == 10){
				document.getElementById("leScore").innerHTML = "Votre score : <strong> " + (le_score - nb_erreurs/8) + " / 20</strong> - Mots restants : <strong>" + (10 - nb_passe) + "</strong";
				fin == true; // mot est devoile j'ai reussi, pas fin parti mais else;;; 
			}
			else{
				window.setTimeout(function attendre() { suivant(); }, 1000); //generer une autre nombre aleotoire attendre 1000 milisecondes et afficher le mot suivant;;;		
			}
		
		}
	}
	else{                                                                                  //si erreur;;;
		nb_erreurs ++;
		document.getElementById("lePendu").src = "img_pendu/pendu" + nb_erreurs + ".png";
		if(nb_erreurs == 8){
			nb_passe ++;
			window.setTimeout(function attendre() { suivant(); }, 1000);
				console.log(nb_erreurs)
		}
	} 
}