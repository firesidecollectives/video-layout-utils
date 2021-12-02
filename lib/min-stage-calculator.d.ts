import { DimensionKey, Dimensions } from "./utils";
declare type MinStageCalculatorInput = {
    dimensionKey: DimensionKey;
    rowWidth: number;
    rowPadding: number;
    videoMargin: number;
};
export declare const minStageCalculator: ({ dimensionKey, rowPadding, rowWidth, videoMargin, }: MinStageCalculatorInput) => Dimensions[][];
export {};
