import {
  findLargestPortraitBox,
  DimensionKey,
  findLargestLandscapeBox,
  getCenterOffset,
  DimensionCalculator,
} from "./utils";

export const portraitCalculators: Record<DimensionKey, DimensionCalculator> = {
  p: ({ containerWidth, containerHeight }) => {
    const { width, height } = findLargestPortraitBox({
      height: containerHeight,
      width: containerWidth,
    });

    return [
      {
        height,
        width,
        left: getCenterOffset(containerWidth, width),
        top: getCenterOffset(containerHeight, height),
      },
    ];
  },
  l: ({ containerWidth, containerHeight }) => {
    const { width, height } = findLargestLandscapeBox({
      height: containerHeight,
      width: containerWidth,
    });

    return [
      {
        width,
        height,
        top: getCenterOffset(containerHeight, height),
        left: getCenterOffset(containerWidth, width),
      },
    ];
  },
  pp: ({ containerWidth, containerHeight, insets }) => {
    const { height, width } = findLargestPortraitBox({
      height: containerHeight / 2,
      width: containerWidth,
    });

    const left = getCenterOffset(containerWidth, width);
    const top = getCenterOffset(containerHeight, 2 * height);

    return [
      {
        height,
        width,
        left,
        top,
        nameTop: insets.top,
      },
      {
        height,
        width,
        left,
        top: top + height,
      },
    ];
  },
  pl: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        width: containerWidth,
        height: (containerWidth * 9) / 16,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - landscapeHeight,
        width: containerWidth,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + landscapeHeight
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, portraitWidth),
        top,
        nameTop: insets.top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + portraitHeight,
      },
    ];
  },
  lp: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        width: containerWidth,
        height: (containerWidth * 9) / 16,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - landscapeHeight,
        width: containerWidth,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + landscapeHeight
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top,
        nameTop: insets.top,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, portraitWidth),
        top: top + landscapeHeight,
      },
    ];
  },
  ll: ({ containerWidth, containerHeight }) => {
    const { height, width } = findLargestLandscapeBox({
      width: containerWidth,
      height: (containerWidth * 9) / 16,
    });

    const top = getCenterOffset(containerHeight, 2 * height);

    return [
      {
        height,
        width,
        top,
      },
      {
        height,
        width,
        top: top + height,
      },
    ];
  },
  ppp: ({ containerWidth, containerHeight, insets }) => {
    const { height: nonSpotlightedHeight, width: nonSpotlightedWidth } =
      findLargestPortraitBox({
        height: containerHeight / 2,
        width: containerWidth / 2,
      });

    const { height: spotlightedHeight, width: spotlightedWidth } =
      findLargestPortraitBox({
        height: containerHeight - nonSpotlightedHeight,
        width: containerWidth,
      });

    const left = getCenterOffset(containerWidth, 2 * nonSpotlightedWidth);
    const top = getCenterOffset(
      containerHeight,
      spotlightedHeight + nonSpotlightedHeight
    );

    return [
      {
        height: spotlightedHeight,
        width: spotlightedWidth,
        left: getCenterOffset(containerWidth, spotlightedWidth),
        top,
        nameTop: insets.top,
      },
      {
        height: nonSpotlightedHeight,
        width: nonSpotlightedWidth,
        left,
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
  ppl: ({ containerWidth, containerHeight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        width: containerWidth,
        height: (containerWidth * 9) / 16,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - landscapeHeight,
        width: containerWidth / 2,
      });

    const portraitTop = getCenterOffset(
      containerHeight,
      portraitHeight + landscapeHeight
    );
    const portraitLeft = getCenterOffset(containerWidth, 2 * portraitWidth);

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
  plp: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        width: containerWidth,
        height: (containerWidth * 9) / 16,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: (containerHeight - landscapeHeight) / 2,
        width: containerWidth,
      });

    const portraitLeft = getCenterOffset(containerWidth, portraitWidth);

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
  pll: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - 2 * landscapeHeight,
        width: containerWidth,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + 2 * landscapeHeight
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, portraitWidth),
        top,
        nameTop: insets.top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + portraitHeight,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + portraitHeight + landscapeHeight,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
    ];
  },
  lpp: ({ containerWidth, containerHeight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        width: containerWidth,
        height: (containerWidth * 9) / 16,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - landscapeHeight,
        width: containerWidth / 2,
      });

    const landscapeTop = getCenterOffset(
      containerHeight,
      landscapeHeight + portraitHeight
    );
    const portraitLeft = getCenterOffset(containerWidth, 2 * portraitWidth);

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
  lpl: ({ containerWidth, containerHeight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight / 3,
        width: containerWidth,
      });

    const landscapeLeft = getCenterOffset(containerWidth, landscapeWidth);
    const top = getCenterOffset(
      containerHeight,
      portraitHeight + 2 * landscapeHeight
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: landscapeLeft,
        top,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, portraitWidth),
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
  llp: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - 2 * landscapeHeight,
        width: containerWidth,
      });

    const landscapeLeft = getCenterOffset(containerWidth, landscapeWidth);
    const top = getCenterOffset(
      containerHeight,
      portraitHeight + 2 * landscapeHeight
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: landscapeLeft,
        top,
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
        left: getCenterOffset(containerWidth, portraitWidth),
        top: top + landscapeHeight * 2,
      },
    ];
  },
  lll: ({ containerWidth, containerHeight }) => {
    const { height, width } = findLargestLandscapeBox({
      height: containerHeight / 3,
      width: containerWidth,
    });

    const firstTop = getCenterOffset(containerHeight, height * 3);
    const left = getCenterOffset(containerWidth, width);

    return [
      {
        height,
        width,
        left,
        top: firstTop,
      },
      {
        height,
        width,
        left,
        top: firstTop + height,
      },
      {
        height,
        width,
        left,
        top: firstTop + height * 2,
      },
    ];
  },
  pppp: ({ containerWidth, containerHeight }) => {
    const { width, height } = findLargestPortraitBox({
      height: containerHeight / 2,
      width: containerWidth / 2,
    });

    const left = getCenterOffset(containerWidth, 2 * width);
    const top = getCenterOffset(containerHeight, 2 * height);

    return [
      {
        height,
        width,
        left,
        top,
      },
      {
        height,
        width,
        left: left + width,
        top,
      },
      {
        height,
        width,
        left,
        top: top + height,
      },
      {
        height,
        width,
        left: left + width,
        top: top + height,
      },
    ];
  },
  pppl: ({ containerWidth, containerHeight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - landscapeHeight,
        width: containerWidth / 3,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + landscapeHeight
    );
    const portraitLeft = getCenterOffset(containerWidth, portraitWidth * 3);

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left: portraitLeft,
        top,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: portraitLeft + portraitWidth,
        top,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: portraitLeft + 2 * portraitWidth,
        top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + portraitHeight,
      },
    ];
  },
  pplp: ({ containerWidth, containerHeight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - landscapeHeight,
        width: containerWidth / 3,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + landscapeHeight
    );
    const portraitLeft = getCenterOffset(containerWidth, portraitWidth * 3);

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left: portraitLeft,
        top,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: portraitLeft + portraitWidth,
        top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + portraitHeight,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: portraitLeft + 2 * portraitWidth,
        top,
      },
    ];
  },
  ppll: ({ containerWidth, containerHeight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - 2 * landscapeHeight,
        width: containerWidth / 2,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + 2 * landscapeHeight
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, 2 * portraitWidth),
        top,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left:
          portraitWidth + getCenterOffset(containerWidth, 2 * portraitWidth),
        top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + portraitHeight,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + portraitHeight + landscapeHeight,
      },
    ];
  },
  plpp: ({ containerWidth, containerHeight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - landscapeHeight,
        width: containerWidth / 3,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + landscapeHeight
    );
    const portraitLeft = getCenterOffset(containerWidth, portraitWidth * 3);

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left: portraitLeft,
        top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + portraitHeight,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: portraitLeft + portraitWidth,
        top,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: portraitLeft + 2 * portraitWidth,
        top,
      },
    ];
  },
  plpl: ({ containerWidth, containerHeight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - 2 * landscapeHeight,
        width: containerWidth / 2,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + 2 * landscapeHeight
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, 2 * portraitWidth),
        top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + portraitHeight,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left:
          portraitWidth + getCenterOffset(containerWidth, 2 * portraitWidth),
        top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + portraitHeight + landscapeHeight,
      },
    ];
  },
  pllp: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 4,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: (containerHeight - 2 * landscapeHeight) / 2,
        width: containerWidth,
      });

    const top = getCenterOffset(
      containerHeight,
      2 * (portraitHeight + landscapeHeight)
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        top,
        left: getCenterOffset(containerWidth, portraitWidth),
        nameTop: insets.top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + portraitHeight,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + portraitHeight + landscapeHeight,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, portraitWidth),
        top: top + portraitHeight + 2 * landscapeHeight,
      },
    ];
  },
  plll: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 4,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - 3 * landscapeHeight,
        width: containerWidth,
      });

    const top = getCenterOffset(
      containerHeight,
      3 * landscapeHeight + portraitHeight
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        top,
        left: getCenterOffset(containerWidth, portraitWidth),
        nameTop: insets.top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + portraitHeight,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + portraitHeight + landscapeHeight,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + portraitHeight + 2 * landscapeHeight,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
    ];
  },
  lppp: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth,
      });

    const { height: middlePortraitHeight, width: middlePortraitWidth } =
      findLargestPortraitBox({
        height: (containerHeight - landscapeHeight) / 2,
        width: containerWidth / 2,
      });

    const { height: bottomPortraitHeight, width: bottomPortraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - landscapeHeight - middlePortraitHeight,
        width: containerWidth,
      });

    const top = getCenterOffset(
      containerHeight,
      landscapeHeight + middlePortraitHeight + bottomPortraitHeight
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top,
        left: getCenterOffset(containerWidth, landscapeWidth),
        nameTop: insets.top,
      },
      {
        height: middlePortraitHeight,
        width: middlePortraitWidth,
        left: getCenterOffset(containerWidth, 2 * middlePortraitWidth),
        top: top + landscapeHeight,
      },
      {
        height: middlePortraitHeight,
        width: middlePortraitWidth,
        left:
          getCenterOffset(containerWidth, 2 * middlePortraitWidth) +
          middlePortraitWidth,
        top: top + landscapeHeight,
      },
      {
        height: bottomPortraitHeight,
        width: bottomPortraitWidth,
        left: getCenterOffset(containerWidth, bottomPortraitWidth),
        top: top + landscapeHeight + middlePortraitHeight,
      },
    ];
  },
  lppl: ({ containerWidth, containerHeight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth,
      });

    const { height: middlePortraitHeight, width: middlePortraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - 2 * landscapeHeight,
        width: containerWidth / 2,
      });

    const top = getCenterOffset(
      containerHeight,
      2 * landscapeHeight + middlePortraitHeight
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
      {
        height: middlePortraitHeight,
        width: middlePortraitWidth,
        left: getCenterOffset(containerWidth, 2 * middlePortraitWidth),
        top: top + landscapeHeight,
      },
      {
        height: middlePortraitHeight,
        width: middlePortraitWidth,
        left:
          getCenterOffset(containerWidth, 2 * middlePortraitWidth) +
          middlePortraitWidth,
        top: top + landscapeHeight,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + landscapeHeight + middlePortraitHeight,
      },
    ];
  },
  lplp: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 4,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: (containerHeight - 2 * landscapeHeight) / 2,
        width: containerWidth,
      });

    const top = getCenterOffset(
      containerHeight,
      2 * (portraitHeight + landscapeHeight)
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top,
        nameTop: insets.top,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, portraitWidth),
        top: top + landscapeHeight,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + landscapeHeight + portraitHeight,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, portraitWidth),
        top: top + 2 * landscapeHeight + portraitHeight,
      },
    ];
  },
  lpll: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 4,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - 3 * landscapeHeight,
        width: containerWidth,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + 3 * landscapeHeight
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top,
        left: getCenterOffset(containerWidth, landscapeWidth),
        nameTop: insets.top,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, portraitWidth),
        top: top + landscapeHeight,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + portraitHeight + landscapeHeight,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + portraitHeight + 2 * landscapeHeight,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
    ];
  },
  llpp: ({ containerWidth, containerHeight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - 2 * landscapeHeight,
        width: containerWidth / 2,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + 2 * landscapeHeight
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: getCenterOffset(containerWidth, landscapeWidth),
        top: top + landscapeHeight,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, 2 * portraitWidth),
        top: top + 2 * landscapeHeight,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left:
          portraitWidth + getCenterOffset(containerWidth, 2 * portraitWidth),
        top: top + 2 * landscapeHeight,
      },
    ];
  },
  llpl: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 4,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - 3 * landscapeHeight,
        width: containerWidth,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + 3 * landscapeHeight
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top,
        left: getCenterOffset(containerWidth, landscapeWidth),
        nameTop: insets.top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + landscapeHeight,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, portraitWidth),
        top: top + 2 * landscapeHeight,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + portraitHeight + 2 * landscapeHeight,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
    ];
  },
  lllp: ({ containerWidth, containerHeight, insets }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 4,
        width: containerWidth,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight - 3 * landscapeHeight,
        width: containerWidth,
      });

    const top = getCenterOffset(
      containerHeight,
      portraitHeight + 3 * landscapeHeight
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top,
        left: getCenterOffset(containerWidth, landscapeWidth),
        nameTop: insets.top,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + landscapeHeight,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: top + 2 * landscapeHeight,
        left: getCenterOffset(containerWidth, landscapeWidth),
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: getCenterOffset(containerWidth, portraitWidth),
        top: top + 3 * landscapeHeight,
      },
    ];
  },
  llll: ({ containerWidth, containerHeight, insets }) => {
    const { height, width } = findLargestLandscapeBox({
      height: containerHeight / 4,
      width: containerWidth,
    });

    const top = getCenterOffset(containerHeight, 4 * height);
    const left = getCenterOffset(containerWidth, width);

    return [
      {
        height,
        width,
        left,
        top,
        nameTop: insets.top,
      },
      {
        height,
        width,
        left,
        top: top + height,
      },
      {
        height,
        width,
        left,
        top: top + 2 * height,
      },
      {
        height,
        width,
        left,
        top: top + 3 * height,
      },
    ];
  },
} as const;
