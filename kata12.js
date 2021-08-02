const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    let recipeName = ""
  // local function to determine what recipe can be made based on the ingredients
  const ingredientCheck = function (bakery, recipes) {
    //create variable to hold new array of matched recipes
    let matchedRecipes = []
    //loops through recipe object
    for (let i = 0; i < recipes.length; i++) {
        //loops through array of ingredients
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
            //loops through ingredients the bakery has
            for (let b = 0; b < bakery.length; b++){
                //checks to see if ingredient of bakery matches ingredient of recipe
                if (recipes[i].ingredients[j] === bakery[b]) {
                    //if matches adds it to an array
                    matchedRecipes.push(recipes[i].name);
                }else {
                    //if no matched found continues loop
                    continue
                };
            };
        };
    };
    // return recipe array
    return matchedRecipes;
  };

  //set variables for each bakery
  let bakeryARecipes = ingredientCheck(bakeryA, recipes);
  let bakeryBRecipes = ingredientCheck(bakeryB, recipes);
  //console.log(bakeryARecipes);
  //console.log(bakeryBRecipes);
  //loop through recipe array for bakeryA
    for (let k = 0; k < bakeryARecipes.length; k++) {
        //nested loop to loop through recipe of bakeryB
        for (let l = 0; l < bakeryBRecipes.length; l++) {
            //compare each recipe to see if match
            if (k === l) {
                //if match return recipe
                recipeName = bakeryBRecipes[l];
            };
        };
    };
   
  //return recipe name  
  return recipeName;
};


let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));


bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));