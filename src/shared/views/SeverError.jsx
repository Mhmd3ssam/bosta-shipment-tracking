import { useTranslation } from "react-i18next";
import { Alert, AlertTitle } from "@mui/material";

function SeverError({ message }) {
  const { t } = useTranslation();

  return (
    <Alert severity="error">
      <AlertTitle>{t("error")}</AlertTitle>
      {message}
    </Alert>
  );
}

export default SeverError;
