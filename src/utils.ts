export type DimensionKey =
  | "p"
  | "l"
  | "pp"
  | "pl"
  | "lp"
  | "ll"
  | "ppp"
  | "ppl"
  | "plp"
  | "pll"
  | "lpp"
  | "lpl"
  | "llp"
  | "lll"
  | "pppp"
  | "pppl"
  | "pplp"
  | "ppll"
  | "plpp"
  | "plpl"
  | "pllp"
  | "plll"
  | "lppp"
  | "lppl"
  | "lplp"
  | "lpll"
  | "llpp"
  | "llpl"
  | "lllp"
  | "llll";

type DimensionCalculatorInput = {
  containerHeight: number;
  containerWidth: number;
  insets: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  isLandscapeRight: boolean;
};

type DimensionCalculatorOutput = {
  height: number;
  width: number;
  top?: number;
  left?: number;
  nameTop?: number;
  nameLeft?: number;
};

export type DimensionCalculator = (
  input: DimensionCalculatorInput
) => DimensionCalculatorOutput[];

export type Dimensions = {
  width: number;
  height: number;
};

export const getCenterOffset = (
  containerSize: number,
  videoSize: number
): number => (containerSize - videoSize) / 2;

export const findLargestPortraitBox = ({
  height: containerHeight,
  width: containerWidth,
}: Dimensions): Dimensions => {
  let height = containerHeight;
  let width = (height * 9) / 16;

  if (width < containerWidth) {
    return {
      height,
      width,
    };
  }

  width = containerWidth;
  height = (width * 16) / 9;

  return {
    height,
    width,
  };
};

export const findLargestLandscapeBox = ({
  height: containerHeight,
  width: containerWidth,
}: Dimensions): Dimensions => {
  let width = containerWidth;
  let height = (width * 9) / 16;

  if (height < containerHeight) {
    return {
      width,
      height,
    };
  }

  height = containerHeight;
  width = (height * 16) / 9;

  return {
    height,
    width,
  };
};
