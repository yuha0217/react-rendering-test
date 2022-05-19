import "./styles.css";
import { useCallback, useEffect, useState } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  console.log("App Start");

  const [count, setCount] = useState(0);
  const [displayFlg, setDisplayFlg] = useState(false);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const countUp = () => setCount(count + 1);
  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(true);
  const onClickClose = useCallback(() => setOpen(false), []);

  useEffect(() => {
    console.log("setDisplayFlg");
    if (count % 2 === 0) {
      displayFlg || setDisplayFlg(true);
    } else {
      displayFlg && setDisplayFlg(false);
    }
  }, []);

  return (
    <div className="App">
      <button onClick={countUp}>カウントアップ</button>
      <br />
      {count}
      {displayFlg ? "!!" : null}
      <br />
      <br />
      <input value={text} onChange={onChangeText}></input>
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
