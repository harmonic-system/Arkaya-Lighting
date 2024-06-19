import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./componants/Navbar/Navbar"
import Footer from "./componants/Footer/Footer"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import DiscoverUs from "./Pages/DiscoverUs"
// import Resources from "./Pages/Resources"
import Error from "./Pages/Error"
import Cart from "./Pages/Cart"
import Product from "./Pages/Product"
import ProductDetails from "./Pages/ProductDetails"
import HowToBuy from "./Pages/Resources/HowToBuy"
import Shipping_Return from "./Pages/HelpfulLinks/Shipping_Return"
import FAQs from "./Pages/HelpfulLinks/FAQs"
import Privacy_Policy from "./Pages/HelpfulLinks/Privacy_Policy"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arkaya" element={<Home />} />


          {/* Product Start */}

          <Route path="/productDetails" element={<ProductDetails />} />

          {/* Led Pixels Start */}
          <Route path="/ledstrip" element={<Product/>} />
          {/* Led Pixels End */}

          {/* Product End */}


          {/* Resources Start */}

          <Route path="/howtobuy" element={<HowToBuy />} />

          {/* Resources End */}







          <Route path="/discover" element={<DiscoverUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<Error />} />


          {/* Important Links Start */}

          <Route path="/shipping_return" element={<Shipping_Return />} />
          <Route path="/privacypolicy" element={<Privacy_Policy />} />
          <Route path="/faqs" element={<FAQs />} />

          {/* Important Links End */}



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
