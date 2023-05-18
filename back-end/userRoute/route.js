const express=require("express");
const app=express.Router();
const testController=require("../controller/testController");

app.get("/show",testController.showData);

app.get("/showid/:id",testController.showId);

app.get("/showqu",testController.showqu);

app.post("/insert",testController.insert);

app.post("/insertD",testController.insertD);

app.patch("/update",testController.update);

app.patch("/updateD/:id",testController.updateD);

app.patch("/updatem/:id",testController.updatem);

app.patch("/updatep",testController.updatep);

app.delete("/delete",testController.deletes);

app.delete("/delete/:id",testController.deleted);

app.delete("/deletem",testController.deletem);

module.exports=app;