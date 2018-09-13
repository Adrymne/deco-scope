import React from 'react';
import TextField from '@material-ui/core/TextField';

const SearchInput = ({ inputProps }) => (
  <TextField autoFocus fullWidth {...inputProps} />
);

export default SearchInput;
