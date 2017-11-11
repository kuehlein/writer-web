'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const webSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  threads: [Schema.ObjectId],
  parent: Schema.ObjectId,
  children: [Schema.ObjectId]
}, {
  minimize: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

webSchema.set('toObject', { getters: true })


const Web = mongoose.model('Web', webSchema)


webSchema.methods.findParent = (id) =>
Web.findById(id, 'parent', (err, doc) => {
  if (err) console.log('There was an error retreving the data', err)
  else return webSchema.virtual('parent').get(() => doc)
})

webSchema.methods.findChildren = (idArr, childId = null) =>
Web.find(childId, 'children', (err, doc) => {
  if (err) console.log('There was an error retreving the data', err)
  else return webSchema.virtual('children').get(() => doc)
})


module.exports = Web
