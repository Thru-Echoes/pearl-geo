# Web-based Geo mapping

Use of species distribution maps in a web application. Currently prototype development using web-based mapping packages and [D3js visualization and interactivity library](https://d3js.org/).

<strong> This is GIO-DEV branch...</strong>

## Run this project

This project is using a frontend [Bootstrap skeleton](http://getbootstrap.com/) with [D3js for data visualization](https://d3js.org/) - i.e. mapping. The project is running on an [express engine with NodeJS](https://nodejs.org/en/) in the backend.

<strong>NOTE: You need to download NodeJS with some packages to run this project!</strong>

#### Dependencies:

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

## Next Steps

#### To Do:

- [x] create README with project structure
- [x] create development branch for Oliver & Gio
- [ ] convert .gri to either .tif or .shp files
- [x] create [Bootstrap framework](http://getbootstrap.com/) for site
- [x] create web-based map with sample data (i.e. 3 maps)
- [ ] create web-based statistics / data display

#### Git How To (initialization):

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

## References:

* [1. Step 1 Map Tutorial in D3js](https://github.com/emeeks/d3-carto-map/wiki/Let's-Make-a-d3.carto-map-1:-Loading-a-Data-Layer)

* [2. Another D3js Map Tutorial](https://www.toptal.com/javascript/a-map-to-perfection-using-d3-js-to-make-beautiful-web-maps)

* [3. D3js Example](https://bl.ocks.org/mbostock/5342063)

* [4. Another D3js Example](https://bl.ocks.org/mbostock/4329423)

* [5. ...D3js Example](https://bost.ocks.org/mike/map/)

* [6. Convert .gri / .grd to .tif](http://gis.stackexchange.com/questions/87005/how-to-import-r-generated-gri-grd-raster-files-in-grass)

* [7. Use of Jupyter + Google's Earth Engine API for Mapping = Web-based Python Mapping](https://github.com/Thru-Echoes/jupyter-gee)

* [8. Slides for Google Earth Engine for Dummies](http://slides.com/miguelangelmenarguez/google-earth-engine-for-dummies-i#/)

* [9. Slides for Google Earth Engine from UC Berkeley Workshop](https://docs.google.com/presentation/d/1eeGZBbCOlkfLtIWz1FGr1LMN9FEs7xAtciIFY2PJN_A/edit#slide=id.g4954714e1_18)
