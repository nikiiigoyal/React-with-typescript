
import Component from "./components/01-return";
import Props from "./components/02-props";
import State from "./components/03-state";
import Events from "./components/04-events";
import Profile from "./components/05-advancedprops";
import ParentComponent from "./components/06-context";
import Reducers from "./components/07-reducers";
import FetchingData from "./components/08-datafetch";

function App() {
  return (
    <main>
     <Component />
     <Props name='peter' id={12} children />
     <p>This is a prop passed as a children</p>
     <State />
     <Events />
     <Profile type="advanced"  name='niki' email="nidnn@gmail.com"/>
     <ParentComponent />
     <Reducers />
     <FetchingData />
    </main>
  );
}

export default App;