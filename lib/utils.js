"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLargestLandscapeBox = exports.findLargestPortraitBox = exports.getCenterOffset = void 0;
var getCenterOffset = function (containerSize, videoSize) { return (containerSize - videoSize) / 2; };
exports.getCenterOffset = getCenterOffset;
var findLargestPortraitBox = function (_a) {
    var containerHeight = _a.height, containerWidth = _a.width;
    var height = containerHeight;
    var width = (height * 9) / 16;
    if (width < containerWidth) {
        return {
            height: height,
            width: width,
        };
    }
    width = containerWidth;
    height = (width * 16) / 9;
    return {
        height: height,
        width: width,
    };
};
exports.findLargestPortraitBox = findLargestPortraitBox;
var findLargestLandscapeBox = function (_a) {
    var containerHeight = _a.height, containerWidth = _a.width;
    var width = containerWidth;
    var height = (width * 9) / 16;
    if (height < containerHeight) {
        return {
            width: width,
            height: height,
        };
    }
    height = containerHeight;
    width = (height * 16) / 9;
    return {
        height: height,
        width: width,
    };
};
exports.findLargestLandscapeBox = findLargestLandscapeBox;
