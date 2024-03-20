import { useRef, useEffect, Fragment } from "react";

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
    width: "100%",
    padding: "10px 12px",
    "&:focus": {
      boxShadow: "#e4e7ec 0 0 0 0.2rem",
      borderColor: "#e4e7ec",
    },
  },
}));

function SearchInput({
  label,
  placeholder = "",
  onEnterPressed,
  ...otherProps
}) {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onEnterPressed(event.target.value);
    }
  };

  return (
    <BootstrapInput
      sx={{ "& .MuiInputBase-root": { backgroundColor: "white" } }}
      inputRef={inputRef}
      type="text"
      name="keyword"
      label={label}
      placeholder={placeholder}
      fullWidth
      onKeyDown={handleKeyPress} // Call handleKeyPress on key press
      {...otherProps}
    />
  );
}

export default SearchInput;
