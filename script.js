const data = require('./food.json');
// // console.log(data);

//list all the food items
const allitems = data.forEach((items) => {
    console.log(items);
  });
  
//list all the food items with category vegetables
const vegetables = data.filter((item)=>{
    return item['category']=='Vegetable'
})
console.log(vegetables)

// list all the food items with category fruit
const fruit = data.filter((item)=>{
    return item['category']=='Fruit'
})
console.log(fruit)

// list all the food items with category protien
const protien = data.filter((item)=>{
    return item['category']=='Protein'
})
console.log(protien)

// list all the food items with category nuts
const nuts = data.filter((item)=>{
    return item['category']=='Nuts'
})
console.log(nuts)

// list all the food items with category grains
const grains = data.filter((item)=>{
    return item['category']=='Grain'
})
console.log(grains)

// list all the food items with category dairy
const dairy = data.filter((item)=>{
    return item['category']=='Dairy'
})
console.log(dairy)

// list all the food items with calorie above 100
const calorieAbove100 = data.filter((item)=>{
    return item['calorie'] > 100;
})
console.log(calorieAbove100)

// list all the food items with calorie below 100
const calorieBelow100 = data.filter((item)=>{
    return item['calorie'] < 100;
})
console.log(calorieBelow100)

// list all the food items with highest protien content to lowest
const protiensContent = data.sort((a, b) => {
    return b.protiens - a.protiens;
  });
console.log(protiensContent);

// list all the food items with lowest cab content to highest
const cabContent = data.sort((a, b)=> {
    return a.cab - b.cab;
  });
console.log(cabContent);

