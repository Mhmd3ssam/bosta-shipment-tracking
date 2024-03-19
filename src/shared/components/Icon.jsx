import { SvgIcon } from "@mui/material";

function Icon({ icon, size, color, ...restProps }) {
  return (
    <SvgIcon
      color={color || "inherit"}
      fontSize={size || "inherit"}
      {...restProps}
    >
      <path d={icon} color={color} />
    </SvgIcon>
  );
}
export default Icon;
