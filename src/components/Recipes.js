import React, { useEffect, useState }  from 'react'
import RecipeItem from './RecipeItem'
import axios from 'axios';

// const token = localStorage.getItem('token');
// console.log(localStorage)
// const headers = {
//   Authorization: `Bearer ${token}`,
// };
function Recipes() {
  const token = localStorage.getItem('token');
console.log(localStorage)
const headers = {
  Authorization: `Bearer ${token}`,
};
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
      axios.get('https://whip-woolen-ketch.glitch.me/recipe/detail',{headers})
        .then(response => {
            console.log(response.data.recipe)
          setRecipes(response.data.recipe);
        })
        .catch(error => {
          console.error('Error fetching recipes:', error);
        });
    }, []);
  
  return (
    <>
      <h2 className="text-center" style={{margin: '90px 35px 0px '}}>Fitness Recipe-App <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTJiuHoRVsLcofRJYMcLJSavxmiZs5cOcYBjRfaIsq3YGwem22k' alt="img" height={"45px"}/></h2>
          <div className="container">
             <div className="row">
             {recipes.map((element) => {
                return <div className="col-md-4" key={element._id}>
                    <RecipeItem name={element.name ? element.name : ""} benefits={element.benefits ? element.benefits : ""} imageUrl={element.image} link={element.link} bestTimeToConsume={element.bestTimeToConsume} timeTakenToMake={element.timeTakenToMake} ingredients={element.ingredients} />
                </div>
                })}
             </div>
             </div> 
             </>
  )
}

export default Recipes ;
