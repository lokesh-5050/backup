import React, { useState } from "react";
import "../src/App.css";
import { nanoid } from "nanoid";
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
  const [book, setBook] = useState("");
  const [url, setUrl] = useState('')
  const handleFormSubmit = (e) =>{
    e.preventDefault();
    const id = nanoid();
    console.log(book , url);
  }

  return (
    <div>
      {/* <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Type the Author Name" />
        <input type="text" placeholder="Url" />
        <input type="submit" value="Submit" />
      </form>
      <ul>{lo}</ul> */}

      <div className="container text-center ">
        <form onSubmit={handleFormSubmit} className="container mt-3 w-25 ">
          <h1>Gallery</h1>
          <input type="text" value={book} onChange={(e)=> setBook(e.target.value)} className="form-control mb-3" placeholder="Book name" />
          <input type="text" value={url} onChange={(e)=> setUrl(e.target.value)} className="form-control" placeholder="Url" />
          <button className="btn btn-success btn-lg mt-3">Create</button>
        </form>
      </div>
      <hr className="container mt-3" />
    </div>
  );
}

export default App;
