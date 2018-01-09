class StatLoggerPlugin {
  apply(compiler) {
    compiler.plugin('done', stats => {
      let time = stats.endTime - stats.startTime;

      if (time < 1000) {
        time = `${time}ms`;
      } else {
        time = `${(time / 1000).toFixed(2)} seconds`;
      }

      console.log('\x1b[32m', '\r\x1b[KSuccess!');
      console.log('\x1b[0m', `Compiled in ${time}.`);
    });
  }
}

module.exports = StatLoggerPlugin;
