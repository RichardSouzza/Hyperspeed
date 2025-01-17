import { Button, Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import { HexColorPicker } from "react-colorful";

type Setter<T> = React.Dispatch<React.SetStateAction<T | undefined>>;

interface ColorPickerProps {
  label: string;
  color: string;
  callback: Setter<string>;
}

interface TriColorPickerProps {
  label: string;
  colors: string[];
  callback: Setter<string[]>;
}

export function ColorPicker({ label, color, callback }: ColorPickerProps) {
  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Button className="flex items-center min-w-16 min-h-10 p-3">
          <div className="w-3 h-3 shrink-0 rounded-full" style={{backgroundColor: color}} />
          <p className="pt-1">{label}</p>
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className="flex w-full px-1 py-2 gap-4">
          <HexColorPicker color={color} onChange={callback} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export function TriColorPicker({ label, colors, callback }: TriColorPickerProps) {

  const colorsArrayToString = (colorArray: string[]) => {
    return colorArray.join().replace(/[\[\]']/g, "");
  };

  const handleChange = (index: number, newColor: string) => {
    let newColors = [...colors];
    newColors[index] = newColor;
    callback(newColors);
  };

  return (
    <Popover placement="top">
      <PopoverTrigger>
        <Button className="flex items-center min-w-16 min-h-10 p-3">
          <div className="w-3 h-3 shrink-0 rounded-full" style={{backgroundColor: colors[0], backgroundImage: `linear-gradient(to right, ${colorsArrayToString(colors)})`}} />
          <p className="pt-1">{label}</p>
        </Button>
      </PopoverTrigger>

      <PopoverContent>
        <div className="flex w-full px-1 py-2 gap-4">
          {colors.map((_, index) => 
            <HexColorPicker key={index} color={colors[index]} onChange={newColor => handleChange(index, newColor)} />
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};
