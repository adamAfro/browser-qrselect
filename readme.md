# QR RW

Read and write data between devices with slideshow of QR codes.

- [x] make readable QR codes from input
- [ ] let input files
- [ ] read QR codes with camera

## Browser extension

Right now `browser` variable is replaced with `chrome`, which should be done by bundle, but here it is...

Problem with Chrome is that it does not include new lines in selection. It seems the issue is not resolved yet and has been going for a long time.

## Dev&deps

- [fork of](https://github.com/adamAfro/qrcode-svg) datalog/[qrcode-svg](https://github.com/datalog/qrcode-svg) under MIT

Install [deno](https://deno.land/) and optionally cache [esbuild](https://esbuild.github.io/)

Bundle and make distribution package with browser extension:

```
deno run bundle.ts --zip
```

While developing use browser extension:

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