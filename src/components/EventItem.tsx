import "./bottomCss.css";
import { useLayoutEffect, useState, Suspense } from "react";

interface Item {
  id: number;
  type: number;
  topic: string;
  info: string;
  icon: string;
  isEdit: boolean;
}

interface ItemProps {
  item: Item;
  onDelete: () => void;
  toggleEdit: () => void;
  onInfoEdit: () => void;
}

export default function EventItem({
  item,
  onDelete,
  toggleEdit,
  onInfoEdit,
}: ItemProps) {
  const [iconUrl, setIconUrl] = useState();

  useLayoutEffect(() => {
    fetch(item.icon)
      .then((res) => res.json())
      .then((json) => {
        setIconUrl(json);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [item.icon]);

  return (
    <>
      <div className="eventItem">
        <div>
          {iconUrl && (
            <img src={iconUrl.sprites.front_default} alt={item.topic} />
          )}
        </div>
        <p>{item.topic}</p>
        {item.isEdit ? (
          <input
            type="text"
            value={item.info}
            onChange={(e) => onInfoEdit(e, item.id)}
          />
        ) : (
          <p>{item.info}</p>
        )}

        <button onClick={() => toggleEdit(item.id)}>
          {item.isEdit ? "submit" : "edit"}
        </button>
        <button onClick={() => onDelete(item.id)}>delete</button>
      </div>
    </>
  );
}
