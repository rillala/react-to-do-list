import Fetch from "ahooks/lib/useRequest/src/Fetch";
import { useEffect, useState } from "react";

export default function IconSelector({ inputIcon, onIconChange }) {
  const [icon, setIcon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => {
        setIcon(json.results);
        console.log(json.results);
      });
  }, []);

  return (
    <select value={inputIcon} onChange={onIconChange}>
      <option value="" disabled>
        choose icon
      </option>
      {icon.map((each) => {
        return (
          <option key={each.name} value={each.url}>
            {each.name}
          </option>
        );
      })}
    </select>
  );
}
