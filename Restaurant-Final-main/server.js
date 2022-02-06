const express = require('express');
const Menu = require('./Menu');
const MenuItem = require('./MenuItem');
const Restaurant = require('./Restaurant');
const Handlebars = require('handlebars')
const { engine } = require ('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const { check, validationResult } = require('express-validator');
const port = 3000;
const app = express();


app.use(express.static(__dirname+'/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('hbs', engine({handlebars: allowInsecurePrototypeAccess(Handlebars), extname: 'hbs', defaultLayout: 'index',
layoutsDir: `${__dirname}/views/layouts`, partialsDir: `${__dirname}/views/partials`}));
app.set('view engine', 'hbs');
app.set("views", "./views");

// CREATING THE PAGES 

app.get('/restaurants', async (req, res) => {
  const restaurants = await Restaurant.findAll();
  res.render('main', { restaurants });
});

app.get('/restaurants/managing', async (req, res) => {
  res.render('managing');
});

app.get("/restaurants/:id", async(req, res) => {
  const rObj = await Restaurant.findByPk(req.params.id,{include: {model: Menu, as: "Menu", include: {model: MenuItem, as: "MenuItem"}}});
  res.render('restaurant', {restaurant: rObj });
});

// CREATING A NEW RESTAURANT FROM THE FORM 

app.post("/restaurants",[check('name').not().isEmpty().trim().escape(),
check("image").not().isEmpty().trim().isURL().isLength(0,50)], async(req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  await Restaurant.create(req.body);
  res.redirect("/restaurants");
});

app.post("/restaurants/:id/menus", async(req, res) => {
  await Menu.create(req.body);
  console.log(req.headers);
  res.redirect(`/restaurants/${req.body.restaurant_id}`);
});

app.post("/restaurants/menus/menuitems", async(req, res) => {
  await MenuItem.create(req.body);
});

// DELETING A RESTAURANT, MENU AND MENUITEMS

app.post("/restaurants/:id/menu", async(req, res) => {
  await Menu.destroy({where: req.body});
});

app.post("/restaurants/:id/menu/menuitems", async(req, res) => {
  await MenuItem.destroy({where: req.body});
});

app.post("/restaurants/:id", async(req, res) => {
  await Restaurant.destroy({where: req.body});
});

// UPDATING A RESTAURANT, MENU AND MENUITEMS

app.post("/restaurants/menu/update", async(req, res) => {
  await Menu.update(req.body, {where: {id: req.body.id}});
});

app.post("/restaurants/menu/menuitem/update", async(req, res) => {
  await MenuItem.update(req.body, {where: {id: req.body.id}});
});

app.post("/restaurants/:id/update", async(req, res) => {
  await Restaurant.update(req.body, {where: {id: req.body.id}});
});


// lISTENING PORT

app.listen(port, () => {
console.log(`Server listening at http://localhost:${port}`);
});