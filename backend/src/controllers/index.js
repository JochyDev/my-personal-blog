const postsController = require('./posts.controller');
const subscribersController = require('./subcribers.controller');
const uploadsController = require('./uploads.controller');



module.exports = {
    ...postsController,
    ...subscribersController,
    ...uploadsController
}