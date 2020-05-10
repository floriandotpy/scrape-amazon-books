scrape-amazon-books
===

A bookmarklet to scrape Amazon books right in your browser. Based on [artoo.js](https://medialab.github.io/artoo/)

## How to use

1. **Create the bookmarklet**, by creating a bookmark and pasting the full content of [scrape-bookmarklet.js](scrape-bookmarklet.js) into the location field. As the title, choose "Scrape books".
2. Navigate to a book search page of your choice, for example this [search of Tolkien books](https://www.amazon.com/s?k=tolkien&i=stripbooks-intl-ship&ref=nb_sb_noss_1).
3. Click the bookmarklet ("Scrape books"), which will start a JSON download.

![Create a bookmark](img/screenshot-bookmark.png?raw=true "Screenshot")

Example JSON of one book:

```
{
    "title": "Unfinished Tales",
    "url": "/Unfinished-Tales-J-R-Tolkien/dp/B00A2M4VZG/ref=sr_1_90?dchild=1&keywords=tolkien&qid=1589053005&s=books&sr=1-90",
    "img": "https://m.media-amazon.com/images/I/41YaQLNWFWL._AC_UY218_.jpg",
    "author": "J. R. R. Tolkien",
    "published": null,
    "rating": 5,
    "reviews": 1,
    "price_1": 21.74,
    "price_2": null,
    "price_3": null
}
```

![What the scraper will fetch](img/screenshot-debug.png?raw=true "Screenshot")

## What this is

If you want data on Amazon books (or any product), you may want to use the Amazon product API. There maay be cases, when this isn't an option for you: To get access to that API, you need to have an active partner account with recent purchases through your referral link.

If all you need is some meta data, you can only scrape the Amazon frontend instead. But beware: Headless scrapers are often blocked as bots.

This repository contains a simple script that you can use as a bookmarklet, so scraping happens right inside your browser, so from Amazon's perspective, your are not a bot anymore.

## Limitations

- As this requires you to click a bookmarklet, it isn't straight forward to automate.
- Once Amazon changes their markup, the script as is included here will stop working (check maintainer notes further down to learn how you can update it)
- Scraping was writting for the US site, it may not work on local Amazon sites in different regions, as the markup may look different.
- Only scrapes the first author name,  misses it if there are multiple authors
- Prices are unreliable, because Amazon often features `$0.00` as the price for their Kindle of Audible offerings. For that purpose, the scraper fetches up to 3 prices it can find. I recommend you use the `max()` of these three values, or instead drop any `null` and `0.00` numbers.

## How to maintain

Once Amazon changes their markup, this project needs to be updated.

1. Use the `debug.css` and load it in your browser while on the search page. Use a browser plugin to do this, for example [CSS override for Firefox](https://addons.mozilla.org/de/firefox/addon/css-override/). The CSS will highlight where the scraper would look for the content on the page. If all works, it should look like the screenshot at the top of this README. Edit the CSS till it matches the screenshot again.
2. Convert your CSS changes to the selectors in `scrape.js`
3. Update the bookmarklet by pasting the contents of `scrape.js` in this [bookmarklet generator](https://medialab.github.io/artoo/generator/). Get the resulting code and save it in `scrape-bookmarklet.js`, and also in `README.md`.
4. Send a pull request to this repository including your changes to `debug.css`, `scrape.js`, `scrape-bookmarklet.js` and `README.md`. Thanks!
