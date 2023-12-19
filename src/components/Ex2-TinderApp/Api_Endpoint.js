// API Endpoints
app.get("/", (req, res) => res.status(200).send("Hello TheWebDev"));

app.post('/dating/cards', (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/dating/cards', (req, res) => {
  Cards.find((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`));
