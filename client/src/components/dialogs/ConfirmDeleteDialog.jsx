/* eslint-disable react/prop-types */
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export const ConfirmDeleteDialog = ({open, handleClose, deleteHandler}) => {
  return (
    <Dialog TransitionComponent={Transition}  open={open} onClose={handleClose}>
        <DialogTitle textAlign={"center"}>Confirm Delete</DialogTitle>
        <DialogContent>
            <DialogContentText variant="body2">
            Are you sure to delete the group?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>No</Button>
            <Button color="error" variant="outlined" onClick={deleteHandler}>Yes</Button>
        </DialogActions>
    </Dialog>
  )
}
