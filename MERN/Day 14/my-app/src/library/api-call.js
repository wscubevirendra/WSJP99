const getRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    if (response) {
        const data = await response.json();
        return data.recipes
    }
}


const getRecipeById = async (id) => {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (response) {
        const data = await response.json();
        return data
    }
}

export { getRecipes, getRecipeById }