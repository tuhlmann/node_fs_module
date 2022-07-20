import * as fs from "fs"

const { version } = JSON.parse(fs.readFileSync("./package.json", "utf8"));
console.log("Reading the version from package.json: ", version);