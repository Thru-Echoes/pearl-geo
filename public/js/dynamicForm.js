$(document).ready(function(){
    var sexColM = [];
    var sexColF = [];
    var survColM = [];
    var survColF = [];
    var birthCol = [];

    var moveColM = [];
    var moveColF = [];

    var weightsColM = [];
    var weightsColF = [];

    var sstockColM = [];
    var sstockColF = [];

    var sharvestColM = [];
    var sharvestColF = [];

    var bId, sId;

    for (var j = 0; j < NUM_CLASS; j++) {

        if (IS_SEX == "one") {

            /* Create init age class numbers for single-sex */
            var id = ($('.aClasses .femClasses').length + 1).toString();
            sexColF.push('<div class="form-group femClasses" id=fInit' + (j + 1) + '"><input type="text" class="form-control" placeholder="Age Class' + (j + 1) + '" id="fClass' + (j + 1) + '"></div></div>');

            /* Create survival forms for single-sex */
            var surv = ($('.survClasses .femSurv').length + 1).toString();
            survColF.push('<div class="form-group femSurv" id=femSurv' + (j + 1) + '"><input type="text" class="form-control" placeholder="Survival Rate' + (j + 1) + '" id="fsRate' + (j + 1) + '"></div></div>');

            /* Create movement-propensity forms for single-sex */
            var mover = ($('.moveProp .femMove').length + 1).toString();
            moveColF.push('<div class="form-group femMove" id=subMove' + (j + 1) + '"><input type="text" class="form-control" placeholder="Propensity' + (j + 1) + '" id="fProp' + (j + 1) + '"></div></div>');

            /* Create biomass-weights forms for single-sex */
            var bWeight = ($('.bioWeights .femWeight').length + 1).toString();
            weightsColF.push('<div class="form-group femWeight" id=subWeight' + (j + 1) + '"><input type="text" class="form-control" placeholder="Bio Weight' + (j + 1) + '" id="fBio' + (j + 1) + '"></div></div>');

            /* Create selective-stocking forms for single-sex */
            var sStock = ($('.sStocking .femSStock').length + 1).toString();
            sstockColF.push('<div class="form-group femSStock" id=subSStock' + (j + 1) + '"><input type="text" class="form-control" placeholder="Stock' + (j + 1) + '" id="fSStock' + (j + 1) + '"></div></div>');

            /* Create selective-harvesting forms for single-sex */
            var sHarvest = ($('.sHarvesting .femSHarvest').length + 1).toString();
            sharvestColF.push('<div class="form-group femSHarvest" id=subSHarvest' + (j + 1) + '"><input type="text" class="form-control" placeholder="Harvest' + (j + 1) + '" id="fSHarvest' + (j + 1) + '"></div></div>');

        } else {

            /* Create init age class number forms for two-sex */
            var mId = ($('.aClasses .maleClasses').length + 1).toString();
            var fId = ($('.aClasses .femClasses').length + 1).toString();
            sexColM.push('<div class="form-group maleClasses" id=mInit' + (j + 1) + '"><input type="text" class="form-control" placeholder="Male Age' + (j + 1) +'" id="mClass' + (j + 1) + '"></div></div>');
            sexColF.push('<div class="form-group femClasses" id=fInit' + (j + 1) + '"><input type="text" class="form-control" placeholder="Female Age' + (j + 1) +'" id="fClass' + (j + 1) + '"></div></div>');

            /* Create survival forms for two-sex */
            var mSurv = ($('.survClasses .maleSurv').length + 1).toString();
            var fSurv = ($('.survClasses .femSurv').length + 1).toString();
            survColM.push('<div class="form-group maleSurv" id=maleSurv' + (j + 1) + '"><input type="text" class="form-control" placeholder="Survival Rate' + (j + 1) +'" id="msRate' + (j + 1) + '"></div></div>');
            survColF.push('<div class="form-group femSurv" id=femSurv' + (j + 1) + '"><input type="text" class="form-control" placeholder="Survival Rate' + (j + 1) + '" id="fsRate' + (j + 1) + '"></div></div>');

            /* Create movement-propensity forms for two-sex */
            var mMover = ($('.moveProp .maleMove').length + 1).toString();
            var fMover = ($('.moveProp .femMove').length + 1).toString();
            moveColM.push('<div class="form-group maleMove" id=subMove' + (j + 1) + '"><input type="text" class="form-control" placeholder="Male Propensity' + (j + 1) +'" id="mProp' + (j + 1) + '"></div></div>');
            moveColF.push('<div class="form-group femMove" id=subMove' + (j + 1) + '"><input type="text" class="form-control" placeholder="Female Propensity' + (j + 1) + '" id="fProp' + (j + 1) + '"></div></div>');

            /* Create biomass-weights forms for two-sex */
            var mWeight = ($('.bioWeights .maleWeight').length + 1).toString();
            var fWeight = ($('.bioWeights .femWeight').length + 1).toString();
            weightsColM.push('<div class="form-group maleWeight" id=subWeight' + (j + 1) + '"><input type="text" class="form-control" placeholder="Male Weight' + (j + 1) + '" id="mBio' + (j + 1) + '"></div></div>');
            weightsColF.push('<div class="form-group femWeight" id=subWeight' + (j + 1) + '"><input type="text" class="form-control" placeholder="Female Weight' + (j + 1) + '" id="fBio' + (j + 1) + '"></div></div>');

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

        bId = ($('.bRates .subB').length + 1).toString();
        birthCol.push('<div class="form-group subB" id=subB' + (j + 1) + '"><input type="text" class="form-control" placeholder="Birth Rate' + (j + 1) + '" id="bRate' + (j + 1) + '"></div></div>');
        /*$('.bRates').append('<div class="form-group subB" id=subB' + bId + '"><input type="text" class="form-control" placeholder="Birth Rate' + bId + '" id="bRate' + bId + '"></div></div>');*/

        /*sId = ($('.sRates .subS').length + 1).toString();
        $('.sRates').append('<div class="form-group subS" id=subS' + j + '"><input type="text" class="form-control" placeholder="Survival Rate' + j +'" id="sRate' + j + '"></div></div>');*/
    }

    /*$('.sRates').append('<div class="form-group subS" id=subS' + (Number(sId)) + '"><input type="text" class="form-control" placeholder="Survival Rate' + (Number(sId)) +'" id="sRate' + (Number(sId)) + '"></div></div>');
    $('.sRates').append('<br><p>The final survival rate accounts for aging individuals</p>');*/
    survColF.push('<div class="form-group femSurv" id=femSurv' + (survColF.length + 1) + '"><input type="text" class="form-control" placeholder="Senescence" id="fsRate' + (survColF.length + 1) + '"></div></div>');
    survColF.push('<br><p>Final rate accounts for senescence.</p>');

    if (survColM.length > 0) {

        survColM.push('<div class="form-group maleSurv" id=maleSurv' + (survColM.length + 1) + '"><input type="text" class="form-control" placeholder="Senescence" id="msRate' + (survColM.length + 1) + '"></div></div>');
        survColM.push('<br><p>Final rate accounts for senescence.</p>');

    }

    for (var i = 0; i < NUM_NODES; i++) {

        if (IS_SEX != "one") {

            $('.aClasses').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + sexColM.join("") + '</form>');
            $('.aClasses').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + sexColF.join("") + '</form>');

            $('.survClasses').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + survColM.join("") + '</form>');
            $('.survClasses').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + survColF.join("") + '</form>');

            $('.moveProp').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + moveColM.join("") + '</form>');
            $('.moveProp').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + moveColF.join("") + '</form>');

            $('.bioWeights').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + weightsColM.join("") + '</form>');
            $('.bioWeights').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + weightsColF.join("") + '</form>');

            $('.sStocking').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + sstockColM.join("") + '</form>');
            $('.sStocking').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + sstockColF.join("") + '</form>');

            $('.sHarvesting').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + sharvestColM.join("") + '</form>');
            $('.sHarvesting').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + sharvestColF.join("") + '</form>');

        } else {

            $('.aClasses').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + sexColF.join("") + '</form>');

            $('.survClasses').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + survColF.join("") + '</form>');

            $('.moveProp').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + moveColF.join("") + '</form>');

            $('.bioWeights').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + weightsColF.join("") + '</form>');

            $('.sStocking').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + sstockColF.join("") + '</form>');

            $('.sHarvesting').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + sharvestColF.join("") + '</form>');

        }

        $('.bRates').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left" role="search" id="subPop' + (i + 1) + '">' + birthCol.join("") + '</form>');

        $('.allIntervals').append('<h4>Population ' + (i + 1) + '</h4><form class = "navbar-form navbar-left" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Selective Stocking" id = "ssInter' + (i + 1) + '"></div></form><br><form class = "navbar-form navbar-left" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Selective Harvesting" id = "shInter' + (i + 1) + '"></div></form><br><form class = "navbar-form navbar-left" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Random Harvesting" id = "rhInter' + (i + 1) + '"></div></form>');

        $('.allValues').append('<h4>Population ' + (i + 1) + '</h4><form class = "navbar-form navbar-left" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Harvest Amount" id = "rhValue' + (i + 1) + '"></div></form><br><form class = "navbar-form navbar-left" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Young Scaler" id = "youngDD' + (i + 1) + '"></div></form><br><form class = "navbar-form navbar-left" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Old Scaler" id = "oldDD' + (i + 1) + '"></div></form><br><form class = "navbar-form navbar-left" role="search"><div class = "form-group"><input type = "text" class = "form-control" placeholder = "Mature-Male Scaler" id = "mmDD' + (i + 1) + '"></div></form>');
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

    /*for (var i = 0; i < NUM_NODES; i++) {
        for (var j = 0; j < NUM_CLASS; j++) {

            if (IS_SEX == "one") {

                var id = ($('.aClasses .maleClasses').length + 1).toString();
                sexColM.push('<div class="form-group maleClasses" id=subClass' + (j + 1) + (i + 1) + '"><input type="text" class="form-control" placeholder="Age Class' + (j + 1) + (i + 1) + '" id="mClass' + (j + 1) + (i + 1) + '"></div></div>');

                var surv = ($('.survClasses .subS').length + 1).toString();
                survColM.push('<div class="form-group subS" id=subS' + (j + 1) + (i + 1) + '"><input type="text" class="form-control" placeholder="Survival Rate' + (j + 1) + (i + 1) + '" id="msRate' + (j + 1) + (i + 1) + '"></div></div>');

                var mover = ($('.moveProp .subMove').length + 1).toString();
                moveColM.push('<div class="form-group subMove" id=subMove' + (j + 1) + (i + 1) + '"><input type="text" class="form-control" placeholder="Propensity' + (j + 1) + (i + 1) + '" id="mProp' + (j + 1) + (i + 1) + '"></div></div>');

            } else {

                var mId = ($('.aClasses .maleClasses').length + 1).toString();
                var fId = ($('.aClasses .femClasses').length + 1).toString();
                sexColM.push('<div class="form-group maleClasses" id=mClass' + (j + 1) + (i + 1) + '"><input type="text" class="form-control" placeholder="Male Age' + (j + 1) +'" id="mClass' + (j + 1) + (i + 1) + '"></div></div>');
                sexColF.push('<div class="form-group femClasses" id=fClass' + (j + 1) + (i + 1) + '"><input type="text" class="form-control" placeholder="Female Age' + (j + 1) +'" id="fClass' + (j + 1) + (i + 1) + '"></div></div>');

                var mSurv = ($('.survClasses .maleSurv').length + 1).toString();
                var fSurv = ($('.survClasses .femSurv').length + 1).toString();
                survColM.push('<div class="form-group maleSurv" id=subS' + (j + 1) + (i + 1) + '"><input type="text" class="form-control" placeholder="Survival Rate' + (j + 1) +'" id="msRate' + (j + 1) + (i + 1) + '"></div></div>');

                survColF.push('<div class="form-group femSurv" id=subS' + (j + 1) + (i + 1) + '"><input type="text" class="form-control" placeholder="Survival Rate' + (j + 1) + (i + 1) + '" id="fsRate' + (j + 1) + (i + 1) + '"></div></div>');

                var mMover = ($('.moveProp .maleMove').length + 1).toString();
                var fMover = ($('.moveProp .femMove').length + 1).toString();
                moveColM.push('<div class="form-group maleMove" id=subMove' + (j + 1) + (i + 1) + '"><input type="text" class="form-control" placeholder="Male Propensity' + (j + 1) +'" id="mProp' + (j + 1) + (i + 1) + '"></div></div>');

                moveColF.push('<div class="form-group femMove" id=subMove' + (j + 1) + (i + 1) + '"><input type="text" class="form-control" placeholder="Female Propensity' + (j + 1) + (i + 1) + '" id="fProp' + (j + 1) + (i + 1) + '"></div></div>');

            }

            bId = ($('.bRates .subB').length + 1).toString();
            $('.bRates').append('<div class="form-group subB" id=subB' + bId + (i + 1) + '"><input type="text" class="form-control" placeholder="Birth Rate' + bId + (i + 1) + '" id="bRate' + bId + (i + 1) + '"></div></div>');
        }
    }*/
});
