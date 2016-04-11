/**
 * @fileOverview Helper functions for filling dynamic fields MVA-Nova site.
 * @author <a href="mailto:omuellerklein@berkeley.edu">Oliver Muellerklein</a>
 * @version 0.5
*/


/**
 * Split CSV into array of parts.
 *
 * @param {string} sep - character to split on
 * @param {string} preData - data from csv not split
 *
 * @returns {array} - data as array of parts.
*/
function splitCSV(sep, preData) {
    /* Default values */
    sep = sep || ",";
    if (preData === undefined) {
        throw " data needs to be defined in call to splitCSV(sep, data)!";
    }

    var lSplit, rSplit, checkNew, modTest;
    var allHeaders = [];

    var init1 = [];
    var init2 = [];
    var init3 = [];
    var allInit = [];

    var surv1 = [];
    var surv2 = [];
    var surv3 = [];
    var allSurv = [];

    var birth1 = [];
    var birth2 = [];
    var birth3 = [];
    var allBirth = [];

    var finData = [];

    /* Always three types per population: Init, Survival, Birth */
    var numCols = (3) * NUM_NODES;
    var sexType = (IS_SEX == "two") ? 2 : 1;
    var numRows = sexType * NUM_CLASS;

    for (var thisCSV = preData.split(sep = sep || ","), x = thisCSV.length - 1, tl; x >= 0; x--) {

        /* Check if contains new line */
        checkNew = thisCSV[x].search("\n");

        if (checkNew > 0) {
            thisCSV[x] = thisCSV[x].replace("\n", ',');
            lSplit = thisCSV[x].split(",")[0];
            rSplit = thisCSV[x].split(",")[1];
            finData.push(rSplit);
            finData.push(lSplit);
        } else {
            finData.push(thisCSV[x]);
        }
    }

    finData.shift();
    var finLen = finData.length;

    for (var j = (finLen - 1); j >= 0; j--) {

        /* Is header */
        if (j >= (finLen - numCols)) {

            //debugger;

            allHeaders.push(finData[j]);
        } else {

            //debugger;

            modTest = ((j + 1) % numCols);

            if (NUM_NODES == 3) {
                if (modTest === 0) {
                    init1.push(finData[j]);
                } else if (modTest == (numCols - 1)) {
                    init2.push(finData[j]);
                } else if (modTest == (numCols - 2)) {
                    init3.push(finData[j]);
                } else if (modTest == (numCols - 3)) {
                    surv1.push(finData[j]);
                } else if (modTest == (numCols - 4)) {
                    surv2.push(finData[j]);
                } else if (modTest == (numCols - 5)) {
                    surv3.push(finData[j]);
                } else if (modTest == (numCols - 6)) {
                    birth1.push(finData[j]);
                } else if (modTest == (numCols - 7)) {
                    birth2.push(finData[j]);
                } else if (modTest == (numCols - 8)) {
                    birth3.push(finData[j]);
                }
            } else if (NUM_NODES == 2) {
                if (modTest === 0) {
                    init1.push(finData[j]);
                } else if (modTest == (numCols - 1)) {
                    init2.push(finData[j]);
                } else if (modTest == (numCols - 2)) {
                    surv1.push(finData[j]);
                } else if (modTest == (numCols - 3)) {
                    surv2.push(finData[j]);
                } else if (modTest == (numCols - 4)) {
                    birth1.push(finData[j]);
                } else {
                    birth2.push(finData[j]);
                }
            } else {
                if (modTest === 0) {
                    init1.push(finData[j]);
                } else if (modTest == 1) {
                    surv1.push(finData[j]);
                } else {
                    birth1.push(finData[j]);
                }
            }
        }
	}

    var finReturn = {
        headers: allHeaders,
        init1: init1,
        init2: init2,
        init3: init3,
        surv1: surv1,
        surv2: surv2,
        surv3: surv3,
        birth1: birth1,
        birth2: birth2,
        birth3: birth3
    };

    return finReturn;
}

/**
 * Get data user has entered into fields for current session.
 *
 * @param {NA} None
 *
 * @returns {object} - Returns object of entered values.
*/
function getUserData() {
    var rows = [];
    rows.push({
        numNodes: NUM_NODES,
        numClass: NUM_CLASS,
        isSex: IS_SEX,
        isYoung: IS_YOUNG,
        isOld: IS_OLD,
        isMM: IS_MM,
        isDemo: IS_DEMO,
        isEnvir: IS_ENVIR
    });
    /*for (var i = 0; i < 1; i++) {
        rows.push({
            numNodes: NUM_NODES,
            numClass: NUM_CLASS,
            price: '$' + (startId + i)
        });
    }*/
    return rows;
}

/**
 * Pull pointers (indices) to fields on page.
 *
 * @param {number} offSet - index offset. Default to 0.
 *
 * @returns {object} - pointers to all fields on page.
*/
function indexFields(offSet) {
    /* Default offset = 0 */
    offSet = offSet || 0;

    var getPop1 = document.getElementsByClassName("subPop1");
    var getPop2 = document.getElementsByClassName("subPop2");
    var getPop3 = document.getElementsByClassName("subPop3");
    var allMInit1, allFInit1, allMSurv1, allFSurv1, allBirth1;
    var allMInit2, allFInit2, allMSurv2, allFSurv2, allBirth2;
    var allMInit3, allFInit3, allMSurv3, allFSurv3, allBirth3;

    var totClass = (IS_SEX == "two") ? (2 * NUM_CLASS) : NUM_CLASS;

    if (IS_SEX == "two") {
        allMInit1 = getPop1[offSet + 0];
        allFInit1 = getPop1[offSet + 1];
        allMSurv1 = getPop1[offSet + 2];
        allFSurv1 = getPop1[offSet + 3];
        allBirth1 = getPop1[offSet + 4];
    } else {
        allMInit1 = [];
        allFInit1 = getPop1[offSet + 0];
        allMSurv1 = [];
        allFSurv1 = getPop1[offSet + 1];
        allBirth1 = getPop1[offSet + 2];
    }

    if (NUM_NODES >= 2) {

        if (IS_SEX == "two") {
            allMInit2 = getPop2[offSet + 0];
            allFInit2 = getPop2[offSet + 1];
            allMSurv2 = getPop2[offSet + 2];
            allFSurv2 = getPop2[offSet + 3];
            allBirth2 = getPop2[offSet + 4];
        } else {
            allMInit2 = [];
            allFInit2 = getPop2[offSet + 0];
            allMSurv2 = [];
            allFSurv2 = getPop2[offSet + 1];
            allBirth2 = getPop2[offSet + 2];
        }

        if (NUM_NODES == 3) {

            if (IS_SEX == "two") {
                allMInit3 = getPop3[offSet + 0];
                allFInit3 = getPop3[offSet + 1];
                allMSurv3 = getPop3[offSet + 2];
                allFSurv3 = getPop3[offSet + 3];
                allBirth3 = getPop3[offSet + 4];
            } else {
                allMInit3 = [];
                allFInit3 = getPop3[offSet + 0];
                allMSurv3 = [];
                allFSurv3 = getPop3[offSet + 1];
                allBirth3 = getPop3[offSet + 2];
            }
        }
    }

    var fieldReturn = {
        mInit1: allMInit1,
        fInit1: allFInit1,
        mInit2: allMInit2,
        fInit2: allFInit2,
        mInit3: allMInit3,
        fInit3: allFInit3,
        mSurv1: allMSurv1,
        fSurv1: allFSurv1,
        mSurv2: allMSurv2,
        fSurv2: allFSurv2,
        mSurv3: allMSurv3,
        fSurv3: allFSurv3,
        birth1: allBirth1,
        birth2: allBirth2,
        birth3: allBirth3
    };
    return fieldReturn;
}

/**
 * Pull pointers (indices) to fields on page.
 *
 * @param {number} offSet - index offset. Default to 0.
 *
 * @returns {object} - pointers to all fields on page.
*/
function indexStockFields(offSet) {
    /* Default offset = 0 */
    offSet = offSet || 0;

    var getPop1 = document.getElementsByClassName("subPop1");
    var getPop2 = document.getElementsByClassName("subPop2");
    var getPop3 = document.getElementsByClassName("subPop3");
    var allMSStock1, allFSStock1, allMSHarvest1, allFSHarvest1;
    var SInterval1, HInterval1, RInterval1, MRandom1, FRandom1, TRandom1;
    var allMSStock2, allFSStock2, allMSHarvest2, allFSHarvest2;
    var SInterval2, HInterval2, RInterval2, MRandom2, FRandom2, TRandom2;
    var allMSStock3, allFSStock3, allMSHarvest3, allFSHarvest3;
    var SInterval3, HInterval3, RInterval3, MRandom3, FRandom3, TRandom3;

    var totClass = (IS_SEX == "two") ? (2 * NUM_CLASS) : NUM_CLASS;

    if (IS_SEX == "two") {
        allMSStock1 = getPop1[offSet + 0];
        allFSStock1 = getPop1[offSet + 1];
        allMSHarvest1 = getPop1[offSet + 2];
        allFSHarvest1 = getPop1[offSet + 3];
        SInterval1 = getPop1[offSet + 4];
        HInterval1 = getPop1[offSet + 5];
        RInterval1 = getPop1[offSet + 6];
        MRandom1 = getPop1[offSet + 7];
        FRandom1 = getPop1[offSet + 8];
        TRandom1 = getPop1[offSet + 9];
    } else {
        allMSStock1 = [];
        allFSStock1 = getPop1[offSet + 0];
        allMSHarvest1 = [];
        allFSHarvest1 = getPop1[offSet + 1];
        SInterval1 = getPop1[offSet + 2];
        HInterval1 = getPop1[offSet + 3];
        RInterval1 = getPop1[offSet + 4];
        MRandom1 = [];
        FRandom1 = [];
        TRandom1 = getPop1[offSet + 5];
    }

    if (NUM_NODES >= 2) {

        if (IS_SEX == "two") {
            allMSStock2 = getPop2[offSet + 0];
            allFSStock2 = getPop2[offSet + 1];
            allMSHarvest2 = getPop2[offSet + 2];
            allFSHarvest2 = getPop2[offSet + 3];
            SInterval2 = getPop2[offSet + 4];
            HInterval2 = getPop2[offSet + 5];
            RInterval2 = getPop2[offSet + 6];
            MRandom2 = getPop2[offSet + 7];
            FRandom2 = getPop2[offSet + 8];
            TRandom2 = getPop2[offSet + 9];
        } else {
            allMSStock2 = [];
            allFSStock2 = getPop2[offSet + 0];
            allMSHarvest2 = [];
            allFSHarvest2 = getPop2[offSet + 1];
            SInterval2 = getPop2[offSet + 2];
            HInterval2 = getPop2[offSet + 3];
            RInterval2 = getPop2[offSet + 4];
            MRandom2 = [];
            FRandom2 = [];
            TRandom2 = getPop2[offSet + 5];
        }

        if (NUM_NODES == 3) {

            if (IS_SEX == "two") {
                allMSStock3 = getPop3[offSet + 0];
                allFSStock3 = getPop3[offSet + 1];
                allMSHarvest3 = getPop3[offSet + 2];
                allFSHarvest3 = getPop3[offSet + 3];
                SInterval3 = getPop3[offSet + 4];
                HInterval3 = getPop3[offSet + 5];
                RInterval3 = getPop3[offSet + 6];
                MRandom3 = getPop3[offSet + 7];
                FRandom3 = getPop3[offSet + 8];
                TRandom3 = getPop3[offSet + 9];
            } else {
                allMSStock3 = [];
                allFSStock3 = getPop3[offSet + 0];
                allMSHarvest3 = [];
                allFSHarvest3 = getPop3[offSet + 1];
                SInterval3 = getPop3[offSet + 2];
                HInterval3 = getPop3[offSet + 3];
                RInterval3 = getPop3[offSet + 4];
                MRandom3 = [];
                FRandom3 = [];
                TRandom3 = getPop3[offSet + 5];
            }
        }
    }

    var fieldReturn = {
        mSStock1: allMSStock1,
        fSStock1: allFSStock1,
        mSStock2: allMSStock2,
        fSStock2: allFSStock2,
        mSStock3: allMSStock3,
        fSStock3: allFSStock3,
        mSHarvest1: allMSHarvest1,
        fSHarvest1: allFSHarvest1,
        mSHarvest2: allMSHarvest2,
        fSHarvest2: allFSHarvest2,
        mSHarvest3: allMSHarvest3,
        fSHarvest3: allFSHarvest3,
        sInterval1: SInterval1,
        hInterval1: HInterval1,
        rInterval1: RInterval1,
        sInterval2: SInterval2,
        hInterval2: HInterval2,
        rInterval2: RInterval2,
        sInterval3: SInterval3,
        hInterval3: HInterval3,
        rInterval3: RInterval3,
        mRandom1: MRandom1,
        fRandom1: FRandom1,
        tRandom1: TRandom1,
        mRandom2: MRandom2,
        fRandom2: FRandom2,
        tRandom2: TRandom2,
        mRandom3: MRandom3,
        fRandom3: FRandom3,
        tRandom3: TRandom3
    };
    return fieldReturn;
}
