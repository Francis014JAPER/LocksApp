const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://Javier:12345678*@javiercortez.ajfwqmp.mongodb.net/?retryWrites=true&w=majority&appName=JavierCortez', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const lockSchema = new mongoose.Schema({
  name: String,
  photo: String,
  isActive: Boolean,
});

const Lock = mongoose.model('Lock', lockSchema);

app.get('/api/locks', async (req, res) => {
  const locks = await Lock.find();
  res.json(locks);
});

app.post('/api/locks', async (req, res) => {
  const newLock = new Lock(req.body);
  await newLock.save();
  res.json(newLock);
});

app.put('/api/locks/:id', async (req, res) => {
  const updatedLock = await Lock.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedLock);
});

app.delete('/api/locks/:id', async (req, res) => {
  await Lock.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
