import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { blue } from '@material-ui/core/colors';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

function createData(
    patientId: string,
    userId: string,
    priority: string,
    postalCode: string) {
  return { patientId, userId, priority, postalCode};
}

const rows = [
  createData('john doe', '1', '2', 'v6p3n7'),
  createData('janet smith', '1', '2', 'v6p3n7'),
  createData('janet doe', '3', '14', 'v6p3n7'),
  createData('janet smith', '1', '2', 'v6p3n7'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Patient ID</StyledTableCell>
            <StyledTableCell align="right">UserId</StyledTableCell>
            <StyledTableCell align="right">Priority Group</StyledTableCell>
            <StyledTableCell align="right">Postal Code</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.patientId} >
              <StyledTableCell component="th" scope="row">
                {row.patientId}
              </StyledTableCell>
              <StyledTableCell align="right">{row.userId}</StyledTableCell>
              <StyledTableCell align="right">{row.priority}</StyledTableCell>
              <StyledTableCell align="right">{row.postalCode}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
