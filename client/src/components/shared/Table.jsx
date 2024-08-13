/* eslint-disable react/prop-types */
import {  Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";


const TableComponent = ({rows=[], columns} ) => {
  return (
    <div style={{
      marginTop:"3rem",
      padding:"0 2rem"
    }}>
      <Typography fontSize={"1.8rem"} fontWeight={"500"} margin={"1rem"} textTransform={"uppercase"} textAlign={"center"} >all users</Typography>
      <TableContainer component={Paper}>
    <Table  sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead sx={{
        bgcolor:"#B6BC98",
        color:"white"
      }}>   
        <TableRow >
          {
            columns.map(column=>(
              <TableCell key={column.field} sx={{
                color:"white",
                textAlign:"center"
              }}>{column.headerName}</TableCell>
            ))
          }
        </TableRow>
      </TableHead>
      <TableBody >



        {
          rows.length> 0? rows.map((row) => (
            <TableRow
              key={row._id}
            > 
            {
              Object.entries(row).map(cell=>(
                <TableCell key={cell[1]}  component="th" scope="row" 
                sx={{
                  textAlign:"center"
                }}
                >
                  {
                    cell[0] === "avatar"? <Avatar src={cell[1]} />: cell[1]
                  }
              </TableCell>
              ))
            }
            </TableRow>
          )): <Typography textAlign={"center"}  >No users</Typography>
        } 
      </TableBody>
    </Table>
  </TableContainer>
    </div>
  )
}

export default TableComponent