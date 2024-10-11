import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify"
import { useAuthContext } from "../authContext";

const RiggingContext = createContext()

const RiggingProvider = ({ children }) => {

    const { server } = useAuthContext()

    // For - Rigging
    const [truss, setTruss] = useState([])
    const [clamps, setClamps] = useState([])
    const [alluminiumProfile, setAlluminiumProfile] = useState([])
    const [siliconProfile, setSiliconProfile] = useState([])
    const [stageLightingSystem, setStageLightingSystem] = useState([])
    const [studioLightingSystem, setStudioLightingSystem] = useState([])

    // Get Products Of Rigging

    const getAllTrussProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/gettruss`, {
                method: "GET",
            })

            const res = await response.json()
            setTruss(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllClampsProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getclamps`, {
                method: "GET",
            })

            const res = await response.json()
            setClamps(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllAlluminiumProfileProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getalluminiumprofile`, {
                method: "GET",
            })

            const res = await response.json()
            setAlluminiumProfile(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllSiliconProfileProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getsiliconprofile`, {
                method: "GET",
            })

            const res = await response.json()
            setSiliconProfile(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllStageLightingSystemProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getstagelightingsystem`, {
                method: "GET",
            })

            const res = await response.json()
            setStageLightingSystem(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllStudioLightingSystemProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getstudiolightingsystem`, {
                method: "GET",
            })

            const res = await response.json()
            setStudioLightingSystem(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }



    return (
        <RiggingContext.Provider value={{ truss, getAllTrussProducts, clamps, getAllClampsProducts, alluminiumProfile, getAllAlluminiumProfileProducts, siliconProfile, getAllSiliconProfileProducts, stageLightingSystem, getAllStageLightingSystemProducts, studioLightingSystem, getAllStudioLightingSystemProducts }} >
            {children}
        </RiggingContext.Provider>
    )

}



const useRigging = () => {

    const RiggingContextValue = useContext(RiggingContext)

    if (!RiggingContextValue) {
        throw new Error("useRigging used outside of the Provider")
    }

    return RiggingContextValue
}

export { RiggingContext, RiggingProvider, useRigging }