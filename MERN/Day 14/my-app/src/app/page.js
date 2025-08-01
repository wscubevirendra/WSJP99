import RecipeCard from '@/components/RecipeCard';
import Slider from '@/components/Slider';
import { getRecipes } from '@/library/api-call';
import React from 'react';

export default async function Page() {
  const recipes = await getRecipes();
  const topRecipes = recipes.slice(0, 4);
  const featureRecipes = recipes.slice(4, 8);
  const trendingRecipes = recipes.slice(8, 12);
  const imageSlider = recipes.slice(13, 20); // Assuming you want the first 5 recipes for the slider

  return (
    <div className="p-8 space-y-12">
      {/* Top Section */}
      <div className="grid h-[300px] grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div>
          <h1 className="text-3xl font-bold mb-4">Welcome to Recipes</h1>
          <p className="text-gray-600">Discover delicious recipes and cooking inspiration.</p>
        </div>
        <Slider data={imageSlider} />
      </div>

      {/* Top Recipes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Top Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {topRecipes.map((recipe) => (
            <RecipeCard id={recipe.id} key={recipe.id} name={recipe.name} image={recipe.image} prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
          ))}
        </div>
      </section>

      {/* Feature Recipes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Feature Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featureRecipes.map((recipe) => (
            <RecipeCard id={recipe.id} key={recipe.id} name={recipe.name} image={recipe.image} prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
          ))}
        </div>
      </section>

      {/* Trending Recipes */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Trending Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trendingRecipes.map((recipe) => (
            <RecipeCard id={recipe.id} key={recipe.id} name={recipe.name} image={recipe.image} prepTimeMinutes={recipe.prepTimeMinutes} cookTimeMinutes={recipe.cookTimeMinutes} />
          ))}
        </div>
      </section>
    </div>
  );
}
