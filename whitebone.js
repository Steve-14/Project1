

//const myHeaders = new Headers();
//myHeaders.append("Accept", "application/json");


//const requestOptions = {
 // method: "GET",
  //headers: myHeaders,
  //redirect: "follow"
//};


//fetch("https://www.dnd5eapi.co/api/conditions/blinded", requestOptions)
  //.then((response) => response.text())
  //.then((result) => console.log(result))
//.catch((error) => console.error(error));
  
//set up change images and dots
// also set automatic change using setInterval

var img = document.querySelectorAll(".pictures img");
var dots = document.querySelectorAll(".dot");
var currentImg = 0; // index of the first image 
const interval = 2000; // duration(speed) of the change

function changeSlide(n) {
  for (var i = 0; i < img.length; i++) {
    img[i].style.opacity = 0; //hides the image
    dots[i].className = dots[i].className.replace (' active','');
  }

  // currentImg = (currentImg + 1) % img.length; // update the index number
  // if (n != undefined) {
  //   clearInterval(timer);
  //   timer = setInterval(changeSlide, interval);
  //   currentImg = n
  //}
    currentImg = n
    img[currentImg].style.opacity = 1;  //makes image visable
    dots[currentImg].className += ' active';
}
//setInterval(changeSlide(img), 3000);


function adreqs(){
 let stuff = document.createElement("p") ;
stuff = innerText="All you need to play is dice pens and rule sheet";
document.body.append(stuff)
}

 


function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");


    const values = [];

    const images = [];

    for(let i = 0 ; i < numOfDice; i++){
        const value = Math.floor(Math.random() *6 ) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png">`)
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
