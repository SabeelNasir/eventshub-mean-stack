const { model, Schema } = require('mongoose')
const avSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    location: Schema.Types.String,
    createdAt: Date,
    createdBy: Schema.Types.ObjectId,
    updatedBy: Schema.Types.ObjectId,
    updatedAt: Date
})
module.exports = {
    Avenues: model('avenues', avSchema, 'avenues')
}