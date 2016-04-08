# Web-based Geo mapping

Use of species distribution maps in a web application. Currently prototype development using web-based mapping packages and [D3js visualization and interactivity library](https://d3js.org/).

### Thoughts / Ideas:

Project may use a variety of routes to get desired product. Need to figure out best way to go about each step of this project. Etc...

* branch for <strong>gio-dev</strong>

* branch for <strong>oliver-dev</strong>

* only working product gets pushed to <strong>Master</strong> branch

### To Do:

- [x] create README with project structure
- [x] create development branch for Oliver & Gio
- [ ] convert .gri to either .tif or .shp files
- [ ] create [Bootstrap framework](http://getbootstrap.com/) for site
- [ ] create web-based map with sample data (i.e. 3 maps)
- [ ] create web-based statistics / data display

### Git How To:

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


### References:

* [1. Step 1 Map Tutorial in D3js](https://github.com/emeeks/d3-carto-map/wiki/Let's-Make-a-d3.carto-map-1:-Loading-a-Data-Layer)

* [2. Another D3js Map Tutorial](https://www.toptal.com/javascript/a-map-to-perfection-using-d3-js-to-make-beautiful-web-maps)

* [3. D3js Example](https://bl.ocks.org/mbostock/5342063)

* [4. Another D3js Example](https://bl.ocks.org/mbostock/4329423)

* [5. ...D3js Example](https://bost.ocks.org/mike/map/)

* [6. Convert .gri / .grd to .tif](http://gis.stackexchange.com/questions/87005/how-to-import-r-generated-gri-grd-raster-files-in-grass)

* [7. Use of Jupyter + Google's Earth Engine API for Mapping = Web-based Python Mapping](https://github.com/Thru-Echoes/jupyter-gee)

* [8. Slides for Google Earth Engine for Dummies](http://slides.com/miguelangelmenarguez/google-earth-engine-for-dummies-i#/)

* [9. Slides for Google Earth Engine from UC Berkeley Workshop](https://docs.google.com/presentation/d/1eeGZBbCOlkfLtIWz1FGr1LMN9FEs7xAtciIFY2PJN_A/edit#slide=id.g4954714e1_18)
