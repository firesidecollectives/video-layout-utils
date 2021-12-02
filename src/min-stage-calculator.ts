import { DimensionKey, Dimensions, Orientation } from "./utils";

type MinStageCalculatorInput = {
  dimensionKey: DimensionKey;
  rowWidth: number;
  // padding between row edge and video edge
  rowPadding: number;
  // margin between two adjacent videos
  videoMargin: number;
};

export const minStageCalculator = ({
  dimensionKey,
  rowPadding,
  rowWidth,
  videoMargin,
}: MinStageCalculatorInput): Dimensions[][] => {
  const videoOrientations = dimensionKey.split("") as Orientation[];

  const hasLandscapeVideo = videoOrientations.some(
    (orientation) => orientation === "l"
  );

  const availableSpace = rowWidth - 2 * rowPadding;

  if (!hasLandscapeVideo) {
    // portrait videos all go in a single row, each taking 1/4 of it
    const gapSpace = (videoOrientations.length - 1) * videoMargin;

    const width = (availableSpace - gapSpace) / 4;
    const height = (width * 16) / 9;

    return [videoOrientations.map(() => ({ height, width }))];
  }

  const landscapeWidth = availableSpace / 2;
  const height = (landscapeWidth * 9) / 16;
  const portraitWidth = (height * 9) / 16;

  const rows: Dimensions[][] = [];

  let currentRow: Dimensions[] = [];
  let widthLeft = availableSpace;

  // distribute videos across rows, ignoring margin between them (for now)
  videoOrientations.forEach((orientation, i) => {
    const isLandscape = orientation === "l";

    const width = isLandscape ? landscapeWidth : portraitWidth;

    if (widthLeft < width) {
      rows.push(currentRow);
      widthLeft = availableSpace;

      currentRow = [];
    }

    currentRow.push({
      height,
      width,
    });

    widthLeft -= width;

    if (i === videoOrientations.length) {
      rows.push(currentRow);
    }
  });

  // once videos are placed in rows, add back missing margins
  // this is done in a post-step because margins are per video in row
  return rows.map((row) => {
    const videosInRow = row.length;
    const gapSpace = (videosInRow - 1) * videoMargin;

    const widthReduction = gapSpace / videosInRow;

    return row.map((dimensions) => {
      const isLandscape = dimensions.width > dimensions.height;

      const newWidth = dimensions.width - widthReduction;
      const newHeight = isLandscape ? (newWidth * 9) / 16 : (newWidth * 16) / 9;

      return {
        width: newWidth,
        height: newHeight,
      };
    });
  });
};
