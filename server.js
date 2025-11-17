const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let foods = [
  { foodId: 'oats_1cup', name: 'Oats (1 cup cooked)', calories: 158, protein_g: 6, carbs_g: 27, fat_g: 3, fiber_g:4 },
  { foodId: 'chicken_100g', name: 'Grilled Chicken (100g)', calories:165, protein_g:31, carbs_g:0, fat_g:3.6, fiber_g:0 }
];

// In-memory logs for MVP
let logs = [];

// Search foods (simple)
app.get('/foods', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  const results = foods.filter(f => f.name.toLowerCase().includes(q));
  res.json(results);
});

// Save daily log
app.post('/logs', (req, res) => {
  const log = req.body;
  logs.push(log);
  res.json({ success: true, id: logs.length - 1 });
});

app.get('/logs', (req, res) => {
  res.json(logs);
});

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`FitProgress backend running on ${port}`));
