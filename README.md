# dapingapp

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm build
```

### Lints and fixes files

```
npm  lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


// 1. 错位排序，无法错位[]  1 1 20 20 1 1  ===》[]  10 10 20 20  ===> 10 20 10 20
    // 2. 负载均衡任务分配,最高负载   5 2 [7,4] ==> 3 11 11 00 00 000/111 1 00 00 000    8 5 101 1 1 20 40 ===> 34  如果33需要9 35需要8 40需要7浪费  101需要5浪费
