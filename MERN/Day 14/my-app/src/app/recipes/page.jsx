import { getRecipes } from '@/library/api-call'
import React from 'react'
import RecipeCard from '@/components/RecipeCard'

export default async function page() {
    const recipes = await getRecipes()
    return (
        <div className='w-full p-8'>
            <h1 className='text-3xl font-bold mb-4'>Recipes</h1>
            <div className='grid grid-cols-4 gap-8'>

                {
                    recipes.map((recipe) => (
                        <RecipeCard
                            id={recipe.id}
                            key={recipe.id}
                            name={recipe.name}
                            image={recipe.image}
                            prepTimeMinutes={recipe.prepTimeMinutes}
                            cookTimeMinutes={recipe.cookTimeMinutes}
                        />
                    ))
                }
            </div>
        </div>
    )
}
