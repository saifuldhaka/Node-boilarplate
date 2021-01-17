const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./controller');

router.get('/', (req, res) => {
  res.status(200).send(controller.getCategories());
});

router.get('/:id', (req, res) => {
  console.log(req.params);
  res.status(200).send(controller.getCategory(req.params.id));
});

router.post('/', (req, res) => {
  controller.createCategory(req.body);
  res.status(201).send({ message: 'Category created' });
});

router.delete('/:id', (req, res) => {
  controller.deleteCategory(req.params.id);
  res.status(201).send({ message: 'Category deleted' });
});

module.exports = router;
