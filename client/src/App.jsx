import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./componants/Navbar/Navbar"
import Footer from "./componants/Footer/Footer"
import Home from "./Pages/Home"
import Application from "./Pages/Application"
import Contact from "./Pages/Contact"
import Login from "./Pages/Login-Signup/Login"
import Logout from "./Pages/Login-Signup/Logout"
import SignUp from "./Pages/Login-Signup/SignUp"
import DiscoverUs from "./Pages/DiscoverUs"
import Error from "./Pages/Error"
import Cart from "./Pages/Cart"
import UserProfile from "./Pages/UserProfile/UserProfile"
import EditProfile from "./Pages/UserProfile/EditProfile"

// Resources Start
import HowToBuy from "./Pages/Resources/HowToBuy"
import Software from "./Pages/Resources/Software"
// Resources End
import Shipping_Return from "./Pages/HelpfulLinks/Shipping_Return"
import FAQs from "./Pages/HelpfulLinks/FAQs"
import Privacy_Policy from "./Pages/HelpfulLinks/Privacy_Policy"
import AdminLayout from "./Layout/AdminLayout"
import AdminUser from "./Pages/Admin/User/AdminUser"
import AdminContact from "./Pages/Admin/Contact/AdminContact"
import AdminNewsLetter from "./Pages/Admin/NewsLetter/AdminNewsLetter"
import AdminProductQuery from "./Pages/Admin/ProductQuery/AdminProductQuery"


import AdminHomeCarousel from "./Pages/Admin/AdminHomeContent/AdminHomeCarousel/AdminHomeCarousel"
import AddAdminHomeCarousel from "./Pages/Admin/AdminHomeContent/AdminHomeCarousel/AddAdminHomeCarousel"
import EditAdminHomeCarousel from "./Pages/Admin/AdminHomeContent/AdminHomeCarousel/EditAdminHomeCarousel"

import AdminHomeLProducts from "./Pages/Admin/AdminHomeContent/AdminHomeProducts/AdminHomeProducts"
import AddAdminHomeProducts from "./Pages/Admin/AdminHomeContent/AdminHomeProducts/AddAdminHomeProducts"
import EditAdminHomeProducts from "./Pages/Admin/AdminHomeContent/AdminHomeProducts/EditAdminHomeProducts"

// Lighting Fixtures

import Architecture from "./Pages/Products/LightingFixtures/Architecture/Architecture"
import Commercial from "./Pages/Products/LightingFixtures/Architecture/Commercial/Commercial"
import DynamicFacade from "./Pages/Products/LightingFixtures/Architecture/DynamicFacade/DynamicFacade"
import Landscapes from "./Pages/Products/LightingFixtures/Architecture/Landscapes/Landscapes"
import Museums from "./Pages/Products/LightingFixtures/Architecture/Museums/Museums"
import Residentails from "./Pages/Products/LightingFixtures/Architecture/Residentials/Residentials"

import Entertainment from "./Pages/Products/LightingFixtures/Entertainment/Entertainment"
import MovingHeadSeriesLamp from "./Pages/Products/LightingFixtures/Entertainment/MovingHeadSeriesLamp/MovingHeadseriesLamp"
import MovingHeadSeriesLed from "./Pages/Products/LightingFixtures/Entertainment/MovingHeadSeriesLed/MovingHeadSeriesLed"
import StaticLed from "./Pages/Products/LightingFixtures/Entertainment/StaticLed/StaticLed"
import EffectsLight from "./Pages/Products/LightingFixtures/Entertainment/EffectsLight/EffectsLight"

import LEDPixels from "./Pages/Products/LightingFixtures/LEDPixels/LedPixels"
import Strips from "./Pages/Products/LightingFixtures/LEDPixels/Strips/Strips"
import DotPixels from "./Pages/Products/LightingFixtures/LEDPixels/DotPixels/DotPixels"
import LedMatrix from "./Pages/Products/LightingFixtures/LEDPixels/LedMatrix/LedMatrix"

import Decorative from "./Pages/Products/LightingFixtures/Decorative/Decorative"
import Chandeliers from "./Pages/Products/LightingFixtures/Decorative/Chandeliers/Chandeliers"

import ThreaterStudioTelevision from "./Pages/Products/LightingFixtures/ThreaterStudioTelevision/ThreaterStudioTelevision"
import Studio from "./Pages/Products/LightingFixtures/ThreaterStudioTelevision/Studio/Studio"
import Threater from "./Pages/Products/LightingFixtures/ThreaterStudioTelevision/Threater/Threater"
import Television from "./Pages/Products/LightingFixtures/ThreaterStudioTelevision/Television/Television"

// Video Displays

import IndoorSeries from "./Pages/Products/VideoDisplays/IndoorSeries/IndoorSeries"
import RentalSeries from "./Pages/Products/VideoDisplays/RentalSeries/RentalSeries"
import OutdoorSeries from "./Pages/Products/VideoDisplays/OutdoorSeries/OutdoorSeries"

// Controllers Distribution And Interfaces

import LEDControllers from "./Pages/Products/ControllersDistributionInterfaces/LEDControllers/LEDControllers"

import DMXControllers from "./Pages/Products/ControllersDistributionInterfaces/DMXControllers/DMXControllers"

import SignalDistributionAndPowerSupply from "./Pages/Products/ControllersDistributionInterfaces/SignalDistribution&PowerSupply/SignalDistribution&PowerSupply"
import SignalDistribution from "./Pages/Products/ControllersDistributionInterfaces/SignalDistribution&PowerSupply/SignalDistribution"
import PowerSupply from "./Pages/Products/ControllersDistributionInterfaces/SignalDistribution&PowerSupply/PowerSupply"

import DecorderAndAmplifiers from "./Pages/Products/ControllersDistributionInterfaces/DecorderAndAmplifires/DecorderAndAmplifires"

import Processors from "./Pages/Products/ControllersDistributionInterfaces/Processors/Processors"

// Rigging

import Truss from "./Pages/Products/Rigging/Truss/Truss"
import Clamps from "./Pages/Products/Rigging/Clamps/Clamps"
import AlluminiumProfile from "./Pages/Products/Rigging/AlluminiumProfile/AlluminiumProfile"
import SiliconProfile from "./Pages/Products/Rigging/SiliconProfile/SiliconProfile"
import StageLightingSystems from "./Pages/Products/Rigging/StageLightingSystems/StageLightingSystems"
import StudioLightingSystems from "./Pages/Products/Rigging/StudioLightingSystems/StudioLightingSystems"

// Spaers And Accessories

import Connectors from "./Pages/Products/SpaersAndAccessories/Connectors/Connectors"

// Admin Pages


import AdminCommercial from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Commercials/AdminCommercials"
import AddAdminCommercial from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Commercials/AddAdminCommercials"
import EditAdminCommercial from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Commercials/EditAdminCommercials"
// import ProductDetails from "./Pages/ProductDetails"
import AddAdminDynamicFacade from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/DynamicFacade/AddAdminDynamicFacade"
import EditAdminDynamicFacade from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/DynamicFacade/EditAdminDynamicFacade"
import AdminDynamicFacade from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/DynamicFacade/AdminDynamicFacade"

import AdminLandscapes from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Landscapes/AdminLandscapes"
import AddAdminLandscapes from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Landscapes/AddAdminLandscapes"
import EditAdminLandscapes from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Landscapes/EditAdminLandscapes"

import AdminMuseums from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Museums/AdminMuseums"
import EditAdminMuseums from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Museums/EditAdminMuseums"
import AddAdminMuseums from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Museums/AddAdminMuseums"

import AdminResidentials from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Residentials/AdminResidentials"
import AddAdminResidentials from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Residentials/AddAdminResidentials"
import EditAdminResidentials from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Architecture/Residentials/EditAdminResidentials"

import AddAdminEffectsLights from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/EffectsLight/AddAdminEffectsLights"
import AdminEffectsLights from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/EffectsLight/AdminEffectsLights"
import EditAdminEffectsLights from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/EffectsLight/EditAdminEffectsLights"

import AddAdminMovingHeadSeriesLamp from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/MovingHeadSeries-Lamp/AddAdminMovingHeadSeriesLamp"
import AdminMovingHeadSeriesLamp from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/MovingHeadSeries-Lamp/AdminMovingHeadSeriesLamp"
import EditAdminMovingHeadSeriesLamp from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/MovingHeadSeries-Lamp/EditAdminMovingHeadSeriesLamp"

import AddAdminMovingHeadSeriesLed from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/MovingHeadSeries-Led/AddAdminMovingHeadSeriesLed"
import AdminMovingHeadSeriesLed from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/MovingHeadSeries-Led/AdminMovingHeadSeriesLed"
import EditAdminMovingHeadSeriesLed from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/MovingHeadSeries-Led/EditAdminMovingHeadSeriesLed"

import AddAdminStaticLed from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/StaticLed/AddAdminStaticLed"
import AdminStaticLed from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/StaticLed/AdminStaticLed"
import EditAdminStaticLed from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Entertainment/StaticLed/EditAdminStaticLed"

import AddAdminDotPixels from "./Pages/Admin/AdminProducts/AdminLightingFixtures/LEDPixels/DotPixels/AddAdminDotPixels"
import AdminDotPixels from "./Pages/Admin/AdminProducts/AdminLightingFixtures/LEDPixels/DotPixels/AdminDotPixels"
import EditAdminDotPixels from "./Pages/Admin/AdminProducts/AdminLightingFixtures/LEDPixels/DotPixels/EditAdminDotPixels"

import AddAdminLedMatrix from "./Pages/Admin/AdminProducts/AdminLightingFixtures/LEDPixels/LEDMatrix/AddAdminLEDMatrix"
import AdminLedMatrix from "./Pages/Admin/AdminProducts/AdminLightingFixtures/LEDPixels/LEDMatrix/AdminLEDMatrix"
import EditAdminLedMatrix from "./Pages/Admin/AdminProducts/AdminLightingFixtures/LEDPixels/LEDMatrix/EditAdminLEDMatrix"

import AddAdminStrip from "./Pages/Admin/AdminProducts/AdminLightingFixtures/LEDPixels/Strips/AddAdminStrips"
import AdminStrip from "./Pages/Admin/AdminProducts/AdminLightingFixtures/LEDPixels/Strips/AdminStrips"
import EditAdminStrips from "./Pages/Admin/AdminProducts/AdminLightingFixtures/LEDPixels/Strips/EditAdminStrips"

import AddAdminChandeliers from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Decorative/Chandeliers/AddAdminChandeliers"
import AdminChandeliers from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Decorative/Chandeliers/AdminChandeliers"
import EditAdminChandeliers from "./Pages/Admin/AdminProducts/AdminLightingFixtures/Decorative/Chandeliers/EditAdminChandeliers"

import AddAdminStudio from "./Pages/Admin/AdminProducts/AdminLightingFixtures/ThreaterStudioTelevision/Studio/AddAdminStudio"
import AdminStudio from "./Pages/Admin/AdminProducts/AdminLightingFixtures/ThreaterStudioTelevision/Studio/AdminStudio"
import EditAdminStudio from "./Pages/Admin/AdminProducts/AdminLightingFixtures/ThreaterStudioTelevision/Studio/EditAdminStudio"

import AddAdminTelevision from "./Pages/Admin/AdminProducts/AdminLightingFixtures/ThreaterStudioTelevision/Television/AddAdminTelevision"
import AdminTelevision from "./Pages/Admin/AdminProducts/AdminLightingFixtures/ThreaterStudioTelevision/Television/AdminTelevision"
import EditAdminTelevision from "./Pages/Admin/AdminProducts/AdminLightingFixtures/ThreaterStudioTelevision/Television/EditAdminTelevision"

import AddAdminThreater from "./Pages/Admin/AdminProducts/AdminLightingFixtures/ThreaterStudioTelevision/Threater/AddAdminThreater"
import AdminThreater from "./Pages/Admin/AdminProducts/AdminLightingFixtures/ThreaterStudioTelevision/Threater/AdminThreater"
import EditAdminThreater from "./Pages/Admin/AdminProducts/AdminLightingFixtures/ThreaterStudioTelevision/Threater/EditAdminThreater"

import AddAdminIndoorSeries from "./Pages/Admin/AdminProducts/AdminVideoDisplays/IndoorSeries/AddAdminIndoorSeries"
import AdminIndoorSeries from "./Pages/Admin/AdminProducts/AdminVideoDisplays/IndoorSeries/AdminIndoorSeries"
import EditAdminIndoorSeries from "./Pages/Admin/AdminProducts/AdminVideoDisplays/IndoorSeries/EditAdminIndoorSeries"

import AddAdminOutdoorSeries from "./Pages/Admin/AdminProducts/AdminVideoDisplays/OutdoorSeries/AddAdminOutdoorSeries"
import AdminOutdoorSeries from "./Pages/Admin/AdminProducts/AdminVideoDisplays/OutdoorSeries/AdminOutdoorSeries"
import EditAdminOutdoorSeries from "./Pages/Admin/AdminProducts/AdminVideoDisplays/OutdoorSeries/EditAdminOutdoorSeries"

import AddAdminRentalSeries from "./Pages/Admin/AdminProducts/AdminVideoDisplays/RentalSeries/AddAdminRentalSeries"
import AdminRentalSeries from "./Pages/Admin/AdminProducts/AdminVideoDisplays/RentalSeries/AdminRentalSeries"
import EditAdminRentalSeries from "./Pages/Admin/AdminProducts/AdminVideoDisplays/RentalSeries/EditAdminRentalSeries"

import AddAdminLEDControllers from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/LEDControllers/AddAdminLEDControllers"
import AdminLEDControllers from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/LEDControllers/AdminLEDControllers"
import EditAdminLEDControllers from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/LEDControllers/EditAdminLEDControllers"

import AddAdminDMXControllers from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/DMXControllers/AddAdminDMXControllers"
import AdminDMXControllers from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/DMXControllers/AdminDMXControllers"
import EditAdminDMXControllers from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/DMXControllers/EditAdminDMXControllers"

import AddAdminSignalDistribution from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/SignalDistributionAndPowerSupply/SignalDistribution/AddAdminSignalDistribution"
import AdminSignalDistribution from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/SignalDistributionAndPowerSupply/SignalDistribution/AdminSignalAdminDistribution"
import EditAdminSignalDistribution from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/SignalDistributionAndPowerSupply/SignalDistribution/EditAdminSignalDistribution"

import AddAdminPowerSupply from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/SignalDistributionAndPowerSupply/PowerSupply/AddAdminPowerSupply"
import AdminPowerSupply from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/SignalDistributionAndPowerSupply/PowerSupply/AdminPowerSupply"
import EditAdminPowerSupply from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/SignalDistributionAndPowerSupply/PowerSupply/EditAdminPowerSupply"

import AddAdminDecorderAndAmplifiers from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/DecorderAndAmplifires/AddAdminDecorderAndAmplifiers"
import AdminDecorderAndAmplifiers from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/DecorderAndAmplifires/AdminDecorderAndAmplifiers"
import EditAdminDecorderAndAmplifiers from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/DecorderAndAmplifires/EditAdminDecorderAndAmplifiers"

import AddAdminProcessors from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/Processors/AddAdminProcessors"
import AdminProcessoers from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/Processors/AdminProcessors"
import EditAdminProcessoers from "./Pages/Admin/AdminProducts/AdminControllersDistributionInterfaces/Processors/EditAdminProcessors"

import AddAdminTruss from "./Pages/Admin/AdminProducts/AdminRigging/Truss/AddAdminTruss"
import AdminTruss from "./Pages/Admin/AdminProducts/AdminRigging/Truss/AdminTruss"
import EditAdminTruss from "./Pages/Admin/AdminProducts/AdminRigging/Truss/EditAdminTruss"

import AddAdminClamps from "./Pages/Admin/AdminProducts/AdminRigging/Clamps/AddAdminClamps"
import AdminClamps from "./Pages/Admin/AdminProducts/AdminRigging/Clamps/AdminClamps"
import EditAdminClamps from "./Pages/Admin/AdminProducts/AdminRigging/Clamps/EditAdminClamps"

import AddAdminAlluminiumProfile from "./Pages/Admin/AdminProducts/AdminRigging/AlluminiumProfile/AddAdminAlluminiumProfile"
import AdminAlluminiumProfile from "./Pages/Admin/AdminProducts/AdminRigging/AlluminiumProfile/AdminAlluminiumProfile"
import EditAdminAlluminiumProfile from "./Pages/Admin/AdminProducts/AdminRigging/AlluminiumProfile/EditAdminAlluminiumProfile"

import AddAdminSiliconProfile from "./Pages/Admin/AdminProducts/AdminRigging/SiliconProfile/AddAdminSiliconProfile"
import AdminSiliconProfile from "./Pages/Admin/AdminProducts/AdminRigging/SiliconProfile/AdminSiliconProfile"
import EditAdminSiliconProfile from "./Pages/Admin/AdminProducts/AdminRigging/SiliconProfile/EditAdminSiliconProfile"

import AddAdminStageLightingSystems from "./Pages/Admin/AdminProducts/AdminRigging/StageLightingSystems/AddAdminStageLightingSystems"
import AdminStageLightingSystems from "./Pages/Admin/AdminProducts/AdminRigging/StageLightingSystems/AdminStageLightingSystems"
import EditAdminStageLightingSystems from "./Pages/Admin/AdminProducts/AdminRigging/StageLightingSystems/EditAdminStageLightingSystems"

import AddAdminStudioLightingSystems from "./Pages/Admin/AdminProducts/AdminRigging/StudioLightingSystems/AddAdminStudioLightingSystems"
import AdminStudioLightingSystems from "./Pages/Admin/AdminProducts/AdminRigging/StudioLightingSystems/AdminStudioLightingSystems"
import EditAdminStudioLightingSystems from "./Pages/Admin/AdminProducts/AdminRigging/StudioLightingSystems/EditAdminStudioLightingSystems"

import AddAdminConnectors from "./Pages/Admin/AdminProducts/AdminSpaersAndAccessories/Connectors/AddAdminConnectors"
import AdminConnectors from "./Pages/Admin/AdminProducts/AdminSpaersAndAccessories/Connectors/AdminConnectors"
import EditAdminConnectors from "./Pages/Admin/AdminProducts/AdminSpaersAndAccessories/Connectors/EditAdminConnectors"

import QueryBox from "./componants/QuerryBox/QueryBox"

// Admin Application

import AdminApplication from "./Pages/Admin/Application/AdminApplication"
import AddAdminApplication from "./Pages/Admin/Application/AddAdminApplication"
import EditAdminApplication from "./Pages/Admin/Application/EditAdminApplication"







function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arkaya" element={<Home />} />

          {/* Lighting Fixtures */}

          <Route path="/architecture" element={<Architecture />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/dynamicfacade" element={<DynamicFacade />} />
          <Route path="/landscapes" element={<Landscapes />} />
          <Route path="/museums" element={< Museums />} />
          <Route path="/residential" element={< Residentails />} />



          <Route path="/entertainment" element={<Entertainment />} />
          <Route path="/movingheadserieslamp" element={<MovingHeadSeriesLamp />} />
          <Route path="/movingheadseriesled" element={<MovingHeadSeriesLed />} />
          <Route path="/staticled" element={<StaticLed />} />
          <Route path="/effectlight" element={< EffectsLight />} />

          <Route path="/ledpixels" element={<LEDPixels />} />
          <Route path="/strips" element={<Strips />} />
          <Route path="/dotpixels" element={<DotPixels />} />
          <Route path="/ledmatrix" element={<LedMatrix />} />


          <Route path="/decorative" element={<Decorative />} />
          <Route path="/chandeliers" element={<Chandeliers />} />


          <Route path="/threaterstudiotelevision" element={<ThreaterStudioTelevision />} />
          <Route path="/threater" element={<Threater />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/television" element={< Television />} />


          {/* Video Displays */}

          <Route path="/rentalseries" element={<RentalSeries />} />
          <Route path="/indoorseries" element={<IndoorSeries />} />
          <Route path="/outdoorseries" element={<OutdoorSeries />} />


          {/* Controllers Distribution And Interfaces */}

          <Route path="/ledcontrollers" element={< LEDControllers />} />
          <Route path="/dmxcontrollers" element={< DMXControllers />} />
          <Route path="/signaldistributionandpowersupply" element={<SignalDistributionAndPowerSupply />} />
          <Route path="/signaldistribution" element={<SignalDistribution />} />
          <Route path="/powersupply" element={<PowerSupply />} />
          <Route path="/decorderandamplifier" element={<DecorderAndAmplifiers />} />
          <Route path="/processors" element={<Processors />} />


          {/* Rigging */}

          <Route path="/truss" element={<Truss />} />
          <Route path="/clamps" element={<Clamps />} />
          <Route path="/alluminiumprofile" element={< AlluminiumProfile />} />
          <Route path="/siliconprofile" element={<SiliconProfile />} />
          <Route path="/stagelightingsystem" element={<StageLightingSystems />} />
          <Route path="/studiolightingsystem" element={<StudioLightingSystems />} />


          {/* Spaers And Accessories */}

          <Route path="/connectors" element={<Connectors />} />



          <Route path="/application" element={<Application />} />

          {/* Resources Start */}

          <Route path="/howtobuy" element={<HowToBuy />} />
          <Route path="/software" element={<Software />} />

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
            <Route path="productquery" element={<AdminProductQuery />} />

            <Route path="application" element={<AdminApplication />} />

            {/* Add & Edit Admin Application Start */}

            <Route path="addapplication" element={<AddAdminApplication />} />
            <Route path="editapplication" element={<EditAdminApplication />} />

            {/* Add & Edit Admin Application End */}

            <Route path="homecarousel" element={< AdminHomeCarousel />} />
            <Route path="homeproducts" element={< AdminHomeLProducts />} />

            {/* Add & Edit Admin Home Content Start */}

            <Route path="addhomecarousel" element={< AddAdminHomeCarousel />} />
            <Route path="edithomecarousel/:id" element={< EditAdminHomeCarousel />} />
            <Route path="addhomeproducts" element={< AddAdminHomeProducts />} />
            <Route path="edithomeproducts/:id" element={< EditAdminHomeProducts />} />

            {/* Add Admin Home Content End */}

            {/* Lighting Fixtures */}

            <Route path="commercial" element={< AdminCommercial />} />
            <Route path="dynamicfacade" element={<AdminDynamicFacade />} />
            <Route path="landscapes" element={<AdminLandscapes />} />
            <Route path="museums" element={< AdminMuseums />} />
            <Route path="residential" element={< AdminResidentials />} />


            <Route path="movingheadserieslamp" element={<AdminMovingHeadSeriesLamp />} />
            <Route path="movingheadseriesled" element={<AdminMovingHeadSeriesLed />} />
            <Route path="staticled" element={<AdminStaticLed />} />
            <Route path="effectlight" element={<AdminEffectsLights />} />

            <Route path="strips" element={< AdminStrip />} />
            <Route path="dotpixels" element={<AdminDotPixels />} />
            <Route path="ledmatrix" element={< AdminLedMatrix />} />


            <Route path="chandeliers" element={< AdminChandeliers />} />


            <Route path="threater" element={<AdminThreater />} />
            <Route path="studio" element={< AdminStudio />} />
            <Route path="television" element={<AdminTelevision />} />


            {/* Video Displays */}

            <Route path="rentalseries" element={<AdminRentalSeries />} />
            <Route path="indoorseries" element={<AdminIndoorSeries />} />
            <Route path="outdoorseries" element={<AdminOutdoorSeries />} />


            {/* Controllers Distribution And Interfaces */}

            <Route path="ledcontrollers" element={<AdminLEDControllers />} />
            <Route path="dmxcontrollers" element={<AdminDMXControllers />} />
            <Route path="signaldistribution" element={< AdminSignalDistribution />} />
            <Route path="powersupply" element={< AdminPowerSupply />} />
            <Route path="decorderandamplifier" element={< AdminDecorderAndAmplifiers />} />
            <Route path="processors" element={< AdminProcessoers />} />


            {/* Rigging */}

            <Route path="truss" element={< AdminTruss />} />
            <Route path="clamps" element={< AdminClamps />} />
            <Route path="alluminiumprofile" element={< AdminAlluminiumProfile />} />
            <Route path="siliconprofile" element={< AdminSiliconProfile />} />
            <Route path="stagelightingsystem" element={< AdminStageLightingSystems />} />
            <Route path="studiolightingsystem" element={<AdminStudioLightingSystems />} />


            {/* Spaers And Accessories */}

            <Route path="connectors" element={<AdminConnectors />} />

            {/* Lighting Fixtures */}

            <Route path="addcommercial" element={< AddAdminCommercial />} />
            <Route path="editcommercial/:id" element={< EditAdminCommercial />} />

            <Route path="adddynamicfacade" element={< AddAdminDynamicFacade />} />
            <Route path="editdynamicfacade/:id" element={<EditAdminDynamicFacade />} />

            <Route path="addlandscapes" element={<AddAdminLandscapes />} />
            <Route path="editlandscapes/:id" element={<EditAdminLandscapes />} />

            <Route path="addmuseum" element={< AddAdminMuseums />} />
            <Route path="editmuseum/:id" element={< EditAdminMuseums />} />

            <Route path="addresidential" element={<AddAdminResidentials />} />
            <Route path="editresidential/:id" element={<EditAdminResidentials />} />

            <Route path="addmovingheadserieslamp" element={<AddAdminMovingHeadSeriesLamp />} />
            <Route path="editmovingheadserieslamp/:id" element={< EditAdminMovingHeadSeriesLamp />} />

            <Route path="addmovingheadseriesled" element={< AddAdminMovingHeadSeriesLed />} />
            <Route path="editmovingheadseriesled/:id" element={<EditAdminMovingHeadSeriesLed />} />

            <Route path="addstaticled" element={< AddAdminStaticLed />} />
            <Route path="editstaticled/:id" element={<EditAdminStaticLed />} />

            <Route path="addeffectlight" element={<AddAdminEffectsLights />} />
            <Route path="editeffectlight/:id" element={<EditAdminEffectsLights />} />

            <Route path="addstrip" element={< AddAdminStrip />} />
            <Route path="editstrip/:id" element={< EditAdminStrips />} />

            <Route path="adddotpixel" element={< AddAdminDotPixels />} />
            <Route path="editdotpixel/:id" element={< EditAdminDotPixels />} />

            <Route path="addledmatrix" element={<AddAdminLedMatrix />} />
            <Route path="editledmatrix/:id" element={< EditAdminLedMatrix />} />

            <Route path="addchandeliers" element={< AddAdminChandeliers />} />
            <Route path="editchandeliers/:id" element={< EditAdminChandeliers />} />

            <Route path="addthreater" element={< AddAdminThreater />} />
            <Route path="editthreater/:id" element={<EditAdminThreater />} />

            <Route path="addstudio" element={<AddAdminStudio />} />
            <Route path="editstudio/:id" element={< EditAdminStudio />} />

            <Route path="addtelevision" element={<AddAdminTelevision />} />
            <Route path="edittelevision/:id" element={< EditAdminTelevision />} />

            {/* Video Displays */}

            <Route path="addrentalseries" element={< AddAdminRentalSeries />} />
            <Route path="editrentalseries/:id" element={< EditAdminRentalSeries />} />

            <Route path="addindoorseries" element={<AddAdminIndoorSeries />} />
            <Route path="editindoorseries/:id" element={< EditAdminIndoorSeries />} />

            <Route path="addoutdoorseries" element={< AddAdminOutdoorSeries />} />
            <Route path="editoutdoorseries/:id" element={<EditAdminOutdoorSeries />} />

            {/* Controllers Distribution & Interfaces */}

            <Route path="addledcontroller" element={< AddAdminLEDControllers />} />
            <Route path="editledcontroller/:id" element={< EditAdminLEDControllers />} />

            <Route path="adddmxcontroller" element={< AddAdminDMXControllers />} />
            <Route path="editdmxcontroller/:id" element={< EditAdminDMXControllers />} />

            <Route path="addsignaldistribution" element={< AddAdminSignalDistribution />} />
            <Route path="editsignaldistribution/:id" element={< EditAdminSignalDistribution />} />

            <Route path="addpowersupply" element={< AddAdminPowerSupply />} />
            <Route path="editpowersupply/:id" element={< EditAdminPowerSupply />} />

            <Route path="adddecorderandamplifiers" element={< AddAdminDecorderAndAmplifiers />} />
            <Route path="editdecorderandamplifiers/:id" element={< EditAdminDecorderAndAmplifiers />} />

            <Route path="addprocessor" element={< AddAdminProcessors />} />
            <Route path="editprocessor/:id" element={< EditAdminProcessoers />} />

            {/* Rigging */}

            <Route path="addtruss" element={< AddAdminTruss />} />
            <Route path="edittruss/:id" element={< EditAdminTruss />} />

            <Route path="addclamps" element={< AddAdminClamps />} />
            <Route path="editclamps/:id" element={< EditAdminClamps />} />

            <Route path="addalluminiumprofile" element={< AddAdminAlluminiumProfile />} />
            <Route path="editalluminiumprofile/:id" element={< EditAdminAlluminiumProfile />} />

            <Route path="addsiliconprofile" element={< AddAdminSiliconProfile />} />
            <Route path="editsiliconprofile/:id" element={< EditAdminSiliconProfile />} />

            <Route path="addstagelightingsystem" element={< AddAdminStageLightingSystems />} />
            <Route path="editstagelightingsystem/:id" element={< EditAdminStageLightingSystems />} />

            <Route path="addstudiolightingsystem" element={< AddAdminStudioLightingSystems />} />
            <Route path="editstudiolightingsystem/:id" element={< EditAdminStudioLightingSystems />} />

            {/* Spaers & Accessories */}

            <Route path="addconnectors" element={< AddAdminConnectors />} />
            <Route path="editconnectors/:id" element={< EditAdminConnectors />} />

          </Route>


          {/* Admin Section End */}

        </Routes>
        <QueryBox />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App



