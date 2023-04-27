const postsController = require('./posts.controller');
const uploadsController = require('./uploads.controller');



module.exports = {
    ...postsController,
    ...uploadsController
}