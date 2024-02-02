"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

type CARD = {
  kind: string;
  value: string;
  matched: boolean;
};

type CardSet = [CARD, CARD];

const cardSets: CardSet[] = [
  [
    { kind: "string", value: "Duck", matched: false },
    { kind: "image", value: "duck", matched: false },
  ],
  [
    { kind: "image", value: "bee", matched: false },
    { kind: "string", value: "Bee", matched: false },
  ],
];

const Memory = () => {
  const [cards, setCards] = useState<CARD[]>([]);
  const [firstCard, setFirstCard] = useState<CARD | null>(null);
  const [secondCard, setSecondCard] = useState<CARD | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);
  const [reveal, setReveal] = useState<boolean>(false);

  const shuffleCards = () => {
    const shuffleFirstCol = cardSets
      .map((set) => set[0])
      .sort(() => Math.random() - 0.5);
    const shuffleSecondCol = cardSets
      .map((set) => set[1])
      .sort(() => Math.random() - 0.5);
    const shuffledCards: CARD[] = [];
    for (let i = 0; i < cardSets.length; i++) {
      shuffledCards.push(shuffleFirstCol[i], shuffleSecondCol[i]);
    }
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
      if (
        firstCard.value.toLocaleLowerCase() ===
        secondCard.value.toLocaleLowerCase()
      ) {
        setCards((prev) => {
          return prev.map((card) => {
            if (
              card.value.toLocaleLowerCase() ===
              firstCard.value.toLocaleLowerCase()
            ) {
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
      <text className="text-2xl font-bold text-center pb-5">
        Synthesis Match
      </text>
      <div className="flex gap-4">
        <Button className="mb-10" onClick={shuffleCards}>
          Shuffle Cards
        </Button>
        <Button className="mb-10" onClick={revealButton}>
          {reveal ? "Hide Cards" : "Reveal all cards"}
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {cards.map((card, index) => {
          const flipped =
            card === firstCard || card === secondCard || card.matched;
          return (
            <div key={index}>
              {flipped || reveal ? (
                <button
                  className={`text-center w-32 h-32 border border-black rounded ${
                    card.matched
                      ? "bg-green-600/40"
                      : wrong
                      ? " bg-red-600/40"
                      : "bg-neutral-700"
                  }`}
                >
                  {card.kind === "string" ? (
                    card.value
                  ) : (
                    <img src={`/images/${card.value}.svg`} alt={card.value} />
                  )}
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
