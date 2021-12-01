"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.landscapeCalculators = void 0;
var utils_1 = require("./utils");
exports.landscapeCalculators = {
    p: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
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
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
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
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: containerWidth / 2,
        }), height = _b.height, width = _b.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, width * 2);
        var top = (0, utils_1.getCenterOffset)(containerHeight, height);
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
        ];
    },
    pl: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerHeight * 9) / 16,
        }), portraitHeight = _b.height, portraitWidth = _b.width;
        var _c = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth - portraitWidth,
        }), landscapeHeight = _c.height, landscapeWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, portraitWidth + landscapeWidth);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left,
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight),
            },
        ];
    },
    lp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerHeight * 9) / 16,
        }), portraitHeight = _b.height, portraitWidth = _b.width;
        var _c = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth - portraitWidth,
        }), landscapeHeight = _c.height, landscapeWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, portraitWidth + landscapeWidth);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight),
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth,
            },
        ];
    },
    ll: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth / 2,
        }), width = _b.width, height = _b.height;
        var top = (0, utils_1.getCenterOffset)(containerHeight, height);
        return [
            {
                height: height,
                width: width,
                top: top,
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: height,
                width: width,
                left: width,
                top: top,
            },
        ];
    },
    ppp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: containerWidth / 3,
        }), height = _b.height, width = _b.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, 3 * width);
        var top = (0, utils_1.getCenterOffset)(containerHeight, height);
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
                left: left + 2 * width,
                top: top,
            },
        ];
    },
    ppl: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: Math.min((containerHeight * 9) / 16, containerWidth / 3),
        }), portraitHeight = _b.height, portraitWidth = _b.width;
        var _c = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth - 2 * portraitWidth,
        }), landscapeHeight = _c.height, landscapeWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth + landscapeWidth);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
                left: left,
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
                left: left + portraitWidth,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + 2 * portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight),
            },
        ];
    },
    plp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: Math.min((containerHeight * 9) / 16, containerWidth / 3),
        }), portraitHeight = _b.height, portraitWidth = _b.width;
        var _c = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth - 2 * portraitWidth,
        }), landscapeHeight = _c.height, landscapeWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth + landscapeWidth);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
                left: left,
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight),
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
                left: left + portraitWidth + landscapeWidth,
            },
        ];
    },
    pll: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: (containerWidth * 2) / 3,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: containerWidth - landscapeWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, portraitWidth + landscapeWidth);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 2 * landscapeHeight);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
                left: left,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + portraitWidth,
                top: landscapeTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + portraitWidth,
                top: landscapeTop + landscapeHeight,
            },
        ];
    },
    lpp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: Math.min((containerHeight * 9) / 16, containerWidth / 3),
        }), portraitHeight = _b.height, portraitWidth = _b.width;
        var _c = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth - 2 * portraitWidth,
        }), landscapeHeight = _c.height, landscapeWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth + landscapeWidth);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight),
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
                left: left + landscapeWidth,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
                left: left + landscapeWidth + portraitWidth,
            },
        ];
    },
    lpl: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: containerWidth / 3,
        }), portraitHeight = _b.height, portraitWidth = _b.width;
        var _c = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: (containerWidth - portraitWidth) / 2,
        }), landscapeHeight = _c.height, landscapeWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * landscapeWidth + portraitWidth);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight),
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + landscapeWidth + portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight),
            },
        ];
    },
    llp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: (containerWidth * 2) / 3,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: containerWidth - landscapeWidth,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, portraitWidth + landscapeWidth);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 2 * landscapeHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop + landscapeHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
            },
        ];
    },
    lll: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: containerWidth / 2,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth - landscapeWidth,
        }), spotlightedHeight = _c.height, spotlightedWidth = _c.width;
        return [
            {
                height: spotlightedHeight,
                width: spotlightedWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, spotlightedHeight),
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: spotlightedWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight * 2),
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: spotlightedWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight * 2) +
                    landscapeHeight,
            },
        ];
    },
    pppp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: containerWidth / 4,
        }), height = _b.height, width = _b.width;
        var top = (0, utils_1.getCenterOffset)(containerHeight, height);
        return [
            {
                height: height,
                width: width,
                top: top,
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: height,
                width: width,
                top: top,
                left: width,
            },
            {
                height: height,
                width: width,
                top: top,
                left: 2 * width,
            },
            {
                height: height,
                width: width,
                top: top,
                left: 3 * width,
            },
        ];
    },
    pppl: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth / 2,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerWidth - landscapeWidth) / 3,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitTop = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                top: portraitTop,
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitWidth,
                top: portraitTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: 2 * portraitWidth,
                top: portraitTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: 3 * portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight),
            },
        ];
    },
    pplp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth / 2,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerWidth - landscapeWidth) / 3,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitTop = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                top: portraitTop,
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitWidth,
                top: portraitTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: 3 * portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight),
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: 2 * portraitWidth,
                top: portraitTop,
            },
        ];
    },
    ppll: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: containerWidth / 2,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerWidth - landscapeWidth) / 2,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitTop = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 2 * landscapeHeight);
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth + landscapeWidth);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left,
                top: portraitTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + portraitWidth,
                top: portraitTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + 2 * portraitWidth,
                top: landscapeTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + 2 * portraitWidth,
                top: landscapeTop + landscapeHeight,
            },
        ];
    },
    plpp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth / 2,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerWidth - landscapeWidth) / 3,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitTop = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                top: portraitTop,
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: 3 * portraitWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight),
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: portraitWidth,
                top: portraitTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: 2 * portraitWidth,
                top: portraitTop,
            },
        ];
    },
    plpl: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: containerWidth / 2,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerWidth - landscapeWidth) / 2,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitTop = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 2 * landscapeHeight);
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth + landscapeWidth);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left,
                top: portraitTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + 2 * portraitWidth,
                top: landscapeTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + portraitWidth,
                top: portraitTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + 2 * portraitWidth,
                top: landscapeTop + landscapeHeight,
            },
        ];
    },
    pllp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: containerWidth / 2,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerWidth - landscapeWidth) / 2,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitTop = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 2 * landscapeHeight);
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth + landscapeWidth);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left,
                top: portraitTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + 2 * portraitWidth,
                top: landscapeTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + 2 * portraitWidth,
                top: landscapeTop + landscapeHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + portraitWidth,
                top: portraitTop,
            },
        ];
    },
    plll: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: containerWidth / 2,
        }), portraitHeight = _b.height, portraitWidth = _b.width;
        var _c = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth / 2,
        }), landscapeHeight = _c.height, landscapeWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth + portraitWidth);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 3 * landscapeHeight);
        return [
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + portraitWidth,
                top: landscapeTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + portraitWidth,
                top: landscapeTop + landscapeHeight,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left + portraitWidth,
                top: landscapeTop + 2 * landscapeHeight,
            },
        ];
    },
    lppp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth, insets = _a.insets, isLandscapeRight = _a.isLandscapeRight;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight,
            width: containerWidth / 2,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerWidth - landscapeWidth) / 3,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitTop = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, landscapeHeight),
                nameLeft: isLandscapeRight ? undefined : insets.left,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: landscapeWidth,
                top: portraitTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: landscapeWidth + portraitWidth,
                top: portraitTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: landscapeWidth + 2 * portraitWidth,
                top: portraitTop,
            },
        ];
    },
    lppl: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: containerWidth / 2,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerWidth - landscapeWidth) / 2,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitTop = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 2 * landscapeHeight);
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth + landscapeWidth);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth,
                top: portraitTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth + portraitWidth,
                top: portraitTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop + landscapeHeight,
            },
        ];
    },
    lplp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: containerWidth / 2,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerWidth - landscapeWidth) / 2,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitTop = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 2 * landscapeHeight);
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth + landscapeWidth);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth,
                top: portraitTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop + landscapeHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth + portraitWidth,
                top: portraitTop,
            },
        ];
    },
    lpll: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: containerWidth / 2,
        }), portraitHeight = _b.height, portraitWidth = _b.width;
        var _c = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth / 2,
        }), landscapeHeight = _c.height, landscapeWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth + portraitWidth);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 3 * landscapeHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop + landscapeHeight,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop + 2 * landscapeHeight,
            },
        ];
    },
    llpp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: containerWidth / 2,
        }), landscapeHeight = _b.height, landscapeWidth = _b.width;
        var _c = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: (containerWidth - landscapeWidth) / 2,
        }), portraitHeight = _c.height, portraitWidth = _c.width;
        var portraitTop = (0, utils_1.getCenterOffset)(containerHeight, portraitHeight);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 2 * landscapeHeight);
        var left = (0, utils_1.getCenterOffset)(containerWidth, 2 * portraitWidth + landscapeWidth);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop + landscapeHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth,
                top: portraitTop,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth + portraitWidth,
                top: portraitTop,
            },
        ];
    },
    llpl: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: containerWidth / 2,
        }), portraitHeight = _b.height, portraitWidth = _b.width;
        var _c = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth / 2,
        }), landscapeHeight = _c.height, landscapeWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth + portraitWidth);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 3 * landscapeHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop + landscapeHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop + 2 * landscapeHeight,
            },
        ];
    },
    lllp: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestPortraitBox)({
            height: containerHeight,
            width: containerWidth / 2,
        }), portraitHeight = _b.height, portraitWidth = _b.width;
        var _c = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 3,
            width: containerWidth / 2,
        }), landscapeHeight = _c.height, landscapeWidth = _c.width;
        var left = (0, utils_1.getCenterOffset)(containerWidth, landscapeWidth + portraitWidth);
        var landscapeTop = (0, utils_1.getCenterOffset)(containerHeight, 3 * landscapeHeight);
        return [
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop + landscapeHeight,
            },
            {
                height: landscapeHeight,
                width: landscapeWidth,
                left: left,
                top: landscapeTop + 2 * landscapeHeight,
            },
            {
                height: portraitHeight,
                width: portraitWidth,
                left: left + landscapeWidth,
                top: (0, utils_1.getCenterOffset)(containerHeight, portraitHeight),
            },
        ];
    },
    llll: function (_a) {
        var containerHeight = _a.containerHeight, containerWidth = _a.containerWidth;
        var _b = (0, utils_1.findLargestLandscapeBox)({
            height: containerHeight / 2,
            width: containerWidth / 2,
        }), height = _b.height, width = _b.width;
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
                left: left,
                top: top + height,
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
                left: left + width,
                top: top + height,
            },
        ];
    },
};
