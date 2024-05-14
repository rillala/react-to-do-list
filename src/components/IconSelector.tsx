import { useEffect, useState, forwardRef, memo, useMemo } from "react";

const IconSelector = forwardRef((props, ref) => {
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

  // 如果想要 options 不每次都重新渲染, 要包在 useMemo 裡面
  const options = useMemo(() => {
    console.log("Mapping iconList to options");

    return iconList.map((each) => (
      <option key={each.name} value={each.url}>
        {each.name}
      </option>
    ));
  }, [iconList]);

  return (
    <select ref={ref} onChange={onIconChange} defaultValue="">
      <option value="" disabled>
        choose icon
      </option>
      {options}
    </select>
  );
});

export default memo(IconSelector);
