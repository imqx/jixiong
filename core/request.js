const sa = require('superagent');
const qs = require('querystring');

const q = (opts, cb) => {
  let { op = 'http://about:blank/', query, body, method } = opts;
  query = query ? `?${qs.stringify(query)}` : '';
  if (body) {
    method = method || 'POST';
  } else {
    method = 'GET';
  }
  const url = `${op}${query}`;
  const callback = (err, res) => {
    if (err) {
      console.log(`ERR! --------------- ${err}`);
    } else if (cb) {
      cb(res);
    } else {
      console.dir(res);
    }
    console.log(`------------- done!`);
  };
  console.log(`[${method}]${url}`);
  if (method === 'GET') {
    return sa.get(url).set('accept', 'json').end(callback);
  } else {
    return sa.post(url).send(body).set('accept', 'json').end(callback);
  }
};

exports.request = q;
exports.post = function (url, body, callback) {
  return q({ op: url, body }, callback);
};
exports.get = function (url, query, callback) {
  return q({ op: url, query }, callback);
};
