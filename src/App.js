import React, { useState } from "react";
import "../src/App.css";
// import { nanoid } from "nanoid";
import loader from "../src/assests/infinity_loader.gif";
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

  let showData = (
    <p className="container w-100 text-center ">
      <img width={150} src={loader} alt="..." />
    </p>
  );

  if (gallery.length > 0) {
    showData = gallery.map((e, i) => (
      <div className="card" key={i} style={{ width: "18rem" }}>
        <img src={e.url} className="card-img-top me-3 mb-3" alt="..." />
        <div className="card-body d-flex justify-content-between align-items-center">
          <span>
          <h5 className="card-title">{e.book}</h5>
          <p className="card-text">{e.desc}</p>
          </span>
          <i onClick={()=> handleDelete(i)} className="ri-delete-bin-line"></i>
        </div>
      </div>
    ));
  }


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

      <div className="container text-center ">
        <form onSubmit={handleFormSubmit} className="container w-25 mt-2">
          <h1>Gallery📸</h1>
          <input
            type="text"
            value={book}
            onChange={(e) => setBook(e.target.value)}
            className="form-control mb-3"
            placeholder="Book name"
          />
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control mb-3"
            placeholder="Desc"
          />
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="form-control"
            placeholder="Url"
          />
          <button className="btn btn-success btn-lg mt-3">Create</button>
        </form>
        <hr className="container mt-3" />
      </div>
      <div className="container d-flex flex-wrap gap-3">{showData}</div>
    </>
  );
}

export default App;
