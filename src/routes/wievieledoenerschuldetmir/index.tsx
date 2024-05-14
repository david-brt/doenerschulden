import { For, createSignal } from "solid-js";
import AddBalanceCard from "~/components/AddBalanceCard";
import BalanceCard from "~/components/BalanceCard";

export default function Index() {
  const [balanceCards, setBalanceCards] = createSignal([]);
  return (
    <>
      <For each={balanceCards()}>
        {(card: BalanceCard) => (
          <BalanceCard name={card.name} count={card.balance}></BalanceCard>
        )}
      </For>
      <AddBalanceCard setBalanceCards={setBalanceCards} />
    </>
  );
}
