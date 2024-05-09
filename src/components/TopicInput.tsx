import { useState, useRef, useEffect } from "react";

export default function TopicInput() {
  const [inputTopic, setInputTopic] = useState("");
  const input = useRef("");

  const handleChange = (e) => {
    input.current = e.target.value;
    setInputTopic(input.current);
  };

  useEffect(() => {
    console.log(inputTopic);
  }, [inputTopic]);

  return (
    <>
      <input
        type="text"
        placeholder="for topic"
        value={inputTopic}
        onChange={handleChange}
      />
    </>
  );
}
