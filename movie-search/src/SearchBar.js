import { TextField } from '@material-ui/core';

export const SearchBar = ({ onChange, value }) => {
  return (
    <TextField
      placeholder="Search for Movies"
      onChange={onChange}
      value={value}
      variant="outlined"
      margin="dense"
      fullWidth
    />
  );
};
