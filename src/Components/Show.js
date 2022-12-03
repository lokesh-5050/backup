import React from 'react'
import loader from "../assests/infinity_loader.gif";

const Show = (props) => {
    const {gallery , handleDelete} = props
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

  return (
    <div className="conatiner d-flex flex-wrap gap-3">{showData}</div>
  )
}

export default Show