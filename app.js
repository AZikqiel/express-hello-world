const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="home.css">

    <title>Sports Equipments Manager</title>
</head>

<body>
    <audio controls autoplay="true" loop="true" preload="auto">
        <source src="MEDIA/Bouncingfootballeffect.mp3" type="audio/mp3">
    </audio>

    <nav class="navbar">

        <div class="logobar">
            <h1>EQUIPO MANAGER</h1>
            <img src="MEDIA/logobyme.png" alt="LOGO" height="200px" width="220px">
        </div>

        <div class="links">
            <a class="active" href="home.html">HOME</a>
            <a href="login.html">LOGIN</a>
            <a href="aboutus.html">ABOUT</a>
            <a href="gallery.html">GALLERY</a>

            <div class="dropdown">
                <a href="">EQUIPMENT^</a>

                <div class="dropdown-content">
                    <a href="equipments.html">Available</a>
                    <a href="#">Link 2</a>
                </div>

            </div>

        </div>

    </nav>

    <section class="maincontent">

        <div class="landingpage">

            <div class="landtext">
                <h2>Sports Equipments Management</h2>
                <p id="para1">
                  To ease the work of equipment Management in sports industry<br>
                  Our product ensures
                  <ul>
                  <li>purchasing equipment from supplier</li>
                  <li>inventory</li>
                  <li>checking condition of equipment</li>
                  <li>servicing from company</li>
                  <li>security access control</li>
                  <li>keeps track of equipment allocation to the students.</li>
                  <br>
                  <div class="landbuttons">
                    <button>Get Started</button>
                </div>   
            </div>

            <div class="card2">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/pNHGxugHEV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; picture-in-picture" allowfullscreen></iframe>
            </div>

            

        </div>

            <marquee behaviour ="alternate" scrollamount="40">
               <marquee behaviour ="alternate" direction="down" scrollamount="30">
                   <img src="MEDIA/football.png" class="ball">
               </marquee>
            </marquee>
        

        <h1><center>Sports Equipments available</center></h1>

        <div class="cards">

            <div class="carditem">
                <div class="cardimg">
                    <img src="MEDIA/cricket.png" alt="">
                </div>
                <div class="cardtext">
                    <h1>Cricket Bat</h1>
                </div>
            </div>

            <div class="carditem">
                <div class="cardimg">
                    <img src="MEDIA/badminton.png" alt="">
                </div>
                <div class="cardtext">
                    <h1>Badminton Racquet</h1>
                </div>
            </div>

            <div class="carditem">
                <div class="cardimg">
                    <img src="MEDIA/discus.png" alt="">
                </div>
                <div class="cardtext">
                    <h1>Discus Throw</h1>
                </div>
            </div>

            <div class="carditem">
                <div class="cardimg">
                    <img src="MEDIA/basketball.png" alt="">
                </div>
                <div class="cardtext">
                    <h1>Basketball</h1>
                </div>
            </div>

        </div>
    </section>

    <footer>
        <div class="socialmedia">
            <div>
                <h1>Follow us at</h1>
            </div>

            <div class="icons">
                <img src="MEDIA/fbicon.png" alt="">
                <img src="MEDIA/instaicon.png" alt="">
                <img src="MEDIA/twittericon.png" alt="">
            </div>

        </div>

        <div class="address">
            <h3>
                No.250 M.G.road <br>
                Bengaluru - 560050
                <br>
                Sportsequipments@gmail.com
                <br>©Created by Harshitha JP
            </h3>
        </div>
    </footer>

</body>
</html>

</html>
`
