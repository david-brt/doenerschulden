import { createSignal } from "solid-js";
import Counter from "./Counter";

export default function BalanceCard(props: any) {
  const [balance, setBalance] = createSignal(props.count);

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
