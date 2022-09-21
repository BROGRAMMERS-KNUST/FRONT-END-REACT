import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function CustomizedInputBase() {
  return (
    <Paper
      component='form'
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginLeft: 2,
        marginTop: 2,
        backgroundColor: '#1976d2',
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: 'white', fontFamily: 'Nunito' }}
        placeholder='Type in a project idea.....'
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon sx={{ color: 'white' }} />
      </IconButton>
    </Paper>
  );
}
