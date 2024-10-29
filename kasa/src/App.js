import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Router from "./Router";
import { DataProvider } from "./components/api/Api";

function App() {
  return (
    <>
      <Header />
      <DataProvider>
        <Router />
      </DataProvider>
      <Footer />
    </>
  );
}

export default App;
