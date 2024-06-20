const react = require("react");

import Heading from "./components/Heading";
import Notes from "./components/Notes";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Heading />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
