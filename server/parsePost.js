const unirest = require('unirest');
const cheerio = require('cheerio');

function parsePost(url, elems){
  unirest.get(url).end((response) => {
    const body = response.body;
    const $ = cheerio.load(body);
    let image;
    if (url == 'https://www.sex.com/pics/?sort=popular&sub=week'){
      image = $(elems.image).attr('data-src');
    } else {
      image = $(elems.image).attr('src');
    }
    const description  = $(elems.description).attr('alt');
    
    const post = {
      image: image,
      description: description,
    }

    console.log(post);
  }) 
}

module.exports = parsePost;