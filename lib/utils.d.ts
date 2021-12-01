export declare type Dimensions = {
    width: number;
    height: number;
};
export declare const getCenterOffset: (containerSize: number, videoSize: number) => number;
export declare const findLargestPortraitBox: ({ height: containerHeight, width: containerWidth, }: Dimensions) => Dimensions;
export declare const findLargestLandscapeBox: ({ height: containerHeight, width: containerWidth, }: Dimensions) => Dimensions;
