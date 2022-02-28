'use strict';

const express = require('express');
const {food} = require('../models/index');

const router = express.Router();

//routes
router.get('/food',getAllFood);
router.post('/food',createNewFood);
router.get('/food/:id',getOneFood);
router.delete('/food/:id',deleteOneFood);
router.put('/food/:id',UpdateFood);

//localhost:3000/food
async function getAllFood(req,res){
    let foodD = await food.findAll();
    res.status(200).json(foodD);
}

async function createNewFood(req,res){
    let newFood = req.body;
    // console.log(req.body);
    let foodDb = await food.create(newFood);
    res.status(201).json(foodDb);
}

async function getOneFood(req,res){
    let oneFood = parseInt(req.params.id);
    let fooddata = await food.findOne({where:{id: oneFood}})
    res.status(200).json(fooddata);
}
async function deleteOneFood(req,res){
    let deleteFoodID = parseInt(req.params.id);
    let deleteOneFood = await food.destroy({where:{id: deleteFoodID}})
    res.status(204).json(deleteOneFood)
}
async function UpdateFood(req,res){
    let updateBody = req.body;
    let FoodID = parseInt(req.params.id);
    let UpdateFoodOne = await food.findOne({where:{id: FoodID}})
        const updateFood = await UpdateFoodOne.update(updateBody);
        res.status(201).json(updateFood);
}
module.exports = router;