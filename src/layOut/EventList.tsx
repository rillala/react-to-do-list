import EventItem from "../components/EventItem";
// import { Box } from "@mui/system";

interface Props {
  list: object[];
  onDelete: () => void;
  toggleEdit: () => void;
  onInfoEdit: () => void;
}

export default function EventList({
  list,
  onDelete,
  toggleEdit,
  onInfoEdit,
}: Props) {
  const listA = list.filter((item) => item.type === 0);
  const listB = list.filter((item) => item.type === 1);
  const listC = list.filter((item) => item.type === 2);

  return (
    <>
      {/* <Box sx={{ color: "primary.main", fontSize: 30 }}>test the sx props</Box> */}
      <ul>
        {listA.length !== 0 && <p>Type A</p>}
        {listA.map((item) => (
          <EventItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            toggleEdit={toggleEdit}
            onInfoEdit={onInfoEdit}
          />
        ))}
      </ul>
      <ul>
        {listB.length !== 0 && <p>Type B</p>}
        {listB.map((item) => (
          <EventItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            toggleEdit={toggleEdit}
            onInfoEdit={onInfoEdit}
          />
        ))}
      </ul>
      <ul>
        {listC.length !== 0 && <p>Type C</p>}
        {listC.map((item) => (
          <EventItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            toggleEdit={toggleEdit}
            onInfoEdit={onInfoEdit}
          />
        ))}
      </ul>
    </>
  );
}
