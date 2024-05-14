import { TopArea } from "./layOut/TopArea";
import EventList from "./layOut/EventList";
import { useState, useCallback, useRef, createRef } from "react";

// * 改由 TopArea 統合好整個 newEvent 之後傳遞給 App.tsx 的 eventList

function App() {
  const [eventList, setEventList] = useState([]);
  const topAreaRef = useRef();

  // ----新增事件
  // note:當使用 useCallback 定義 originalEventSubmit 並在裡面調用 setEventList([...eventList, newEvent]) 時，可能會遇到無法新增事件的問題。這通常是因為 eventList 沒有正確更新的緣故。這裡的問題是你在依賴陣列中沒有包含 eventList，導致 eventList 的值始終保持為函數被創建時的快照。
  const originalEventSubmit = useCallback(
    (type) => {
      topAreaRef.current.updateEventData(type);
      const newEvent = topAreaRef.current.getNewEventData();
      if (newEvent) {
        console.log(newEvent);
        setEventList((eventList) => [...eventList, newEvent]);
        topAreaRef.current.clearAllInput();
      }
    },
    [topAreaRef, eventList]
  );

  const submitTypeA = useCallback(() => {
    originalEventSubmit(0);
  }, []);
  const submitTypeB = useCallback(() => {
    originalEventSubmit(1);
  }, []);
  const submitTypeC = useCallback(() => {
    originalEventSubmit(2);
  }, []);

  // ----刪除事件
  function deleteEvent(eventId) {
    setEventList((eventList) => {
      return eventList.filter((event) => event.id !== eventId);
    });
  }

  // ----編輯事件
  const currentEdit = useRef(null);

  //// 1.切換 isEdit 狀態
  function toggleEventEdit(eventId) {
    setEventList((eventList) =>
      eventList.map((event) =>
        event.id === eventId ? { ...event, isEdit: !event.isEdit } : event
      )
    );
  }

  ////2.更新編輯的值
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
        onEventAsubmit={submitTypeA}
        onEventBsubmit={submitTypeB}
        onEventCsubmit={submitTypeC}
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
