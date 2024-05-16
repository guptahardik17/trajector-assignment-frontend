import Box, { BoxProps } from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import { MAIN_PATH } from "src/constant";

export default function Header({ sx }: BoxProps) {
  return (
    <RouterLink to={`/${MAIN_PATH.browse}`}>
      <div style={{ color: 'white', fontSize: 20,}}>
        Trajector Frontend Assignment
      </div>
    </RouterLink>
  );
}
