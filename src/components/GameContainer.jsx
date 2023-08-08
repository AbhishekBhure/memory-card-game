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

  const handleOnClick = (id) => () => {
    //find the card
    //set the open true or false
    const updatedCards = [...cards];

    updatedCards.forEach((card) => {
      if (card.id === id) {
        card.open = true;
      }
    });

    setCards(updatedCards);
  };
  return <GameDisplay cards={cards} onClick={handleOnClick} />;
};

export default GameContainer;
