const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please, Enter the title"]
    },
    description: {
        type: String,
        required: [true, "Please, Enter the description"]
    }
},{
    timestamps: true
});

const Task = new mongoose.model('Task', taskSchema);
module.exports = Task;