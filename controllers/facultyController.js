const { sign, decode } = require("jsonwebtoken");
const facultyModel = require("../models/facultyModel");

module.exports = {
    async createFaculty(req, res) {
        let formData = req.body;
        let response = { message: '' };
        await facultyModel.create(formData);
        response.message = "faculty created"
        res.send(response)
    },
    async loginFaculty(req, res) {
        let response = {}
        let formData = req.body;

        let findFaculty = await facultyModel.findOne({ email: formData.email })
        console.log(findFaculty);
        response.message = findFaculty === null ? 'you are not register' : 'your password is wrong'
        if (findFaculty && findFaculty.password === formData.password) {
            response.token = sign({ email: findFaculty.email, subject: findFaculty.subject, username: formData.username }, 'm13')
            response.message = "log in successfully"
        }

        res.send(response)
    },
    async viewStudent(req, res) {
        let token = req.header('Authorization').split(' ')[1];
        let decoded = decode(token, 'm13');
        let response = {}
        let loggedAdmin = await facultyModel.findOne({ email: decoded.email })
        response.message = 'you are not allowed to see all studeent data'
        if (loggedAdmin !== null) {
            response.message = 'verified'
            response.facultyDetail = await facultyModel.aggregate([
                {
                    $match: { email: decoded.email },

                },

                {
                    $lookup: {
                        from: 'students',
                        localField: 'subject',
                        foreignField: 'course',
                        as: 'batch'
                    }
                },
                {
                    $project: {
                        username: 1, email: 1, subject: 1, batch: {
                            name: 1, email: 1, course: 1,
                            duration: 1
                        }, total_fees: { $sum: '$batch.fees' }
                    }
                }
            ])
        }
        res.send(response)
    }

}