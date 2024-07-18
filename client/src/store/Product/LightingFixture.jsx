import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify"
import { useAuth } from "../Auth";

const LightingFixturesContext = createContext()

const LightingFixtureProvider = ({ children }) => {

    const { server } = useAuth()

    // For - Lighting Fixture / Architecture
    const [commercial, setCommercial] = useState([])
    const [dynamicFacade, setDynamicFacade] = useState([])
    const [landscapes, setLandscapes] = useState([])
    const [museum, setMuseum] = useState([])
    const [residential, setResidential] = useState([])

    // For - Lighting Fixture / Entertainment
    const [movingHeadSeriesLamp, setMovingHeadSeriesLamp] = useState([])
    const [movingHeadSeriesLed, setMovingHeadSeriesLed] = useState([])
    const [staticLed, setStaticLed] = useState([])
    const [effectlight, setEffectLight] = useState([])

    // For - Lighting Fixture / LED Pixels
    const [strip, setStrip] = useState([])
    const [dotPixel, setDotPixel] = useState([])
    const [ledMatrix, setLedMatrix] = useState([])

    // For - Lighting Fixture / Decorative
    const [chandeliers, setChandeliers] = useState([])

    // For - Lighting Fixture / Threater Studio Television
    const [threater, setThreater] = useState([])
    const [studio, setStudio] = useState([])
    const [television, setTelevision] = useState([])



    // Get Products Of Lighting Fixtures

    // Architecture Products List

    const getAllCommercialProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getcommercials`, {
                method: "GET",
            })

            const res = await response.json()
            setCommercial(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllDynamicFacadeProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getdynamicfacade`, {
                method: "GET",
            })

            const res = await response.json()
            setDynamicFacade(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllLandscapesProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getlandscapes`, {
                method: "GET",
            })

            const res = await response.json()
            setLandscapes(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllMuseumProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getmuseums`, {
                method: "GET",
            })

            const res = await response.json()
            setMuseum(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllResidentialProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getresidentials`, {
                method: "GET",
            })

            const res = await response.json()
            setResidential(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }


    // Entertainment Products List

    const getAllMovingHeadSeriesLampProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getmovingheadserieslamp`, {
                method: "GET",
            })

            const res = await response.json()
            setMovingHeadSeriesLamp(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllMovingHeadSeriesLedProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getmovingheadseriesled`, {
                method: "GET",
            })

            const res = await response.json()
            setMovingHeadSeriesLed(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllStaticLedProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getstaticled`, {
                method: "GET",
            })

            const res = await response.json()
            setStaticLed(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllEffectsLightProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/geteffectslight`, {
                method: "GET",
            })

            const res = await response.json()
            setEffectLight(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }


    // LED Pixels Products List

    const getAllStripProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getstrips`, {
                method: "GET",
            })

            const res = await response.json()
            setStrip(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllDotPixelProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getdotpixels`, {
                method: "GET",
            })

            const res = await response.json()
            setDotPixel(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllLedMatrixProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getledmatrix`, {
                method: "GET",
            })

            const res = await response.json()
            setLedMatrix(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }


    // Decorative Products List

    const getAllChandeliersProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getchandeliers`, {
                method: "GET",
            })

            const res = await response.json()
            setChandeliers(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }


    // Threater Studio & Television Products List

    const getAllThreaterProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getthreater`, {
                method: "GET",
            })

            const res = await response.json()
            setThreater(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllStudioProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getstudio`, {
                method: "GET",
            })

            const res = await response.json()
            setStudio(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllTelevisionProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/gettelevision`, {
                method: "GET",
            })

            const res = await response.json()
            setTelevision(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }



    return (
        <LightingFixturesContext.Provider value={{
            commercial, getAllCommercialProducts, dynamicFacade, getAllDynamicFacadeProducts, landscapes, getAllLandscapesProducts, museum, getAllMuseumProducts, residential, getAllResidentialProducts,
            movingHeadSeriesLamp, getAllMovingHeadSeriesLampProducts, movingHeadSeriesLed, getAllMovingHeadSeriesLedProducts, staticLed, getAllStaticLedProducts, effectlight, getAllEffectsLightProducts,
            strip, getAllStripProducts, dotPixel, getAllDotPixelProducts, ledMatrix, getAllLedMatrixProducts,
            chandeliers, getAllChandeliersProducts,
            threater, getAllThreaterProducts, studio, getAllStudioProducts, television, getAllTelevisionProducts,
        }} >
            {children}
        </LightingFixturesContext.Provider>
    )
}




const useLightingFixtures = () => {

    const LightingFixturesContextValue = useContext(LightingFixturesContext)

    if (!LightingFixturesContextValue) {
        throw new Error("useLightingFixtures used outside of the Provider")
    }

    return LightingFixturesContextValue
}

export { LightingFixturesContext, LightingFixtureProvider, useLightingFixtures }