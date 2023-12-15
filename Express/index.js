const express = require("express");
const app = express();
let users = [{
    name:"john",
    kidneys: [{
       firstOne: false
    },
    {
       secondOne: true
    }]
}]
app.use(express.json());
function healthyKidney() {
    const kidney = users[0].kidneys;
    console.log(kidney);
    const totalKidney = kidney.length;
    const list = [];
    for(let i = 0; i < totalKidney; i++) {
        const key = Object.keys(kidney[i])[0];
        console.log(key);
        console.log(kidney[i][key]);
        if(kidney[i][key]) {
            list.push(key);
        }
    }
    return list;
}
app.get('/', (req, res) => {
    const kidney = users[0].kidneys;
    console.log(kidney);
    const totalKidney = kidney.length;
    const list = healthyKidney();
    res.send("Totally you have" +" "+totalKidney+ "The total helthier kidneys are" +" "+list.length);
});
app.post('/', (req, res) => {
    const a = req.body.a;
    users[0].kidneys.push({newKidney: true});
    res.send("It is done");
});
app.put('/', (req, res) => {
    const list = users[0].kidneys;
    for(let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].firstOne = true;
        users[0].kidneys[i].secondOne = true;
    }
    res.json({
        msg: "done"
    })
})
app.delete('/', (req, res) => {
    const list = [];
    for(let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].firstOne === true) {
            list.push(users[0].kidneys[i].firstOne);
        }
    }
    users[0].kidneys = list;
    res.send("delete done");
})
app.listen(3000);
