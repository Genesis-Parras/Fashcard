import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import NotFound from "./NotFound";
import DeckList from "./Deck/DeckList";
import ViewDeck from "./Deck/ViewDeck";
import CreateDeck from "./Deck/CreateDeck";

function Layout() {
  const [decks, setDecks] = useState([]);
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/decks/new">
            <CreateDeck decks={decks} setDecks={setDecks}/>
          </Route>

          <Route path="/decks/:deckId">
            <ViewDeck decks={decks} setDecks={setDecks}/>
          </Route>

          <Route exact path="/">
            <DeckList decks={decks} setDecks={setDecks}/>
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
