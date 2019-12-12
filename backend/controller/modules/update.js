const route_model = require('../../model/route')

let update_route = (req, res) => {
    var currentValue = req.place
    var newValue = req.newValue
    var newValueRoute = req.newRoute
    if (newValueRoute != null) {
        route_model.findOneAndUpdate({ jeepneyRoute: currentValue }, { $set: { jeepneyRoute: newValue, passes: newValueRoute.split(", ") } }, (err, data) => {
            if (err) {
                return res.send(err)
            } else {
                return res.send(data)
            }
        }
        )
    } else {
        route_model.findOneAndUpdate({ jeepneyRoute: currentValue }, { $set: { jeepneyRoute: newValue } }, (err, data) => {
            if (err) {
                return res.send(err)
            } else {
                return res.send(data)
            }
        }
        )
    }
}

let update_places = (req, res) => {
    var currentValue = req.place
    var newValue = req.newValue
    var newValuePlace = req.newRoute
    console.log(newValuePlace);
    route_model.findOneAndUpdate({ route: currentValue }, { $set: { places: newValue } }, (err, data) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send(data)
        }
    }
    )
}

module.exports = { update_route, update_places }