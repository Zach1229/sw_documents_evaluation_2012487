const formCle = document.getElementById('formCle');
const formUtilisateur = document.getElementById('formUtilisateur');
const cleApiContainer = document.getElementById('cleApiContainer');
const cleApiElement = document.getElementById('cleApi');


formUtilisateur.addEventListener('submit', async (e) => {
    e.preventDefault();

    const mdp = document.getElementById('nouveauMDP').value;
    const email = document.getElementById('nouveauEmail').value;
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;


    if(nouvelleCle == true) {
        nouvelleCle = "oui";
    }

    try {
    const response = await fetch('http://localhost:3000/utilisateur', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            prenom: prenom,
            nom: nom,
            courriel: email,
            mot_de_passe: mdp
            })
        });

        const data = await response.json();

        if (response.ok && data.cle_api) {
          cleApiElement.textContent = data.message + " - Clé API : " + data.cle_api;
        }

      } catch (err) {
        cleApiElement.textContent = "Erreur lors de la requête.";
      }
    });

formCle.addEventListener('submit', async (e) => {
    e.preventDefault();

    const mdp = document.getElementById('mdp').value;
    const email = document.getElementById('email').value;
    const nouvelleCle = document.getElementById('nouvelleCle').value;

    try {
    const response = await fetch('http://localhost:3000/utilisateur/cle', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            courriel: email, 
            mot_de_passe: mdp, 
            nouvelle_cle: nouvelleCle 
            })
        });

        const data = await response.json();

        if (response.ok && data.cle_api) {
          cleApiElement.textContent = data.cle_api;
        } else {
          cleApiElement.textContent = "Erreur : Impossible de récupérer la clé API.";
        }

      } catch (err) {
        cleApiElement.textContent = "Erreur lors de la requête.";
      }
    });