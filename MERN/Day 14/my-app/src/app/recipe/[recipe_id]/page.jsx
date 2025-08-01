import { getRecipeById } from '@/library/api-call';
import React from 'react';

export default async function Page({ params }) {
    const { recipe_id } = params;
    const data =await getRecipeById(recipe_id);

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <img
                src={data.image}
                alt={data.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
            <div className="flex flex-wrap gap-4 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {data.cuisine}
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {data.difficulty}
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    {data?.mealType?.join(',')}
                </span>
                <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                    {data?.tags?.join(', ')}
                </span>
            </div>
            <div className="mb-4 flex gap-6">
                <span>Prep: {data.prepTimeMinutes} min</span>
                <span>Cook: {data.cookTimeMinutes} min</span>
                <span>Servings: {data.servings}</span>
                <span>Calories: {data.caloriesPerServing}</span>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc list-inside">
                    {data?.ingredients?.map((ing, idx) => (
                        <li key={idx}>{ing}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2">Instructions</h2>
                <ol className="list-decimal list-inside">
                    {data?.instructions?.map((step, idx) => (
                        <li key={idx}>{step}</li>
                    ))}
                </ol>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <span className="text-yellow-500 font-bold">{data.rating}★</span>
                <span className="text-gray-600">({data.reviewCount} reviews)</span>
            </div>
        </div>
    );
}
