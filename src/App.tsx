import { useState } from "react";
import Camping from "./camping";
import Canyoneering from "./canyoneering";
import Hiking from "./hiking";
import Hotel from "./hotel";
import Nav from "./nav";
import { navOptions } from "./types";

function App() {
  const [selected, selectedSet] = useState(navOptions.hiking);
  return (
    <>
      <Nav selectedSet={selectedSet} selected={selected} />
      {selected === navOptions.hiking && <Hiking />}
      {selected === navOptions.camping && <Camping />}
      {selected === navOptions.canyoneering && <Canyoneering />}
      {selected === navOptions.hotel && <Hotel />}
    </>
  );
}

export default App;
