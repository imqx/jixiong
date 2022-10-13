const fs = require('fs');
const sa = require('superagent');
require('superagent-charset')(sa);

const reg = /(?<=f00ff\ssize=5>).+(?=<\/font)/;
const texts = [];

(function recr(i) {
  if (i <= 80) {
    sa.get('http://xingming.net/cmjg-sj.asp')
      .query({
        sjlx: 7,
        cidusj: `000${8000 + i}`,
        xg: '',
        ok: 'cidu',
      })
      .charset('gbk')
      .then((res) => {
        let t = reg.exec(res.text);
        if (t) {
          texts.push(t[0]);
          console.log(t[0]);
          recr(i + 1);
        } else {
          console.error(`err in [${i}]`);
          fs.writeFileSync('./err.html', res.text, {
            encoding: 'utf8',
          });
        }
      });
  } else {
    fs.writeFileSync('./apps/namesok/assets.html', texts.join('\n'), {
      encoding: 'utf8',
    });
  }
})(0);
