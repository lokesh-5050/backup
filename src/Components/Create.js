import React from 'react'

const Create = (props) => {
    const {handleFormSubmit,book,setBook,desc,setDesc,url,setUrl} = props
  return (
    <>
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
      </>
  )
}

export default Create