import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./componants/Navbar/Navbar"
import Footer from "./componants/Footer/Footer"
import Home from "./Pages/Home"
import Application from "./Pages/Application"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import DiscoverUs from "./Pages/DiscoverUs"
import Error from "./Pages/Error"
import Cart from "./Pages/Cart"
import UserProfile from "./Pages/UserProfile/UserProfile"
import EditProfile from "./Pages/UserProfile/EditProfile"
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


import AdminHomeCarousel from "./Pages/Admin/AdminHomeContent/AdminHomeCarousel/AdminHomeCarousel"
import AddAdminHomeCarousel from "./Pages/Admin/AdminHomeContent/AdminHomeCarousel/AddAdminHomeCarousel"
import EditAdminHomeCarousel from "./Pages/Admin/AdminHomeContent/AdminHomeCarousel/EditAdminHomeCarousel"

import AdminHomeLProducts from "./Pages/Admin/AdminHomeContent/AdminHomeProducts/AdminHomeProducts"
import AddAdminHomeProducts from "./Pages/Admin/AdminHomeContent/AdminHomeProducts/AddAdminHomeProducts"
import EditAdminHomeProducts from "./Pages/Admin/AdminHomeContent/AdminHomeProducts/EditAdminHomeProducts"


import Architecture from "./Pages/Products/LightingFixtures/Architecture/Architecture"
import Entertainment from "./Pages/Products/LightingFixtures/Entertainment/Entertainment"
// import ProductDetails from "./Pages/ProductDetails"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arkaya" element={<Home />} />
          <Route path="/application" element={<Application />} />

          <Route path="/architecture" element={<Architecture />} />
          <Route path="/entertainment" element={<Entertainment />} />


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
          <Route path="/entertainment1" element={< EntertainmentProducts />} />
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
          {/* <Route path="/editprofile" element={<EditProfile />} /> */}
          <Route path="/*" element={<Error />} />


          {/* Important Links Start */}

          <Route path="/shipping_return" element={<Shipping_Return />} />
          <Route path="/privacypolicy" element={<Privacy_Policy />} />
          <Route path="/faqs" element={<FAQs />} />

          {/* Important Links End */}



          {/* Admin Section Start */}

          <Route path="/admin" element={<AdminLayout />} >
            <Route path="users" element={<AdminUser />} />
            <Route path="contacts" element={<AdminContact />} />
            <Route path="newsletter" element={<AdminNewsLetter />} />
            <Route path="productquerry" element={<AdminProductQuerry />} />

            <Route path="homecarousel" element={< AdminHomeCarousel />} />
            <Route path="homeproducts" element={< AdminHomeLProducts />} />

            {/* Add & Edit Admin Home Content Start */}

            <Route path="addhomecarousel" element={< AddAdminHomeCarousel />} />
            <Route path="edithomecarousel/:id" element={< EditAdminHomeCarousel />} />
            <Route path="addhomeproducts" element={< AddAdminHomeProducts />} />
            <Route path="edithomeproducts/:id" element={< EditAdminHomeProducts />} />

            {/* Add Admin Home Content End */}



            {/* Admin Products List Start */}

            <Route path="interior" element={< AdminInteriorProducts />} />
            <Route path="exterior" element={< AdminExteriorProducts />} />
            <Route path="decorative" element={< AdminDecorativeProducts />} />
            <Route path="entertainment" element={< AdminEntertainmentProducts />} />
            <Route path="ledstrip" element={< AdminLEDStripProducts />} />

            {/* Admin Products List End */}

            {/* Add & Edit Admin Products Start */}

            <Route path="adddecorativeproduct" element={< AddAdminDecorativeProducts />} />
            <Route path="editdecorativeproduct/:id" element={< EditAdminDecorativeProducts />} />

            <Route path="addentertainmentproduct" element={< AddAdminEntertainmentProducts />} />
            <Route path="editentertainmentproduct/:id" element={< EditAdminEntertainmentProducts />} />

            <Route path="addexteriorproduct" element={< AddAdminExteriorProducts />} />
            <Route path="editexteriorproduct/:id" element={< EditAdminExteriorProducts />} />

            <Route path="addinteriorproduct" element={< AddAdminInteriorProducts />} />
            <Route path="editinteriorproduct/:id" element={< EditAdminInteriorProducts />} />

            <Route path="addledstripproduct" element={< AddAdminLEDStripProducts />} />
            <Route path="editledstripproduct/:id" element={< EditAdminLEDStripProducts />} />
          </Route>

          {/* Add Admin Products End */}

          {/* Admin Section End */}



        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App



