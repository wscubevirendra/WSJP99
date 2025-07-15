import React, { useEffect, useState } from 'react'

export default function App() {
  const [recipes, setrecipes] = useState([]);

  async function getRecipes() {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    setrecipes(data.recipes)
  }

  useEffect(
    () => {
      getRecipes()
    },
    []
  )


  return (
    <div className='container-xl'>
      <div className='row gy-4'>
        {
          recipes.map((data, index) => {
            return (
              <div key={index} className='col-4'>
                <div className="card" >
                  <img src={data.image} height={200} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                  </div>
                </div>

              </div>
            )
          })
        }


      </div>
    </div>
  )
}
