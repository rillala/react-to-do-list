// import { styled } from "@mui/system";
// import { Button as BaseButton } from "@mui/base/Button";
import { StyleButton, StyleButton2 } from "./StyleButton.tsx";
import { memo } from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

/*const StyleButton = styled(BaseButton)(
  ({ theme }) => `
  color: ${theme.palette.text.primary};
  background-color: ${theme.palette.primary.light};
  border: 0px;
  padding: 20px;
  box-shadow: 5px 5px ${theme.palette.primary.main};

  &:hover{
     background-color: ${theme.palette.secondary.light};
  }

  &:active {
    background-color: ${theme.palette.error.light};
    box-shadow: none;
    transform: scale(0.9);
  }

`
);*/

// 透過 React.memo＋useCallback 的方式達到避免多餘的重新渲染
// 只用 memo 包起來 Button 還是會重新渲染, 因為傳入的 props 不只有變數 (在這裡還有 function)
// 所以要透過 useCallback 把傳入的 function props 包起來(?)

const Button = memo(function Button({ text, onClick }: ButtonProps) {
  console.log("Button again!");
  return (
    <>
      <StyleButton onClick={onClick}>{text}</StyleButton>
      {/* <StyleButton2 onClick={() => console.log("clicked")}>11</StyleButton2> */}
    </>
  );
});

export default Button;

// export default function Button({ text, onClick }: ButtonProps) {
//   return <BaseButton onClick={onClick}>{text}</BaseButton>;
// }
