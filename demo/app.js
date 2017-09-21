/*jslint browser:true, es6, single, for, devel */
/*global window */
/*eslint no-console: ["error", { allow: ["log"] }] */

window.onload = function () {
    'use strict';

    let bold = `font-weight: bold;`,
        normal = `font-weight: normal;`,
        green = `color: green;`;

    console.log(
        `%cGreen%c indicates inherited objects in the prototype chain.`,
        (green + bold), (green + normal));

    console.log(`\n`);

    // Create an empty object by explicitly setting [[Prototype]] as the
    // inherited base prototype object.  is similar to {} or new Object();
    let LX = Object.create(Object.prototype);
    LX.wireless = `Bluetooth HandsFreeLink`;
    LX.camera = `Multi-Angle Rearview`;
    LX[`cabin-climate`] = `Dual-Zone Automatic Climate Control`;

    // Have the “sport” variable inherit from the “LX” object, which inherits
    // from the base prototype.
    let sport = Object.create(LX);
    sport.engine = `189-HP i-VTEC 4-Cylinder`;
    sport[`drivers-seat`] = `10-Way Power`;
    sport.wheels = `19-inch Alloy`;

    // Have the “sportSE” variable inherit from the “sport” object, which
    // inherits from the “LX” object, which, in turn, inherits from the base
    // prototype.
    let sportSE = Object.create(sport);
    sportSE.seats = `Leather-Trimmed`;
    sportSE.stitching = `Red accent`;
    sportSE[`front-seats`] = `Heated`;
    sportSE.badging = `Special Edition`;

    if (Object.prototype.isPrototypeOf(LX)) {   // LX inherits from the base
        if (LX.isPrototypeOf(sport)) {          // sport inherits from LX
            if (sport.isPrototypeOf(sportSE)) { // sportSE inherits from sport
                console.log(`Object.prototype → LX → sport → sportSE`);
            }
        }
    }

    console.log(`\n`);

    console.log(`%cThe LX includes…%c`, bold, normal);
    for (let property in LX) { // Iterate over all the enumerable properties
        console.log(`— %c${property}%c: ${LX[property]}`,
            bold, normal);
    }

    console.log(`\n`);

    console.log(`%cThe Sport includes…%c`, bold, normal);
    for (let property in sport) {
        if (sport.hasOwnProperty(property)) {
            console.log(`— %c${property}%c: ${sport[property]}`,
                bold, normal);
        } else {
            console.log(`— %c${property}%c: ${sport[property]}`,
                green, normal);
        }
    }

    console.log(`\n`);

    console.log(`%cThe Sport Special Edition includes…%c`, bold, normal);
    for (let property in sportSE) {
        if (sportSE.hasOwnProperty(property)) {
            console.log(`— %c${property}%c: ${sportSE[property]}`,
                bold, normal);
        } else {
            console.log(`— %c${property}%c: ${sportSE[property]}`,
                green, normal);
        }
    }
};
