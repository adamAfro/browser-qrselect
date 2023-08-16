# QR Selection

Select text and make QR slideshow with it's content

## Dev&deps

- [fork of](https://github.com/adamAfro/qrcode-svg) datalog/[qrcode-svg](https://github.com/datalog/qrcode-svg) under MIT

Install [deno](https://deno.land/) and optionally cache [esbuild](https://esbuild.github.io/)

Bundle and make distribution package:

```
deno run bundle.ts --zip
```

While developing use:

```
deno run -A --watch=./src bundle.ts
```

## Format

```ts
{
    index: number, // index in order of all frames
    totat: number, // amount of frames
    data: string // chunk of data
}
```

Example

```
{ index: 0, totat: 3, data: "Start..."}
{ index: 1, totat: 3, data: "...Middle..."}
{ index: 2, totat: 3, data: "...End"}
```