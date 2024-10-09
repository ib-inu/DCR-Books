/* eslint-disable react/prop-types */
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function BasicSelect({ value, setValue }) {

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Box >
            <FormControl >
                <Select
                    sx={{
                        bgcolor: "white",
                        minWidth: 80,
                        height: 40
                    }}
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value="favorite">Favorite</MenuItem>
                </Select>
            </FormControl>
        </Box >
    );
}