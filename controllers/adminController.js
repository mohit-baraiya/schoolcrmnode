const { sign } = require("jsonwebtoken");
const adminModel = require("../models/adminModel");

module.exports = {
  async adminLogin(req, res) {
    let formData = req.body;
    let response = {
      message: "",
    };

    try {
      let findAdmin = await adminModel.findOne({ email: formData.email });
      if (findAdmin) {
        if (findAdmin.password === formData.password) {
          let token = sign({ id: findAdmin.id, username: findAdmin.username, email: findAdmin.email }, 'm13')
        } else {
          response.message = "your password is wrong"
        }
      } else {
        response.message = "you are not admin";
      }
      res.send(response);
    } catch (error) {
      console.log(error);
    }
  },
  async createAdmin(req, res) {
    let formData = req.body;
    let response = {};
    try {
      let adminExist = await adminModel.find({ email: formData.email });
      if (formData.password === formData.confirm_password) {
        if (adminExist.length === 0) {
          await adminModel.create(formData);
          response.message = "admin created successfully.";
        } else {
          response.message = "email is alredy register !";
        }
      } else {
        response.message = "password and confirm password is not same !";
      }
      res.send(response);
    } catch (error) {
      console.log(error);
    }
  },
};
