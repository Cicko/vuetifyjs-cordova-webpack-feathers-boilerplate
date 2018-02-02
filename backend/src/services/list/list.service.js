// Initializes the `list` service on path `/list`
const createService = require('feathers-mongoose');
const createModel = require('../../models/list.model');
const hooks = require('./list.hooks');
const filters = require('./list.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'list',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/list', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('list');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
