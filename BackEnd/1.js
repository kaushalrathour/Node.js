let argv = process.argv;
for (let i=2; i<argv.length;i++) {
    console.log(`Hello ${argv[i]}`);
}