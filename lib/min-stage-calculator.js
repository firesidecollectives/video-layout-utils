"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minStageCalculator = void 0;
var minStageCalculator = function (_a) {
    var dimensionKey = _a.dimensionKey, rowPadding = _a.rowPadding, rowWidth = _a.rowWidth, videoMargin = _a.videoMargin;
    var videoOrientations = dimensionKey.split("");
    var hasLandscapeVideo = videoOrientations.some(function (orientation) { return orientation === "l"; });
    var availableSpace = rowWidth - 2 * rowPadding;
    if (!hasLandscapeVideo) {
        // portrait videos all go in a single row, each taking 1/4 of it
        var gapSpace = (videoOrientations.length - 1) * videoMargin;
        var width_1 = (availableSpace - gapSpace) / 4;
        var height_1 = (width_1 * 16) / 9;
        return [videoOrientations.map(function () { return ({ height: height_1, width: width_1 }); })];
    }
    var landscapeWidth = availableSpace / 2;
    var height = (landscapeWidth * 9) / 16;
    var portraitWidth = (height * 9) / 16;
    var rows = [];
    var currentRow = [];
    var widthLeft = availableSpace;
    // distribute videos across rows, ignoring margin between them (for now)
    videoOrientations.forEach(function (orientation, i) {
        var isLandscape = orientation === "l";
        var width = isLandscape ? landscapeWidth : portraitWidth;
        if (widthLeft < width) {
            rows.push(currentRow);
            widthLeft = availableSpace;
            currentRow = [];
        }
        currentRow.push({
            height: height,
            width: width,
        });
        widthLeft -= width;
        if (i === videoOrientations.length) {
            rows.push(currentRow);
        }
    });
    // once videos are placed in rows, add back missing margins
    // this is done in a post-step because margins are per video in row
    return rows.map(function (row) {
        var videosInRow = row.length;
        var gapSpace = (videosInRow - 1) * videoMargin;
        var widthReduction = gapSpace / videosInRow;
        return row.map(function (dimensions) {
            var isLandscape = dimensions.width > dimensions.height;
            var newWidth = dimensions.width - widthReduction;
            var newHeight = isLandscape ? (newWidth * 9) / 16 : (newWidth * 16) / 9;
            return {
                width: newWidth,
                height: newHeight,
            };
        });
    });
};
exports.minStageCalculator = minStageCalculator;
