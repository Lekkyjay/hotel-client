import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";

interface IProps {
  children: React.ReactNode
}

export default function Layout({ children }: IProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <div className="container mx-auto py-10 flex-1">
        { children }        
      </div>
      <ToastContainer />
      <Footer />
    </div>
  )
}