class CreateCinema{
    constructor(numOfRows, numofColumns){
        this.numOfRows =numOfRows;
        this.numofColumns = numofColumns;
        this.tRow = document.getElementById("cinema-table").getElementsByTagName("td");
        
        this.firstarr  = new Array(this.numOfRows);
    }

    create (table){
        
        for(let i=0; i< this.firstarr.length; i++){
            this.firstarr[i] = new Array(this.numofColumns);
        }
        for (var i = 0; i < this.numOfRows; i++) {
            let row = table.insertRow();
            for (var j = 0; j < this.numofColumns; j++) {
                this.firstarr[i][j] = 0;
                let col = row.insertCell();
                
            }
        }
        console.log(this.firstarr);
        for(var i = 0; i < this.tRow.length; i++){
            this.tRow[i].classList.add('seat');
        }
        
    }
    
}

var count = 0;
const salaCinema = document.getElementById('sala');
const seatsToBeSelecteed = document.getElementById('cinema-table'); 


seatsToBeSelecteed.addEventListener("click",  (item) => {
    if (item.target.classList.contains("seat") &&
        !item.target.classList.contains("sold")
      ) {

        item.target.classList.toggle("selected");
        if(count == 0 ){

            const question = document.createElement('p');
            question.classList.add('this-question');
            const questionText = document.createTextNode('Vrei sa rezervi aceste locuri?');
            question.appendChild(questionText);
            salaCinema.appendChild(question);
            count++;
            const yesButton = document.createElement('button');
            const yesButtonText = document.createTextNode('Da');
            yesButton.appendChild(yesButtonText);
            yesButton.classList.add('yes-btn');
            yesButton.addEventListener("click", sold);
            const noButton = document.createElement('button');
            const noButtonText = document.createTextNode('Nu');
            noButton.appendChild(noButtonText);
            noButton.classList.add('no-btn');
            noButton.addEventListener('click', changedMyMind);
            console.log(item.target.tagName);
            const buttonWrapper = document.createElement('div');
            buttonWrapper.classList.add('wrapper-class');
            buttonWrapper.appendChild(yesButton);
            buttonWrapper.appendChild(noButton);
            salaCinema.appendChild(buttonWrapper);
        
      }
      updatePrice();
    }
});

const sold = () =>{

    for(var i = 0; i < cinema.tRow.length; i++){
        if(cinema.tRow[i].classList.contains('selected')){
            cinema.tRow[i].classList.toggle("sold");
            cinema.tRow[i].classList.remove("selected");
        }
        
    }
    count = 0;
    document.querySelector('.wrapper-class').remove();
    document.querySelector('.this-question').remove();
    document.getElementById('count').textContent = '0';
    document.getElementById('total').textContent = '0';
    updateMatrix();
    
}
const changedMyMind = () =>
{
    for(var i = 0; i < cinema.tRow.length; i++){
        if(cinema.tRow[i].classList.contains('selected')){
            cinema.tRow[i].classList.remove("selected");
        }
        
    }
    
    count = 0;
    document.querySelector('.wrapper-class').remove();
    document.querySelector('.this-question').remove();
    document.getElementById('count').textContent = '0';
    document.getElementById('total').textContent = '0';
}

const cinema = new CreateCinema(10,15);
cinema.create(document.getElementById('cinema-table'));

let salaInitiala = document.querySelector('#movie').value;
const schimbaSala = () =>{
    
    let salaNoua = document.querySelector('#movie').value;

    if (salaInitiala != salaNoua){
        for(var i = 0; i < cinema.tRow.length; i++){
            if(cinema.tRow[i].classList.contains('selected') || cinema.tRow[i].classList.contains('sold')){
                cinema.tRow[i].classList.remove("selected");
                cinema.tRow[i].classList.remove("sold");
            }
        }
        count = 0;
        salaInitiala = salaNoua
    }
    document.querySelector('.wrapper-class').remove();
    document.querySelector('.this-question').remove();
    document.getElementById('count').textContent = '0';
    document.getElementById('total').textContent = '0';

}
const salaNoua = document.getElementById('sala-noua');
salaNoua.addEventListener('click', schimbaSala);
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

const updatePrice = () =>{
    let count = 0
    for(var i = 0; i < cinema.tRow.length; i++){
        if(cinema.tRow[i].classList.contains('selected')){
            count++;
        }
    }
    let total  = ticketPrice*count;
    document.getElementById('count').textContent = count;
    document.getElementById('total').textContent = total;
}

const updateMatrix = () =>{
    for (var i = 0; i < cinema.numOfRows; i++) {
        for (var j = 0; j < cinema.numofColumns; j++) {
                if(cinema.tRow[j + cinema.numofColumns*i].classList.contains('sold')){
                    cinema.firstarr[i][j] = 1;
                } 
        }
    }
    console.log(cinema.firstarr);
}




