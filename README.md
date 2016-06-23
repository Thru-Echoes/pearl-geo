# Web-based Geo mapping

Use of species distribution maps in a web application. Currently prototype development using web-based mapping packages and [D3js visualization and interactivity library](https://d3js.org/).

<hr>

## 1 Overview

#### 1.1 To Do (21 June, 2016):

- [ ] @Oliver: find 3-5 color palettes
- [X] @Oliver: put up parasite background
- [X] @Oliver: add Wayne to team page
- [ ] @Gio: add text (below) and Carousel (Bootstrap) to home page (Note: Carousel is for spotlight species)
- [ ] @Gio: need to figure out smooth transitions between future maps
- [ ] @Gio: add 'home, about, team / people, search bar' to navbar
- [ ] @Oliver_or_Gio: how to pull from database in back?
- [ ] @Oliver_or_Gio: get 2 more species to create pages for from Colin  

<hr>

## 2 Project structure and design:

#### 2.1 Frontend (HTML + D3js)

* The <strong>views/</strong> directory contains html files for each page in our web site. These files have the extension <code>.ejs</code> because we are using a template with NodeJS on the server-side. Treat any <code>.ejs</code> file like it is a normal html file.

* The <strong>public</strong> directory contains files for the html files in <code>views/</code>. These include <code>css, js, fonts, images</code> that live in their respective sub-directories. For example, the web page <code>foo.ejs</code> (that would live in <code>views/foo.ejs</code>) may have a styling file that lives in <code>public/css/foo.css</code>.

#### 2.2 Backend (NodeJS + express)

* The <strong>bin/</strong> directory contains file <code>wwww</code> that starts up the server by executing the <code>app.js</code> file.

* The <strong>node_modules/</strong> directory contains all of the dependencies and packages being used for this project - this is organized / structured through the <code>package.json</code> file.

* The <strong>routes</strong> directory contains the "middleware" between the server and the frontend web pages. Remember, our server is running NodeJS and our frontend is html + D3js. Each html page in <code>views/</code> has a <code>.js</code> file in <code>routes/</code> that controls executing that file and sending data to it (if data needs to be sent to it - we determine that).

<hr>

## 3 Run this project

This project is using a frontend [Bootstrap skeleton](http://getbootstrap.com/) with [D3js for data visualization](https://d3js.org/) - i.e. mapping. The project is running on an [express engine with NodeJS](https://nodejs.org/en/) in the backend.

<strong>NOTE: You need to download NodeJS with some packages to run this project!</strong>

#### 3.1 Dependencies:

We are going to use <strong>XCODE</strong> and <strong>Homebrew</strong> at various times. Xcode is Apple's (OS X) development software package thingie that you need to do a lot of programming / development on an Apple (OS X) machine. It is extremely silly that this is a thing you need to download...but that is just my opinion of a very huge and successful company strategy.

We are also going to use <strong>Homebrew</strong>. Homebrew is a package manager. It makes installing things very, very easy in Terminal. For example: below I tell you how to install NodeJS through their website (like a normal software download)...but you could also download it through brew with the following command in Terminal: <code>$ brew install node</code>

<strong>NOTE: XCODE & Homebrew may or may not actually be needed but will make life better for work on this and future projects!...but I think we do need Xcode.</strong>

* open Terminal (in any dir)
* instructions for [downloading Homebrew in Terminal](http://brew.sh/)
* download NodeJS in Terminal using the command: <code>brew install node</code>

Here is a [tutorial / webpage showing how to download all of this](http://blog.teamtreehouse.com/install-node-js-npm-mac).

<hr>

* [download NodeJS](https://nodejs.org/en/download/)
* NodeJS will also download the package manager <strong>npm</strong>
* open Terminal
* go to this dir in Terminal: <code>pearl-geo$ </code>
* check if NodeJS is installed: <code>pearl-geo$ node -v</code>
* check if npm is installed: <code>pearl-geo$ npm -v</code>
* NodeJS will show something like: <code>v4.4.2</code>
* Npm will show something like: <code>2.15.0</code>

<strong>NOTE: If NodeJS or npm not installed...</strong>

* [Install npm here](https://www.npmjs.com/package/download)
* [Re-install NodeJS here](https://nodejs.org/en/download/)

#### To run this project:

* open Terminal
* go to this dir in Terminal: <code>pearl-geo$ </code>
* start the NodeJS + Express server with this command: <code>pearl-geo$ npm start</code>
* this will start a local server (on your machine) served at: <code>localhost:5050</code>
* open any browser (Firefox, Chrome, Safari, etc.) at the local server: <code>localhost:5050</code>
* ...in other words...just type in <strong>localhost:5050</strong> in your browser like it is a website
* model will be running - info + errors will appear in Terminal where you started with <strong>npm start</strong>

<hr>

## 4 Resources

#### 4.1 Code References

##### 4.1.1 Git How To (initialization):

Refer to this for anything and everything related to command-line + git

Install Shell Commands in Atom:
```
    # Click on the "Atom" icon next to the "Apple" symbol in your menu bar...
    # Click on "Install Shell Commands"
```
Clone the repo (only for first time):
```
    git clone https://github.com/Thru-Echoes/pearl-geo.git
```

Go into repo dir:
```
    cd pearl-geo
```

Check status of repo:
```
    git status
```

What branch does it say you are on? You should be in your development branch! If not...

Go into development branch:
```
    git checkout gio-dev
```

Make changes - do whatever - time to add + commit + push:
```
    git add FILE-YOU-CHANGED.js
    git commit -m "Describe what you did"
    git push origin gio-dev
```

<strong>Always push changes into your own development branch!</strong>

<hr>

##### 4.1.2 HTML / CSS / JS:

Make font bold:

```
    <strong>Bold font</strong>
    <p><strong>Bold first four words</strong> in the paragraph.</p>
```

Make font italicized:

```
    *this is italic*

    And also this could be bold:

    **wow another way to do bold**
```

And you can make code: <code>here is code</code>

<br>

Add this is the text to add to the <strong>home and / or about page</strong>:

```
    PEARL - the first global Parasite Extinction Assessment & Red List - compiles the preliminary work of an international team of researchers working to produce a mainstream data portal for parasite conservation. An estimated XX% of endoparasites are threatened globally with coextinction from their hosts, and an additional XX% are likely to be driven to extinction by climate change. PEARL compiles the conservation status, distribution and host associations of nearly 500 parasites from a pilot risk assessment study, and makes that data freely available to researchers, managers and the public at large. Preliminary expansions to the dataset are scheduled for 2018.
```

<br>

And here are some thoughts from Colin and me:

```
    Colin:
    Echinococcus granulosus will definitely be one of the things in the carousel and we'll figure out the rest as we go... general overview showing the team would be cool with a separate team bio giving the history of PERP and detailed bios on everyone, search bar would be awesome, all that sounds good

    Attached is a GIF that I think would be really cool to have on the home page, showing the history of the dataset's creation (I saved these as we georeferenced!). It's not the coolest but it shows how long it took to put together?

    (GIF is in public/img)

    Oliver:
    Leaflet (JS mobile-friendly mapping library) + D3js!

    Leaflet: http://leafletjs.com/ Super lightweight - open source - mobile friendly - REALLY pretty (good UI / UX) - works well with my love D3js

    Leaflet + D3js: https://bost.ocks.org/mike/leaflet/

    Slightly more involved example: http://bl.ocks.org/d3noob/9267535
```

<strong>Note to Gio:</strong> I added the *about* and *team* pages but you have to fill them (i.e. they are blank).


#### 4.2 References

* [1. Step 1 Map Tutorial in D3js](https://github.com/emeeks/d3-carto-map/wiki/Let's-Make-a-d3.carto-map-1:-Loading-a-Data-Layer)

* [2. Another D3js Map Tutorial](https://www.toptal.com/javascript/a-map-to-perfection-using-d3-js-to-make-beautiful-web-maps)

* [3. D3js Example](https://bl.ocks.org/mbostock/5342063)

* [4. Another D3js Example](https://bl.ocks.org/mbostock/4329423)

* [5. ...D3js Example](https://bost.ocks.org/mike/map/)

* [6. Convert .gri / .grd to .tif](http://gis.stackexchange.com/questions/87005/how-to-import-r-generated-gri-grd-raster-files-in-grass)

* [7. Use of Jupyter + Google's Earth Engine API for Mapping = Web-based Python Mapping](https://github.com/Thru-Echoes/jupyter-gee)

* [8. Slides for Google Earth Engine for Dummies](http://slides.com/miguelangelmenarguez/google-earth-engine-for-dummies-i#/)

* [9. Slides for Google Earth Engine from UC Berkeley Workshop](https://docs.google.com/presentation/d/1eeGZBbCOlkfLtIWz1FGr1LMN9FEs7xAtciIFY2PJN_A/edit#slide=id.g4954714e1_18)
