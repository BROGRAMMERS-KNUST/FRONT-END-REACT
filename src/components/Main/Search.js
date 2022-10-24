import { Box, Paper } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { photography } from './SearchArrays';
const Search = () => {
  const history = useHistory();
  const [searchInput, setsearchInput] = useState('');

  const checkPhotgraphy = (array, data) => {
    const splittedData = data.split(' ');
    console.log(splittedData);

    return array.some((arrayData) => {
      for (let i = 0; i < splittedData.length; i++) {
        if (splittedData[i] === arrayData) {
          return splittedData[i] === arrayData;
        }
      }
    });

    // return array.some((arrayData) => {
    //   return splittedData[0] === arrayData;
    // });

    // // splittedData.forEach((element) => {
    // //   console.log(`Element = ${element}`);
    // //   console.log(element === '2');
    // });
    // array.some((arrayData) => {
    //   arrayData.forEach((element) => {
    //     data === element;
    //   });
    // });
  };
  const handleSearchInput = (e) => {
    setsearchInput(e.target.value);
  };
  const handleSearch = () => {
    console.log(searchInput);

    console.log(checkPhotgraphy(photography, searchInput));
    if (checkPhotgraphy(photography, searchInput)) {
      history.push('/photography');
    }
  };
  return (
    <Box>
      <Paper
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
          onChange={handleSearchInput}
        />
        <IconButton sx={{ p: '10px' }} onClick={handleSearch}>
          <SearchIcon sx={{ color: 'grey' }} />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default Search;
