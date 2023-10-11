const input = document.querySelector("#input");
const attemp = document.getElementById("attemp");
const pic = document.getElementById("pic");


function traerinfo(api) {
    const newParagraph = document.createElement("div");
    const newParagraphPic = document.createElement("div");
    const rick = fetch(api);

    newParagraph.classList.add("newParagraph");
    newParagraphPic.classList.add("newParagraph");

    rick
        .then(response => response.json())
        .then(info => {
            const determinesex = () => {
            if (info.gender === 'Male' ){
                sexo = 'Male'
            } else {
                sexo = 'Woman' 
            }}
            determinesex(); 
            newParagraph.innerHTML = ` ${info.name} is ${sexo} and the status is ${info.status}  `;
            attemp.appendChild(newParagraph);
            newParagraphPic.innerHTML = `<img src=${info.image}></img>`;
            attemp.appendChild(newParagraphPic);
        })
        .catch(error => console.log(error));
}


function spaceInBlank() {
    const inputValues = input.value.trim();
    
    if(inputValues.includes(",")){
        let palabras = inputValues.split(",");
        for (let i = 0; i < palabras.length; i++) {
            traerinfo(`https://rickandmortyapi.com/api/character/${palabras[i]}`);
        }
    }else 
         traerinfo(`https://rickandmortyapi.com/api/character/${inputValues}`);
}


document.getElementById("miBoton").addEventListener("click", function() {
    spaceInBlank();
});

