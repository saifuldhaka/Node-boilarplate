// lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('././db.json')
const db = low(adapter)

let categories = [];

function getCategories() {
  categories = db.get('categories')
  .value()
  return categories;
}

function getCategory(id) {
  // return categories.find((cat) => cat.id === Number(id));

  categories = db
  .get('categories')
  .find({ id: Number(id) })
  .value();

  return categories;
}

function createCategory(category) {
  // Add a Category
  db.get('categories')
  .push(category)
  .write()
  

  // categories.push(category);
}

function deleteCategory(id) {
  console.log(Number(id));
  // categories = categories.filter((category) => Number(id) !== category.id);

  db.get('categories')
  .remove({ id: Number(id) })
  .write()

}

module.exports = {
  getCategory,
  getCategories,
  createCategory,
  deleteCategory,
};
