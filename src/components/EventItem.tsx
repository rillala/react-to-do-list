import "./bottomCss.css";
import { fontSize } from "@mui/system";

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
  return (
    <>
      <div className="eventItem">
        <div>{item.icon}</div>
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
