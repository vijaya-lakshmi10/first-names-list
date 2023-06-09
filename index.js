let peopleNames = require("../country/state/city/index");
let peopleFirstName = require("../utilities/utils/index");
const getPeopleInCity = (peopleNames) => {
  return peopleFirstName(peopleNames);
};
module.exports = getPeopleInCity;
console.log(getPeopleInCity(peopleNames));
