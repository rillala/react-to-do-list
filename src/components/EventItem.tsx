import EventBtn from "./EventBtn";

interface Item {
  type: number;
  topic: string;
  info: string;
  status: boolean;
  icon: string;
}

interface ItemProps {
  item: Item;
}

export default function EventItem({ item }: ItemProps) {
  return (
    <>
      <div className="eventItem">
        <div>{item.icon}</div>
        <p>{item.topic}</p>
        <p>{item.info}</p>
        <EventBtn text="edit" />
        <EventBtn text="delete" />
      </div>
    </>
  );
}
