import "./bottomCss.css";
import EventItem from "../components/EventItem";

interface Props {
  list: [];
}

export default function EventList({ list }: Props) {
  const listA = list.filter((item) => item.type === 0);
  const listB = list.filter((item) => item.type === 1);
  const listC = list.filter((item) => item.type === 2);

  return (
    <>
      <ul>
        <p>Type A</p>
        {listA.map((item) => (
          <EventItem key={item.topic} item={item} />
        ))}
      </ul>
      <ul>
        <p>Type B</p>
        {listB.map((item) => (
          <EventItem key={item.topic} item={item} />
        ))}
      </ul>
      <ul>
        <p>Type C</p>
        {listC.map((item) => (
          <EventItem key={item.topic} item={item} />
        ))}
      </ul>
    </>
  );
}
