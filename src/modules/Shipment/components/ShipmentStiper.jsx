import { useTranslation } from "react-i18next";

import {
  styled,
  Box,
  Stepper,
  Step,
  StepConnector as MuiStepConnector,
  stepConnectorClasses,
  StepLabel,
  Typography,
} from "@mui/material";
import { mdiCheck } from "@mdi/js";

import Icon from "../../../shared/components/Icon";

import { SHIPMENT_STATUS } from "../../../helpers/constants";

function ShipmentStiper({ shipment }) {
  const { t } = useTranslation("shipment");

  const shipmentStatus = shipment.CurrentStatus.state;

  const StepConnector = styled(MuiStepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 15,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderTop: `5px solid ${theme.palette.grey[300]}`,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderTop: `5px solid ${
          shipmentStatus === SHIPMENT_STATUS.DELIVERED_TO_SENDER
            ? "#f9bb03"
            : theme.palette.success.main
        }`,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 0,
      border: 0,
      borderTop: `5px solid ${
        shipmentStatus === SHIPMENT_STATUS.CANCELLED
          ? theme.palette.error.main
          : theme.palette.grey[400]
      } `,
    },
  }));

  const StepIconContainer = styled("div", {
    shouldForwardProp: (prop) =>
      ["active", "completed", "error"].indexOf(prop) === -1,
  })(({ theme, active, completed, error }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
    borderRadius: "50%",
    color: theme.palette.grey[400],
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.grey[400]}`,
    ...(completed && {
      fontSize: 20,
      color: "#FFF",
      border: "none",
      backgroundColor:
        shipmentStatus === SHIPMENT_STATUS.DELIVERED_TO_SENDER
          ? "#f9bb03"
          : theme.palette.success.main,
    }),
    ...(error && {
      fontSize: 20,
      color: "#FFF",
      border: "none",
      backgroundColor: theme.palette.error.main,
    }),
  }));

  function StepIcon(props) {
    const { active, completed, error, className } = props;

    return (
      <StepIconContainer
        active={active}
        completed={completed}
        error={error}
        className={className}
      >
        {error ? (
          <Icon icon={mdiCheck} />
        ) : completed ? (
          <Icon icon={mdiCheck} />
        ) : (
          <Box
            width={16}
            height={16}
            borderRadius={8}
            backgroundColor="currentColor"
          />
        )}
      </StepIconContainer>
    );
  }

  return (
    <Stepper alternativeLabel connector={<StepConnector />}>
      <Step
        active={shipmentStatus === SHIPMENT_STATUS.TICKET_CREATED}
        completed={
          shipmentStatus === SHIPMENT_STATUS.TICKET_CREATED ||
          shipmentStatus === SHIPMENT_STATUS.PACKAGE_RECEIVED ||
          shipmentStatus === SHIPMENT_STATUS.OUT_FOR_DELIVERY ||
          shipmentStatus === SHIPMENT_STATUS.NOT_YET_SHIPPED ||
          shipmentStatus === SHIPMENT_STATUS.IN_TRANSIT ||
          shipmentStatus === SHIPMENT_STATUS.WAITING_FOR_CUSTOMER_ACTION ||
          shipmentStatus === SHIPMENT_STATUS.DELIVERED_TO_SENDER ||
          shipmentStatus === SHIPMENT_STATUS.DELIVERED
        }
      >
        <StepLabel
          StepIconComponent={StepIcon}
          error={shipmentStatus === SHIPMENT_STATUS.CANCELLED}
        >
          <Typography variant="body2" color="#232b47" fontWeight="bold">
            {t("TICKET_CREATED")}
          </Typography>
        </StepLabel>
      </Step>

      <Step
        active={shipmentStatus === SHIPMENT_STATUS.PACKAGE_RECEIVED}
        completed={
          shipmentStatus === SHIPMENT_STATUS.PACKAGE_RECEIVED ||
          shipmentStatus === SHIPMENT_STATUS.OUT_FOR_DELIVERY ||
          shipmentStatus === SHIPMENT_STATUS.NOT_YET_SHIPPED ||
          shipmentStatus === SHIPMENT_STATUS.IN_TRANSIT ||
          shipmentStatus === SHIPMENT_STATUS.WAITING_FOR_CUSTOMER_ACTION ||
          shipmentStatus === SHIPMENT_STATUS.DELIVERED_TO_SENDER ||
          shipmentStatus === SHIPMENT_STATUS.DELIVERED
        }
      >
        <StepLabel
          StepIconComponent={StepIcon}
          error={shipmentStatus === SHIPMENT_STATUS.CANCELLED}
        >
          <Typography variant="body2" color="#232b47" fontWeight="bold">
            {t("PACKAGE_RECEIVED")}
          </Typography>
        </StepLabel>
      </Step>

      <Step
        active={shipmentStatus === SHIPMENT_STATUS.OUT_FOR_DELIVERY}
        completed={
          shipmentStatus === SHIPMENT_STATUS.OUT_FOR_DELIVERY ||
          shipmentStatus === SHIPMENT_STATUS.DELIVERED_TO_SENDER ||
          shipmentStatus === SHIPMENT_STATUS.DELIVERED
        }
      >
        <StepLabel
          StepIconComponent={StepIcon}
          error={shipmentStatus === SHIPMENT_STATUS.CANCELLED}
        >
          <Typography variant="body2" color="#232b47" fontWeight="bold">
            {t("OUT_FOR_DELIVERY")}
          </Typography>
        </StepLabel>
      </Step>

      <Step
        active={shipmentStatus !== SHIPMENT_STATUS.DELIVERED}
        completed={shipmentStatus === SHIPMENT_STATUS.DELIVERED}
      >
        <StepLabel StepIconComponent={StepIcon}>
          <Typography variant="body2" color="#232b47" fontWeight="bold">
            {t("DELIVERED")}
          </Typography>
        </StepLabel>
      </Step>
    </Stepper>
  );
}

export default ShipmentStiper;
