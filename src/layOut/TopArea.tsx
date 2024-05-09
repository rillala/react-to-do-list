import Button from "../components/Button";
import IconSelector from "../components/IconSelector";
import "./topCss.css";

export default function TopArea({
  inputInfo,
  onInfoChange,
  inputTopic,
  onTopicChange,
  inputIcon,
  onIconChange,
  onEventSubmit,
}) {
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
              value={inputTopic}
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
          <Button text={"Set as A"} onClick={() => onEventSubmit(0)} />
          <Button text={"Set as B"} onClick={() => onEventSubmit(1)} />
          <Button text={"Set as C"} onClick={() => onEventSubmit(2)} />
        </div>
      </section>
    </>
  );
}
