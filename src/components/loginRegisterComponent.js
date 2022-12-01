import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import {
  LoginRequested,
  RegisterRequested,
  RESETALLCLICKS,
} from "../stateManagement/actions";
import { TextField } from "@material-ui/core";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const commonClickReducer = useSelector((state) => state.commonClickReducer);
  const handleRegisterLogin = () => {
    if (commonClickReducer.loginClick && !commonClickReducer.registerClick) {
      setOpen(false);
      dispatch(LoginRequested());
      dispatch(RESETALLCLICKS());
    }
    if (!commonClickReducer.loginClick && commonClickReducer.registerClick) {
      setOpen(false);
      dispatch(RegisterRequested());
      dispatch(RESETALLCLICKS());
    }
  };
  React.useEffect(() => {
    if (commonClickReducer.loginClick || commonClickReducer.registerClick) {
      setOpen(true);
    }
  }, [commonClickReducer]);

  const handleClose = () => {
    dispatch(RESETALLCLICKS());
    setOpen(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          {(() => {
            if (
              commonClickReducer.loginClick &&
              !commonClickReducer.registerClick
            ) {
              return "Login to your account";
            }
            if (
              !commonClickReducer.loginClick &&
              commonClickReducer.registerClick
            ) {
              return "Join us !";
            }
          })()}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          {commonClickReducer.loginClick &&
          !commonClickReducer.registerClick ? (
            <>
              <TextField id="username" label="Username" variant="outlined" />
              <TextField
                id="password"
                type="password"
                label="Password"
                variant="outlined"
              />
            </>
          ) : null}
          {!commonClickReducer.loginClick &&
            commonClickReducer.registerClick ? (
              <>
                <TextField id="username" label="Username" variant="outlined" />
                <TextField
                  id="password"
                  label="email"
                  variant="outlined"
                />
                <TextField
                  id="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                />
                <TextField
                  id="password"
                  type="retype-password"
                  label="Password"
                  variant="outlined"
                />

              </>
            ) : null}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleRegisterLogin}>
            {(() => {
              if (
                commonClickReducer.loginClick &&
                !commonClickReducer.registerClick
              ) {
                return "LOGIN";
              }
              if (
                !commonClickReducer.loginClick &&
                commonClickReducer.registerClick
              ) {
                return "REGISTER";
              }
            })()}
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
