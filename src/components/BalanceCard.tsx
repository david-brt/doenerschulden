import { createSignal } from "solid-js";
import Counter from "./Counter";

export default function BalanceCard({ name, count }: any) {
  const [balance, setBalance] = createSignal(count);

  return (
    <span class="container">
      {name()} schuldet mir noch
      <Counter setCount={setBalance} count={balance}></Counter>
      Döner.
    </span>
  );
}
