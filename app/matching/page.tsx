"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type CardSet = {
  kind: string;
  value: string;
};

const matchSets = [
  [
    { kind: "string", value: "Duck" },
    { kind: "image", value: "duckImg" },
  ],
  [
    { kind: "string", value: "Bee" },
    { kind: "image", value: "beeImg" },
  ],
  [
    { kind: "string", value: "Monkey" },
    { kind: "image", value: "monkeyImg" },
  ],
  [
    { kind: "string", value: "Lion" },
    { kind: "image", value: "lionImg" },
  ],
];

const shuffleSets = (sets: CardSet[][]) => {
  const col1 = sets.map((set) => set[0]).sort(() => Math.random() - 0.5);
  const col2 = sets.map((set) => set[1]).sort(() => Math.random() - 0.5);

  return [col1, col2];
};

const Matching = () => {
  const [firstCard, setFirstCard] = useState<CardSet | null>(null);
  const [secondCard, setSecondCard] = useState<CardSet | null>(null);
  const [cards, setCards] = useState<CardSet[][]>([]);
  const [totalSets, setTotalSets] = useState<CardSet[][]>([]);

  useEffect(() => {
    setCards(shuffleSets(matchSets));
  }, []);

  const handleCardClick = (card: CardSet) => {
    if (!firstCard || card.kind === firstCard.kind) {
      setFirstCard(card);
    } else if (!secondCard) {
      setSecondCard(card);
    }
  };

  const resetChoices = (card: CardSet) => {
    if (firstCard && secondCard) {
      setTotalSets([...totalSets, [firstCard, secondCard]]);
      setFirstCard(null);
      setSecondCard(null);
      handleCardClick(card);
    }

    setFirstCard(null);
    setSecondCard(null);
  };

  return (
    <main className="flex flex-col pt-24">
      <div className="flex justify-center gap-12 ">
        {cards.map((set, i) => (
          <div key={i} className="flex flex-col gap-6">
            {set.map((card, i) => {
              const isDisabled = totalSets.some((set) => set.includes(card));

              return (
                <button
                  disabled={isDisabled}
                  key={i}
                  className={cn(
                    "w-32 h-32 bg-neutral-800 rounded-md flex items-center justify-center",
                    firstCard?.value === card.value
                      ? "border border-yellow-50"
                      : secondCard?.value === card.value
                      ? "border border-blue-500"
                      : "",
                    isDisabled && "opacity-40"
                  )}
                  onClick={() =>
                    firstCard && secondCard
                      ? resetChoices(card)
                      : handleCardClick(card)
                  }
                >
                  {card.kind === "string" ? (
                    <p>{card.value}</p>
                  ) : (
                    <img src={`/${card.value}.svg`} alt={card.value} />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <Button className="mt-10">Submit</Button>
    </main>
  );
};

export default Matching;
[];
