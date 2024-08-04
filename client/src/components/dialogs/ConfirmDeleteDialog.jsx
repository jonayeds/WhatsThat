/* eslint-disable react/prop-types */
import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

export const ConfirmDeleteDialog = ({open, handleClose, deleteHandler}) => {

  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
            <DialogContentText>
            Are you sure to delete the group?
            </DialogContentText>
        </DialogContent>
    </Dialog>
  )
}
