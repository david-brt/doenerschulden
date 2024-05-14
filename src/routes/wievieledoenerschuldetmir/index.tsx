import { For, createSignal } from "solid-js";
import AddBalanceCard from "~/components/AddBalanceCard";
import BalanceCard from "~/components/BalanceCard";
import "./index.css";

export default function Index() {
  const [balanceCards, setBalanceCards] = createSignal([]);
  return (
    <div class="container">
      <h1>🥙-Schulden</h1>
      <For each={balanceCards()}>
        {(card: BalanceCard) => (
          <BalanceCard name={card.name} count={card.balance}></BalanceCard>
        )}
      </For>
      <AddBalanceCard setBalanceCards={setBalanceCards} />
    </div>
  );
}
