import React from 'react'

function RecipeItem(props) {
    let { name, benefits, imageUrl, link, timeTakenToMake, bestTimeToConsume, ingredients } = props;
  return (
    <div className="container my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {bestTimeToConsume} </span>
        </div>
        <img
          className="card-img-top"
          src={
            imageUrl
          }
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{benefits}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              Prep Time : {timeTakenToMake } 
            </small>
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Ingredients: {ingredients}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={link}
            target="_blank"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}
 
export default RecipeItem ;