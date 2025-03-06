const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

module.exports = {
    apiKey: process.env.API_KEY,
    apiUrl: 'https://api.unsplash.com/'
};
