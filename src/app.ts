import express, { Express, Request, Response } from "express";
import { generateExample } from "./cli/generator.js";
import { execRequestAction } from "./cli/main.js";

const app: Express = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get('/api', (req: Request, res: Response) => {
  res.send(generateExample())
})

app.post('/api/code', (req: Request, res: Response) => {
  res.json(execRequestAction(req.body.example))
})

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`)
})
