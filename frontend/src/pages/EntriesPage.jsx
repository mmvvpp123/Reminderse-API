import React, { useState, useEffect } from "react";
import Axios from "axios";
import LinkCard from "../components/LinkCard";
import TextCard from "../components/TextCard";
import { EntryProvider } from "../context/EntryContext";
import { Link } from "react-router-dom";
import { API_ROOT_URL } from "../constants";



const EntriesPage = () => {
  const [links, setLinks] = useState([]);
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    Axios.all([Axios.get(`${API_ROOT_URL}/api/link/list`), Axios.get(`${API_ROOT_URL}/api/text/list`)]).then(
      Axios.spread((links, texts) => {
        setLinks(links.data);
        setTexts(texts.data);
      })
    );
  }, []);
  if (links.length > 0 && texts.length > 0) {
    return (
      <div>
        <h1>Links</h1>
        <div className="grid">
          {links.length > 0
            ? links.map((link) => (
              <EntryProvider value={link}>
                <LinkCard />
              </EntryProvider>
            ))
            : null}
        </div>
        <h1>Texts</h1>
        <div className="grid">
          {texts.length > 0
            ? texts.map((text) => (
              <EntryProvider value={text}>
                <TextCard />
              </EntryProvider>
            ))
            : null}
        </div>
      </div>
    );
  } else if (links.length > 0) {
    return (
      <>
        <h1>Links</h1>
        <div className="grid">
          {links.length > 0
            ? links.map((link) => (
              <EntryProvider key={link.id} value={link}>
                <LinkCard />
              </EntryProvider>
            ))
            : null}
        </div>
      </>
    );
  } else if (texts.length > 0) {
    return (
      <>
        <h1>Texts</h1>
        <div className="grid">
          {texts.length > 0
            ? texts.map((text) => (
              <EntryProvider key={text.id} value={text}>
                <TextCard />
              </EntryProvider>
            ))
            : null}
        </div>
      </>
    );
  } else {
    return (
      <div>
        <h1>
          You currently don't have any entries. To add an entry,{" "}
          <Link to="/add">click here</Link> or use the sidebar.
        </h1>
      </div>
    );
  }
};

export default EntriesPage;
