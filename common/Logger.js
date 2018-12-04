
class Logger {
  constructor(name, logFile) {
    this.name = name;
    this.logFile = logFile;
    this.logger = null;
  }

  error(message, details = {}, tag = null) {
    console.log(`Error ${tag ? '('+tag+')' : ''}: ${message}`);
    if (Object.keys(details).length > 0) {
      console.log(`${JSON.stringify({ "Details": details }, null, 2)}`);
    }
  }

  info(message, details = {}, tag = null) {
    console.log(`Info ${tag ? '('+tag+')' : ''}: ${message}`);
    if (Object.keys(details).length > 0) {
      console.log(`${JSON.stringify({ "Details": details }, null, 2)}`);
    }
  }

  warn(message, details = {}, tag = null) {
    console.log(`Warn ${tag ? '('+tag+')' : ''}: ${message}`);
    if (Object.keys(details).length > 0) {
      console.log(`${JSON.stringify({ "Details": details }, null, 2)}`);
    }
  }
}

module.exports = Logger;
