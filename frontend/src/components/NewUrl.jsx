import React, { useState, useEffect } from "react";
import TextField from "../components/TextField";
import Button from "../components/Button";
import Axios from "axios";

const NewUrl = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState();
  useEffect(() => {
    navigator.clipboard.readText().then((text) => {
      if (validURL(text)) {
        setUrl(text);
      }
    });
  }, []);

  function validURL(s) {
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
  }

  function handleSubmit() {
    const data = {
      entry_title: title,
      url: url,
      category: category,
    };
    Axios.post("/api/link/add", data).then((res) => console.log(res));
  }
  return (
    <>
      <h1>Add Link</h1>
      <TextField
        label="Entry Title"
        placeholder="Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="URL"
        placeholder="https://..."
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <TextField
        label="Category (optional)"
        placeholder="Category"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button onClick={handleSubmit} label="Add Entry" />
    </>
  );
};

export default NewUrl;