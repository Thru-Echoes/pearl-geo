/**
 * @fileOverview Helper functions getting values of fields in MVA-Nova.
 * @author <a href="mailto:omuellerklein@berkeley.edu">Oliver Muellerklein</a>
 * @version 0.5
*/

/**
 * Get values for each field of each population.
 *
 * @param {array} initMFields - array of male initial age-class entries.
 * @param {array} initFFields - array of fem initial age-class entries.
 * @param {array} survMFields - array of male survival rate entries.
 * @param {array} survFFields - array of fem survival rate entries.
 * @param {array} birthFields - array of birth rate entries.
 *
 * @returns {object} - Returns object of initial, survival, and birth data for one region.
*/
function getPopFieldValues(initMFields, initFFields, survMFields, survFFields, birthFields) {

    // Enhanced error checking
    var isType = function (obj) {
        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    };

    // Per region values
    var mClasses = [];
    var fClasses = [];
    var bRates = [];
    var msRates = [];
    var fsRates = [];
    var fieldReturn;
    var tmpName, tmpVar;

    for (var i = 0; i < NUM_CLASS; i++) {

        tmpName = "bRate" + i;
        tmpVar = Number(birthFields[i].firstElementChild.value);
        if (isType(tmpVar) != "number") throw "bRates is not number";
        bRates.push(tmpVar);

        if (IS_SEX == "one") {

            tmpName = "fClass" + i;
            tmpVar = Number(initFFields[i].firstElementChild.value);
            if (isType(tmpVar) != "number") throw "fClass is not number";
            fClasses.push(tmpVar);

            tmpName = "fsRate" + i;
            tmpVar = Number(survFFields[i].firstElementChild.value);
            if (isType(tmpVar) != "number") throw "fsRate is not number";
            fsRates.push(tmpVar);

        } else {

            tmpName = "mClass" + i;
            tmpVar = Number(initMFields[i].firstElementChild.value);
            if (isType(tmpVar) != "number") throw "mClass is not number";
            mClasses.push(tmpVar);

            tmpName = "fClass" + i;
            tmpVar = Number(initFFields[i].firstElementChild.value);
            if (isType(tmpVar) != "number") throw "fClass is not number";
            fClasses.push(tmpVar);

            tmpName = "msRate" + i;
            tmpVar = Number(survMFields[i].firstElementChild.value);
            if (isType(tmpVar) != "number") throw "msRate is not number";
            msRates.push(tmpVar);

            tmpName = "fsRate" + i;
            tmpVar = Number(survFFields[i].firstElementChild.value);
            if (isType(tmpVar) != "number") throw "fsRate is not number";
            fsRates.push(tmpVar);

        }
    }

    if (IS_SEX == "one") {

        tmpName = "fsRate" + (NUM_CLASS + 1);
        tmpVar = Number(survFFields[NUM_CLASS].firstElementChild.value);
        if (isType(tmpVar) != "number") throw "fsRate extra is not number";
        fsRates.push(tmpVar);

    } else {

        tmpName = "msRate" + (NUM_CLASS + 1);
        tmpVar = Number(survMFields[NUM_CLASS].firstElementChild.value);
        if (isType(tmpVar) != "number") throw "msRate extra is not number";
        msRates.push(tmpVar);

        tmpName = "fsRate" + (NUM_CLASS + 1);
        tmpVar = Number(survFFields[NUM_CLASS].firstElementChild.value);
        if (isType(tmpVar) != "number") throw "fsRate extra is not number";
        fsRates.push(tmpVar);
    }

    fieldReturn = {
        mCReturn: mClasses,
        fCReturn: fClasses,
        bReturn: bRates,
        msReturn: msRates,
        fsReturn: fsRates
    };

    return fieldReturn;
}

/**
 * Get values for each field of each population.
 *
 * @param {array} stockMFields - array of male selective stocking age-class entries.
 * @param {array} stockFFields - array of fem selective stocking age-class entries.
 * @param {array} harMFields - array of male selective harvest rate entries.
 * @param {array} harFFields - array of fem selective harvest rate entries.
 * @param {array} interFields - array of selective interval entries.
 * @param {array} valFields - array of random harvest amounts and interval entries.
 *
 * @returns {object} - Returns object of selective stocking & harvesting amounts
 *                     & intervals per age-class. Amounts of DD & random harvesting.
*/
function getStockFieldValues(stockMFields, stockFFields, harMFields, harFFields, interFields, valFields) {

    // Enhanced error checking
    var isType = function (obj) {
        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    };

    // Per region values
    var msStock = [];
    var fsStock = [];
    var msHarv = [];
    var fsHarv = [];
    var popIntervals = [];
    var rValues = [];
    var fieldReturn;
    var tmpName, tmpVar;

    try {

        for (var i = 0; i < NUM_CLASS; i++) {

            if (IS_SEX == "one") {

                tmpName = "fSStock" + i;
                tmpVar = Number(stockFFields[i].firstElementChild.value);
                if (isType(tmpVar) != "number") throw "fSStock is not number";
                fsStock.push(tmpVar);

                tmpName = "fsHarvest" + i;
                tmpVar = Number(harFFields[i].firstElementChild.value);
                if (isType(tmpVar) != "number") throw "fsHarvest is not number";
                fsHarv.push(tmpVar);

            } else {

                tmpName = "mSStock" + i;
                tmpVar = Number(stockMFields[i].firstElementChild.value);
                if (isType(tmpVar) != "number") throw "mSStock is not number";
                msStock.push(tmpVar);

                tmpName = "fSStock" + i;
                tmpVar = Number(stockFFields[i].firstElementChild.value);
                if (isType(tmpVar) != "number") throw "fSStock is not number";
                fsStock.push(tmpVar);

                tmpName = "msHarvest" + i;
                tmpVar = Number(harMFields[i].firstElementChild.value);
                if (isType(tmpVar) != "number") throw "msHarvest is not number";
                msHarv.push(tmpVar);

                tmpName = "fsHarvest" + i;
                tmpVar = Number(harFFields[i].firstElementChild.value);
                if (isType(tmpVar) != "number") throw "fsHarvest is not number";
                fsHarv.push(tmpVar);

            }
        }

        tmpVar = Number(interFields[0].firstElementChild.value);
        if (isType(tmpVar) != "number") throw "popIntervals[0] is not number";
        popIntervals.push(tmpVar);

        tmpVar = Number(interFields[1].firstElementChild.value);
        if (isType(tmpVar) != "number") throw "popIntervals[1] is not number";
        popIntervals.push(tmpVar);

        tmpVar = Number(valFields[0].firstElementChild.value);
        if (isType(tmpVar) != "number") throw "rValues[0] (random harvest interval) is not number";
        rValues.push(tmpVar);

        if (IS_SEX != "one") {

            tmpVar = Number(valFields[1].firstElementChild.value);
            if (isType(tmpVar) != "number") throw "rValues[1] (random harvest amount - male) is not number";
            rValues.push(tmpVar);

            tmpVar = Number(valFields[2].firstElementChild.value);
            if (isType(tmpVar) != "number") throw "rValues[2] (random harvest amount - female) is not number";
            rValues.push(tmpVar);

            tmpVar = Number(valFields[3].firstElementChild.value);
            if (isType(tmpVar) != "number") throw "rValues[3] (random harvest amount - total) is not number";
            rValues.push(tmpVar);

        } else {

            tmpVar = Number(valFields[3].firstElementChild.value);
            if (isType(tmpVar) != "number") throw "rValues[1] (random harvest amount - total single-sex) is not number";
            rValues.push(tmpVar);

        }

    } catch (err) {
        alert("Invalid entry - getFieldValues(): " + err);
    }

    fieldReturn = {
        msSReturn: msStock,
        fsSReturn: fsStock,
        msHReturn: msHarv,
        fsHReturn: fsHarv,
        interReturn: popIntervals,
        valReturn: rValues
    };
    return fieldReturn;
}
