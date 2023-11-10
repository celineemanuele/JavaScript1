
function creatabellone(){
    let Tabellone = document.querySelector("#tabellone")
    for( let i= 1; i <= 76 ; i++){
        let celleTabellone = document.createElement("div")
        celleTabellone.innerText = [i]
        Tabellone.appendChild(celleTabellone)
        celleTabellone.className ="celleTabellone"
        //console.log(celleTabellone);
    }
}
creatabellone()


function estraiNumero(){
  let button = document.querySelector('#button')
  button.addEventListener ('click', () => {
 let numeroEstratto = (Math.ceil(Math.random()*76))
    console.log(numeroEstratto);
    let numeriSelezionati = document.querySelectorAll('#tabellone div')
    numeriSelezionati.forEach(cella => {
        numeriSelezionati[numeroEstratto-1].style.backgroundColor ="red";
    })
})
}
estraiNumero();

