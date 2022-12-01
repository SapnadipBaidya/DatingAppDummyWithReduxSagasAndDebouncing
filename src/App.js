import "./App.css";
import subject from "./constants/images/subject.png";
import imgShadow from "./constants/images/imgShadow.png";
import { Provider } from "react-redux";
import store from "./stateManagement/store";
import { makeStyles } from "@material-ui/core";

import TabsWrappedLabel from "./components/NavBar";

const useStyles = makeStyles({
  content: {
    display: "flex",
    flexDirection: "row",
  },
  navbar: {
    minWidth: "90vw",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div className="App">
        <img className="subject" src={subject} alt="subject" />

        <img className="imgShadow" src={imgShadow} alt="subject" />

        <div className={classes.navbar}>
          <TabsWrappedLabel />
        </div>

        <div></div>
      </div>
    </Provider>
  );
}

export default App;
