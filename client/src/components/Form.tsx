import { TextField } from "@mui/material"
import Button from "@mui/material/Button";
import { useState } from "react";
import qs from 'qs';
import axios from "axios";

import { gql, useMutation } from "@apollo/client";

const add_cache = gql`
mutation Mutation($cacheInput: CacheInput) {
  createCache(cacheInput: $cacheInput)
}
`;

function Form() {
    const [addCache, {data, loading, error}] = useMutation(add_cache);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [tags, setTags] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(event) {
      event.preventDefault();
      console.log({
        cacheInput: {
          title: title,
          tags: tags,
          longitude: longitude,
          latitude: latitude,
          image: image,
          description: description
        }
      });

      addCache({
        variables:
        {
          cacheInput: {
            title: title,
            tags: tags,
            longitude: Number(longitude),
            latitude: Number(latitude),
            image: image,
            description: description
          }
        }
      })
      .then(() => {
        console.log('Cache added successfully!')
      })
      .catch((err) => {
        console.error('Error adding cache:', err)
      });
    }

    return (
      <div style={{textAlign: "center"}}>
        <h1>Leave your cache</h1>
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

        <br/>

        <TextField
          sx={{mb: 3}}
          id="image"
          label="image"
          type="text"
          placeholder="https://deviantart/{imageurl}"
          variant="filled"
          onChange={e => setImage(e.target.value)}
          value={image}
          size="small"
          inputProps={{maxLength: 2000, style: {width: "40vw"}}}
        />

        <br />

        <Button
        variant="contained"
        onClick={handleSubmit}>
            Submit
        </Button>
      </div>
    )
  }
export default Form