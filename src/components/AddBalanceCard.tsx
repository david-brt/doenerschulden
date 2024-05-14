import { createSignal } from "solid-js";
import Counter from "./Counter";
import "./BalanceCard.css";

export default function AddBalanceCard(props: any) {
  const [name, setName] = createSignal("");
  const [count, setCount] = createSignal(1);

  const handleInput = (e: InputEvent, value: string) => {
    e.preventDefault();
    e.stopPropagation();
    setName(value);
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const nameVal = name();
    if (nameVal.length < 2) return;
    props.setBalanceCards((cards: BalanceCard[]) => {
      const countVal = count();
      let duplicate = false;
      const res = cards.map((card) => {
        if (card.name.toLowerCase() === nameVal.toLowerCase()) {
          duplicate = true;
          return { ...card, balance: card.balance + countVal };
        }
        return card;
      });
      if (!duplicate) {
        res.push({ name: nameVal, balance: countVal });
      }
      return res;
    });
    setCount(1);
    setName("");
  };

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
          <span>
            schuldet mir {props.balanceCards().length !== 0 && "auch"} noch
          </span>
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
