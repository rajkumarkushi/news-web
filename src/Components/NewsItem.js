import React from 'react'

const NewsItem =(props)=> {
    let {title,description,imageurl,newsurl,author,date,source}=props;

    return (
      <div>
     <div className="card" style={{width: "18rem"}}>
      <div style={{display:"flex",
    justifyContent:"flex-end",
    position:"absolute",
    right:"0"}}>
     <span class=" badge rounded-pill bg-danger" >
   {source}
  </span>
  </div>
  <img src={!imageurl?"https://stat4.bollywoodhungama.in/wp-content/uploads/2023/01/Pathaan-Box-Office-Estimate-Day-2-Shah-Rukh-Khan-creates-another-record-collects-Rs.-67-to-Rs.-69-crores-on-Day-2-1.jpeg":imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small className="text-muted">By {!author? "unknown":author} on {new Date(date).toGMTString()}</small></p>
    
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-primary">Read more</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
