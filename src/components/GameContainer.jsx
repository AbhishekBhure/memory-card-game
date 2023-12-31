import React, { useEffect, useState } from "react";
import GameDisplay from "./GameDisplay";
import arrayShuffle from "array-shuffle";
import useSound from "use-sound";
import cardFlipSound from "../sounds/cardFilp.wav";
import resetSound from "../sounds/reset.wav";
import scoreSound from "../sounds/score.wav";

const types = ["❤", "🌝", "🚀", "💥", "👦", "🤩", "🌮", "🛺"];
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
  const [matching, setMatching] = useState(false);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [playFlipSound] = useSound(cardFlipSound);
  const [playResetSound] = useSound(resetSound);
  const [playScoreSound] = useSound(scoreSound);

  //inplay -- array of 2 cards

  const handleOnClick = (id) => () => {
    if (!matching) {
      //find the card
      //set the open true or false
      const updatedCards = [...cards];

      const updatedInPlay = [...inPlay];

      updatedCards.forEach((card) => {
        if (card.id === id) {
          card.open = true;
          playFlipSound();
          updatedInPlay.push(card.type);
          setInPlay(updatedInPlay);
        }
      });

      setCards(updatedCards);
      // update inplay state - 1,2
    }
  };

  const handleReset = () => {
    setScore(0);
    setMoves(0);
    const resetCards = cards.map((card) => ({
      ...card,
      open: false,
      remove: false,
    }));
    playResetSound();
    setCards(resetCards);
    setTimeout(() => {
      setCards(getGameData);
    }, 1000);
  };

  useEffect(() => {
    //inplay == length is 2?
    if (inPlay.length === 2 && !matching) {
      setMoves(moves + 1);
      setMatching(true);
      const updatedCards = [...cards];
      //type of card1 === type of card2
      //match
      if (inPlay[0] === inPlay[1]) {
        updatedCards.forEach((card) => {
          if (card.type === inPlay[0]) {
            card.remove = true;
            playScoreSound();
          }
        });
        setCards(updatedCards);
        setMatching(false);
        setScore(score + 1);
        setInPlay([]);
      } else {
        //no-match
        setTimeout(() => {
          updatedCards.forEach((card) => {
            if (card.type === inPlay[0] || card.type === inPlay[1]) {
              card.open = false;
            }
          });
          setCards(updatedCards);
          setMatching(false);
          setInPlay([]);
        }, 1000);
      }
    }
    //remove these cards (keep them open)
    //score increment score++
    //close the cards
    //no op
  });

  return (
    <GameDisplay
      cards={cards}
      onClick={handleOnClick}
      onReset={handleReset}
      score={score}
      moves={moves}
    />
  );
};

export default GameContainer;
