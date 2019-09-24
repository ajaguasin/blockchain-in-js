"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const blockchain_1 = require("./blockchain");
const ajcoin = new blockchain_1.default();
ajcoin.createNewBlock(1234, "AJDd39ndf2qZO", "zm304rke461V1384dnPP");
ajcoin.createNewBlock(512, "Dash6hn2qZO", "bm1446esfef3438P");
ajcoin.createNewBlock(76543, "Axr43d39nvZO", "44m30Kdfke4fr84dnPP");
console.log(ajcoin);
//# sourceMappingURL=test.js.map