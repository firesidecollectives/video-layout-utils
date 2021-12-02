import {
  DimensionCalculator,
  DimensionKey,
  findLargestLandscapeBox,
  findLargestPortraitBox,
  getCenterOffset,
} from "./utils";

export const landscapeCalculators: Record<DimensionKey, DimensionCalculator> = {
  p: ({ containerHeight, containerWidth }) => {
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
  l: ({ containerHeight, containerWidth }) => {
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
  pp: ({ containerHeight, containerWidth }) => {
    const { height, width } = findLargestPortraitBox({
      height: containerHeight,
      width: containerWidth / 2,
    });

    const left = getCenterOffset(containerWidth, width * 2);
    const top = getCenterOffset(containerHeight, height);

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
    ];
  },
  pl: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerHeight * 9) / 16,
      });

    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight,
        width: containerWidth - portraitWidth,
      });

    const left = getCenterOffset(
      containerWidth,
      portraitWidth + landscapeWidth
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left,
        nameLeft: isLandscapeRight ? undefined : insets.left,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: left + portraitWidth,
        top: getCenterOffset(containerHeight, landscapeHeight),
      },
    ];
  },
  lp: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerHeight * 9) / 16,
      });

    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight,
        width: containerWidth - portraitWidth,
      });

    const left = getCenterOffset(
      containerWidth,
      portraitWidth + landscapeWidth
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: getCenterOffset(containerHeight, landscapeHeight),
        nameLeft: isLandscapeRight ? undefined : insets.left,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: left + landscapeWidth,
      },
    ];
  },
  ll: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { width, height } = findLargestLandscapeBox({
      height: containerHeight,
      width: containerWidth / 2,
    });

    const top = getCenterOffset(containerHeight, height);

    return [
      {
        height,
        width,
        top,
        nameLeft: isLandscapeRight ? undefined : insets.left,
      },
      {
        height,
        width,
        left: width,
        top,
      },
    ];
  },
  ppp: ({ containerHeight, containerWidth }) => {
    const { height, width } = findLargestPortraitBox({
      height: containerHeight,
      width: containerWidth / 3,
    });

    const left = getCenterOffset(containerWidth, 3 * width);
    const top = getCenterOffset(containerHeight, height);

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
        left: left + 2 * width,
        top,
      },
    ];
  },
  ppl: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: Math.min((containerHeight * 9) / 16, containerWidth / 3),
      });

    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight,
        width: containerWidth - 2 * portraitWidth,
      });

    const left = getCenterOffset(
      containerWidth,
      2 * portraitWidth + landscapeWidth
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
        left,
        nameLeft: isLandscapeRight ? undefined : insets.left,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
        left: left + portraitWidth,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: left + 2 * portraitWidth,
        top: getCenterOffset(containerHeight, landscapeHeight),
      },
    ];
  },
  plp: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: Math.min((containerHeight * 9) / 16, containerWidth / 3),
      });

    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight,
        width: containerWidth - 2 * portraitWidth,
      });

    const left = getCenterOffset(
      containerWidth,
      2 * portraitWidth + landscapeWidth
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
        left,
        nameLeft: isLandscapeRight ? undefined : insets.left,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: left + portraitWidth,
        top: getCenterOffset(containerHeight, landscapeHeight),
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
        left: left + portraitWidth + landscapeWidth,
      },
    ];
  },
  pll: ({ containerHeight, containerWidth }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: (containerWidth * 2) / 3,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: containerWidth - landscapeWidth,
      });

    const left = getCenterOffset(
      containerWidth,
      portraitWidth + landscapeWidth
    );

    const landscapeTop = getCenterOffset(containerHeight, 2 * landscapeHeight);

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
        left,
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
  lpp: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: Math.min((containerHeight * 9) / 16, containerWidth / 3),
      });

    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight,
        width: containerWidth - 2 * portraitWidth,
      });

    const left = getCenterOffset(
      containerWidth,
      2 * portraitWidth + landscapeWidth
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: getCenterOffset(containerHeight, landscapeHeight),
        nameLeft: isLandscapeRight ? undefined : insets.left,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
        left: left + landscapeWidth,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
        left: left + landscapeWidth + portraitWidth,
      },
    ];
  },
  lpl: ({ containerHeight, containerWidth }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: (containerWidth * 2) / 3,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: containerWidth - landscapeWidth,
      });

    const left = getCenterOffset(
      containerWidth,
      portraitWidth + landscapeWidth
    );

    const landscapeTop = getCenterOffset(containerHeight, 2 * landscapeHeight);

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: left + landscapeWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop + landscapeHeight,
      },
    ];
  },
  llp: ({ containerHeight, containerWidth }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: (containerWidth * 2) / 3,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: containerWidth - landscapeWidth,
      });

    const left = getCenterOffset(
      containerWidth,
      portraitWidth + landscapeWidth
    );

    const landscapeTop = getCenterOffset(containerHeight, 2 * landscapeHeight);

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop + landscapeHeight,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: left + landscapeWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
      },
    ];
  },
  lll: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: containerWidth / 2,
      });

    const { height: spotlightedHeight, width: spotlightedWidth } =
      findLargestLandscapeBox({
        height: containerHeight,
        width: containerWidth - landscapeWidth,
      });

    return [
      {
        height: spotlightedHeight,
        width: spotlightedWidth,
        top: getCenterOffset(containerHeight, spotlightedHeight),
        nameLeft: isLandscapeRight ? undefined : insets.left,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: spotlightedWidth,
        top: getCenterOffset(containerHeight, landscapeHeight * 2),
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left: spotlightedWidth,
        top:
          getCenterOffset(containerHeight, landscapeHeight * 2) +
          landscapeHeight,
      },
    ];
  },
  pppp: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { height, width } = findLargestPortraitBox({
      height: containerHeight,
      width: containerWidth / 4,
    });

    const top = getCenterOffset(containerHeight, height);

    return [
      {
        height,
        width,
        top,
        nameLeft: isLandscapeRight ? undefined : insets.left,
      },
      {
        height,
        width,
        top,
        left: width,
      },
      {
        height,
        width,
        top,
        left: 2 * width,
      },
      {
        height,
        width,
        top,
        left: 3 * width,
      },
    ];
  },
  pppl: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight,
        width: containerWidth / 2,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerWidth - landscapeWidth) / 3,
      });

    const portraitTop = getCenterOffset(containerHeight, portraitHeight);

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
        top: getCenterOffset(containerHeight, landscapeHeight),
      },
    ];
  },
  pplp: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight,
        width: containerWidth / 2,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerWidth - landscapeWidth) / 3,
      });

    const portraitTop = getCenterOffset(containerHeight, portraitHeight);

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
        top: getCenterOffset(containerHeight, landscapeHeight),
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: 2 * portraitWidth,
        top: portraitTop,
      },
    ];
  },
  ppll: ({ containerHeight, containerWidth }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: containerWidth / 2,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerWidth - landscapeWidth) / 2,
      });

    const portraitTop = getCenterOffset(containerHeight, portraitHeight);
    const landscapeTop = getCenterOffset(containerHeight, 2 * landscapeHeight);

    const left = getCenterOffset(
      containerWidth,
      2 * portraitWidth + landscapeWidth
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left,
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
  plpp: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight,
        width: containerWidth / 2,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerWidth - landscapeWidth) / 3,
      });

    const portraitTop = getCenterOffset(containerHeight, portraitHeight);

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
        top: getCenterOffset(containerHeight, landscapeHeight),
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
  plpl: ({ containerHeight, containerWidth }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: containerWidth / 2,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerWidth - landscapeWidth) / 2,
      });

    const portraitTop = getCenterOffset(containerHeight, portraitHeight);
    const landscapeTop = getCenterOffset(containerHeight, 2 * landscapeHeight);

    const left = getCenterOffset(
      containerWidth,
      2 * portraitWidth + landscapeWidth
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left,
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
  pllp: ({ containerHeight, containerWidth }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: containerWidth / 2,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerWidth - landscapeWidth) / 2,
      });

    const portraitTop = getCenterOffset(containerHeight, portraitHeight);
    const landscapeTop = getCenterOffset(containerHeight, 2 * landscapeHeight);

    const left = getCenterOffset(
      containerWidth,
      2 * portraitWidth + landscapeWidth
    );

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left,
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
  plll: ({ containerHeight, containerWidth }) => {
    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: containerWidth / 2,
      });

    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth / 2,
      });

    const left = getCenterOffset(
      containerWidth,
      landscapeWidth + portraitWidth
    );
    const landscapeTop = getCenterOffset(containerHeight, 3 * landscapeHeight);

    return [
      {
        height: portraitHeight,
        width: portraitWidth,
        left,
        top: getCenterOffset(containerHeight, portraitHeight),
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
  lppp: ({ containerHeight, containerWidth, insets, isLandscapeRight }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight,
        width: containerWidth / 2,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerWidth - landscapeWidth) / 3,
      });

    const portraitTop = getCenterOffset(containerHeight, portraitHeight);

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        top: getCenterOffset(containerHeight, landscapeHeight),
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
  lppl: ({ containerHeight, containerWidth }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: containerWidth / 2,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerWidth - landscapeWidth) / 2,
      });

    const portraitTop = getCenterOffset(containerHeight, portraitHeight);
    const landscapeTop = getCenterOffset(containerHeight, 2 * landscapeHeight);

    const left = getCenterOffset(
      containerWidth,
      2 * portraitWidth + landscapeWidth
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
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
        left,
        top: landscapeTop + landscapeHeight,
      },
    ];
  },
  lplp: ({ containerHeight, containerWidth }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: containerWidth / 2,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerWidth - landscapeWidth) / 2,
      });

    const portraitTop = getCenterOffset(containerHeight, portraitHeight);
    const landscapeTop = getCenterOffset(containerHeight, 2 * landscapeHeight);

    const left = getCenterOffset(
      containerWidth,
      2 * portraitWidth + landscapeWidth
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
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
        left,
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
  lpll: ({ containerHeight, containerWidth }) => {
    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: containerWidth / 2,
      });

    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth / 2,
      });

    const left = getCenterOffset(
      containerWidth,
      landscapeWidth + portraitWidth
    );
    const landscapeTop = getCenterOffset(containerHeight, 3 * landscapeHeight);

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: left + landscapeWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop + landscapeHeight,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop + 2 * landscapeHeight,
      },
    ];
  },
  llpp: ({ containerHeight, containerWidth }) => {
    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 2,
        width: containerWidth / 2,
      });

    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: (containerWidth - landscapeWidth) / 2,
      });

    const portraitTop = getCenterOffset(containerHeight, portraitHeight);
    const landscapeTop = getCenterOffset(containerHeight, 2 * landscapeHeight);

    const left = getCenterOffset(
      containerWidth,
      2 * portraitWidth + landscapeWidth
    );

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
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
  llpl: ({ containerHeight, containerWidth }) => {
    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: containerWidth / 2,
      });

    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth / 2,
      });

    const left = getCenterOffset(
      containerWidth,
      landscapeWidth + portraitWidth
    );
    const landscapeTop = getCenterOffset(containerHeight, 3 * landscapeHeight);

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop + landscapeHeight,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: left + landscapeWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop + 2 * landscapeHeight,
      },
    ];
  },
  lllp: ({ containerHeight, containerWidth }) => {
    const { height: portraitHeight, width: portraitWidth } =
      findLargestPortraitBox({
        height: containerHeight,
        width: containerWidth / 2,
      });

    const { height: landscapeHeight, width: landscapeWidth } =
      findLargestLandscapeBox({
        height: containerHeight / 3,
        width: containerWidth / 2,
      });

    const left = getCenterOffset(
      containerWidth,
      landscapeWidth + portraitWidth
    );
    const landscapeTop = getCenterOffset(containerHeight, 3 * landscapeHeight);

    return [
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop + landscapeHeight,
      },
      {
        height: landscapeHeight,
        width: landscapeWidth,
        left,
        top: landscapeTop + 2 * landscapeHeight,
      },
      {
        height: portraitHeight,
        width: portraitWidth,
        left: left + landscapeWidth,
        top: getCenterOffset(containerHeight, portraitHeight),
      },
    ];
  },
  llll: ({ containerHeight, containerWidth }) => {
    const { height, width } = findLargestLandscapeBox({
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
        left,
        top: top + height,
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
        left: left + width,
        top: top + height,
      },
    ];
  },
} as const;
