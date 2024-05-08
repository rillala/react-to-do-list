import Button from "../components/Button";
import IconSelector from "../components/IconSelector";
import TopicInput from "../components/TopicInput";
import TextareaInput from "../components/TextareaInput";
import "./topCss.css";

export default function TopArea() {
  return (
    <>
      <section className="top">
        <div className="inputGroup">
          <IconSelector></IconSelector>
          <div className="inputBox">
            <TopicInput></TopicInput>
            <TextareaInput></TextareaInput>
          </div>
        </div>
        <div className="btns">
          <Button text={"Set as A"} onClick={() => console.log("clicked A")} />
          <Button text={"Set as B"} onClick={() => console.log("clicked B")} />
          <Button text={"Set as C"} onClick={() => console.log("clicked C")} />
        </div>
      </section>
    </>
  );
}
