import EventItem from "../components/EventItem";
import { Box } from "@mui/system";

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
      <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {listA.length !== 0 && (
          <Box sx={{ border: 2, borderColor: "primary.main" }}>
            <ul>
              <p>Type A</p>
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
          </Box>
        )}
        {listB.length !== 0 && (
          <Box sx={{ border: 2, borderColor: "primary.light" }}>
            <ul>
              <p>Type B</p>
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
          </Box>
        )}
        {listC.length !== 0 && (
          <Box sx={{ border: 2, borderColor: "secondary.light" }}>
            <ul>
              <p>Type C</p>
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
          </Box>
        )}
      </Box>
    </>
  );
}
