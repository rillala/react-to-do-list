import TopArea from "./layOut/TopArea";
import EventList from "./layOut/EventList";
import { useState } from "react";

const initialList = [
  {
    type: 0,
    topic: "topic1",
    info: "info1",
    status: true,
    icon: "icon1",
  },
  {
    type: 0,
    topic: "topic1-2",
    info: "info1",
    status: true,
    icon: "icon1",
  },
  {
    type: 1,
    topic: "topic2",
    info: "info2",
    status: true,
    icon: "icon2",
  },
  {
    type: 1,
    topic: "topic2-2",
    info: "info2",
    status: true,
    icon: "icon2",
  },
  {
    type: 2,
    topic: "topic3",
    info: "info3",
    status: true,
    icon: "icon3",
  },
  {
    type: 2,
    topic: "topic3-2",
    info: "info3",
    status: true,
    icon: "icon3",
  },
];

function App() {
  const [eventList, setEventList] = useState(initialList);

  return (
    <>
      <TopArea></TopArea>
      <EventList list={eventList}></EventList>
    </>
  );
}

export default App;
