import express, { request, response } from "express";

const app = express()
const port = 4000;

app.get('/', (request, response) => {
    response.send("Hello, TypeScript with Express!");
});

app.listen(port, () => console.log(`Server running on port ${port}`));