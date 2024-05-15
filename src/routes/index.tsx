import { For, createEffect, createSignal } from "solid-js";
import AddBalanceCard from "~/components/AddBalanceCard";
import BalanceCard from "~/components/BalanceCard";
import "./index.css";

export default function Index() {
  const [balanceCards, setBalanceCards] = createSignal([]);

  createEffect(() => {
    const cardsString = localStorage.getItem("cards");
    if (!cardsString || cardsString.length === 0) return;
    const cards = JSON.parse(cardsString);
    setBalanceCards(cards);
  });

  createEffect(() => {
    let cards = balanceCards();
    if (cards.length === 0) {
      const storedCardsString = localStorage.getItem("cards");
      if (storedCardsString === null) return;
      const storedCards = JSON.parse(storedCardsString);
      console.log(storedCards);
      if (storedCards.length === 1) {
        localStorage.removeItem("cards");
      }
      return;
    }
    localStorage.setItem("cards", JSON.stringify(balanceCards()));
  });

  const handleRemove = (name: string) => {
    setBalanceCards((cards) => {
      return cards.filter((card: BalanceCard) => card.name !== name);
    });
  };

  return (
    <div class="container">
      <h1>🥙-Schulden</h1>
      {balanceCards().length ? (
        <For each={balanceCards()}>
          {(card: BalanceCard) => (
            <BalanceCard
              name={card.name}
              count={card.balance}
              setCards={setBalanceCards}
              handleRemove={handleRemove}
            ></BalanceCard>
          )}
        </For>
      ) : null}
      <AddBalanceCard
        setBalanceCards={setBalanceCards}
        balanceCards={balanceCards}
      />
    </div>
  );
}
