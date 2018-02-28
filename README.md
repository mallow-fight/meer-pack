# a simple tool to pack js only

## usage

1. config your webpack

```js
import pack from 'meer-pack'
pack({
    entry: './components/index.js',
    mode: 'development',
    outputConfig: {
        filename: 'bundle.js',
        path: '../dist'
    }
})
```

1. build it

```js
script: {
    'build': 'npm run build'
}
```
