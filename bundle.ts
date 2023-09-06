import { build, stop } // @ts
    from 'https://deno.land/x/esbuild@v0.18.11/mod.js'

const scripts = ['background', 'popup', 'website']

for (const name of [scripts].flat()) await build({

    entryPoints: [`./src/${name}.ts`],
    outfile: `./scripts/${name}.js`,
    sourcemap: true,

    bundle: true, loader: { '.css': 'text' },

}).catch(e => console.error(e))

await stop()


if (Deno.args.includes('--zip')) {

    await zip('dist.xpi', [
        "manifest.json", "scripts", "popup.html", "icons"
    ])

    await zip('source.zip', [
        "manifest.json", "readme.md", "src", "popup.html", "icons"
    ])
}

async function zip(filename: string, paths: string[]) {

    const command = new Deno.Command('zip', { args: ['-r',
        filename, ...paths
    ], cwd: Deno.cwd()})

    const { stdout, stderr } = await command.output()

    console.log(new TextDecoder().decode(stdout))
    if (stderr)
        console.error(new TextDecoder().decode(stderr))
}