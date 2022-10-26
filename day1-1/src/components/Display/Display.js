import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Display(props) {
  return (
    <TableContainer component={Paper}>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Flag</TableCell>
            <TableCell align="right">Capital</TableCell>
            <TableCell align="right">Currency</TableCell>
            <TableCell align="right">Population</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((country) => (
            <TableRow
              key={country.name}
            >
              <TableCell component="th" scope="row">
                {country.name}
              </TableCell>
              <TableCell align="right" style={{width: "20%"}}><img src={country.media.flag} style={{width: "30%"}}/></TableCell>
              <TableCell align="right">{country.capital}</TableCell>
              <TableCell align="right">{country.currency}</TableCell>
              <TableCell align="right">{country.population.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}