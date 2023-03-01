import Header from "./Components/Header";
import './App.css';
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";


const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));


    
    const classes = useStyles();

    return (
        <BrowserRouter>
        <div className = {classes.App}>
            <Header />
            <Route path = "/" components = {Homepage} exact />
            <Route path = "/coins/:id" component = {CoinPage} exact />
        </div>
        </BrowserRouter>
    )
    


export default App;
