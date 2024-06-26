import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./componants/Navbar/Navbar"
import Footer from "./componants/Footer/Footer"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import DiscoverUs from "./Pages/DiscoverUs"
import Error from "./Pages/Error"
import Cart from "./Pages/Cart"
import UserProfile from "./Pages/UserProfile/UserProfile"
// import Product from "./Pages/Product"
// import ProductDetails from "./Pages/ProductDetails"
import HowToBuy from "./Pages/Resources/HowToBuy"
import Shipping_Return from "./Pages/HelpfulLinks/Shipping_Return"
import FAQs from "./Pages/HelpfulLinks/FAQs"
import Privacy_Policy from "./Pages/HelpfulLinks/Privacy_Policy"
import Logout from "./Pages/Logout"
import AdminLayout from "./Layout/AdminLayout"
import AdminUser from "./Pages/Admin/User/AdminUser"
import AdminContact from "./Pages/Admin/Contact/AdminContact"
import AdminNewsLetter from "./Pages/Admin/NewsLetter/AdminNewsLetter"
import AdminProductQuerry from "./Pages/Admin/ProductQuerry/AdminProductQuerry"



import InteriorProducts from "./Pages/Products/Interior/InteriorProducts"
import ExteriorProducts from "./Pages/Products/Exterior/ExteriorProducts"
import DecorativeProducts from "./Pages/Products/Decorative/DecorativeProducts"
import EntertainmentProducts from "./Pages/Products/Entertainment/EntertainmentProducts"
import LedStripProducts from "./Pages/Products/LedStrip/LedStripProducts"



import AdminInteriorProducts from "./Pages/Admin/Products/AdminInterior/AdminInteriorProducts"
import AdminExteriorProducts from "./Pages/Admin/Products/AdminExterior/AdminExteriorProducts"
import AdminDecorativeProducts from "./Pages/Admin/Products/AdminDecorative/AdminDecorativeProducts"
import AdminEntertainmentProducts from "./Pages/Admin/Products/AdminEntertainment/AdminEntertainmentProducts"
import AdminLEDStripProducts from "./Pages/Admin/Products/AdminLEDStrip/AdminLEDStripProducts"


import AddAdminDecorativeProducts from "./Pages/Admin/Products/AdminDecorative/AddAdminDecorativeProducts"
import EditAdminDecorativeProducts from "./Pages/Admin/Products/AdminDecorative/EditAdminDecorativeProducts"

import AddAdminEntertainmentProducts from "./Pages/Admin/Products/AdminEntertainment/AddAdminEntertainmentProducts"
import EditAdminEntertainmentProducts from "./Pages/Admin/Products/AdminEntertainment/EditAdminEntertainmentProducts"

import AddAdminExteriorProducts from "./Pages/Admin/Products/AdminExterior/AddAdminExteriorProducts"
import EditAdminExteriorProducts from "./Pages/Admin/Products/AdminExterior/EditAdminExteriorProducts"

import AddAdminInteriorProducts from "./Pages/Admin/Products/AdminInterior/AddAdminInteriorProducts"
import EditAdminInteriorProducts from "./Pages/Admin/Products/AdminInterior/EditAdminInteriorProducts"

import AddAdminLEDStripProducts from "./Pages/Admin/Products/AdminLEDStrip/AddAdminLEDStripProducts"
import EditAdminLEDStripProducts from "./Pages/Admin/Products/AdminLEDStrip/EditAdminLEDStripProducts"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arkaya" element={<Home />} />


          {/* Product Start */}

          {/* <Route path="/productDetails" element={<ProductDetails />} /> */}

          {/* Led Pixels Start */}
          {/* <Route path="/ledstrip" element={<Product />} /> */}
          {/* Led Pixels End */}

          {/* Product End */}






          {/* Product V1 Start */}

          <Route path="/interior" element={< InteriorProducts />} />
          <Route path="/exterior" element={<ExteriorProducts />} />
          <Route path="/decorative" element={< DecorativeProducts />} />
          <Route path="/entertainment" element={< EntertainmentProducts />} />
          <Route path="/led_strip" element={<LedStripProducts />} />

          {/* Product V1 End */}








          {/* Resources Start */}

          <Route path="/howtobuy" element={<HowToBuy />} />

          {/* Resources End */}







          <Route path="/discover" element={<DiscoverUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/*" element={<Error />} />


          {/* Important Links Start */}

          <Route path="/shipping_return" element={<Shipping_Return />} />
          <Route path="/privacypolicy" element={<Privacy_Policy />} />
          <Route path="/faqs" element={<FAQs />} />

          {/* Important Links End */}



          {/* Admin Section Start */}

          <Route path="/adminlayout" element={<AdminLayout />} />
          <Route path="/admin_users" element={<AdminUser />} />
          <Route path="/admin_contacts" element={<AdminContact />} />
          <Route path="/admin_newsletter" element={<AdminNewsLetter />} />
          <Route path="/admin_productquerry" element={<AdminProductQuerry />} />

          {/* Admin Products List Start */}

          <Route path="/admininterior" element={< AdminInteriorProducts />} />
          <Route path="/adminexterior" element={< AdminExteriorProducts />} />
          <Route path="/admindecorative" element={< AdminDecorativeProducts />} />
          <Route path="/adminentertainment" element={< AdminEntertainmentProducts />} />
          <Route path="/adminledstrip" element={< AdminLEDStripProducts />} />

          {/* Admin Products List End */}

          {/* Add Admin Products Start */}

          <Route path="/addadmindecorativeproduct" element={< AddAdminDecorativeProducts />} />
          <Route path="/editadmindecorativeproduct/:id" element={< EditAdminDecorativeProducts />} />

          <Route path="/addadminentertainmentproduct" element={< AddAdminEntertainmentProducts />} />
          <Route path="/editadminentertainmentproduct/:id" element={< EditAdminEntertainmentProducts />} />

          <Route path="/addadminexteriorproduct" element={< AddAdminExteriorProducts />} />
          <Route path="/editadminexteriorproduct/:id" element={< EditAdminExteriorProducts />} />

          <Route path="/addadmininteriorproduct" element={< AddAdminInteriorProducts />} />
          <Route path="/editadmininteriorproduct/:id" element={< EditAdminInteriorProducts />} />

          <Route path="/addadminledstripproduct" element={< AddAdminLEDStripProducts />} />
          <Route path="/editadminledstripproduct/:id" element={< EditAdminLEDStripProducts />} />

          {/* Add Admin Products End */}

          {/* Admin Section End */}



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App



