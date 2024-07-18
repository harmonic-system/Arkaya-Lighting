import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify"
import { useAuth } from "../Auth";

const SpaersContext = createContext()

const SpaersProvider = ({ children }) => {

    const { server } = useAuth()

    // For - Spaers & Accessories
    const [connectors, setConnectors] = useState([])


    // Get Products Of Spaers & Accessories

    const getAllConnectorsProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getconnector`, {
                method: "GET",
            })

            const res = await response.json()
            setConnectors(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }



    return (
        <SpaersContext.Provider value={{ connectors, getAllConnectorsProducts }} >
            {children}
        </SpaersContext.Provider>
    )

}



const useSpaers = () => {

    const SpaersContextValue = useContext(SpaersContext)

    if (!SpaersContextValue) {
        throw new Error("useSpaers used outside of the Provider")
    }

    return SpaersContextValue
}

export { SpaersContext, SpaersProvider, useSpaers }