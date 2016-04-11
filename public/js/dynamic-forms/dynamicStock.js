$(document).ready(function(){

    var sstockColM = [];
    var sstockColF = [];

    var sharvestColM = [];
    var sharvestColF = [];

    var bId, sId;

    for (var j = 0; j < NUM_CLASS; j++) {

        if (IS_SEX == "one") {

            /* Create selective-stocking forms for single-sex */
            var sStock = ($('.sStocking .femSStock').length + 1).toString();
            sstockColF.push('<div class="form-group femSStock" id=subSStock' + (j + 1) + '"><input type="text" class="form-control" placeholder="Stock' + (j + 1) + '" id="fSStock' + (j + 1) + '"></div></div>');

            /* Create selective-harvesting forms for single-sex */
            var sHarvest = ($('.sHarvesting .femSHarvest').length + 1).toString();
            sharvestColF.push('<div class="form-group femSHarvest" id=subSHarvest' + (j + 1) + '"><input type="text" class="form-control" placeholder="Harvest' + (j + 1) + '" id="fSHarvest' + (j + 1) + '"></div></div>');

        } else {

            /* Create selective-stocking forms for two-sex */
            var mSStock = ($('.sStocking .maleSStock').length + 1).toString();
            var fSStock = ($('.sStocking .femSStock').length + 1).toString();
            sstockColM.push('<div class="form-group maleSStock" id=subSStock' + (j + 1) + '"><input type="text" class="form-control" placeholder="Male Stock' + (j + 1) + '" id="mSStock' + (j + 1) + '"></div></div>');
            sstockColF.push('<div class="form-group femSStock" id=subSStock' + (j + 1) + '"><input type="text" class="form-control" placeholder="Female Stock' + (j + 1) + '" id="fSStock' + (j + 1) + '"></div></div>');

            /* Create selective-harvesting forms for two-sex */
            var mSHarvest = ($('.sHarvesting .maleSHarvest').length + 1).toString();
            var fSHarvest = ($('.sHarvesting .femSHarvest').length + 1).toString();
            sharvestColM.push('<div class="form-group maleSHarvest" id=subSHarvest' + (j + 1) + '"><input type="text" class="form-control" placeholder="Male Harvest' + (j + 1) + '" id="mSHarvest' + (j + 1) + '"></div></div>');
            sharvestColF.push('<div class="form-group femSHarvest" id=subSHarvest' + (j + 1) + '"><input type="text" class="form-control" placeholder="Female Harvest' + (j + 1) + '" id="fSHarvest' + (j + 1) + '"></div></div>');

        }
    }

    for (var i = 0; i < NUM_NODES; i++) {

        if (IS_SEX != "one") {

            $('.sStocking').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + sstockColM.join("") + '</form>');
            $('.sStocking').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + sstockColF.join("") + '</form>');

            $('.sHarvesting').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + sharvestColM.join("") + '</form>');
            $('.sHarvesting').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + sharvestColF.join("") + '</form>');

        } else {

            $('.sStocking').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + sstockColF.join("") + '</form>');

            $('.sHarvesting').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + sharvestColF.join("") + '</form>');

        }

        $('.allIntervals').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Selective Stocking" id = "ssInter' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Selective Harvesting" id = "shInter' + (i + 1) + '"></div></form><br>');

        /*$('.allValues').append('<h4 id="popH4">Population ' + (i + 1) + '</h4>');*/

        if (IS_SEX != "one") {

            $('.allValues').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Harvest Interval" id = "rhInter' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "M Harvest" id = "mhValue' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "F Harvest" id = "fhValue' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Total Harvest" id = "thValue' + (i + 1) + '"></div></form><br><br>');

        } else {

            $('.allValues').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Harvest Interval" id = "rhInter' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Harvest Amount" id = "fhValue' + (i + 1) + '"></div></form><br><br>');

        }

        /*$('.allValues').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Harvest Interval" id = "rhInter' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Harvest Amount" id = "fhValue' + (i + 1) + '"></div></form><br><br>');*/

        /*$('.randomVal').append('<form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Harvest Amount" id = "rhValue' + (i + 1) + '"></div></form><br>');*/

        /*$('.allValues').append('<h4 id="popH4">Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Harvest Amount" id = "rhValue' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Young Scaler" id = "youngDD' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Old Scaler" id = "oldDD' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Mature-Male Scaler" id = "mmDD' + (i + 1) + '"></div></form><br>');*/

    }
});
