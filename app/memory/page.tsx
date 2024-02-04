"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { cardImages } from "./components/cardImages";
import Image, { StaticImageData } from "next/image";

type CARD = {
  alt: string;
  src: StaticImageData;
  matched: boolean;
};

const Memory = () => {
  const [cards, setCards] = useState<CARD[]>([]);
  const [firstCard, setFirstCard] = useState<CARD | null>(null);
  const [secondCard, setSecondCard] = useState<CARD | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);
  const [reveal, setReveal] = useState<boolean>(false);

  const shuffleCards = () => {
    const shuffledCards: CARD[] = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  };

  const handleCardClick = (card: CARD) => {
    if (!disabled) {
      firstCard ? setSecondCard(card) : setFirstCard(card);
    }
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.src === secondCard.src) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.src === firstCard.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setWrong(true);
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstCard, secondCard]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
    setWrong(false);
  };

  const revealButton = () => {
    reveal ? setReveal(false) : setReveal(true);
  };

  return (
    <main className="flex flex-col items-center pt-24">
      <text className="text-2xl font-bold text-center pb-5">Memory Game</text>
      <div className="flex gap-4">
        <Button className="mb-10" onClick={shuffleCards}>
          Shuffle Cards
        </Button>
        <Button className="mb-10" onClick={revealButton}>
          {reveal ? "Hide Cards" : "Reveal all cards"}
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {cards.map((card, index) => {
          const flipped =
            card === firstCard || card === secondCard || card.matched;
          return (
            <div key={index}>
              {flipped || reveal ? (
                <button
                  className={`text-center w-32 h-32 border border-black rounded ${
                    card.matched
                      ? "border border-green-400"
                      : wrong
                      ? " border border-red-400"
                      : "bg-neutral-700"
                  }`}
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={120}
                    height={120}
                  />
                </button>
              ) : (
                <button
                  onClick={() => handleCardClick(card)}
                  className="text-center w-32 h-32 border border-black rounded bg-neutral-800"
                />
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Memory;
