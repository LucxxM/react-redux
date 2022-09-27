const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.post("/api/users/:id/update", (req, res) => {
    setTimeout(() => {
        res.send(req.body);
    }, [2000])
});

app.get("/api/users/", (req, res) => {
    setTimeout(() => {
        res.send({
            1: {
                pseudo: "sOmeHappyness",
                email: "sOmeHappyness@mail.com"
            },
            2: {
                pseudo: "Bro",
                email: "Bro@mail.com"
            }
        });
    }, [2000])
});

app.listen(8800, () => {
    console.log("Running Fake Back on port 8800");
});