//change state of toggle on mouseclick to activate dark or light mode
const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
  toggle.onclick = function(){
    toggle.classList.toggle("active")
    body.classList.toggle("active")
  }



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

  
    currentImg = n
    img[currentImg].style.opacity = 1;  //makes image visable
    dots[currentImg].className += ' active';
}
//setInterval(changeSlide(img), 3000);


function adreqs(){    // prints stuff in <p> when button is clicked
  let stuff = document.createElement("p") ;
  stuff = innerText="All you need to play is 6 6 sided dice, pen & paper and a rule sheet";
  document.body.append(stuff);
}


//Sets up  a dice roller - allows up to 4d6 to be rolled  & displays dice image
function rollDice(){

    const numOfDice = document.getElementById("numOfDice").value; //numbr of die to roll
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");


    const values = [];

    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() *6 ) + 1;
        values.push(value);
        images.push(`<img src="/img/${value}.png">`)
    }

    diceResult.textContent = `dice; ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}


/* Using axios and fetch to get data from an API. User enters name of monster into text box and info regarding input is displayed
    User is warned if input cannot be matched */
    
    

    const monsterInput = document.getElementById("monsterInput");
    const searchButton = document.getElementById("searchButton");
    const monsterResult = document.getElementById("monsterResult");
    
    searchButton.addEventListener("click", () => {
      const monsterName = monsterInput.value.toLowerCase();
      if (monsterName) {
        searchMonster(monsterName);
      } else {
        monsterResult.innerHTML = "Please enter a monster name.";
      }
    });

    function searchMonster(monsterName) {
      monsterResult.innerHTML = "Searching...";
  
      axios
      .get(`https://www.dnd5eapi.co/api/monsters`)
      .then((response) => {
              const monsters = response.data.results;
              const matchedMonster = monsters.find(
                  (monster) => monster.name.toLowerCase() === monsterName
              );
  
      if (matchedMonster) {
          axios
          .get(`https://www.dnd5eapi.co${matchedMonster.url}`)
          .then((monsterResponse) => {
            const monsterData = monsterResponse.data;
            monsterResult.innerHTML = `
              <h2>${monsterData.name}</h2>
              <p><strong>Index:</strong> ${monsterData.index}</p>
              <!-- You can display more monster details here -->
              <p><strong>Size:</strong> ${monsterData.size}</p>
              <p><strong>Hit Points:</strong> ${monsterData.hit_points}</p>
              <p><strong>Type:</strong> ${monsterData.type}</p>
            `;
          })
          .catch((error) => {
            monsterResult.innerHTML = "Error fetching monster details.";
          });
      } else {
        monsterResult.innerHTML = "Monster not found.";
      }
    })
    .catch((error) => {
      monsterResult.innerHTML = "Error fetching monsters.";
    });
}
