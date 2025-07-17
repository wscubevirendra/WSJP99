import React, { useEffect, useState } from 'react'

export default function Card() {
    const [recipes, setRecipes] = useState([])
    const fetchRecipes = async () => {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json()
        setRecipes(data.recipes)
    }

    useEffect(
        () => {
            fetchRecipes();
        },
        []
    )
    return (
        <div className='container-xl p-4'>
            <div className='row gy-4'>
                {
                    recipes.map((data, index) => {
                        return (
                            <div className='col-3'>
                                <div className="card" >
                                    <img height={200} src={data.image} className="card-img-top" alt="..." />
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
