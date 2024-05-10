import { styled } from "@mui/system";
import { Button as BaseButton } from "@mui/base/Button";
import { memo } from "react";

// export const StyleButton = styled(BaseButton)(
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

export const StyleButton = memo(
  styled(BaseButton)(({ theme }) => ({
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary.light,
    border: "0px",
    padding: "20px",
    boxShadow: `5px 5px ${theme.palette.primary.main}`,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    "&:active": {
      backgroundColor: theme.palette.error.light,
      boxShadow: "none",
      transform: "scale(0.9)",
    },
  }))
);

export const StyleButton2 = styled("button")({
  color: "#fff",
  backgroundColor: "#000",
  padding: 8,
  borderRadius: 4,
  border: "2px solid red",
});
