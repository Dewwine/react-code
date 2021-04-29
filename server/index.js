// import parsePost from './parsePost';
const parsePost = require('./parsePost');
// const configs = require('./configs');
// import { elems } from './configs';
const elems = require('./configs');

parsePost('https://www.sex.com/pics/?sort=popular&sub=week', elems.elems.sex)
parsePost('https://unsplash.com/', elems.elems.unsplash)