import Button from "../components/Button";
import IconSelector from "../components/IconSelector";
import "./topCss.css";
import { useCallback, useRef, forwardRef, useImperativeHandle } from "react";

export const TopArea = forwardRef((props, ref) => {
  const { onEventAsubmit, onEventBsubmit, onEventCsubmit } = props;

  // 用來創建新事件資料
  const newEvent = useRef(null);
  const topicInput = useRef(null);
  const iconInput = useRef(null);
  const infoInput = useRef(null);

  // 用來綁定 DOM node
  const iconInputElement = useRef(null);
  const topicInputElement = useRef(null);
  const infoInputElement = useRef(null);

  // 將 newEvent 的值暴露給父組件
  useImperativeHandle(ref, () => ({
    getNewEventData: () => {
      return newEvent.current;
    },
    updateEventData: (type) => {
      updateEvent(type);
    },
    clearAllInput: () => {
      clearAllInput();
    },
    // newEvent:newEvent.current,
  }));

  // 將輸入值寫到 ref 值上
  const handleIconChange = useCallback(
    (e) => {
      iconInput.current = e.target.value;
    },
    [iconInput.current]
  );

  function handleTopicInputChange(e) {
    topicInput.current = e.target.value;
  }
  function handleInfoChange(e) {
    infoInput.current = e.target.value;
  }

  // 創建 newEvent 的內容
  function updateEvent(type) {
    // 確認三個值是否都有輸入
    if (!iconInput.current) {
      alert("Please choose --icon-- for this event!");
    } else if (!topicInput.current) {
      alert("Need to give this event a topic!");
    } else if (!infoInput.current) {
      alert("Please describe this event!");
    } else {
      const eventId = new Date().getTime();
      return (newEvent.current = {
        id: eventId,
        type: type,
        icon: iconInput.current,
        topic: topicInput.current,
        info: infoInput.current,
        isEdit: false,
      });
    }
  }

  // 清空 input 欄位及儲存的值
  function clearAllInput() {
    iconInputElement.current.value = "";
    topicInputElement.current.value = "";
    infoInputElement.current.value = "";
    topicInput.current = "";
    iconInput.current = "";
    infoInput.current = "";
    newEvent.current = null;
    console.log("Clear all input");
  }

  return (
    <>
      <section className="top">
        <div className="inputGroup">
          <IconSelector
            ref={iconInputElement}
            onIconChange={handleIconChange}
          ></IconSelector>
          <div className="inputBox">
            <input
              type="text"
              placeholder="for topic"
              ref={topicInputElement}
              onChange={handleTopicInputChange}
            />
            <textarea
              placeholder="for information"
              ref={infoInputElement}
              onChange={handleInfoChange}
            />
          </div>
        </div>
        <div className="btns">
          <Button text={"Set as A"} onClick={onEventAsubmit} />
          <Button text={"Set as B"} onClick={onEventBsubmit} />
          <Button text={"Set as C"} onClick={onEventCsubmit} />
        </div>
      </section>
    </>
  );
});
