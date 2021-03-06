const moment = require("moment");
const age = require("../ages").ArcticFuture.key;

module.exports = {
  key: "nanowire",
  age: age,
  building: {
    resources: {
      coins: 293000,
      supplies: 638000
    },
    time: moment.duration({ hours: 15 }),
    size: {
      length: 4,
      width: 7
    },
    population: 4610,
    connection: 2
  },
  unrefined: "bionics_data"
};
