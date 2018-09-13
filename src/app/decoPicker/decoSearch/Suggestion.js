import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const Suggestion = ({ label, itemProps, isSelected }) => (
  <MenuItem selected={isSelected} {...itemProps}>
    {label}
  </MenuItem>
);

export default Suggestion;
