# Web-based Geo mapping

Use of species distribution maps in a web application. Currently prototype development using web-based mapping packages and [D3js visualization and interactivity library](https://d3js.org/).

<strong> This is OLIVER-DEV branch...</strong>

## Run this project

This project is using a frontend [Bootstrap skeleton](http://getbootstrap.com/) with [D3js for data visualization](https://d3js.org/) - i.e. mapping. The project is running on an [express engine with NodeJS](https://nodejs.org/en/) in the backend.

#### To run this project:

* open Terminal
* go to this dir in Terminal: <code>pearl-geo$ </code>
* start the NodeJS + Express server with this command: <code>pearl-geo$ npm start</code>
* this will start a local server (on your machine) served at: <code>localhost:5050</code>
* open any browser (Firefox, Chrome, Safari, etc.) at the local server: <code>localhost:5050</code>
* ...in other words...just type in <strong>localhost:5050</strong> in your browser like it is a website
* model will be running - info + errors will appear in Terminal where you started with <strong>npm start</strong>  

<em>

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

<em>

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
