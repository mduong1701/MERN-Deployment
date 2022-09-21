const Fruit = require("../controllers/fruit.controller");

module.exports = (app) => {
    app.get("/api/fruits", Fruit.findAll)
    app.post("/api/fruits", Fruit.create)
    app.get("/api/fruits/:id", Fruit.findOne)
    app.put("/api/fruits/:id", Fruit.update)
    app.delete("/api/fruits/:id", Fruit.delete)
}