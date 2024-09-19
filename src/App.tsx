import Labs from "./Labs";
import Kanbas from "./Kanbas";

import { HashRouter,Route,Routes,Navigate} from "react-router-dom";
import Landing from "./Landing";
export default function App() {
 return (
  <HashRouter>
   <div>
    <Routes>
     <Route path="/" element={<Landing />}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kanbas/*" element={<Kanbas />} />
    </Routes>
   </div>
  </HashRouter>
);}

