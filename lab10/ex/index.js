const express = require('express');
const path = require('path');
const port = 3000;
const sqlite3 = require('sqlite3').verbose();
const app = express();

let db = new sqlite3.Database('smartphones.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

app.use(express.static('public'));
app.set("view engine", 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    let sqlCreate =
    `CREATE TABLE IF NOT EXISTS Smartphones (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Brand VARCHAR(50) NOT NULL,
        Model VARCHAR(100) NOT NULL,
        ReleaseYear INT,
        Display VARCHAR(50) NOT NULL,
        Processor VARCHAR(50) NOT NULL,
        RAM VARCHAR(20) NOT NULL,
        Storage VARCHAR(20) NOT NULL,
        RearCamera VARCHAR(100) NOT NULL,
        FrontCamera VARCHAR(20) NOT NULL,
        Battery VARCHAR(20) NOT NULL,
        OS VARCHAR(50) NOT NULL,
        Price INTEGER NOT NULL
    );`
    db.run(sqlCreate, (err, rows) => {
        if (err) {
            return console.log(err.message);
        }
        let sqlInsert =
        `INSERT INTO Smartphones (Brand, Model, ReleaseYear, Display, Processor, RAM, Storage, RearCamera, FrontCamera, Battery, OS, Price) VALUES 
            ('Samsung', 'Galaxy S25', 2025, '6.8" AMOLED', 'Snapdragon 8 Elite', '12GB', '256GB', '200MP+12MP+10MP', '32MP', '5000mAh', 'Android 15', 1199),
            ('Apple', 'iPhone 16 Pro', 2025, '6.7" OLED', 'A18 Pro', '8GB', '256GB', '48MP+12MP+12MP', '24MP', '4500mAh', 'iOS 19', 1299),
            ('Google', 'Pixel 9 Pro', 2025, '6.6" OLED', 'Tensor G4', '12GB', '512GB', '50+48+12MP', '20MP', '4800mAh', 'Android 15', 1099),
            ('Xiaomi', 'Mi 14 Ultra', 2025, '6.73" AMOLED', 'Snapdragon 8 Gen 3', '16GB', '512GB', '200+50+50MP', '32MP', '5200mAh', 'Android 15', 999),
            ('OnePlus', '12T Pro', 2025, '6.7" AMOLED', 'Snapdragon 8 Gen 3', '12GB', '256GB', '64+50+8MP', '32MP', '5000mAh', 'Android 15', 899),
            ('Oppo', 'Find X7 Pro', 2025, '6.8" AMOLED', 'Dimensity 9400', '16GB', '512GB', '100+50+50MP', '32MP', '4800mAh', 'Android 15', 999),
            ('Vivo', 'X100 Pro+', 2025, '6.78" AMOLED', 'Dimensity 9400', '16GB', '1TB', '200+50+12MP', '32MP', '5000mAh', 'Android 15', 1099),
            ('Sony', 'Xperia 1 VI', 2025, '6.5" OLED', 'Snapdragon 8 Gen 3', '12GB', '256GB', '48+12+12MP', '24MP', '4500mAh', 'Android 15', 1199),
            ('Huawei', 'P70 Pro', 2025, '6.7" OLED', 'Kirin 9100', '12GB', '512GB', '100+50+12MP', '32MP', '4800mAh', 'HarmonyOS 5', 1099),
            ('Realme', 'GT Neo 6', 2025, '6.7" AMOLED', 'Snapdragon 8 Gen 3', '12GB', '256GB', '64+8+2MP', '16MP', '5000mAh', 'Android 15', 699),
            ('Motorola', 'Edge 50 Pro', 2025, '6.67" OLED', 'Snapdragon 8 Gen 3', '12GB', '256GB', '50+50+12MP', '32MP', '4700mAh', 'Android 15', 799);`;
        db.run(sqlInsert, (err, rows) => {
            if (err) {
                return console.log(err.message);
            }
            console.log("Data ready");
        });
    });
    res.send(`<h1>Welcome to Smartphones API</h1>
            <p>use to following endpoint to access the data</p>
            <ul>
                <li><a href="/smartphones">Get all smartphones</a></li>
                <li><a href="/showsmartphones">Show all smartphones</a></li>
                <li><a href="/showemployees">Show all employees</a></li>
            </ul>`);
});

app.get('/smartphones', (req, res) => {
    const query = 'SELECT * FROM Smartphones';
    db.all(query, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.send(JSON.stringify(rows));
    });
});

app.get('/smartphones/:id', (req, res) => {
    const query = `SELECT * FROM Smartphones WHERE ID = ${req.params.id};`;
    db.all(query, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.send(JSON.stringify(rows));
    });
});

app.get('/showemployees/:id', (req, res) => {
    const endpoint = "http://webdev.it.kmitl.ac.th:4000/employee/" + req.params.id;
    fetch(endpoint)
        .then(response => response.json())
        .then(wsdata => {
            console.log(wsdata);
            res.send(JSON.stringify(wsdata));
        })
        .catch(error => {
            console.log(error);
        });
});

app.get("/showsmartphones", (req, res) => {
    const endpoint = 'http://localhost:3000/smartphones';
    fetch(endpoint)
        .then(response => response.json())
        .then(wsdata => {
            console.log(wsdata);
            res.render('showsmartphones', { data: wsdata });
        })
        .catch(error => {
            console.log(error);
        });
});

app.get("/showemployees", (req, res) => {
    const endpoint = 'http://webdev.it.kmitl.ac.th:4000/employees';
    fetch(endpoint)
        .then(response => response.json())
        .then(wsdata => {
            console.log(wsdata);
            res.render('showemployees', { data: wsdata });
        })
        .catch(error => {
            console.log(error);
        });
});

app.listen(port, () => {
    console.log(`Starting server at port ${port}`);
});
