import { TopArea } from "./layOut/TopArea";
import EventList from "./layOut/EventList";
import { useState, useEffect, useCallback, useRef, createRef } from "react";

// * 改由 TopArea 統合好整個 newEvent 之後傳遞給 App.tsx 的 eventList

function App() {
  const [eventList, setEventList] = useState([]);
  const topAreaRef = createRef();

  // submit new event (with different type) & clear input area
  function handleEventSubmit(type) {
    topAreaRef.current.updateEventData(type);
    let newEvent = topAreaRef.current.getNewEventData();
    if (newEvent) {
      console.log(newEvent);
      setEventList([...eventList, newEvent]);
      topAreaRef.current.clearAllInput();
      newEvent = topAreaRef.current.getNewEventData();
    }
    // bug: newEvent 不會清空
  }

  // 刪除事件
  function deleteEvent(eventId) {
    setEventList((eventList) => {
      return eventList.filter((event) => event.id !== eventId);
    });
  }

  // 編輯事件
  const currentEdit = useRef(null);

  //// 1.切換 isEdit 狀態
  function toggleEventEdit(eventId) {
    setEventList((eventList) =>
      eventList.map((event) =>
        event.id === eventId ? { ...event, isEdit: !event.isEdit } : event
      )
    );
  }
  //// 2.接收編輯的值
  // function editInfo(e, eventId) {
  //   currentEdit.current = e.target.value;
  // }

  ////3.更新編輯的值
  function submitInfo(eventInfo) {
    console.log(eventInfo);

    setEventList((eventList) =>
      eventList.map((event) =>
        event.id === eventInfo.id
          ? { ...event, info: eventInfo.info, isEdit: !event.isEdit }
          : event
      )
    );
  }

  return (
    <>
      <TopArea
        ref={topAreaRef}
        onEventAsubmit={() => handleEventSubmit(0)}
        onEventBsubmit={() => handleEventSubmit(1)}
        onEventCsubmit={() => handleEventSubmit(2)}
      />

      <EventList
        list={eventList}
        toggleEdit={toggleEventEdit}
        onDelete={deleteEvent}
        onsubmitEdit={submitInfo}
      ></EventList>
    </>
  );
}

export default App;
