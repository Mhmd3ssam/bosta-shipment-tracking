import { appSelector, setLanguage } from "../state";
import { useSelector, useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";

import {
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { mdiCheck } from "@mdi/js";

import Menu from "../../../shared/components/Menu";
import Icon from "../../../shared/components/Icon";

import { LANGS } from "../../../helpers/constants";

function LanguagesMenu() {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const { language } = useSelector(appSelector);

  const handleLangChange = (newLang) => {
    dispatch(setLanguage(newLang));
  };

  return (
    <Menu
      label="languages menu"
      AnchorComponent={Typography}
      AnchorComponentProps={{
        size: "small",
        variant: "text",
        children: t(language),
        sx: {
          "&:hover": {
            cursor: "pointer",
          },
        },
      }}
    >
      <MenuItem
        selected={language === LANGS.en}
        color={language === LANGS.en ? "primary" : "default"}
        onClick={() => handleLangChange(LANGS.en)}
      >
        <ListItemIcon>
          {language === LANGS.en && (
            <Icon
              icon={mdiCheck}
              color={language === LANGS.en ? "primary" : "default"}
            />
          )}
        </ListItemIcon>

        <ListItemText>{t("english")}</ListItemText>
      </MenuItem>

      <MenuItem
        selected={language === LANGS.ar}
        color={language === LANGS.ar ? "primary" : "default"}
        onClick={() => handleLangChange(LANGS.ar)}
      >
        <ListItemIcon>
          {language === LANGS.ar && (
            <Icon
              icon={mdiCheck}
              color={language === LANGS.ar ? "primary" : "default"}
            />
          )}
        </ListItemIcon>

        <ListItemText>{t("arabic")}</ListItemText>
      </MenuItem>
    </Menu>
  );
}

export default LanguagesMenu;
