import { getFirstImageOfPage } from "./scrapeImage.js";

const link = process.argv.slice(2)[0];
console.log("result", await getFirstImageOfPage(link)); // logs image link
