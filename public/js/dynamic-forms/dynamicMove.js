$(document).ready(function(){

    var weightsColM = [];
    var weightsColF = [];

    var moveColM = [];
    var moveColF = [];

    var bId;

    for (var j = 0; j < NUM_CLASS; j++) {

        if (IS_SEX == "one") {

            /* Create biomass-weights forms for single-sex */
            var bWeight = ($('.bioWeights .femWeight').length + 1).toString();
            weightsColF.push('<div class="form-group femWeight" id=subWeight' + (j + 1) + '"><input type="text" class="form-control" placeholder="Bio Weight' + (j + 1) + '" id="fBio' + (j + 1) + '"></div></div>');

            /* Create movement-propensity forms for single-sex */
            var mover = ($('.moveProp .femMove').length + 1).toString();
            moveColF.push('<div class="form-group femMove" id=subMove' + (j + 1) + '"><input type="text" class="form-control" placeholder="Propensity' + (j + 1) + '" id="fProp' + (j + 1) + '"></div></div>');

        } else {

            /* Create biomass-weights forms for two-sex */
            var mWeight = ($('.bioWeights .maleWeight').length + 1).toString();
            var fWeight = ($('.bioWeights .femWeight').length + 1).toString();
            weightsColM.push('<div class="form-group maleWeight" id=subWeight' + (j + 1) + '"><input type="text" class="form-control" placeholder="Male Weight' + (j + 1) + '" id="mBio' + (j + 1) + '"></div></div>');
            weightsColF.push('<div class="form-group femWeight" id=subWeight' + (j + 1) + '"><input type="text" class="form-control" placeholder="Female Weight' + (j + 1) + '" id="fBio' + (j + 1) + '"></div></div>');

            /* Create movement-propensity forms for two-sex */
            var mMover = ($('.moveProp .maleMove').length + 1).toString();
            var fMover = ($('.moveProp .femMove').length + 1).toString();
            moveColM.push('<div class="form-group maleMove" id=subMove' + (j + 1) + '"><input type="text" class="form-control" placeholder="Male Propensity' + (j + 1) +'" id="mProp' + (j + 1) + '"></div></div>');
            moveColF.push('<div class="form-group femMove" id=subMove' + (j + 1) + '"><input type="text" class="form-control" placeholder="Female Propensity' + (j + 1) + '" id="fProp' + (j + 1) + '"></div></div>');

        }
    }

    for (var i = 0; i < NUM_NODES; i++) {

        if (IS_SEX != "one") {

            $('.bioWeights').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + weightsColM.join("") + '</form>');

            $('.bioWeights').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + weightsColF.join("") + '</form>');

            $('.moveProp').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + moveColM.join("") + '</form>');

            $('.moveProp').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + moveColF.join("") + '</form>');

        } else {

            $('.bioWeights').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + weightsColF.join("") + '</form>');

            $('.moveProp').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + moveColF.join("") + '</form>');

        }

        $('.allCCs').append('<h4 id="popH4">Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Young CC" id = "youngCC' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Old CC" id = "oldCC' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Mature-Male CC" id = "mmCC' + (i + 1) + '"></div></form><br>');

        $('.allDDs').append('<h4 id="popH4">Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Young Scaler" id = "youngDD' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Old Scaler" id = "oldDD' + (i + 1) + '"></div></form><br><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Mature-Male Scaler" id = "mmDD' + (i + 1) + '"></div></form><br>');
    }

    if (NUM_NODES != 1) {

        for (i = 0; i < NUM_NODES; i++) {

            var cId = ($('.cnnect .col'+ (i + 1) + 'Row').length + 1).toString();
            var fullCol = [];

            for (var k = 0; k < NUM_NODES; k++) {

                fullCol.push('<div class="form-group col'+ (i + 1) +'Row" id=col'+ (i + 1) +'Row' + (k + 1) + '"><input type="text" class="form-control" placeholder="Location ' + (k + 1) +' to '+ (i + 1) +'" id="cnct' + (k + 1) + '' + (i + 1) + '"></div>');
            }
            $('.cnnect').append('<div class="col-md-2">' + fullCol.join("") + '</div>');
        }

    } else {

        $('.cnnect').append('<div class="col-md-6"><p>Connectance applies as a region-to-region attractivity (or propensity). Since there is only 1 region connectivity is ignored. If your simulation has two or three subpopulations there will be entry boxes (forms) where you can enter in relative connectivity from region-to-region. E.g. a two population model has connectivity from regions 1-to-1, 1-to-2, 2-to-1, and 2-to-2.</p></div>');
    }
});
