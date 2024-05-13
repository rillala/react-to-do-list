import "./bottomCss.css";
import {
  useEffect,
  useState,
  Suspense,
  forwardRef,
  useRef,
  useMemo,
} from "react";
import { Box } from "@mui/system";

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
  // onInfoEdit: () => void;
  onsubmitEdit: () => void;
}

export const EventItem = forwardRef((props, ref) => {
  const { item, onDelete, toggleEdit, onsubmitEdit }: ItemProps = props;

  const [iconUrl, setIconUrl] = useState();
  const infoEditInput = useRef(null);

  // 1.將原始的 info 值提供給 infoEditInput
  useEffect(() => {
    if (item.isEdit) {
      infoEditInput.current.value = item.info;
    }
  }, [item.isEdit]);

  // 2.將輸入的 edit info 值記錄到 useRef 變數中
  const newInfoValue = useRef(null);
  function handleChange(e) {
    newInfoValue.current = e.target.value;
    console.log(newInfoValue.current);
  }

  // 3. submit 時提供最終的 edit info 值
  const editInfo = useRef({});

  const updateInfo = () => {
    editInfo.current = {
      id: item.id,
      info: newInfoValue.current,
    };
    // console.log(editInfo.current);
    onsubmitEdit(editInfo.current);
  };

  // 處理 isEdit 切換後的副作用

  // 下載 icon 圖片
  useEffect(() => {
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
        {/* icon,topic 顯示辦法 */}
        <div>
          {iconUrl && (
            <img src={iconUrl.sprites.front_default} alt={item.topic} />
          )}
        </div>

        <p>{item.topic}</p>

        {/* 編輯內容 顯示辦法 */}
        {item.isEdit ? (
          <input
            ref={infoEditInput}
            type="text"
            // onChange={(e) => onInfoEdit(e, item.id)}
            onChange={handleChange}
          />
        ) : (
          <p>{item.info}</p>
        )}

        {/* 編輯/送出 按鈕 */}
        {item.isEdit ? (
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <button onClick={updateInfo}>Submit</button>
            <button
              onClick={() => {
                toggleEdit(item.id);
              }}
            >
              Cancel
            </button>
          </Box>
        ) : (
          <button
            onClick={() => {
              toggleEdit(item.id);
            }}
          >
            Edit
          </button>
        )}

        {/* 刪除 按鈕 */}
        <button onClick={() => onDelete(item.id)}>delete</button>
      </div>
    </>
  );
});
