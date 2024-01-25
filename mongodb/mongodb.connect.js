const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://Sanks:RFHyvxXT6NKVhaaL@mongo-ts.weyyukl.mongodb.net/",
            { useNewUrlParser: true}
        );
    } catch (err) {
        console.error("Error connection to mongodb");
        console.error(err);
    }
}

module.exports = {connect}