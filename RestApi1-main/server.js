const express = require('express');
const Menu = require('./Menu');
const MenuItem = require('./MenuItem');
const Restaurant = require('./Restaurant');
const app = express();
const { check, validationResult } = require('express-validator');
const menuItemArr = [];

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/flipcoin", (req, res) => {
  res.send(["HEADS","TAILS"][Math.round(Math.random())]);
});

app.get("/restaurants", async(req, res) => {
  res.json(await Restaurant.findAll());
});

app.get("/restaurants/:id/menus", async(req, res) => {
  const rObj = await Restaurant.findByPk(req.params.id,{include: {model: Menu, as: "Menu"}});
  res.json(rObj.Menu);
});

app.get("/restaurants/:id/menus/menuitems", async(req, res) => {
  const rObj = await Restaurant.findByPk(req.params.id,{include: {model: Menu, as: "Menu", include: {model: MenuItem, as: "MenuItem"}}});
  rObj.Menu.forEach(e => menuItemArr.push(e.MenuItem));
  res.json(menuItemArr.flat());
});

app.put("/restaurants/:id/menus/:menuid", async (req, res) => {
  res.send(await Menu.update(req.body, {where: {id: req.params.menuid}}));
});

app.get("/restaurants/:id", async(req, res) => {
  res.json(await Restaurant.findByPk(req.params.id,{include: {model: Menu, as: "Menu", include: {model: MenuItem, as: "MenuItem"}}}));
});

app.post("/restaurants",[check('name').not().isEmpty().trim().escape(),
check("image").not().isEmpty().trim().isURL().isLength(0,50)], async(req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  res.send(await Restaurant.create(req.body));
});

app.put("/restaurants/:id", async (req, res) => {
  res.send(await Restaurant.update(req.body, {where: {id: req.params.id}}));
});

app.delete("/restaurants/:id", async(req, res) => {
  res.json(await Restaurant.destroy({where: {id: req.params.id}}));
});

app.listen(3000, () => {
console.log(`Server listening at http://localhost:3000`);
});