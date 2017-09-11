exports.getConfig = function(context, callback) {
  var data = process.env.CONFIG;
  var config = JSON.parse(data);
  config.DoneDir = config.DoneDir || '.done';
  callback(null, config);
}
