import React from "react";
import BreadCrumb from "../BreadCrumb";
import AddCardForm from "../Forms/AddCardForm";

export default function EditCard({
  decks,
  deck,
  setDeck,
  deckUrl,
  setDecks,
  cards,
  setCards,
}) {
  return (
    <div>
      <BreadCrumb decks={decks} />
      <h2>Edit Card</h2>
      <AddCardForm
        deck={deck}
        setDeck={setDeck}
        deckUrl={deckUrl}
        decks={decks}
        setDecks={setDecks}
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
}