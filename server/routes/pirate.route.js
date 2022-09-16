const Author = require("../controllers/pirate.controller");

module.exports = (app) => {
    app.get("/api/pirates", Author.findAll)
    app.post("/api/pirates", Author.create)
    app.get("/api/pirates/:id", Author.findOne)
    app.put("/api/pirates/:id", Author.update)
    app.delete("/api/pirates/:id", Author.delete)
}