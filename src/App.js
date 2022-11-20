import React, { useState } from "react";
import '../src/App.css'
function App() {
  //make a toogle for show name

  const [gallery, setGallery] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const [name, url] = e.target;
    const newData = {
      name: name.value,
      url: url.value,
    };
    setGallery([...gallery, newData]);
    e.target[0].value = ""
    e.target[1].value = ""
  };

  var lo = <h4>Loading...</h4>
  if (gallery.length > 0) {
    lo = gallery.map((e, i) => (
      <li key={i}>
        Name: {e.name} , Image : <img width={"30%"} height={"50%"} src={e.url} alt="Invalid Url" />
      </li>
    ));
  }
  console.log(gallery);

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Type the Author Name" />
        <input type="text" placeholder="Url" />
        <input type="submit" value="Submit" />
      </form>
      <ul>{lo}</ul>
    </div>
  );
}

export default App;
