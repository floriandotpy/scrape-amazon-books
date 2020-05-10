/* requires to load artoo inside the browser first: https://medialab.github.io/artoo/ */

artoo.scrape('.s-result-list .s-result-item', {
    title: function() { 
      return $(this).find('h2 > a').first().text().trim()
    },
    url: function() { 
        return $(this).find('h2 > a').attr('href')
    },
    img: function() { 
        return $(this).find('img').first().attr('src')
    }, 
    author: function() {
        return $(this).find('.a-row.a-size-base.a-color-secondary > .a-size-base').eq(1).text().trim()
    },
    published: function() { 
        // unreliable markup
        var date_str = $(this).find('.a-row.a-size-base.a-color-secondary > .a-size-base').last().text().trim()
        if (!date_str.match(/\d{4}/)) return null; // no published date found if no 4 decimals are detected (year)
        return date_str
    }, 
    rating: function() { 
        var rating_str = $(this).find('[aria-label*="out of"]').first().attr('aria-label');
        // turn "4.8 out of 5.0" into 4.8
        if (!rating_str) return null
        return parseFloat(rating_str.substr(0,3))
    },
    reviews: function() { 
        var reviews = $(this).find('[aria-label]').eq(1).attr('aria-label')
        if (!reviews) return null
        // turn "5,433" into 5433
        return parseInt(reviews.replace(/,/g, ""))
    },
    price_1: function() { 
        var el = $(this).find('.a-price:not(.a-text-price)').first()
        var price_str = el.find('.a-price-whole').first().text() + el.find('.a-price-fraction').first().text()
        if (!price_str) return null
        return parseFloat(price_str)
    },
    price_2: function() { 
        var el = $(this).find('.a-price:not(.a-text-price)').eq(1)
        var price_str = el.find('.a-price-whole').first().text() + el.find('.a-price-fraction').first().text(); 
        if (!price_str) return null
        return parseFloat(price_str)
    },
    price_3: function() { 
        var el = $(this).find('.a-price:not(.a-text-price)').eq(2)
        var price_str = el.find('.a-price-whole').first().text() + el.find('.a-price-fraction').first().text();
        if (!price_str) return null
        return parseFloat(price_str)
    },
}, artoo.savePrettyJson)