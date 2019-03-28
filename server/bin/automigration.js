/* eslint-disable strict */
var app = require('../server');

// this loads the accountDb configuration in ~/server/datasources.json
var dataSource = app.dataSources.postgres;

// this automigrates the model
dataSource.automigrate('Accountmanagement', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
dataSource.automigrate('Deapartmentmasters', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});

dataSource.automigrate('Country', function(err) {
  if (err) throw err;
  dataSource.disconnect();
});
/*
dataSource.isActual(models, function(err, actual) {
  if (!actual) {
    dataSource.autoupdate(models, function(err, result) {
      if (err) throw err;
      dataSource.disconnect();
    });
  }
});
*/

