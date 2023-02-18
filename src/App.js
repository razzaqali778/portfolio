import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";

import "./App.scss"
import { useState } from "react";
import Menu from "./components/Menu/Menu";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const removeDuplicates = function(nums) {
   
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== nums[i]) 
            nums[++i] = nums[j];
    }
    return ++i;
};

console.log(removeDuplicates([1,1,2]))
  
  return (
    <div className="App">
      <Topbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <Menu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default App;
