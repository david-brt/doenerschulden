import { Accessor, type Setter } from "solid-js";
import "./Counter.css";

type Props = {
  setCount: Setter<number>;
  count: Accessor<number>;
};

export default function Counter({ setCount, count }: Props) {
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };
  return (
    <span class="counter-container">
      <button type="button" class="increment" onClick={() => decrement()}>
        -
      </button>
      {count()}
      <button type="button" class="increment" onClick={() => increment()}>
        +
      </button>
    </span>
  );
}
