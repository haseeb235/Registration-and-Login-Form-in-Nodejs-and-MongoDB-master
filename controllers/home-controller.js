// import the products model

const productsModel = require('../models/products-model');

exports.getHome = (req, res, next) => {
  let category = req.query.category;
  let productsModelPromise;
  let validCategories = ['smart-phones', 'gaming-consoles', 'laptops'];

  // if filtering:
  if (category && validCategories.includes(category))
    productsModelPromise = productsModel.getProductsByCategory(category);
  else productsModelPromise = productsModel.getAllProducts();

  productsModelPromise.then((products) => {
    res.render('index', {
      pageTitle: 'Home',
      products: products,
      isUser: req.session.userId,
      cartErrors: req.flash('cartErrors')[0],
      isAdmin: req.session.isAdmin,
    });
  });
};
