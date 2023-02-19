import Header from "./Components/Header";
import './App.css';

const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));

function App() {

    const classes = useStyles();

    return (
        <BrowserRouter>
        <div className = {classes.App}>
            <Header />
        </div>
        </BrowserRouter>
    )
  
}

export default App;
