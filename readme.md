# QR Selection

Select text and make QR slideshow with it's content

## Dev&deps

- datalog/[datamatrix-svg](https://github.com/datalog/datamatrix-svg) under MIT

Install [deno](https://deno.land/) and optionally cache [esbuild](https://esbuild.github.io/)

Bundle and make distribution package:

```
deno run bundle.ts --zip
```

While developing use:

```
deno run -A --watch=./src bundle.ts
```