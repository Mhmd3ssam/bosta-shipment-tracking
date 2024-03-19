import { InputBase, styled } from "@mui/material";

const BootstrapInput = styled(InputBase)(({ theme, ...props }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: "1px solid",
    borderColor: "#e4e7ec",
    fontSize: 16,
    width: "80%",
    padding: "10px 12px",
    "&:focus": {
      boxShadow: "#e4e7ec 0 0 0 0.2rem",
      borderColor: "#e4e7ec",
    },
  },
}));

function SearchInput({ label, placeholder = "", onChange, value, ...otherProps }) {
  return (
    <BootstrapInput
      sx={{ "& .MuiInputBase-root": { backgroundColor: "white" } }}
      type="text"
      name="keyword"
      label={label}
      placeholder={placeholder}
      fullWidth
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...otherProps}
    />
  );
}

export default SearchInput;
