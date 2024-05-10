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

  /*如果您的目標是在畫面第一次渲染之前就取得圖片，實際上即使使用 useLayoutEffect 來觸發 fetch，也無法保證網路請求返回的數據會在第一次畫面渲染之前到達。fetch 是異步的，而 useLayoutEffect 執行時，畫面的 HTML 已經準備就緒但尚未進行畫面更新（paint）。因此，圖片的實際加載（從網絡請求到數據返回並處理）仍然是在畫面首次渲染後。 */

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
