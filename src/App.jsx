import { Suspense } from "react";
import Footer from "./components/Footer/Footer"
import TicketManagement from "./components/IssuesManagement/TicketManagement"
import Navbar from "./components/Navbar/Navbar"
import { ToastContainer } from "react-toastify";


const fetchData = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

function App() {

  const fetchPromise = fetchData();

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<h2>Loading...</h2>}>
        <TicketManagement fetchPromise={fetchPromise}></TicketManagement>
      </Suspense>
      
      <Footer></Footer>


      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
