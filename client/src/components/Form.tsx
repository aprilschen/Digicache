import { TextField } from "@mui/material"
import Button from "@mui/material/Button";
import { useState } from "react";
import qs from 'qs';
import axios from "axios";

function Form() {

    function handleSubmit(event) {
      event.preventDefault();

      const formData = new FormData();

      formData.append('username', 'admin');
      formData.append('email', 'aprilschen6@gmail.com')
      formData.append('date', date);
      formData.append('time', time);
      formData.append('title', title);
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
      formData.append('description', description);
      formData.append('tags', tags);
      formData.append('image', image);

      console.log(image);

      try {
        axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/caches",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
        window.location.reload();
      } catch (e) {
        console.log(e);
      }
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [tags, setTags] = useState("");
    const [image, setImage] = useState('');

    return (
      <div style={{textAlign: "center"}}>
        <h1>Leave your cache</h1>
        <form onSubmit={handleSubmit}>
          <TextField
            sx={{mb: 3}}
            required
            id="title"
            label="Title"
            type="text"
            placeholder="My Birthday Spot!"
            variant="filled"
            inputProps={{minLength: 2, maxLength: 100, style: {width: "40vw"}}}
            onChange={e => setTitle(e.target.value)}
            value={title}
          />

          <br />

          <TextField
            sx={{mb: 3}}
            multiline
            required
            rows={3}
            id="description"
            label="Description"
            type="text"
            placeholder="How did you feel visiting here?"
            variant="filled"
            onChange={e => setDescription(e.target.value)}
            value={description}
            inputProps={{minLength: 3, maxLength: 2000, style: {width: "40vw"}}}
          />

          <br />

          <TextField
          sx={{mb: 1}}
          required
          id="latitude"
          label="Latitude"
          type="text"
          placeholder="35.6931"
          variant="filled"
          helperText="Click here for help"
          onChange={e => setLatitude(e.target.value)}
          value={latitude}
          inputProps={{maxLength: 20, style: {width: "40vw"}}}
          />

          <br />

          <TextField
          sx={{mb: 1}}
          required
          id="longitude"
          label="Longitude"
          type="text"
          placeholder="139.7065"
          variant="filled"
          helperText="Click here for help"
          onChange={e => setLongitude(e.target.value)}
          value={longitude}
          inputProps={{maxLength: 20, style: {width: "40vw"}}}

          />

          <br />

          <TextField
            sx={{mb: 3}}
            id="date"
            type="date"
            variant="filled"
            onChange={e => setDate(e.target.value)}
            value={date}
            size="small"
            inputProps={{ style: {width: "40vw"}}}

          />

          <br />

          <TextField
            sx={{mb: 3}}
            id="time"
            type="time"
            variant="filled"
            onChange={e => setTime(e.target.value)}
            value={time}
            inputProps={{ style: {width: "40vw"}}}

          />

          <br />

          <TextField
            sx={{mb: 3}}
            id="tags"
            label="Tags"
            type="text"
            placeholder="Japan, Cityscape, Aesthetic"
            variant="filled"
            onChange={e => setTags(e.target.value)}
            value={tags}
            size="small"
            inputProps={{maxLength: 2000, style: {width: "40vw"}}}
          />

          <br />

          <input style={{marginBottom: '3vh', marginLeft: '5vh'}}
            //hidden
            type="file"
            accept="image/*"
            multiple
            onChange={e => setImage(e.target.files[0])}
          />

          <br />

          <Button
          type="submit"
          variant="contained">
            Submit
          </Button>
        </form>
      </div>
    )
  }
export default Form