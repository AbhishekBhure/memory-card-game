import React, { useEffect, useState } from "react";
import GameDisplay from "./GameDisplay";
import arrayShuffle from "array-shuffle";

const types = ["❤", "🌝", "🕉", "💥", "👦", "🤩", "🌮", "🛺"];
const getGameData = () => {
  //get types and load the types in an new array x2(as an object)
  const gameData = [];

  const typesForGameData = [...types, ...types];

  //shuffle  the object
  let shuffledTypes = arrayShuffle(typesForGameData);

  shuffledTypes.forEach((type, index) => {
    gameData.push({
      type,
      id: index,
      open: false,
      remove: false,
    });
  });

  //return the array with the 16 cards
  return gameData;
};
const GameContainer = () => {
  const [cards, setCards] = useState(getGameData());

  const [inPlay, setInPlay] = useState([]);

  //inplay -- array of 2 cards

  const handleOnClick = (id) => () => {
    //find the card
    //set the open true or false
    const updatedCards = [...cards];

    const updatedInPlay = [...inPlay];

    updatedCards.forEach((card) => {
      if (card.id === id) {
        card.open = true;
        updatedInPlay.push(card.type);
        setInPlay(updatedInPlay);
      }
    });

    setCards(updatedCards);

    // update inplay state - 1,2
  };

  useEffect(() => {
    console.log("match time", inPlay.length);
    //inplay == length is 2?
    if (inPlay.length === 2) {
      const updatedCards = [...cards];
      //type of card1 === type of card2
      //match
      if (inPlay[0] === inPlay[1]) {
        updatedCards.forEach((card) => {
          if (card.type === inPlay[0]) {
            card.remove = true;
          }
        });
      } else {
        //no-match
        updatedCards.forEach((card) => {
          if (card.type === inPlay[0] || card.type === inPlay[1]) {
            card.open = false;
          }
        });
      }
      setCards(updatedCards);
      setInPlay([]);
    }
    //remove these cards (keep them open)
    //score increment score++
    //close the cards
    //no op
  });

  return <GameDisplay cards={cards} onClick={handleOnClick} />;
};

export default GameContainer;
