const { Schema, model } = require('mongoose');

const SubscriberSchema = new Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    status: {
        type: Boolean,
        required: true,
        default: true
    },
    confirmationCode: {
      type: String,
      required: true
    },
    confirmed: {
      type: Boolean,
      required: true,
      default: false
    }
  }, { timestamps: { createdAt: 'created_at' } });
  
module.exports = model('Subscriber', SubscriberSchema);;