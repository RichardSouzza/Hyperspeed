import {
  Accordion, AccordionItem, Button, Image, Popover, PopoverTrigger,
  PopoverContent, Select, SelectItem, Slider, Spacer
} from "@nextui-org/react";
import useLocalStorage from "use-local-storage";
import { ColorPicker, TriColorPicker } from "../ColorPicker/ColorPicker";
import Palette from "@images/palette.svg";
import Undo from "@images/undo.svg";
import { distortions } from "../../settings/options";
import { presets } from "../../settings/presets";
import { motionProps } from "./motion";

type Distortion = "deepDistortion" | "LongRaceDistortion" | "mountainDistortion" | "turbulentDistortion" | "xyDistortion";

interface HyperPopoverProps {
  effectOptions: {
    distortion: Distortion,
    length: number,
    roadWidth: number,
    islandWidth: number,
    lanesPerRoad: number,
    fov: number,
    fovSpeedUp: number,
    speedUp: number,
    carLightsFade: number,
    totalSideLightSticks: number,
    lightPairsPerRoadWay: number,
    shoulderLinesWidthPercentage: number,
    brokenLinesWidthPercentage: number,
    brokenLinesLengthPercentage: number,
    lightStickWidth: number[],
    lightStickHeight: number[],
    movingAwaySpeed: number[],
    movingCloserSpeed: number[],
    carLightsLength: number[],
    carLightsRadius: number[],
    carWidthPercentage: number[],
    carShiftX: number[],
    carFloorSeparation: number[],
    colors: {
        roadColor: string,
        islandColor: string,
        background: string,
        shoulderLines: string,
        brokenLines: string,
        leftCars: string[],
        rightCars: string[],
        sticks: string,
    },
  };
}

export default function HyperPopover({ effectOptions }: HyperPopoverProps) {
  const [preset, setPreset] = useLocalStorage<string>("preset", "two");
  const [distortion, setDistortion] = useLocalStorage<Distortion | string>("distortion", effectOptions.distortion);
  const [length, setLength] = useLocalStorage<number>("length", effectOptions.length);
  const [roadWidth, setRoadWidth] = useLocalStorage<number>("roadWidth", effectOptions.roadWidth);
  const [islandWidth, setIslandWidth] = useLocalStorage<number>("islandWidth", effectOptions.islandWidth);
  const [lanesPerRoad, setLanesPerRoad] = useLocalStorage<number>("lanesPerRoad", effectOptions.lanesPerRoad);
  const [fov, setFov] = useLocalStorage<number>("fov", effectOptions.fov);
  // const [fovSpeedUp, setFovSpeedUp] = useLocalStorage<number>("fovSpeedUp", effectOptions.fovSpeedUp); Does not change
  // const [speedUp, setSpeedUp] = useLocalStorage<number>("speedUp", effectOptions.speedUp);             Does not change
  const [carLightsFade, setCarLightsFade] = useLocalStorage<number>("carLightsFade", effectOptions.carLightsFade);
  const [totalSideLightSticks, setTotalSideLightSticks] = useLocalStorage<number>("totalSideLightSticks", effectOptions.totalSideLightSticks);
  const [lightPairsPerRoadWay, setLightPairsPerRoadWay] = useLocalStorage<number>("lightPairsPerRoadWay", effectOptions.lightPairsPerRoadWay);
  // const [shoulderLinesWidthPercentage, setShoulderLinesWidthPercentage] = useLocalStorage<number>("shoulderLinesWidthPercentage", effectOptions.shoulderLinesWidthPercentage); Does not change
  // const [brokenLinesWidthPercentage, setBrokenLinesWidthPercentage] = useLocalStorage<number>("brokenLinesWidthPercentage", effectOptions.brokenLinesWidthPercentage);         Does not change
  // const [brokenLinesLengthPercentage, setBrokenLinesLengthPercentage] = useLocalStorage<number>("brokenLinesLengthPercentage", effectOptions.brokenLinesLengthPercentage);     Does not change
  const [lightStickWidth, setLightStickWidth] = useLocalStorage<number[]>("lightStickWidth", effectOptions.lightStickWidth);
  const [lightStickHeight, setLightStickHeight] = useLocalStorage<number[]>("lightStickHeight", effectOptions.lightStickHeight);
  const [movingAwaySpeed, setMovingAwaySpeed] = useLocalStorage<number[]>("movingAwaySpeed", effectOptions.movingAwaySpeed);
  const [movingCloserSpeed, setMovingCloserSpeed] = useLocalStorage<number[]>("movingCloserSpeed", effectOptions.movingCloserSpeed);
  const [carLightsLength, setCarLightsLength] = useLocalStorage<number[]>("carLightsLength", effectOptions.carLightsLength);
  const [carLightsRadius, setCarLightsRadius] = useLocalStorage<number[]>("carLightsRadius", effectOptions.carLightsRadius);
  const [carWidthPercentage, setCarWidthPercentage] = useLocalStorage<number[]>("carWidthPercentage", effectOptions.carWidthPercentage);
  const [carShiftX, setCarShiftX] = useLocalStorage<number[]>("carShiftX", effectOptions.carShiftX);
  const [carFloorSeparation, setCarFloorSeparation] = useLocalStorage<number[]>("carFloorSeparation", effectOptions.carFloorSeparation);
  const [roadColor, setRoadColor] = useLocalStorage<string>("roadColor", effectOptions.colors.roadColor);
  const [islandColor, setIsLandColor] = useLocalStorage<string>("islandColor", effectOptions.colors.islandColor);
  // const [background, setBackground] = useLocalStorage<string>("background", effectOptions.colors.background);             Does not change
  // const [shoulderLines, setShoulderLines] = useLocalStorage<string>("shoulderLines", effectOptions.colors.shoulderLines); Does not change
  // const [brokenLines, setBrokenLines] = useLocalStorage<string>("brokenLines", effectOptions.colors.brokenLines);         Does not change
  const [leftCars, setLeftCars] = useLocalStorage<string[]>("leftCars", effectOptions.colors.leftCars);
  const [rightCars, setRightCars] = useLocalStorage<string[]>("rightCars", effectOptions.colors.rightCars);
  const [sticks, setSticks] = useLocalStorage<string>("sticks", effectOptions.colors.sticks);
  
  const resetOptions = () => {
    localStorage.clear();
  };
  
  const handlePresetChange = (key: string) => {
    resetOptions();
    setPreset(key);
  };

  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Button className="min-w-12 min-h-12 p-0 absolute left-8 bottom-8 rounded-full">
          <Image alt="Customize" src={Palette} width={26} />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[260px]">
        <div className="px-1 py-2 w-full">
          <p className="text-small font-bold">Options</p>

          <div className="mt-2 flex flex-col gap-2 w-full">                                                                                                                                          {/* @ts-ignore: Unreachable code error */}
            <Slider label="Length"         size="sm" color="danger" minValue={100} maxValue={3000} defaultValue={length} step={25} onChangeEnd={value => setLength(value)} getValue={x => `${x}`} /> {/* @ts-ignore: Unreachable code error */}
            <Slider label="Road width"     size="sm" color="danger" minValue={1}   maxValue={20}   defaultValue={roadWidth}        onChangeEnd={value => setRoadWidth(value)}                     /> {/* @ts-ignore: Unreachable code error */}
            <Slider label="Land width"     size="sm" color="danger" minValue={0}   maxValue={50}   defaultValue={islandWidth}      onChangeEnd={value => setIslandWidth(value)}                   /> {/* @ts-ignore: Unreachable code error */}
            <Slider label="Lanes per road" size="sm" color="danger" minValue={1}   maxValue={500}  defaultValue={lanesPerRoad}     onChangeEnd={value => setLanesPerRoad(value)}                  />
            {/* <Slider label="Speed up"       size="sm" color="danger" minValue={1}   maxValue={10}   defaultValue={speedUp}          onChangeEnd={value => setSpeedUp(value)}                       /> */}
            
            {/* @ts-ignore: Unreachable code error */}            
            <Accordion isCompact motionProps={motionProps}>
              <AccordionItem title="Colors">
                <div className="flex flex-wrap gap-2">
                  <ColorPicker label="Road"       color={roadColor}      callback={setRoadColor}     />
                  <ColorPicker label="Land"       color={islandColor}    callback={setIsLandColor}   />
                  {/* <ColorPicker label="Backgroud"  colors={background}    callback={setBackground}    /> */}
                  {/* <ColorPicker label="Shoulder"   colors={shoulderLines} callback={setShoulderLines} /> */}
                  {/* <ColorPicker label="Lines"      colors={brokenLines]}  callback={setBrokenLines}   /> */}
                  <TriColorPicker label="Left cars"  colors={leftCars}   callback={setLeftCars}      />
                  <TriColorPicker label="Right cars" colors={rightCars}  callback={setRightCars}     />
                  <ColorPicker label="Sticks"        color={sticks}      callback={setSticks}        />
                </div>
              </AccordionItem>
            </Accordion>
            
            <Select label="Distortion" defaultSelectedKeys={[distortion]} onSelectionChange={selection => setDistortion(selection.currentKey)} className="max-w-xs">
              {distortions.map((d) => (
                <SelectItem key={d.key}>{d.label}</SelectItem>
              ))}
            </Select>

            <Select label="Preset" defaultSelectedKeys={[preset]} onSelectionChange={selection => handlePresetChange(selection.currentKey ?? "")} className="max-w-xs">
              {presets.map((p) => (
                <SelectItem key={p.key}>{p.label}</SelectItem>
              ))}
            </Select>

            {/* @ts-ignore: Unreachable code error */}
            <Accordion isCompact motionProps={motionProps}>
              <AccordionItem title="Advanced options">                                                                                                                                                                                                                                                                 {/* @ts-ignore: Unreachable code error */}
                <Slider label="Field of view"           size="sm" color="danger" minValue={0}     maxValue={360}  step={5}    defaultValue={fov}                          onChangeEnd={(value) => setFov(value)}                                                                                  /><Spacer />
                {/* <Slider label="Field of view speed up"  size="sm" color="danger" minValue={0}     maxValue={300}  step={5}    defaultValue={fovSpeedUp}                   onChangeEnd={(value) => setFovSpeedUp(value)}                                                                           /><Spacer /> */} {/* @ts-ignore: Unreachable code error */}
                <Slider label="Car lights fade"         size="sm" color="danger" minValue={0.1}   maxValue={0.9}  step={0.1}  defaultValue={carLightsFade}                onChangeEnd={(value) => setCarLightsFade(value)} formatOptions={{style: "unit", unit: "second"}} getValue={x => `${x}`} /><Spacer />         {/* @ts-ignore: Unreachable code error */}
                <Slider label="Total side light sticks" size="sm" color="danger" minValue={0}     maxValue={1000} step={10}   defaultValue={totalSideLightSticks}         onChangeEnd={(value) => setTotalSideLightSticks(value)}                                                                 /><Spacer />         {/* @ts-ignore: Unreachable code error */}
                <Slider label="Light pairs per roadway" size="sm" color="danger" minValue={0}     maxValue={1000} step={10}   defaultValue={lightPairsPerRoadWay}         onChangeEnd={(value) => setLightPairsPerRoadWay(value)}                                                                 /><Spacer />
                {/* <Slider label="Shoulder lines width"    size="sm" color="danger" minValue={0}     maxValue={1}    step={0.01} defaultValue={shoulderLinesWidthPercentage} onChangeEnd={(value) => setShoulderLinesWidthPercentage(value)} formatOptions={{style: "percent"}}                      /><Spacer /> */}
                {/* <Slider label="Broken lines width"      size="sm" color="danger" minValue={0}     maxValue={1}    step={0.01} defaultValue={brokenLinesWidthPercentage}   onChangeEnd={(value) => setBrokenLinesWidthPercentage(value)}   formatOptions={{style: "percent"}}                      /><Spacer /> */}
                {/* <Slider label="Broken lines length"     size="sm" color="danger" minValue={0}     maxValue={1}    step={0.01} defaultValue={brokenLinesLengthPercentage}  onChangeEnd={(value) => setBrokenLinesLengthPercentage(value)}  formatOptions={{style: "percent"}}                      /><Spacer /> */} {/* @ts-ignore: Unreachable code error */}
                <Slider label="Light stick width"       size="sm" color="danger" minValue={-20}   maxValue={20}   step={0.1}  defaultValue={lightStickWidth}              onChangeEnd={(value) => setLightStickWidth(value)}    getValue={x => `${x.join(' / ')}`}                                /><Spacer />         {/* @ts-ignore: Unreachable code error */}
                <Slider label="Light stick height"      size="sm" color="danger" minValue={-20}   maxValue={20}   step={0.1}  defaultValue={lightStickHeight}             onChangeEnd={(value) => setLightStickHeight(value)}   getValue={x => `${x.join(' / ')}`}                                /><Spacer />         {/* @ts-ignore: Unreachable code error */}
                <Slider label="Moving away Speed"       size="sm" color="danger" minValue={0}     maxValue={1000} step={10}   defaultValue={movingAwaySpeed}              onChangeEnd={(value) => setMovingAwaySpeed(value)}    getValue={x => `${x.join(' / ')}`}                                /><Spacer />         {/* @ts-ignore: Unreachable code error */}
                <Slider label="Moving closer Speed"     size="sm" color="danger" minValue={-1000} maxValue={100}  step={1}    defaultValue={movingCloserSpeed}            onChangeEnd={(value) => setMovingCloserSpeed(value)}  getValue={x => `${x.join(' / ')}`}                                /><Spacer />         {/* @ts-ignore: Unreachable code error */}
                <Slider label="Car lights length"       size="sm" color="danger" minValue={1}     maxValue={100}  step={1}    defaultValue={carLightsLength}              onChangeEnd={(value) => setCarLightsLength(value)}    getValue={x => `${x.join(' / ')}`}                                /><Spacer />         {/* @ts-ignore: Unreachable code error */}
                <Slider label="Car lights radius"       size="sm" color="danger" minValue={0}     maxValue={1}    step={0.01} defaultValue={carLightsRadius}              onChangeEnd={(value) => setCarLightsRadius(value)}    getValue={x => `${x.join(' / ')}`}                                /><Spacer />         {/* @ts-ignore: Unreachable code error */}
                <Slider label="Car width"               size="sm" color="danger" minValue={0}     maxValue={5}    step={0.01} defaultValue={carWidthPercentage}           onChangeEnd={(value) => setCarWidthPercentage(value)} formatOptions={{style: "percent"}}                                /><Spacer />         {/* @ts-ignore: Unreachable code error */}
                <Slider label="Car shift X"             size="sm" color="danger" minValue={-10}   maxValue={10}   step={0.1}  defaultValue={carShiftX}                    onChangeEnd={(value) => setCarShiftX(value)}          getValue={x => `${x.join(' / ')}`}                                /><Spacer />         {/* @ts-ignore: Unreachable code error */}
                <Slider label="Car floor separation"    size="sm" color="danger" minValue={0}     maxValue={10}   step={0.05} defaultValue={carFloorSeparation}           onChangeEnd={(value) => setCarFloorSeparation(value)} getValue={x => `${x.join(' / ')}`}                                /><Spacer />
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        
        <Button className="min-w-10 min-h-10 p-0 absolute left-20 bottom-[-3.1rem] rounded-full" onPress={resetOptions}>
          <Image alt="Customize" src={Undo} width={18} />
        </Button>
      </PopoverContent>
    </Popover>
  );
};
