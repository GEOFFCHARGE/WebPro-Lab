const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const conn = require("./database");
const fs = require("fs")

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    const createSql =
        `CREATE TABLE IF NOT EXISTS albums (
        song VARCHAR(50) NOT NULL,
        artist VARCHAR(50) NOT NULL,
        album VARCHAR(50) NOT NULL,
        year INT NOT NULL,
        genre VARCHAR(50) NOT NULL,
        album_cover VARCHAR(100) NOT NULL
    );`;
    conn.query(createSql, (err, result) => {
        if (err) throw err;
        console.log("Table created or already exists");
        const countSql = "SELECT COUNT(*) AS count FROM albums";
        conn.query(countSql, (err, result) => {
            if (err) throw err;
            if (!result[0].count) {
                const insertSql =
                `INSERT INTO albums (song, artist, album, year, genre, album_cover) VALUES
                ("Shape of You","Ed Sheeran","Divide",2017,"Pop","http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/shape-of-you.png"),
                ("Blinding Lights","The Weeknd","After Hours",2019,"Synthpop","http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/blinding-lights.png"),
                ("Rolling in the Deep","Adele","21",2010,"Soul","http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/rolling-in-the-deep.jpg"),
                ("Uptown Funk","Mark Ronson ft. Bruno Mars","Uptown Special",2014,"Funk","http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/uptown-funk.jpg"),
                ("Bad Guy","Billie Eilish","When We All Fall Asleep, Where Do We Go?",2019,"Electropop","http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/bad-guy.jpg"),
                ("Radioactive","Imagine Dragons","Night Visions",2012,"Alternative Rock","http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/radioactive.png"),
                ("Someone Like You","Adele","21",2011,"Ballad","http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/someone-like-you.png"),
                ("Happy","Pharrell Williams","G I R L",2013,"Pop","http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/pharrell-williams-happy.jpg"),
                ("Lose Yourself","Eminem","8 Mile Soundtrack",2002,"Hip Hop","http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/lose-yourself.jpg"),
                ("Smells Like Teen Spirit","Nirvana","Nevermind",1991,"Grunge","http://webdev.it.kmitl.ac.th/labdocs/lab8/album-covers/Smells-Like-Teen-Spirit.jpg");`;
                conn.query(insertSql, (err, result) => {
                    if (err) throw err;
                    console.log("Data inserted");
                });
            }
        });
        const showSql = "SELECT * FROM albums;";
        conn.query(showSql, (err, result) => {
            if (err) throw err;
            res.render("show", { data: result });
        });
    });
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
