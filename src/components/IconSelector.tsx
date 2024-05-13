import { useEffect, useState, forwardRef } from "react";

export const IconSelector = forwardRef((props, ref) => {
  const { onIconChange } = props;
  const [iconList, setIconList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => {
        setIconList(json.results);
      });
    console.log("get pokemon original list again");
  }, []);

  console.log("IconSelector rendered!");

  return (
    <select ref={ref} onChange={onIconChange} defaultValue="">
      <option value="" disabled>
        choose icon
      </option>
      {iconList.map((each) => {
        return (
          <option key={each.name} value={each.url}>
            {each.name}
          </option>
        );
      })}
    </select>
  );
});
