$(document).ready(function(){

    var sexColM = [];
    var sexColF = [];
    var survColM = [];
    var survColF = [];
    var birthCol = [];

    var bId, sId;

    for (var j = 0; j < NUM_CLASS; j++) {

        if (IS_SEX == "one") {

            /* Create init age class numbers for single-sex */
            var id = ($('.aClasses .femClasses').length + 1).toString();
            sexColF.push('<div class="form-group femClasses" id=fInit' + (j + 1) + '"><input type="text" class="form-control" placeholder="Age Class' + (j + 1) + '" id="fClass' + (j + 1) + '"></div></div>');

            /* Create survival forms for single-sex */
            var surv = ($('.survClasses .femSurv').length + 1).toString();
            survColF.push('<div class="form-group femSurv" id=femSurv' + (j + 1) + '"><input type="text" class="form-control" placeholder="Survival Rate' + (j + 1) + '" id="fsRate' + (j + 1) + '"></div></div>');

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

        }

        bId = ($('.bRates .subB').length + 1).toString();
        birthCol.push('<div class="form-group subB" id=subB' + (j + 1) + '"><input type="text" class="form-control" placeholder="Birth Rate' + (j + 1) + '" id="bRate' + (j + 1) + '"></div></div>');

    }

    survColF.push('<div class="form-group femSurv" id=femSurv' + (survColF.length + 1) + '"><input type="text" class="form-control" placeholder="Senescence" id="fsRate' + (survColF.length + 1) + '"></div></div>');
    survColF.push('<br><p>Final rate accounts for senescence.</p>');

    if (survColM.length > 0) {

        survColM.push('<div class="form-group maleSurv" id=maleSurv' + (survColM.length + 1) + '"><input type="text" class="form-control" placeholder="Senescence" id="msRate' + (survColM.length + 1) + '"></div></div>');
        survColM.push('<br><p>Final rate accounts for senescence.</p>');

    }

    for (var i = 0; i < NUM_NODES; i++) {

        if (IS_SEX != "one") {

            $('.aClasses').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + sexColM.join("") + '</form>');
            $('.aClasses').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + sexColF.join("") + '</form>');

            $('.survClasses').append('<h4>Males ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + survColM.join("") + '</form>');
            $('.survClasses').append('<br><br><br><h4>Females ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + survColF.join("") + '</form>');

        } else {

            $('.aClasses').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + sexColF.join("") + '</form>');

            $('.survClasses').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + survColF.join("") + '</form>');

        }

        $('.bRates').append('<h4>Population ' + (i + 1) + '</h4><form class="navbar-form navbar-left subPop' + (i + 1) + '" role="search">' + birthCol.join("") + '</form>');

    }
});
