
winston = require 'winston'
util    = require 'util'

ConsoleTransport = new (winston.transports.Console)(
  colorize: 'true', 
  level: 'info'
);


logger = new (winston.Logger)( transports: [ConsoleTransport] );

get_timestr = (msec = 0) ->
  now = new Date();
  timestr = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate();
  timestr += " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
  timestr += "." + now.getMilliseconds();
  timestr

log_info = (msg, obj) ->
  msg += ": " + util.inspect(obj) if obj?
  logger.info " " + get_timestr() + "\t" + msg


log_error = (msg, obj) ->
  msg += ": " + util.inspect(obj) if obj?
  logger.error get_timestr() + "\t" + msg


log_debug = (msg, obj) ->
  return unless config.LOG_LEVEL is 'debug'
  msg += ": " + util.inspect(obj) if obj?
  logger.debug get_timestr() + "\t" + msg

Helper = 
  now_to_s: get_timestr,
  Logger:
    info: log_info,
    debug: log_debug,
    error: log_error,

module.exports = Helper