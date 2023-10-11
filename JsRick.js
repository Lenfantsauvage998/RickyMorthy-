let input = document.querySelector("#input");

const attemp = document.getElementById("attemp");
const pic = document.getElementById("pic");

const spaceInBlank = () => {
    if(input.value >'1') {
        input.value 
        return
    }else{ 
        input.value = '1'
        return
    }

}
    spaceInBlank();

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


document.getElementById("miBoton").addEventListener("click", function() {
    spaceInBlank();
});

document.getElementById("miBoton").addEventListener("click", function() {
    traerinfo(`https://rickandmortyapi.com/api/character/${input.value}`);
});