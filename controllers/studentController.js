const studentModel = require('../models/studentModel')
module.exports = {
    async createStudent(req, res) {

        let formData = req.body;
        let response = { messsage: '' }
        let studentExist = await studentModel.find({ email: formData.email })
        if (studentExist.length === 0) {
            await studentModel.create(formData);
            response.messsage = 'student created'
        } else {
            response.messsage = 'email of student exist'
        }
        res.send(response)
    },
    async updateStudent(req, res) {
        let studentId = req.params;
        let student
    }
}