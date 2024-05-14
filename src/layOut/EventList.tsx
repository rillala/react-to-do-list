// import { EventItem } from "../components/EventItem";
// import { Box } from "@mui/system";

// interface Props {
//   list: object[];
//   onDelete: () => void;
//   toggleEdit: () => void;
//   onsubmitEdit: () => void;
// }

// export default function EventList({
//   list,
//   onDelete,
//   toggleEdit,
//   onsubmitEdit,
// }: Props) {
//   const listA = list.filter((item) => item.type === 0);
//   const listB = list.filter((item) => item.type === 1);
//   const listC = list.filter((item) => item.type === 2);

//   return (
//     <>
//       <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
//         {listA.length !== 0 && (
//           <Box sx={{ border: 2, borderColor: "primary.main" }}>
//             <ul>
//               <p>Type A</p>
//               {listA.map((item) => (
//                 <EventItem
//                   key={item.id}
//                   item={item}
//                   onDelete={onDelete}
//                   toggleEdit={toggleEdit}
//                   onsubmitEdit={onsubmitEdit}
//                 />
//               ))}
//             </ul>
//           </Box>
//         )}
//         {listB.length !== 0 && (
//           <Box sx={{ border: 2, borderColor: "primary.light" }}>
//             <ul>
//               <p>Type B</p>
//               {listB.map((item) => (
//                 <EventItem
//                   key={item.id}
//                   item={item}
//                   onDelete={onDelete}
//                   toggleEdit={toggleEdit}
//                   onsubmitEdit={onsubmitEdit}
//                 />
//               ))}
//             </ul>
//           </Box>
//         )}
//         {listC.length !== 0 && (
//           <Box sx={{ border: 2, borderColor: "secondary.light" }}>
//             <ul>
//               <p>Type C</p>
//               {listC.map((item) => (
//                 <EventItem
//                   key={item.id}
//                   item={item}
//                   onDelete={onDelete}
//                   toggleEdit={toggleEdit}
//                   onsubmitEdit={onsubmitEdit}
//                 />
//               ))}
//             </ul>
//           </Box>
//         )}
//       </Box>
//     </>
//   );
// }

import { EventItem } from "../components/EventItem";
import { Box } from "@mui/system";

interface Item {
  id: number;
  type: number;
  topic: string;
  info: string;
  icon: string;
  isEdit: boolean;
}

interface Props {
  list: Item[];
  onDelete: (arg0: string) => void;
  toggleEdit: (arg0: string) => void;
  onsubmitEdit: (arg0: object) => void;
}

export default function EventList({
  list,
  onDelete,
  toggleEdit,
  onsubmitEdit,
}: Props) {
  const lists = {
    listA: [],
    listB: [],
    listC: [],
  };

  // One pass through the list to categorize items
  list.forEach((item: object) => {
    switch (item.type) {
      case 0:
        lists.listA.push(item);
        break;
      case 1:
        lists.listB.push(item);
        break;
      case 2:
        lists.listC.push(item);
        break;
      default:
        break;
    }
  });

  const renderList = (items: Item[], borderColor: string, typeName: string) =>
    items.length > 0 && (
      <Box sx={{ border: 2, borderColor }}>
        <ul>
          <p>{typeName}</p>
          {items.map((item) => (
            <EventItem
              key={item.id}
              item={item}
              onDelete={onDelete}
              toggleEdit={toggleEdit}
              onsubmitEdit={onsubmitEdit}
            />
          ))}
        </ul>
      </Box>
    );

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {renderList(lists.listA, "primary.main", "Type A")}
      {renderList(lists.listB, "primary.light", "Type B")}
      {renderList(lists.listC, "secondary.light", "Type C")}
    </Box>
  );
}
