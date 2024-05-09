import { useState, useRef, useEffect } from "react";

export default function InfoInput({ inputInfo, onInfoChange }) {
  // const [inputInfo, setInputInfo] = useState("");
  // const input = useRef("");

  // const handleChange = (e) => {
  //   input.current = e.target.value;
  //   setInputInfo(input.current);
  // };

  // useEffect(() => {
  //   console.log(inputInfo);
  // }, [inputInfo]);

  return (
    <>
      <textarea
        placeholder="for information"
        value={inputInfo}
        onChange={onInfoChange}
      />
    </>
  );
}
