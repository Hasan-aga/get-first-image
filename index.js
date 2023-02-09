import { getFirstImageOfPage } from "./scrapeImage.js";

const link = process.argv.slice(2)[0]
  ? process.argv.slice(2)[0]
  : "http://blog.hasan.one/programming/web/2023-01-30-Display-temporary-message-using-react-hooks.html";
console.log("result", await getFirstImageOfPage(link)); // logs image link
