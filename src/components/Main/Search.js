import { Box, Paper } from '@mui/material';
import React from 'react';

import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
  return (
    <Box>
      <Paper
        component='form'
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 700,
          marginLeft: 45,
          marginTop: 5,
          backgroundColor: 'white',
          borderRadius: '30px',
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            color: 'grey',
            fontFamily: 'Nunito',
            marginLeft: 2,
            wordSpacing: 5,
            fontSize: 22,
          }}
          placeholder='Type in a project idea.....'
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon sx={{ color: 'grey' }} />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Search;
