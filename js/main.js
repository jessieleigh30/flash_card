document.addEventListener('DOMContentLoaded', () => {

  
  let overlay = document.querySelector('.overlay');
  //add new card button
  let addCard = document.querySelector('.add-card');
  let closeMenu = document.querySelector('.close-menu');

  //front card
  let frontCard = document.querySelector('#frontcard');
  //back card
  let backCard = document.querySelector('#backcard');
  let cardForm = document.querySelector('.new-card-form');

  let userFrontCard;
  let userBackCard;


  addCard.addEventListener('click', () => {
    overlay.style.display = "flex";
    closeMenu.addEventListener('click', () => {
      overlay.style.display = "none";
    });
  });
  cardForm.addEventListener('submit', (event) => {
    event.preventDefault();
    //console.log("this works");
    // userFrontCard = frontCard.value;
    // userBackCard = backCard.value;
    // console.log(frontCard.value);
    // console.log(backCard.value);
    // console.log(userFrontCard, userBackCard)
    //push this card to an array
    // let card = {
    //   front: frontCard.value,
    //   back: backCard.value,
    // }
    // cardArray.push(card);
    // frontCard.innerHTML = "";
    // console.log(cardArray);
    // displayCards();

    // //function to display cards
    // function displayCards() {
    //   cardContainer.innerHTML = "";
    // }

  });
});