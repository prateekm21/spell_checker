// Generated by CoffeeScript 1.7.1
(function() {
  var ConsoleTransport, Helper, get_timestr, log_debug, log_error, log_info, logger, util, winston;

  winston = require('winston');

  util = require('util');

  ConsoleTransport = new winston.transports.Console({
    colorize: 'true',
    level: 'info'
  });

  logger = new winston.Logger({
    transports: [ConsoleTransport]
  });

  get_timestr = function(msec) {
    var now, timestr;
    if (msec == null) {
      msec = 0;
    }
    now = new Date();
    timestr = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate();
    timestr += " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    timestr += "." + now.getMilliseconds();
    return timestr;
  };

  log_info = function(msg, obj) {
    if (obj != null) {
      msg += ": " + util.inspect(obj);
    }
    return logger.info(" " + get_timestr() + "\t" + msg);
  };

  log_error = function(msg, obj) {
    if (obj != null) {
      msg += ": " + util.inspect(obj);
    }
    return logger.error(get_timestr() + "\t" + msg);
  };

  log_debug = function(msg, obj) {
    if (config.LOG_LEVEL !== 'debug') {
      return;
    }
    if (obj != null) {
      msg += ": " + util.inspect(obj);
    }
    return logger.debug(get_timestr() + "\t" + msg);
  };

  Helper = {
    now_to_s: get_timestr,
    Logger: {
      info: log_info,
      debug: log_debug,
      error: log_error
    }
  };

  module.exports = Helper;

}).call(this);