import { FormEventHandler, useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [posts, setPosts] = useState<string[]>([]);

  const handSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setPosts([...posts, inputValue]); //postsの後ろに追加して更新する
    console.log("posts:", posts);
  };

  return (
    <form onSubmit={handSubmit}>
      <div className="flex gap-2">
        <input
          className="px-2 flex-1 border border-black rounded-sm"
          onChange={(e) => {
            setInputValue(e.target.value); //inputValueを入力と同時に更新
            console.log("変わった！", e.target.value); //targetはイベントが発生した要素を指し、valueはその要素の値が格納されている
            console.log(inputValue);
          }}
        />
        <button
          type="submit"
          className="text-xs px-4 py-2 bg-slate-800 text-white rounded-md" //tilewindのお勉強
        >
          送信
        </button>
      </div>
      <div>inputValue:{inputValue}</div>
      <ul className="flex flex-col gap-2">
        {posts.map((post, index) => {
          //mapは配列の要素を一つずつ取り出して、新しいコンポーネントをつくる
          return <li key={index}>{post}</li>;
        })}
      </ul>
    </form>
  );
}
