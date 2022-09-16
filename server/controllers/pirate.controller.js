const Pirate = require("../models/Pirate")

module.exports = {
    // READ ALL
    findAll: (req, res) => {
        // use the model to execute a query
        Pirate.find()
            .then(allPirates => {
                res.json(allPirates)
            })
            .catch(err => res.json(err))
    },

    // Create
    create: (req, res) => {
        Pirate.create(req.body)
            .then(newPirate => {
                res.json({message: "created", newPirate, status: 200})
            })
            .catch(err => res.status(400).json(err));
    },

    // Read one
    findOne: (req, res) => {
        Pirate.findById(req.params.id)
            .then(onePirate => res.json(onePirate))
            .catch(err => res.json({ message: 'Something went wrong', error: err }));
    },

    // Update
    update: (req, res) => {
        Pirate.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedPirate => res.json({message: "created", updatedPirate, status: 200}))
            .catch(err => res.status(400).json(err));
    },

    // Delete
    delete: (req, res) => {
        Pirate.findByIdAndDelete(req.params.id)
            .then(result => res.json({ result }))
            .catch(err => res.json(err));
    }
}