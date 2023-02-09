import { parse } from "node-html-parser";

function getImageFromHeader(doc, selector) {
  try {
    const tag = doc.querySelector(selector);
    if (tag && tag.attributes) {
      return tag.attributes.content;
    }
    return null;
  } catch (error) {
    throw error;
  }
}

export async function getFirstImageOfPage(link) {
  try {
    const response = await fetch(link);
    const result = await response.text();

    const doc = parse(result);

    const selectors = [
      "meta[property='og:image']",
      "meta[name='image']",
      "meta[property='og:image']",
    ];

    for (const selector of selectors) {
      const result = getImageFromHeader(doc, selector);
      if (result) return result;
    }

    // try to scrape the first image of the article page
    const img = doc.querySelector("img");
    const imgLink = img?.attributes.src;
    try {
      // test the image link if it is relative or absolute
      new URL(imgLink);
    } catch (error) {
      // if link is relative, concatinate it with origin
      const { origin } = new URL(link);
      return origin + imgLink;
    }
    return imgLink;
  } catch (error) {
    console.log("got error while calling link", error);
  }
}
