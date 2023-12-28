const recipes = [
    { recipe_name: 'Broccoli Pesto Pasta' },
    { recipe_name: 'Lemon Chicken' },
    { recipe_name: 'Salmon' },
]
const ingredients = [
    { ingredient_name: 'wefa', ingredient_unit: 'lbs' },
    { ingredient_name: 'fgsd', ingredient_unit: 'lbs' },
    { ingredient_name: 'gbnrs', ingredient_unit: 'kilos' },
    { ingredient_name: 'asdf', ingredient_unit: 'grams' },
]

const step_ingredients = [
    { step_id: 2, ingredient_id: 1, quantity: 1 },
    { step_id: 3, ingredient_id: 2, quantity: 1.5 },
    { step_id: 3, ingredient_id: 3, quantity: 2 },
    { step_id: 5, ingredient_id: 4, quantity: 1 },
    { step_id: 5, ingredient_id: 4, quantity: 1.2 },
    { step_id: 7, ingredient_id: 1, quantity: 1.7 },
]

const steps = [
    { step_text: 'werf', step_number: 1, recipe_id: 1 },
    { step_text: 'fwerf', step_number: 2, recipe_id: 1 },
    { step_text: 'gtrwg', step_number: 3, recipe_id: 1 },

    { step_text: 'wedfsgrf', step_number: 1, recipe_id: 2 },
    { step_text: 'fwasfdrf', step_number: 2, recipe_id: 2 },
    { step_text: 'gtrwgsdfdg', step_number: 3, recipe_id: 2 },

    { step_text: 'werhrf', step_number: 1, recipe_id: 3 },
    { step_text: 'fwjytrerf', step_number: 2, recipe_id: 3 },

]
exports.seed = async function (knex) {
    await knex('recipes').insert(recipes)
    await knex('ingredients').insert(ingredients)
    await knex('steps').insert(steps)
    await knex('step_ingredients').insert(step_ingredients)
}