"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.minStageCalculator = exports.landscapeCalculators = exports.portraitCalculators = exports.utils = void 0;
exports.utils = __importStar(require("./utils"));
var portrait_calculators_1 = require("./portrait-calculators");
Object.defineProperty(exports, "portraitCalculators", { enumerable: true, get: function () { return portrait_calculators_1.portraitCalculators; } });
var landscape_calculators_1 = require("./landscape-calculators");
Object.defineProperty(exports, "landscapeCalculators", { enumerable: true, get: function () { return landscape_calculators_1.landscapeCalculators; } });
var min_stage_calculator_1 = require("./min-stage-calculator");
Object.defineProperty(exports, "minStageCalculator", { enumerable: true, get: function () { return min_stage_calculator_1.minStageCalculator; } });
