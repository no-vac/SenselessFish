const fs = require('fs');

module.exports = {
  updateConfig: (config) => {
    fs.writeFile(
      `${__dirname}/../public/config.json`,
      JSON.stringify(config),
      (err) => {
        if (err) throw err;
        console.log('file updated');
      }
    );
  },
};
