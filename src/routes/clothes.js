'use strict';

const express = require('express');
const {cloths} = require('../models/index');

const routerCloth = express.Router();

//routes
routerCloth.get('/cloths',getAllCloths);
routerCloth.post('/cloths',createNewCloths);
routerCloth.get('/cloths/:id',getOneCloths);
routerCloth.delete('/cloths/:id',deleteOneCloths);
routerCloth.put('/cloths/:id',Updatecloths);

//localhost:3000/cloths
async function getAllCloths(req,res){
    let clothsData = await cloths.findAll();
    res.status(200).json(clothsData);
}

async function createNewCloths(req,res){
    let newCloths = req.body;
    let clothsDbNew = await cloths.create(newCloths);
    res.status(201).json(clothsDbNew); 
}

async function getOneCloths(req,res){
    let onecloths = parseInt(req.params.id);
    let clothData = await cloths.findOne({where:{id: onecloths}});
    res.status(200).json(clothData);
}

async function deleteOneCloths(req,res){
   let clothsId = parseInt(req.params.id);
   let deleteOnecloth = await cloths.destroy({where:{id: clothsId}})
   res.status(204).json(deleteOnecloth); 
}

async function Updatecloths(req,res){
    let Updbody = req.body;
    let clothID = parseInt(req.params.id);
    let updatedCltoh = await cloths.findOne({where:{id: clothID}})
    let updateOneCloth = await updatedCltoh.update(Updbody);
    res.status(201).json(updateOneCloth);
}

module.exports = routerCloth;