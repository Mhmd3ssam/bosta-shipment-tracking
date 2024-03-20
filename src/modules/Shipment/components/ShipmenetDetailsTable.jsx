import { useTranslation } from "react-i18next";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

import { SHIPMENT_STATUS, STATUS_COLOR_MAP } from "../../../helpers/constants";

import { formatDateAndTime } from "../../../helpers/dateTime";

function ShipmenetDetailsTable({ shipment: { TransitEvents } }) {
  const { t } = useTranslation("shipment");
  const tableLabels = [t("branch"), t("date"), t("time"), t("details")];
  return (
    <TableContainer component={Paper} sx={{ borderRadius: "10px", my: 2 }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ bgcolor: "#fafbfa" }}>
          <TableRow>
            {tableLabels.map((cell, idx) => (
              <TableCell key={idx}>
                <Typography
                  component="h6"
                  variant="subtitle2"
                  color="#8993a3"
                  fontWeight="bold"
                >
                  {cell}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {TransitEvents.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography component="h6" variant="body2" color="#232b47">
                  {row?.hub || "-"}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography component="h6" variant="body2" color="#232b47">
                  {formatDateAndTime(row?.timestamp)[0]}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography component="h6" variant="body2" color="#232b47">
                  {formatDateAndTime(row?.timestamp)[1]}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  component="h6"
                  variant="body2"
                  color="#232b47"
                  mb={row.reason ? 1 : null}
                >
                  {t(SHIPMENT_STATUS[row.state])}
                </Typography>
                <Typography
                  component="span"
                  variant="caption"
                  color={STATUS_COLOR_MAP[row.state]}
                >
                  {row.reason}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShipmenetDetailsTable;
