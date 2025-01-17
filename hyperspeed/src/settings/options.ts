import { presets } from "./presets";

const getValue = (key: string, _default: any) => {
    const value = localStorage.getItem(key);
    if (value) {
        return JSON.parse(value);
    } else {
        return _default;
    }
}

const getDefaultPreset = () => {
    return presets.filter(p => p.key == getValue("preset", "two"))[0].set;
}

export const getOptions = () => {
    const defaultPreset = getDefaultPreset();
    return {
        onSpeedUp: defaultPreset.onSpeedUp,
        onSlowDown: defaultPreset.onSlowDown,
        distortion: getValue("distortion", defaultPreset.distortion),
        length: getValue("length", defaultPreset.length),
        roadWidth: getValue("roadWidth", defaultPreset.roadWidth),
        islandWidth: getValue("islandWidth", defaultPreset.islandWidth),
        lanesPerRoad: getValue("lanesPerRoad", defaultPreset.lanesPerRoad),
        fov: getValue("fov", defaultPreset.fov),
        fovSpeedUp: getValue("fovSpeedUp", defaultPreset.fovSpeedUp),
        speedUp: getValue("speedUp", defaultPreset.speedUp),
        carLightsFade: getValue("carLightsFade", defaultPreset.carLightsFade),
        totalSideLightSticks: getValue("totalSideLightSticks", defaultPreset.totalSideLightSticks),
        lightPairsPerRoadWay: getValue("lightPairsPerRoadWay", defaultPreset.lightPairsPerRoadWay),
        shoulderLinesWidthPercentage: getValue("shoulderLinesWidthPercentage", defaultPreset.shoulderLinesWidthPercentage),
        brokenLinesWidthPercentage: getValue("brokenLinesWidthPercentage", defaultPreset.brokenLinesWidthPercentage),
        brokenLinesLengthPercentage: getValue("brokenLinesLengthPercentage", defaultPreset.brokenLinesLengthPercentage),
        lightStickWidth: getValue("lightStickWidth", defaultPreset.lightStickWidth),
        lightStickHeight: getValue("lightStickHeight", defaultPreset.lightStickHeight),
        movingAwaySpeed: getValue("movingAwaySpeed", defaultPreset.movingAwaySpeed),
        movingCloserSpeed: getValue("movingCloserSpeed", defaultPreset.movingCloserSpeed),
        carLightsLength: getValue("carLightsLength", defaultPreset.carLightsLength),
        carLightsRadius: getValue("carLightsRadius", defaultPreset.carLightsRadius),
        carWidthPercentage: getValue("carWidthPercentage", defaultPreset.carWidthPercentage),
        carShiftX: getValue("carShiftX", defaultPreset.carShiftX),
        carFloorSeparation: getValue("carFloorSeparation", defaultPreset.carFloorSeparation),
        colors: {
            roadColor: getValue("roadColor", defaultPreset.colors.roadColor),
            islandColor: getValue("islandColor", defaultPreset.colors.islandColor),
            background: getValue("background", defaultPreset.colors.background),
            shoulderLines: getValue("shoulderLines", defaultPreset.colors.shoulderLines),
            brokenLines: getValue("brokenLines", defaultPreset.colors.brokenLines),
            leftCars: getValue("leftCars", defaultPreset.colors.leftCars),
            rightCars: getValue("rightCars", defaultPreset.colors.rightCars),
            sticks: getValue("sticks", defaultPreset.colors.sticks),
        },
    }
};

export const distortions = [
    {"key": "deepDistortion", "label": "Deep"},
    {"key": "LongRaceDistortion", "label": "Long Race"},
    {"key": "mountainDistortion", "label": "Mountain"},
    {"key": "turbulentDistortion", "label": "Turbulent"},
    {"key": "xyDistortion", "label": "XY"},
];
