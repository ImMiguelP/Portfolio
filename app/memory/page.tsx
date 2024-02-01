"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { set } from "sanity";

type CARD = {
  kind: string;
  value: string;
  id: number;
  matched: boolean;
};

const cardsInfo: CARD[] = [
  {
    kind: "string",
    value: "Duck",
    id: 0,
    matched: false,
  },
  { kind: "image", value: "duck", id: 0, matched: false },
  { kind: "image", value: "bee", id: 0, matched: false },
  { kind: "string", value: "Bee", id: 0, matched: false },
];

const Memory = () => {
  const [cards, setCards] = useState<CARD[]>([]);
  const [firstCard, setFirstCard] = useState<CARD | null>(null);
  const [secondCard, setSecondCard] = useState<CARD | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  const shuffleCards = () => {
    const shuffledCards = cardsInfo
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
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [firstCard, secondCard]);

  console.log(cards);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  return (
    <main className="flex flex-col items-center p-24">
      <text className="text-2xl font-bold text-center pb-5">
        Synthesis Match
      </text>
      <Button className="mb-10" onClick={shuffleCards}>
        Shuffle Cards
      </Button>
      <div className="grid grid-cols-2 gap-6">
        {cards.map((card) => {
          const flipped =
            card === firstCard || card === secondCard || card.matched;
          return (
            <div key={card.id}>
              {flipped ? (
                <button
                  className={`text-center w-32 h-32 border border-black rounded ${
                    card.matched ? "bg-green-600/40" : "bg-neutral-700"
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
