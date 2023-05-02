const {Schema, model} = require('mongoose');

const SectionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: Boolean,
    default: true,
    required: true
  },
  markdown: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  sanitizedHtml: {
    type: String,
    required: true
  },
}, { timestamps: true });

SectionSchema.pre('validate', function(next){
    if(this.markdown){
        this.sanitizedHtml = dompurify.sanitize(marked.parse(this.markdown));
    }
    next();
})

SectionSchema.methods.toJSON = function(){
    const { __v, _id, ...section } = this.toObject();

    section.id = _id;

    return section;
}

module.exports = model('Section', SectionSchema);

