let input = document.querySelector("#input");

const attemp = document.getElementById("attemp");
const pic = document.getElementById("pic");

function traerinfo(api) {
    const newParagraph = document.createElement("p");
    const newParagraphPic = document.createElement("p");
    const rick = fetch(api);

    newParagraph.classList.add("newParagraph");

    rick
        .then(response => response.json())
        .then(info => {
            newParagraph.innerHTML = `El nombre de este personaje es ${info.name} y su estado es ${info.status}  `;
            attemp.appendChild(newParagraph);
            newParagraphPic.innerHTML = `<img src=${info.image}></img>`;
            attemp.appendChild(newParagraphPic);
        })
        .catch(error => console.log(error));
}

document.getElementById("miBoton").addEventListener("click", function() {
    traerinfo(`https://rickandmortyapi.com/api/character/${input.value}`);
});