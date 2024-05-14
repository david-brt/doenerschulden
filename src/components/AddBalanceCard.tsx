import { createEffect, createSignal } from "solid-js";
import Counter from "./Counter";
import "./BalanceCard.css";

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
    if (name().length < 2) return;
    setBalanceCards((prev: any) => [
      ...prev,
      { name: name(), balance: count() },
    ]);
    setCount(1);
    setName("");
  };

  createEffect(() => count());

  return (
    <div class="card-container">
      <form class="card-flex" onSubmit={(e) => handleSubmit(e)}>
        <div class="card-inner">
          <input
            autofocus
            placeholder="Name"
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
          <span>Döner!</span>
        </div>
        <button type="submit" class="submit-button">
          &check;
        </button>
      </form>
    </div>
  );
}
