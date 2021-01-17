// lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('././db.json')
const db = low(adapter)

let categories = [];

function getCategories() {
  return categories;
}

function getCategory(id) {
  return categories.find((cat) => cat.id === Number(id));
}

function createCategory(category) {
  console.log(category);
  // Add a Category
  db.get('categories')
  .push(category)
  .write()
  
  
  categories.push(category);
}

function deleteCategory(id) {
  categories = categories.filter((category) => Number(id) !== category.id);
}

module.exports = {
  getCategory,
  getCategories,
  createCategory,
  deleteCategory,
};
