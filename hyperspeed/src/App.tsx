import { useState, useEffect } from "react";
import Hyperspeed from "../lib/Hyperspeed/Hyperspeed";
import HyperPopover from "@components/Popover/Popover";
import { getOptions } from "./settings/options";

function App() {
  
  useEffect(() => {
    localStorage.clear();
  }, []);

  const [refreshKey, setRefreshKey] = useState(1);
  const [effectOptions, setEffectOptions] = useState(getOptions());

  useEffect(() => {
    const handleStorageChange = () => {
      setEffectOptions(getOptions());
      setRefreshKey(x => x * -1);
      console.log(refreshKey);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [refreshKey]);

  return (
    <>
      <Hyperspeed key={refreshKey} distortion={effectOptions.distortion} effectOptions={effectOptions} />
      <HyperPopover effectOptions={getOptions()} />
    </>
  )
}

export default App;
