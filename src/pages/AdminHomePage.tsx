import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import Orders from '../components/Orders';

// edited from https://github.com/mui-org/material-ui/blob/master/docs/src/pages/getting-started/templates/dashboard/Orders.js

export default function AdminHomePage(){
    const [open, setOpen] = React.useState(false);

    function createData(id: number, date: string, name: string, shipTo: string, paymentMethod: string, amount: number) {
        return { id, date, name, shipTo, paymentMethod, amount };
      }
      

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
        seeMore: {
            marginTop: theme.spacing(3),
        }
      }));

      const classes = useStyles();

    return (
        <>
        <Orders />
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Input Newly Received Vaccines
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Vaccine Arrival Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the form with the relevant details.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Vaccine Manufacturer"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Number of Vaccines"
            type="email"
            fullWidth
          />
          <form className={classes.container} noValidate>
            <TextField
                id="date"
                label="Expected Arrival Date"
                type="date"
                defaultValue="2021-02-02"
                className={classes.textField}
                InputLabelProps={{
                shrink: true,
                }}
            />
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Add to Database
          </Button>
        </DialogActions>
      </Dialog>
        </>
    );
}