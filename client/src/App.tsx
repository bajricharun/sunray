import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, Checkbox, OutlinedInput, Typography } from '@mui/material';
import NumberPlace from './components/NumberPlace';
import { getData, returnRandom } from './service/UtilService';

const App = () => {
  const [values, setValues] = useState<number[]>(Array(10).fill(""));
  const [sortedValues, setSortedValues] = useState<number[]>(Array(10).fill(""));

  const [filterType, setFilterType] = useState<string>("");
  const [filterValue, setFilterValue] = useState<Number>();
  const [shouldFilter, setShouldFilter] = useState<boolean>(false);

  const allowedChars = /^[=<>]*$/;

  const onFillRandom = () => {
    setValues(returnRandom(10, 0, 100));
  }
  const handleFilterTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;

      if (allowedChars.test(inputValue)) {
        setFilterType(inputValue);
      }
  }

  const handleFilterValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setFilterValue(Number(inputValue));
  }

  const handleInputChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const newValues = [...values];
    newValues[index] = Number(e.target.value);
    setValues(newValues);
  };

  const sortData = () => {
    getData(values, shouldFilter, filterType, filterValue).then((res) => {
      setSortedValues(res);
    })
  }

  const renderInputFields = () =>
    values.map((value, index) => (
      <NumberPlace number={value} change={handleInputChange(index)} isEditable={true} />
    ));

  const renderInputFieldsViewOnly = () => 
      sortedValues.map((value, index) => (
        <NumberPlace number={value} change={handleInputChange(index)} isEditable={false} />
      ))

  return (
    <Box className="container"> 
      <Typography variant="h4">Dynamic Input Fields</Typography>
      <Box className="editable">
        {renderInputFields()}
      </Box>
      <Box className="buttonFilterArea">
          <Box className="buttonArea">
            <Button variant="contained" onClick={onFillRandom}>Fill Random Data</Button>
            <Button variant="contained" onClick={sortData}>Sort Data</Button>
          </Box>
          <Box className="filterArea">
            <OutlinedInput type="number" 
              value={filterValue}
              onChange={handleFilterValueChange}
            />
            <OutlinedInput
              value={filterType}
              onChange={handleFilterTypeChange}
              inputProps={{ maxLength: 1 }} // Optional: Limit input length to 1 character
            />
            <Checkbox value={shouldFilter} onChange={(e) => {setShouldFilter(e.target.checked)}}/>
          </Box>
      </Box>
      <Box className="non-editable">
        {renderInputFieldsViewOnly()}
      </Box>
    </Box>
  );
}

export default App;