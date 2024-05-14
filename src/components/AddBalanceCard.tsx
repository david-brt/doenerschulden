import { createEffect, createSignal } from "solid-js";
import Counter from "./Counter";

export default function AddBalanceCard({ setBalanceCards }: any) {
  const [name, setName] = createSignal("");
  const [count, setCount] = createSignal(1);

  const handleInput = (e: InputEvent, value: string) => {
    e.preventDefault();
    e.stopPropagation();
    setName(value);
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (name().length < 3) return;
    setBalanceCards((prev: any) => [
      ...prev,
      { name: name(), balance: count() },
    ]);
    setCount(1);
  };

  createEffect(() => count());

  return (
    <form class="container" onSubmit={(e) => handleSubmit(e)}>
      <input
        value={name()}
        oninput={(e) => handleInput(e, e.target.value)}
        class="input"
        type="text"
        minlength={3}
        maxlength={10}
        required
      ></input>
      <span>schuldet mir auch noch</span>
      <Counter setCount={setCount} count={count}></Counter>
      <span>Döner</span>
    </form>
  );
}
