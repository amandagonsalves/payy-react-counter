import { useCallback, useState } from 'react';
import logo from './assets/images/payy.svg';
import './App.css';

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);
  const [action, setAction] = useState<'increment' | 'decrement'>('increment');

  const setCounterState = useCallback(
    (isIncrement: boolean) => {
      setAction(isIncrement ? 'increment' : 'decrement');

      setCount((previous) => {
        const newValue = isIncrement ? previous + amount : previous - amount;

        return Math.max(0, newValue);
      });
    },
    [amount],
  );

  return (
    <>
      <div className="text-xs">
        <div className="mb-5">
          <img src={logo} alt="logo" />
        </div>

        <div className="sm:max-w-3xs m-auto mt-20">
          <h1 className="text-8xl overflow-hidden text-ellipsis">{count}</h1>

          <div className="flex justify-between items-center gap-3 mb-3">
            <button
              className="cursor-pointer text-white flex-1 p-3 bg-secondary rounded-lg hover:bg-secondary-dark"
              onClick={() => setCounterState(true)}
              disabled={amount <= 0}
            >
              Increment
            </button>

            <button
              className="cursor-pointer text-white flex-1 p-3 bg-secondary rounded-lg hover:bg-secondary-dark"
              onClick={() => setCounterState(false)}
              disabled={count === 0 || amount <= 0}
            >
              Decrement
            </button>
          </div>

          <div className="flex items-center px-3 justify-between border border-black/22 bg-black/5 rounded-lg">
            <input
              min={0}
              value={amount}
              type="number"
              placeholder="Enter a number"
              className="py-2 text-black/50 border-none appearance-none focus:outline-none no-spinner"
              onChange={(event) => setAmount(parseInt(event.target.value))}
            />
            <span className="text-black/42 font-medium">{action} by</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Counter;
