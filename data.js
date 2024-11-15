const fs = require("node:fs/promises");

exports.fetchInputStr = async(filename)=> {
  try {
    const inputStrData = await fs.readFile(filename);
    return inputStrData.toString();
  } catch (error) {
    console.log(error);
  }
}


