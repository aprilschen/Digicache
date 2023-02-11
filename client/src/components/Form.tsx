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

      try {
        axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/caches",
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        })
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
    const [image, setImage] = useState("");

    return (
      <div style={{textAlign: "center"}}>
        <h1>Leave your cache</h1>
        <form onSubmit={handleSubmit}>
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
            onChange={e => setTitle(e.target.value)}
            value={title}
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
            onChange={e => setDescription(e.target.value)}
            value={description}
          />

          <hr />

          <TextField
            id="date"
            type="date"
            variant="filled"
            onChange={e => setDate(e.target.value)}
            value={date}
          />

          <hr />

          <TextField
            id="time"
            type="time"
            variant="filled"
            onChange={e => setTime(e.target.value)}
            value={time}
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
            onChange={e => setLatitude(e.target.value)}
            value={latitude}
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
            onChange={e => setLongitude(e.target.value)}
            value={longitude}
          />

          <hr />

          <TextField
            id="tags"
            label="Tags"
            type="text"
            placeholder="Japan, Cityscape, Aesthetic"
            variant="filled"
            onChange={e => setTags(e.target.value)}
            value={tags}
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
              onChange={e => setImage(e.target.value)}
              value={image}
            />
          </Button>

          <hr />

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