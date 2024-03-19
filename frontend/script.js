async function searchFood() {
    const searchInput = document.getElementById('searchInput').value;
    
    // Envía la consulta a la API de IA (por ejemplo, Edamam)
    const response = await fetch(`https://api.edamam.com/api/food-database/v2/parser?ingr=${searchInput}&app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY`);
    const data = await response.json();

    displayResults(data);
}

function displayResults(data) {
    const foodList = document.getElementById('foodList');
    foodList.innerHTML = '';

    if (data.hints.length === 0) {
        foodList.innerHTML = '<p>No se encontraron resultados.</p>';
        return;
    }

    data.hints.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `
            <h2>${food.food.label}</h2>
            <p>Calorías: ${food.food.nutrients.ENERC_KCAL} kcal</p>
            <p>Proteínas: ${food.food.nutrients.PROCNT} g</p>
            <p>Grasas: ${food.food.nutrients.FAT} g</p>
            <p>Carbohidratos: ${food.food.nutrients.CHOCDF} g</p>
        `;
        foodList.appendChild(foodItem);
    });
}
