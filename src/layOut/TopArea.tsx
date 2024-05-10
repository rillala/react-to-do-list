import Button from "../components/Button";
import IconSelector from "../components/IconSelector";
import "./topCss.css";
import { useCallback, useState } from "react";

export default function TopArea({
  inputInfo,
  onInfoChange,
  onTopicChange,
  inputIcon,
  onIconChange,
  onEventSubmit,
}) {
  // 更新事件標題 (Topic)
  // const [inputTopic, setInputTopic] = useState("");

  // 如果不給依賴, 就會無法執行第二次, 但如果給了依賴, 就會每次輸入都重新渲染 Button
  const submitTypeA = useCallback(() => {
    onEventSubmit(0);
  }, [onIconChange]);

  const submitTypeB = useCallback(() => {
    onEventSubmit(1);
  }, [onIconChange]);

  const submitTypeC = useCallback(() => {
    onEventSubmit(2);
  }, [onIconChange]);

  return (
    <>
      <section className="top">
        <div className="inputGroup">
          <IconSelector
            inputIcon={inputIcon}
            onIconChange={onIconChange}
          ></IconSelector>
          <div className="inputBox">
            <input
              type="text"
              placeholder="for topic"
              // value={inputTopic}
              onChange={onTopicChange}
            />
            <textarea
              placeholder="for information"
              value={inputInfo}
              onChange={onInfoChange}
            />
          </div>
        </div>
        <div className="btns">
          <Button text={"Set as A"} onClick={submitTypeA} />
          <Button text={"Set as B"} onClick={submitTypeB} />
          <Button text={"Set as C"} onClick={submitTypeC} />
        </div>
      </section>
    </>
  );
}
