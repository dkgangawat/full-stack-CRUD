const app = require('./app')
const PORT = process.env.PORT || 5000

process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});
const server = app.listen(PORT, () => {
    console.log(`Server running on ${process.env.BASE_URL}:${PORT}`)
});
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
})