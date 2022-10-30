import { Box, Paper } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { photography, graphics, web, food, writing } from './SearchArrays';
const Search = () => {
  const history = useHistory();
  const [searchInput, setsearchInput] = useState('');

  //CHECK PHOTOGRAPHY FUNCTION
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
  };

  //CHECK GRAPHICS FUNCTION
  const checkGraphics = (array, data) => {
    const splittedData = data.split(' ');
    console.log(splittedData);

    return array.some((arrayData) => {
      for (let i = 0; i < splittedData.length; i++) {
        if (splittedData[i] === arrayData) {
          return splittedData[i] === arrayData;
        }
      }
    });
  };

  //CHECK WEB DEV FUNCTION
  const checkWeb = (array, data) => {
    const splittedData = data.split(' ');
    console.log(splittedData);

    return array.some((arrayData) => {
      for (let i = 0; i < splittedData.length; i++) {
        if (splittedData[i] === arrayData) {
          return splittedData[i] === arrayData;
        }
      }
    });
  };

  //CHECK FOOD FUNCTION
  const checkFood = (array, data) => {
    const splittedData = data.split(' ');
    console.log(splittedData);

    return array.some((arrayData) => {
      for (let i = 0; i < splittedData.length; i++) {
        if (splittedData[i] === arrayData) {
          return splittedData[i] === arrayData;
        }
      }
    });
  };
  //CHECK WRITING  FUNCTION
  const checkWriting = (array, data) => {
    const splittedData = data.split(' ');
    console.log(splittedData);

    return array.some((arrayData) => {
      for (let i = 0; i < splittedData.length; i++) {
        if (splittedData[i] === arrayData) {
          return splittedData[i] === arrayData;
        }
      }
    });
  };
  const handleSearchInput = (e) => {
    setsearchInput(e.target.value);
  };
  const handleSearch = (e) => {
    console.log(searchInput);
    console.log(checkPhotgraphy(photography, searchInput.toLowerCase()));
    if (checkPhotgraphy(photography, searchInput.toLowerCase())) {
      history.push('/photography');
    } else if (checkGraphics(graphics, searchInput.toLowerCase())) {
      history.push('/graphic-design');
    } else if (checkWeb(web, searchInput.toLowerCase())) {
      history.push('/webdevelopment');
    } else if (checkFood(food, searchInput.toLowerCase())) {
      history.push('/food-services');
    } else if (checkWriting(writing, searchInput.toLowerCase())) {
      history.push('/writing&translation');
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
          margin: 'auto',
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
