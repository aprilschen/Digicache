import { TextField } from "@mui/material"
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from "@mui/material/Button";

function Form() {
    return (
      <div style={{textAlign: "center"}}>
        <h1>Leave your cache</h1>
        <FormControl>
          <TextField
            required
            id="title"
            label="Title"
            type="text"
            placeholder="My Birthday Spot!"
            variant="filled"
            inputProps={{
              style: {
                width: "40vw",
              },
            }}
          />

          <hr />

            <TextField
            required
            id="latitude"
            label="Latitude"
            type="text"
            placeholder="35.6931"
            variant="filled"
            helperText="Click here for help"
          />

          <hr />

          <TextField
            required
            id="longitude"
            label="Longitude"
            type="text"
            placeholder="139.7065"
            variant="filled"
            helperText="Click here for help"
          />

          <hr />

          <TextField
            multiline
            rows={3}
            id="description"
            label="Description"
            type="text"
            placeholder="How did you feel visiting here?"
            variant="filled"

          />

          <hr />

          <TextField
            id="tags"
            label="Tags"
            type="text"
            placeholder="Japan, Cityscape, Aesthetic"
            variant="filled"
          />

          <hr />

          <Button
            variant="outlined"
            component="label"
          >
            Upload Images
            <input
              hidden accept="image/*" 
              multiple type="file"
            />
          </Button>

          <hr />

          <Button 
          type="submit" 
          variant="contained">
            Submit
          </Button>

        </FormControl>
      </div>
    )
  }
export default Form