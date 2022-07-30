import House from '../models/store'

exports.showHouses = function (req, res) {
  House
    .find({})
    .then(houses => res.json(houses))
}

// showHouse(req, res) {
//   House
//     .findOne({ _id: req.params.id })
//     .then(house => {
//       res.json(house)
//     })
// },
exports.createHouse = function (req, res) {
  House
    .create(req.body)
    .then(house => res.json(house))
}
