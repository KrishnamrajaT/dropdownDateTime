import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import moment from "moment";
moment().format();

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  let dateDisplay = [];
  for (let i = 1; i <= 72; i++) {
    const date2 = moment().add(i, "h").format("DD/MM/YYYY h:a");
    dateDisplay.push([date2]);
  }
  console.log("invoiceDt", dateDisplay);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {dateDisplay.map((item, index) => {
            console.log("invItem", item);
            return <MenuItem value="SYSTEM">{`${item}`}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
