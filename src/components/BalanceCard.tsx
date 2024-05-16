import { createEffect, createSignal } from "solid-js";
import Counter from "./Counter";

export default function BalanceCard(props: any) {
  const [balance, setBalance] = createSignal(props.count);

  createEffect(() => {
    props.setCards((cards: BalanceCard[]) => {
      const name = props.name;
      cards.forEach((card) => {
        if (card.name !== name) return;
        card.balance = balance();
        return;
      });
      return [...cards];
    });
  });

  return (
    <div class="card-container">
      <div class="card-name">{props.name}:</div>
      <Counter setCount={setBalance} count={balance}></Counter>
      <span>Döner</span>
      <button
        type="button"
        onClick={() => props.handleRemove(props.name)}
        class="submit-button"
      >
        <span>❌</span>
      </button>
    </div>
  );
}
