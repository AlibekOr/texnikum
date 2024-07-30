import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { applicants } from '../data/db';
import { MdDelete, MdOutlineEdit } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';
import { url } from '../../utils/Url';
import UpdateModal from './UpdateModal';
import { UpdateModalContext } from '../context/updateModalContext';

const columns = [
  // { id: 'first_name', label: 'Atı', align: "center" },
  // { id: 'last_name', label: 'Familiyası', align: "center" },
  // { id: 'middle_name', label: 'Ákesiniń atı', align: "center" },
  // { id: 'date_of_birth', label: 'Tuwılǵan sánesi', align: "center" },
  // { id: 'phone_number', label: 'Telefon nomeri', align: "center" },
  // { id: 'secondary_phone_number', label: 'Ekinshi telefon nomeri', align: "center" },
  // { id: 'direction', label: 'Tálim baǵdarı', align: "center" },
  // { id: 'typr_of_education', label: 'Tálim túri', align: "center" },
  // { id: 'pasportSeriyaRaqami', label: 'Pasport Seriya Nomer', align: "center" },
  // { id: 'dtmTestBali', label: 'DTM test ball', align: "center" },
  // { id: 'source', label: 'Qay jerden?', align: "center" },
  // { id: 'created_at', label: 'Jaratılǵan waqtı', align: "center" },
  // { id: 'updated_at', label: 'Jańalanǵan waqtı', align: "center" },
  { id: 'ism', label: 'Atı', align: "center" },
  { id: 'familiya', label: 'Familiyası', align: "center" },
  { id: 'otasiningIsmi', label: 'Ákesiniń atı', align: "center" },
  { id: 'tugilganSanasi', label: 'Tuwılǵan sánesi', align: "center" },
  { id: 'telefonRaqami', label: 'Telefon nomeri', align: "center" },
  { id: 'qoshimchaRaqam', label: 'Ekinshi telefon nomeri', align: "center" },
  { id: 'yonalish', label: 'Tálim baǵdarı', align: "center" },
  { id: 'talimTuri', label: 'Tálim túri', align: "center" },
  { id: 'pasportSeriyaRaqami', label: 'Pasport Seriya Nomer', align: "center" },
  { id: 'dtmTestBali', label: 'DTM test ball', align: "center" },
  { id: 'source', label: 'Qay jerden?', align: "center" },
  { id: 'created_at', label: 'Jaratılǵan waqtı', align: "center" },
  { id: 'updated_at', label: 'Jańalanǵan waqtı', align: "center" },
];



export default function StickyHeadTable({data, searchVal}) {
  const {setUpdateModal } = React.useContext(UpdateModalContext)
  const rows = data.filter(applicant => (applicant.ism + " " + applicant.familiya + " " + applicant.otasiningIsmi).toLowerCase().includes(searchVal.toLowerCase()))
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this item?')) {
      toast('Please wait...')
      const response = await fetch(`${url}/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        //   'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        window.location.reload()
      }
    }
  }

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Toaster />
      <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
          <TableHead>
              <TableRow>
              {columns.map((column) => (
                  <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  >
                  {column.label}
                  </TableCell>
              ))}
              <TableCell>
                Basqarıw
              </TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                  return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                      const value = row[column.id];
                      return (
                          <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                      );
                      })}
                      {/* {
                        data.map(item => { */}
                          <TableCell align="center">
                            <div className='flex justify-center gap-2'>
                              <button onClick={() => setUpdateModal({isOpen: true, id: (data[page * rowsPerPage + index]._id)})} className='size-8 rounded-full bg-blue-500 flex justify-center items-center' title='Redaktorlaw'>
                                <MdOutlineEdit fill='white' />
                              </button>
                              <button onClick={() => handleDelete(data[page * rowsPerPage + index]._id)} className='size-8 rounded-full bg-red-500 flex justify-center items-center' title='Óshiriw'>
                                <MdDelete fill='white' />
                              </button>
                            </div>
                          </TableCell>
                        {/* }
                        ) */}
                      {/* } */}
                  </TableRow>
                  );
              })}
          </TableBody>
          </Table>
      </TableContainer>
      <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Paper>

      <UpdateModal />
    </>
  );
}