export declare type Orientation = "l" | "p";
export declare type DimensionKey = "p" | "l" | "pp" | "pl" | "lp" | "ll" | "ppp" | "ppl" | "plp" | "pll" | "lpp" | "lpl" | "llp" | "lll" | "pppp" | "pppl" | "pplp" | "ppll" | "plpp" | "plpl" | "pllp" | "plll" | "lppp" | "lppl" | "lplp" | "lpll" | "llpp" | "llpl" | "lllp" | "llll";
declare type DimensionCalculatorInput = {
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
declare type DimensionCalculatorOutput = {
    height: number;
    width: number;
    top?: number;
    left?: number;
    nameTop?: number;
    nameLeft?: number;
};
export declare type DimensionCalculator = (input: DimensionCalculatorInput) => DimensionCalculatorOutput[];
export declare type Dimensions = {
    width: number;
    height: number;
};
export declare const getCenterOffset: (containerSize: number, videoSize: number) => number;
export declare const findLargestPortraitBox: ({ height: containerHeight, width: containerWidth, }: Dimensions) => Dimensions;
export declare const findLargestLandscapeBox: ({ height: containerHeight, width: containerWidth, }: Dimensions) => Dimensions;
export {};
