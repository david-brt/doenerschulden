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
    <span class="card-container">
      <div class="card-flex">
        <span class="card-inner">
          <div class="card-name">{props.name}:</div>
          <Counter setCount={setBalance} count={balance}></Counter>
          Döner
        </span>
        <button
          type="button"
          onClick={props.handleRemove}
          class="submit-button"
        >
          ❌
        </button>
      </div>
    </span>
  );
}
