// import { styled } from "@mui/system";
// import { Button as BaseButton } from "@mui/base/Button";
import { StyleButton, StyleButton2 } from "./StyleButton.tsx";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

// const StyleButton = styled(BaseButton)(
//   ({ theme }) => `
//   color: ${theme.palette.text.primary};
//   background-color: ${theme.palette.primary.light};
//   border: 0px;
//   padding: 20px;
//   box-shadow: 5px 5px ${theme.palette.primary.main};

//   &:hover{
//      background-color: ${theme.palette.secondary.light};
//   }

//   &:active {
//     background-color: ${theme.palette.error.light};
//     box-shadow: none;
//     transform: scale(0.9);
//   }

// `
// );

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <>
      <StyleButton onClick={onClick}>{text}</StyleButton>
      {/* <StyleButton2 onClick={() => console.log("clicked")}>11</StyleButton2> */}
    </>
  );
}

// export default function Button({ text, onClick }: ButtonProps) {
//   return <BaseButton onClick={onClick}>{text}</BaseButton>;
// }
