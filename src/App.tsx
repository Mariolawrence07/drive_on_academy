
import { Route, Routes } from "react-router-dom"
import HomePage from "./home"
import { Header } from "./header"
import { Footer } from "./footer"
import AboutPage from "./app/about/page"
import LessonsPage from "./app/lessons/page"
import BookPage from "./app/book/page"
import ContactPage from "./app/contact/page"
import FAQPage from "./app/faq/page"
import { ScrollToTop } from "./components/scroll-to-top"


function App() {


  return (
    <>
    <ScrollToTop/>
      <Header/>
    < Routes>
          {/* public */}
          <Route path="/" element={<HomePage />} /> 
          <Route path="/about" element={<AboutPage/>}></Route>
          <Route path="/lessons" element={<LessonsPage/>}></Route>
          <Route path="/book" element={<BookPage/>}></Route>
          <Route path="/contact" element={<ContactPage/>}></Route>
          <Route path="/faq" element={<FAQPage/>}></Route>
        </Routes>

        {/* <Toaster position="top-right" /> */}
    
      <Footer />
    
    </>
  )
}

export default App
