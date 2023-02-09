# Get preview image

This tool will look inside a page and find the preview image.

## Example

```javascript
import { getFirstImageOfPage } from "get-preview-image/scrapeImage.js";

console.log(
  await getFirstImageOfPage(
    "http://blog.hasan.one/programming/web/2023-01-30-Display-temporary-message-using-react-hooks.html"
  )
); // logs image link
```

## Dependencies

Depends on "node-html-parser" for parsing the page.

## How it works

The tool first looks for an image inside the header tags of the page. This is where most websites keep links to preview images.

If the page has no image link in the header, the tool looks inside the body of the page for the first element with "img" tag and returns its link.

## Developer

[Hasan Aga](https://hasan.one/)
