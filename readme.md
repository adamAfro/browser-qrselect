# QR RW

Read and write data between devices with slideshow of QR codes.

- [x] make readable QR codes from input
- [x] let file input
- [ ] read QR codes with camera

---

It is basically a copy of [gre/qrloop](https://github.com/gre/qrloop) but for UTF-8 and without package providers.

## Browser extension

Browser extension adds button to context menu so that QR code is made from text selection and displayed in popup

- [ ] make bundler switch between `chrome` and `browser` variables depending on target: Chrome or Firefox;
- [] handle Chrome issue - text selection does not include new lines.

Bundle and make distribution package with browser extension:

```
deno run bundle.ts --zip
```

## Dev&deps

- [fork of](https://github.com/adamAfro/qrcode-svg) datalog/[qrcode-svg](https://github.com/datalog/qrcode-svg) under MIT

Install [deno](https://deno.land/) and optionally cache [esbuild](https://esbuild.github.io/)

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