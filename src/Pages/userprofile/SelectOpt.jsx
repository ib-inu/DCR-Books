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
        <Box>
            <FormControl>
                <Select
                    sx={{
                        bgcolor: "#d8cef0",
                        minWidth: 70,
                        height: 25,
                        "&:focus": {
                            outline: "none",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                        },
                    }}
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    MenuProps={{
                        PaperProps: {
                            sx: {
                                bgcolor: "#f0e4ff",

                            },
                        },
                    }}
                >
                    <MenuItem
                        sx={{ bgcolor: "#f0e4ff", "&:hover": { bgcolor: "#e0cfff" } }}
                        value="all"
                    >
                        All
                    </MenuItem>
                    <MenuItem
                        sx={{ bgcolor: "#f0e4ff", "&:hover": { bgcolor: "#e0cfff" } }}
                        value="favorite"
                    >
                        Favorite
                    </MenuItem>
                </Select>
            </FormControl>
        </Box>

    );
}