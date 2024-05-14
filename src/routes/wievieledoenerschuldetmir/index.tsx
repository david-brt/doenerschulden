import { For, createSignal } from "solid-js";
import AddBalanceCard from "~/components/AddBalanceCard";
import BalanceCard from "~/components/BalanceCard";
import "./index.css";

export default function Index() {
  const [balanceCards, setBalanceCards] = createSignal([]);

  const handleRemove = () => {
    setBalanceCards((cards) => {
      const newCards = [...cards];
      if (newCards.length === 0) return newCards;
      newCards.pop();
      return newCards;
    });
  };

  return (
    <div class="container">
      <h1>🥙-Schulden</h1>
      <For each={balanceCards()}>
        {(card: BalanceCard) => (
          <BalanceCard
            name={card.name}
            count={card.balance}
            handleRemove={handleRemove}
          ></BalanceCard>
        )}
      </For>
      <AddBalanceCard
        setBalanceCards={setBalanceCards}
        balanceCards={balanceCards}
      />
    </div>
  );
}
