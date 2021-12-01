"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portraitCalculators = void 0;
var utils_1 = require("./utils");
exports.portraitCalculators = {
    p: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: containerWidth,
        }), width = _b.width, height = _b.height;
        return [
            {
                height: height,
                width: width,
                left: (0, utils_1.getCenterOffset)(containerWidth, width),
                top: (0, utils_1.getCenterOffset)(containerHeight, height),
            },
        ];
    },
    l: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth,
        }), width = _b.width, height = _b.height;
        return [
            {
                width: width,
                height: height,
                top: (0, utils_1.getCenterOffset)(containerHeight, height),
                left: (0, utils_1.getCenterOffset)(containerWidth, width),
            },
        ];
    },
    pp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight / 2,
            width: containerWidth,
        }), height = _b.height, width = _b.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, width);
        var top = (0, utils_1.getCenterOffset)(containerHeight, 2 * height);
        return [
            {
                height: height,
                width: width,
                left: left,
                top: top,
                nameTop: insets.top,
            },
            {
                height: height,
                width: width,
                left: left,
                top: top + height,
            },
        ];
    },
    pl: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            width: containerWidth,
            height: (containerWidth * 9) / 16,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - landscapeHeight,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + landscapeHeight);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top,
                nameTop: insets.top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + portraitHeight,
            },
        ];
    },
    lp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            width: containerWidth,
            height: (containerWidth * 9) / 16,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - landscapeHeight,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + landscapeHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top,
                nameTop: insets.top,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top + landscapeHeight,
            },
        ];
    },
    ll: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            width: containerWidth,
            height: (containerWidth * 9) / 16,
        }), height = _b.height, width = _b.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, 2 * height);
        return [
            {
                height: height,
                width: width,
                top: top,
            },
            {
                height: height,
                width: width,
                top: top + height,
            },
        ];
    },
    ppp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight / 2,
            width: containerWidth / 2,
        }), nonSpotlightedHeight = _b.height, nonSpotlightedWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - nonSpotlightedHeight,
            width: containerWidth,
        }), spotlightedHeight = _c.height, spotlightedWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * nonSpotlightedWidth);
        var top = (0, utils_1.getCenterOffset)(containerHeight, spotlightedHeight + nonSpotlightedHeight);
        return [
            {
                height: spotlightedHeight,
                width: spotlightedWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, spotlightedWidth),
                top: top,
                nameTop: insets.top,
            },
            {
                height: nonSpotlightedHeight,
                width: nonSpotlightedWidth,
                left: left,
                top: top + spotlightedHeight,
            },
            {
                height: nonSpotlightedHeight,
                width: nonSpotlightedWidth,
                left: left + nonSpotlightedWidth,
                top: top + spotlightedHeight,
            },
        ];
    },
    ppl: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            width: containerWidth,
            height: (containerWidth * 9) / 16,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - landscapeHeight,
            width: containerWidth / 2,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitTop = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + landscapeHeight);
        var portraitLeft = (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                top: portraitTop,
                left: portraitLeft,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft + portraitWidth,
                top: portraitTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: portraitTop + portraitHeight,
            },
        ];
    },
    plp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            width: containerWidth,
            height: (containerWidth * 9) / 16,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: (containerHeight - landscapeHeight) / 2,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitLeft = (0, utils_1.getCenterOffset)(containerWidth, portraitWidth);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft,
                nameTop: insets.top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: portraitHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft,
                top: portraitHeight + landscapeHeight,
            },
        ];
    },
    pll: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - 2 * landscapeHeight,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + 2 * landscapeHeight);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top,
                nameTop: insets.top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + portraitHeight,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + portraitHeight + landscapeHeight,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
        ];
    },
    lpp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            width: containerWidth,
            height: (containerWidth * 9) / 16,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - landscapeHeight,
            width: containerWidth / 2,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight + portraitHeight);
        var portraitLeft = (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: landscapeTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                top: landscapeTop + landscapeHeight,
                left: portraitLeft,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                top: landscapeTop + landscapeHeight,
                left: portraitLeft + portraitWidth,
            },
        ];
    },
    lpl: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight / 3,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var landscapeLeft = (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth);
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + 2 * landscapeHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: landscapeLeft,
                top: top,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top + landscapeHeight,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: landscapeLeft,
                top: top + landscapeHeight + portraitHeight,
            },
        ];
    },
    llp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - 2 * landscapeHeight,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var landscapeLeft = (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth);
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + 2 * landscapeHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: landscapeLeft,
                top: top,
                nameTop: insets.top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: landscapeLeft,
                top: top + landscapeHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top + landscapeHeight * 2,
            },
        ];
    },
    lll: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth,
        }), height = _b.height, width = _b.width;
        var firstTop = (0, utils_1.getCenterOffset)(containerHeight, height * 3);
        var left = (0, utils_1.getCenterOffset)(containerWidth, width);
        return [
            {
                height: height,
                width: width,
                left: left,
                top: firstTop,
            },
            {
                height: height,
                width: width,
                left: left,
                top: firstTop + height,
            },
            {
                height: height,
                width: width,
                left: left,
                top: firstTop + height * 2,
            },
        ];
    },
    pppp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight / 2,
            width: containerWidth / 2,
        }), width = _b.width, height = _b.height;
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * width);
        var top = (0, utils_1.getCenterOffset)(containerHeight, 2 * height);
        return [
            {
                height: height,
                width: width,
                left: left,
                top: top,
            },
            {
                height: height,
                width: width,
                left: left + width,
                top: top,
            },
            {
                height: height,
                width: width,
                left: left,
                top: top + height,
            },
            {
                height: height,
                width: width,
                left: left + width,
                top: top + height,
            },
        ];
    },
    pppl: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - landscapeHeight,
            width: containerWidth / 3,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + landscapeHeight);
        var portraitLeft = (0, utils_1.getCenterOffset)(containerWidth, portraitWidth * 3);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft,
                top: top,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft + portraitWidth,
                top: top,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft + 2 * portraitWidth,
                top: top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + portraitHeight,
            },
        ];
    },
    pplp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - landscapeHeight,
            width: containerWidth / 3,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + landscapeHeight);
        var portraitLeft = (0, utils_1.getCenterOffset)(containerWidth, portraitWidth * 3);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft,
                top: top,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft + portraitWidth,
                top: top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + portraitHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft + 2 * portraitWidth,
                top: top,
            },
        ];
    },
    ppll: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - 2 * landscapeHeight,
            width: containerWidth / 2,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + 2 * landscapeHeight);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth),
                top: top,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitWidth + (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth),
                top: top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + portraitHeight,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + portraitHeight + landscapeHeight,
            },
        ];
    },
    plpp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - landscapeHeight,
            width: containerWidth / 3,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + landscapeHeight);
        var portraitLeft = (0, utils_1.getCenterOffset)(containerWidth, portraitWidth * 3);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft,
                top: top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + portraitHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft + portraitWidth,
                top: top,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitLeft + 2 * portraitWidth,
                top: top,
            },
        ];
    },
    plpl: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 4,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: (containerHeight - 2 * landscapeHeight) / 2,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, 2 * (portraitHeight + landscapeHeight));
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                top: top,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                nameTop: insets.top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + portraitHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top + portraitHeight + landscapeHeight,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + 2 * portraitHeight + landscapeHeight,
            },
        ];
    },
    pllp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 4,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: (containerHeight - 2 * landscapeHeight) / 2,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, 2 * (portraitHeight + landscapeHeight));
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                top: top,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                nameTop: insets.top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + portraitHeight,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + portraitHeight + landscapeHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top + portraitHeight + 2 * landscapeHeight,
            },
        ];
    },
    plll: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 4,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - 3 * landscapeHeight,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, 3 * landscapeHeight + portraitHeight);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                top: top,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                nameTop: insets.top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + portraitHeight,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + portraitHeight + landscapeHeight,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + portraitHeight + 2 * landscapeHeight,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
        ];
    },
    lppp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: (containerHeight - landscapeHeight) / 2,
            width: containerWidth / 2,
        }), middlePortraitHeight = _c.height, middlePortraitWidth = _c.width;
        var _d = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - landscapeHeight - middlePortraitHeight,
            width: containerWidth,
        }), bottomPortraitHeight = _d.height, bottomPortraitWidth = _d.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight + middlePortraitHeight + bottomPortraitHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                nameTop: insets.top,
            },
            {
                height: middlePortraitHeight,
                width: middlePortraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, 2 * middlePortraitWidth),
                top: top + landscapeHeight,
            },
            {
                height: middlePortraitHeight,
                width: middlePortraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, 2 * middlePortraitWidth) +
                    middlePortraitWidth,
                top: top + landscapeHeight,
            },
            {
                height: bottomPortraitHeight,
                width: bottomPortraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, bottomPortraitWidth),
                top: top + landscapeHeight + middlePortraitHeight,
            },
        ];
    },
    lppl: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - 2 * landscapeHeight,
            width: containerWidth / 2,
        }), middlePortraitHeight = _c.height, middlePortraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, 2 * landscapeHeight + middlePortraitHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
            {
                height: middlePortraitHeight,
                width: middlePortraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, 2 * middlePortraitWidth),
                top: top + landscapeHeight,
            },
            {
                height: middlePortraitHeight,
                width: middlePortraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, 2 * middlePortraitWidth) +
                    middlePortraitWidth,
                top: top + landscapeHeight,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + landscapeHeight + middlePortraitHeight,
            },
        ];
    },
    lplp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 4,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: (containerHeight - 2 * landscapeHeight) / 2,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, 2 * (portraitHeight + landscapeHeight));
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top,
                nameTop: insets.top,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top + landscapeHeight,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + landscapeHeight + portraitHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top + 2 * landscapeHeight + portraitHeight,
            },
        ];
    },
    lpll: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 4,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - 3 * landscapeHeight,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + 3 * landscapeHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                nameTop: insets.top,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top + landscapeHeight,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + portraitHeight + landscapeHeight,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + portraitHeight + 2 * landscapeHeight,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
        ];
    },
    llpp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - 2 * landscapeHeight,
            width: containerWidth / 2,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + 2 * landscapeHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                top: top + landscapeHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth),
                top: top + 2 * landscapeHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitWidth + (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth),
                top: top + 2 * landscapeHeight,
            },
        ];
    },
    llpl: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 4,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - 3 * landscapeHeight,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + 3 * landscapeHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                nameTop: insets.top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + landscapeHeight,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top + 2 * landscapeHeight,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + portraitHeight + 2 * landscapeHeight,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
        ];
    },
    lllp: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 4,
            width: containerWidth,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight - 3 * landscapeHeight,
            width: containerWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight + 3 * landscapeHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
                nameTop: insets.top,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + landscapeHeight,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: top + 2 * landscapeHeight,
                left: (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth),
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: (0, utils_1.getCenterOffset)(containerWidth, portraitWidth),
                top: top + 3 * landscapeHeight,
            },
        ];
    },
    llll: function (_a) {
        var containerWidth = _a.containerWidth, containerHeight = _a.containerHeight, insets = _a.insets;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 4,
            width: containerWidth,
        }), height = _b.height, width = _b.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, 4 * height);
        var left = (0, utils_1.getCenterOffset)(containerWidth, width);
        return [
            {
                height: height,
                width: width,
                left: left,
                top: top,
                nameTop: insets.top,
            },
            {
                height: height,
                width: width,
                left: left,
                top: top + height,
            },
            {
                height: height,
                width: width,
                left: left,
                top: top + 2 * height,
            },
            {
                height: height,
                width: width,
                left: left,
                top: top + 3 * height,
            },
        ];
    },
};
