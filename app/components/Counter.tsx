import { useState } from "react";

export const Counter = () => {
  let count = 1000;
  const [stateCount, setStateCount] = useState(1000); //分割代入
  // useStateは状態と、その更新関数を返す
  const handleClick = () => {
    //JSの変数を更新するだけ
    count++;
    console.log(count);
    //reactの変数を更新する
    setStateCount(stateCount + 1); //stateCountを更新したら「一番上」から再レンダリングされる
    console.log("状態statecount", stateCount);
  };

  console.log("画面更新", count, stateCount);
  return (
    <div>
      <p>変数カウント: {count}</p>
      <p>状態カウント: {stateCount}</p>
      <button
        className="bg-slate-900 text-white px-4 rounded-md"
        onClick={handleClick}
      >
        カウントアップ
      </button>
    </div>
  );
};
