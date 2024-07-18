import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify"
import { useAuth } from "../Auth";

const CDIContext = createContext()

const CDIProvider = ({ children }) => {

    const { server } = useAuth()

    // For - Controllers Distribution & Interfaces
    const [ledControllers, setLedControllers] = useState([])
    const [dmxControllers, setDmxControllers] = useState([])
    const [signalDistribution, setSignalDistribution] = useState([])
    const [decorderAndAmplifiers, setDecorderAndAmplifiers] = useState([])
    const [processors, setProcessors] = useState([])

    // Get Products Of Controllers Distribution & Interfaces

    const getAllLedControllersProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getledcontrollers`, {
                method: "GET",
            })

            const res = await response.json()
            setLedControllers(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllDmxControllersProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getdmxcontrollers`, {
                method: "GET",
            })

            const res = await response.json()
            setDmxControllers(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllSignalDistributionProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getsignaldistribution`, {
                method: "GET",
            })

            const res = await response.json()
            setSignalDistribution(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllDecorderAndAmplifiersProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getdecorderandamplifiers`, {
                method: "GET",
            })

            const res = await response.json()
            setDecorderAndAmplifiers(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllProcessorsProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getprocessors`, {
                method: "GET",
            })

            const res = await response.json()
            setProcessors(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }



    return (
        <CDIContext.Provider value={{ ledControllers, getAllLedControllersProducts, dmxControllers, getAllDmxControllersProducts, signalDistribution, getAllSignalDistributionProducts, decorderAndAmplifiers, getAllDecorderAndAmplifiersProducts, processors, getAllProcessorsProducts, }} >
            {children}
        </CDIContext.Provider>
    )

}



const useCDI = () => {

    const CDIContextValue = useContext(CDIContext)

    if (!CDIContextValue) {
        throw new Error("useCDI used outside of the Provider")
    }

    return CDIContextValue
}

export { CDIContext, CDIProvider, useCDI }