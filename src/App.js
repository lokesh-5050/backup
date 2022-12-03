import React, { useState } from "react";
import "../src/App.css";
import Create from "./Components/Create";
// import { nanoid } from "nanoid";
import Show from "./Components/Show";
function App() {
  //make a toogle for show name
  // const [gallery, setGallery] = useState([]);

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e.target);
  //   const [name, url] = e.target;
  //   const newData = {
  //     name: name.value,
  //     url: url.value,
  //   };
  //   setGallery([...gallery, newData]);
  //   e.target[0].value = ""
  //   e.target[1].value = ""
  // };

  // var lo = <h4>Loading...</h4>
  // if (gallery.length > 0) {
  //   lo = gallery.map((e, i) => (
  //     <li key={i}>
  //       Name: {e.name} , Image : <img width={"30%"} height={"50%"} src={e.url} alt="Invalid Url" />
  //     </li>
  //   ));
  // }
  // console.log(gallery);

  //Two-way-binding(11/23/2022)

  const [gallery, setGallery] = useState([]);

  const [book, setBook] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // const id = nanoid();
    if (!book.trim() || !url.trim()) {
      alert("Write Something in the input fields!");
      return;
    }

    const newData = { book, desc, url };
    setGallery([...gallery, newData]);
    setBook("");
    setDesc("");
    setUrl("");
  };

  


  const handleDelete = (index) =>{
    const newGallery = gallery.filter((e,i)=> index !== i);
    console.log(newGallery)
    setGallery(newGallery)
  }

  return (
    <>
      {/* <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Type the Author Name" />
        <input type="text" placeholder="Url" />
        <input type="submit" value="Submit" />
      </form>
      <ul>{lo}</ul> */}

      <Create handleFormSubmit={handleFormSubmit} book={book} setBook={setBook} desc={desc} setDesc={setDesc} url={url} setUrl={setUrl}/>
      {/* <div className="container d-flex flex-wrap gap-3">{showData}</div> */}
      <Show gallery={gallery} handleDelete={handleDelete}/>
    </>
  );
}

export default App;
