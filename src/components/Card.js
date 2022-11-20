import './Card.css';
import { useEffect, useState } from 'react';
import Images from './Images';
import ImageBack from '../data/ImageBack.jpg';
import Sound from '../data/clickSound.mp3';
import Outro from '../data/outro.mp3';

function Card({ setFinished, finished }) {
  const [firstCard, setFirstCard] = useState('');
  const [disableFlip, setDisableFlip] = useState(false);
  const [shuffledCards, setShuffledCards] = useState([]);
  const [counter, setCounter] = useState(0);
  Images.length = 10;
  const cards = [...Images, ...Images];
  const allCards = document.querySelectorAll('img');

  useEffect(() => {
    shuffle(cards);
    setShuffledCards(cards);
  }, [finished]);

  function shuffle(sorted) {
    sorted.sort(() => Math.random() - 0.5);
  }

  function playSound(node) {
    const play = document.querySelector(node);
    play.currentTime = 0;
    play.volume = 0.07;
    play.play();
  }

  function handlerClick(e) {
    playSound('.audio');
    if (disableFlip) return;
    toggle(e);
    checkMatch(e);
  }

  function toggle(node) {
    node.target.parentNode.firstChild.classList.toggle('flip');
    node.target.parentNode.lastChild.classList.toggle('flip');
  }

  function checkMatch(e) {
    if (
      firstCard &&
      e.target.parentNode.firstChild.src ===
        firstCard.target.parentNode.firstChild.src
    ) {
      setFirstCard('');
      setCounter(counter + 1);
    } else if (
      firstCard &&
      e.target.parentNode.firstChild.src !=
        firstCard.target.parentNode.firstChild.src
    ) {
      setDisableFlip(true);
      setTimeout(() => {
        toggle(e);
        toggle(firstCard);
        setFirstCard('');
        setDisableFlip(false);
      }, 700);
    } else {
      setFirstCard(e);
    }
  }

  if (counter === 10) {
    playSound('.outro');
    setCounter(0);
    setTimeout(() => {
      setFinished(true);
      allCards.forEach((card) => {
        card.classList.toggle('flip');
      });
    }, 700);
  }

  return (
    <div className="cardGame">
      <audio className="audio">
        <source src={Sound}></source>
      </audio>
      <audio className="outro">
        <source src={Outro}></source>
      </audio>
      {shuffledCards.map((img, ind) => (
        <div className="memoryCard" key={ind}>
          <img className="backFace flip" src={img}></img>
          <img
            className="frontFace"
            onClick={handlerClick}
            src={ImageBack}
          ></img>
        </div>
      ))}
    </div>
  );
}
export default Card;
