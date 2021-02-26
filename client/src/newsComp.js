import React from "react";


function NewsCard(props){
 return(
    <div class="card mb-3 border-gradient-purple" >
    <div class="row g-0">
      <div class="col-md-4 thumbnail">
        <img className="newsImg" src={props.img} alt="..."></img>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h2 class="card-title">{props.name}</h2>
          <br />
          <p className='desc'>{props.desc}</p>
          <p className='date'>{props.date.substr(11,15).substr(0,8)} {props.date.substr(0,10)}</p>
          <a href={props.url} className="btn btn-primary" target="_blank">Read more ...</a>
        </div>
      </div>
    </div>
  </div>
 )
}

export default NewsCard;