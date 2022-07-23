const facultyModel = require("../models/facultyModel");

module.exports = {
    async createFaculty(req, res) {
        let formData = req.body;
        let response = { message: '' };

        await facultyModel.create(formData);
        response.message = "faculty created"
        res.send(response)
    }
}