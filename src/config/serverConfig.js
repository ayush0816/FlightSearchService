const dotenv = require("dotenv");

dotenv.config({path: "/Users/itadmin/AirlineManagement/FlightsAndSearch/.env" });

module.exports = {
    PORT : process.env.PORT
}