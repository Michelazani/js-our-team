/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede, potete usare come esempio lo screenshot,  ma anche realizzare qualcosa di creativo!!!
Consigli del giorno:
Ragioniamo come sempre a step. Prima la logica in italiano e poi traduciamo in codice.*/


// creazione array con dentro oggetti

const teamMembers = [

    {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    profilePicture: "img/wayne-barnett-founder-ceo.jpg"
    },

    {
    name: "Angela Caroll",
    role: "Chief Editor",
    profilePicture: "img/angela-caroll-chief-editor.jpg"
    },

    {
    name: "Walter Gordon",
    role: "Office Manager",
    profilePicture: "img/walter-gordon-office-manager.jpg"
    },

    {
    name: "Angela Lopez",
    role: "Social Media Manager",
    profilePicture: "img/angela-lopez-social-media-manager.jpg"
    },

    {
    name: "Scott Estrada",
    role: "Developer",
    profilePicture: "img/scott-estrada-developer.jpg"
    },

    {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    profilePicture: "img/barbara-ramos-graphic-designer.jpg"
    }
];

console.log(teamMembers)

// creo padre
const containerElement= document.getElementById('team');

// ciclo per ogni oggetto (membro) dell'array
for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log(member)

    // creo article
    const createArticle = document.createElement ('article');
    
    // vado a inserire direttamente nell'html
    createArticle.innerHTML = 
    `
        <img src="${member.profilePicture}" alt="profile pictures member">
            <h3>
                ${member.name}
            </h3>
            <p>
                ${member.role}
            </p> 
    `

    containerElement.appendChild(createArticle);
}