import { Suspense } from "react";
import Footer from "./components/Footer/Footer"
import TicketManagement from "./components/IssuesManagement/TicketManagement"
import Navbar from "./components/Navbar/Navbar"
import { ToastContainer } from "react-toastify";
import Container from "./components/Container/Container";


const fetchData = async () => {
  const result = await fetch("/data.json");
  return result.json();
};

function App() {

  const fetchPromise = fetchData();

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={<Container><span className="loading loading-spinner py-10 loading-xl"></span></Container>}>
        <TicketManagement fetchPromise={fetchPromise}></TicketManagement>
      </Suspense>
      
      <Footer></Footer>


      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
