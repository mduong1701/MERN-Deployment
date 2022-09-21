const Fruit = require("../models/Fruit")

module.exports = {
    // READ ALL
    findAll: (req, res) => {
        // use the model to execute a query
        Fruit.find()
            .then(allFruits => {
                res.json(allFruits)
            })
            .catch(err => res.json(err))
    },

    // Create
    create: (req, res) => {
        Fruit.create(req.body)
            .then(newFruit => {
                res.json({message: "created", newFruit, status: 200})
            })
            .catch(err => res.status(400).json(err));
    },

    // Read one
    findOne: (req, res) => {
        Fruit.findById(req.params.id)
            .then(oneFruit => res.json(oneFruit))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // Update
    update: (req, res) => {
        Fruit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedFruit => res.json({message: "created", updatedFruit, status: 200}))
            .catch(err => res.status(400).json(err));
    },

    // Delete
    delete: (req, res) => {
        Fruit.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result }))
            .catch(err => res.json(err));
    }
}