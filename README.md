## Install

```bash
# install dependencies
npm i yewenjun-rw
```

## Usage

### require package
```js
const rw = require('yewenjun-rw');
```

### How to use
```js
rw.writeFile(path, data).then(data => {
    console.log('写入成功')
}).catch(err => {
    console.log('写入失败')
})

rw.readFile(path).then(data => {
    console.log('data: ', data);
}).catch(err => {
    console.log('读取失败')
})
```
