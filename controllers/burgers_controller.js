//set required pages
const express = require('express')
const burger = require('../models/burger')
var router = express.Router();
//set router for root level get request
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});
//router post request to add a burger to the db
router.post("/api/burgers", function(req, res) {
  let newBurger = `burger_name = '${ req.body.name }'`
  burger.insertOne( newBurger, function(result) {
    res.json({ id: result.insertId });
  });
});
//router put to update burger devour status
router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  burger.updateOne(' devoured = true ', condition, function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;