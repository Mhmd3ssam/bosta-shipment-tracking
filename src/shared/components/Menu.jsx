import { Children, cloneElement, useEffect, useState, Fragment } from "react";

import { Menu as MuiMenu, useTheme } from "@mui/material";

function Menu({
  label,

  closeOnSelect,

  AnchorComponent,
  AnchorComponentProps,
  AnchorComponentOpenProps,

  menuWidth,
  menuHeight,

  children,
  closeMenu,
  onMenuOpen,
  onMenuClose,
}) {
  const { direction } = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
    onMenuClose && onMenuClose();
  };
  useEffect(() => {
    if (closeMenu) {
      setAnchorEl(null);
    }
  }, [closeMenu]);

  return (
    <Fragment>
      <AnchorComponent
        {...AnchorComponentProps}
        {...(!!anchorEl && AnchorComponentOpenProps)}
        onClick={(e) => {
          e.stopPropagation();
          setAnchorEl(e.currentTarget);
          onMenuOpen && onMenuOpen();
        }}
        aria-label={`open ${label} menu`}
        aria-controls={`${label}-menu`}
        aria-haspopup="true"
      />

      <MuiMenu
        id={`${label}-menu`}
        aria-label={`${label} menu`}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: direction === "ltr" ? "right" : "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: direction === "ltr" ? "right" : "left",
        }}
        open={!!anchorEl}
        onClose={handleClose}
        MenuListProps={{
          dense: true,
          sx: {
            position: "relative",
            minWidth: menuWidth || 180,
            maxWidth: menuWidth || 340,
            maxHeight: menuHeight || 400,
          },
        }}
      >
        {!closeOnSelect
          ? children
          : Children.map(children, (child) =>
              cloneElement(child, {
                onClick: (e) => {
                  child.props.onClick(e);
                  handleClose(e);
                },
              })
            )}
      </MuiMenu>
    </Fragment>
  );
}

export default Menu;
