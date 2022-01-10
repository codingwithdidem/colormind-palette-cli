# Colormind's Palette Generator

We use Colormind's API to generate logical palettes. You can use this package both `globally` and `locally`.
While we can generate a complete random palette for you, you can also give us some color hints.

'N' means random. If you have a color of choice in your mind don't hesitate to provide one.

## Installation

Install `colormind-magic-palette` with npm

### Global Usage

```bash
  npm install -g colormind-magic-palette
  palette
```

![alt text](https://github.com/codingwithdidem/colormind-palette-cli/blob/master/cli.png?raw=true)

### Local Usage

```bash
  npm install colormind-magic-palette

  const colormind = require('colormind-magic-palette');

  const main = async () => {
    const palette = await colormind.random();
    console.log(palette);
    // output:  [ '#95341a', '#b5ad69', '#947349', '#50241a', '#441308' ]

  };

  main();

```
