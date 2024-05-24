const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
     {
          name: {
               type: String,
               required: [true, "Please add the contact name"],
          },
          profession: {
               type: String,
               required: [true, "Please add the email"],
          },
          company: {
               type: String,
               required: [true, "Please add the phone here"],
          },
     },
     { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema)