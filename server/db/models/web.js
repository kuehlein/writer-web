'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema


const webSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  threads: [{ type: Schema.ObjectId, ref: 'thread' }],
  parent: { type: Schema.ObjectId, ref: 'web' },
  children: [{ type: Schema.ObjectId, ref: 'web' }]
}, {
  minimize: false,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})

webSchema.set('toObject', { getters: true })


const Web = mongoose.model('web', webSchema)


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
