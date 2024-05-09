import TopArea from "./layOut/TopArea";
import EventList from "./layOut/EventList";
import { useState, useEffect, useRef } from "react";

const initialList = [
  {
    id: 1,
    type: 0,
    topic: "topic1",
    info: "info1",
    icon: "icon1",
    isEdit: false,
  },

  {
    id: 2,
    type: 1,
    topic: "topic2",
    info: "info2",
    icon: "icon2",
    isEdit: false,
  },

  {
    id: 3,
    type: 2,
    topic: "topic3",
    info: "info3",
    icon: "icon3",
    isEdit: false,
  },
];

function App() {
  const [eventList, setEventList] = useState(initialList);
  const [newEvent, setNewEvent] = useState(null);
  const [newEventId, setNewEventId] = useState(-1);

  // 更新事件標題 (Topic)
  const [inputTopic, setInputTopic] = useState("");

  function handleTopic(e) {
    const updatedTopic = e.target.value;
    setInputTopic(updatedTopic);
    setNewEvent((ne) => ({ ...ne, topic: updatedTopic }));
  }

  // 更新事件內容 (Info)
  const [inputInfo, setInputInfo] = useState("");

  function handleInfo(e) {
    const updateInfo = e.target.value;
    setInputInfo(updateInfo);
    setNewEvent({ ...newEvent, info: updateInfo });
  }

  // 更新事件圖案 (Icon)
  const [inputIcon, setInputIcon] = useState("");

  function handleIcon(e) {
    const updateIcon = e.target.value;
    setInputIcon(updateIcon);
    setNewEvent({ ...newEvent, icon: updateIcon });
  }

  // 處理事件種類指定, 並新增事件
  const [eventType, setEventType] = useState("");

  function submitEvent(type) {
    if (newEvent !== null) {
      const eventId = new Date().getTime();
      setEventType(type); // 假設你有這個 setState 函數來更新某個 state
      setNewEventId(eventId); // 假設你有這個 setState 函數來更新某個 state
      setNewEvent((newEvent) => ({
        ...newEvent,
        type: type,
        id: eventId,
        isEdit: false,
      }));

      setEventList((eventList) => [
        ...eventList,
        { ...newEvent, type: type, id: eventId, isEdit: false },
      ]);
    }
  }

  // 刪除事件
  function deleteEvent(eventId) {
    setEventList((eventList) => {
      return eventList.filter((event) => event.id !== eventId);
    });
  }

  // 編輯事件
  function editEvent(eventId) {
    setEventList((eventList) =>
      eventList.map((event) =>
        event.id === eventId ? { ...event, isEdit: !event.isEdit } : event
      )
    );
  }

  function editInfo(e, eventId) {
    const updatedInfo = e.target.value;
    setEventList((eventList) =>
      eventList.map((event) =>
        event.id === eventId ? { ...event, info: updatedInfo } : event
      )
    );
  }

  useEffect(() => {
    setInputTopic("");
    setInputInfo("");
    setInputIcon("");
    setNewEvent(null);
  }, [eventList]);

  return (
    <>
      <TopArea
        inputInfo={inputInfo}
        onInfoChange={handleInfo}
        inputTopic={inputTopic}
        onTopicChange={handleTopic}
        inputIcon={inputIcon}
        onIconChange={handleIcon}
        onEventSubmit={submitEvent}
      />
      <EventList
        list={eventList}
        onEdit={editEvent}
        onDelete={deleteEvent}
        toggleEdit={editEvent}
        onInfoEdit={editInfo}
      ></EventList>
    </>
  );
}

export default App;
