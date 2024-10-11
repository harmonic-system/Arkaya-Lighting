import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify"
import { useAuthContext } from "../authContext";

const VideoDisplaysContext = createContext()

const VideoDisplaysProvider = ({ children }) => {

    const { server } = useAuthContext()

    // For - Video Displays
    const [rentalSeries, setRentalSeries] = useState([])
    const [indoorSeries, setIndoorSeries] = useState([])
    const [outdoorSeries, setOutdoorSeries] = useState([])

    // Get Products Of Video Displays

    const getAllRentalSeriesProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getrentalseries`, {
                method: "GET",
            })

            const res = await response.json()
            setRentalSeries(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllIndoorSeriesProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getindoorseries`, {
                method: "GET",
            })

            const res = await response.json()
            setIndoorSeries(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }

    const getAllOutdoorSeriesProducts = async () => {
        try {
            const response = await fetch(`${server}/api/v1/products/getoutdoorseries`, {
                method: "GET",
            })

            const res = await response.json()
            setOutdoorSeries(res)
        } catch (error) {
            toast.error("Failed to get products")
        }
    }



    return (
        <VideoDisplaysContext.Provider value={{ rentalSeries, getAllRentalSeriesProducts, indoorSeries, getAllIndoorSeriesProducts, outdoorSeries, getAllOutdoorSeriesProducts }} >
            {children}
        </VideoDisplaysContext.Provider>
    )

}


const useVideoDisplays = () => {

    const VideoDisplaysContextValue = useContext(VideoDisplaysContext)

    if (!VideoDisplaysContextValue) {
        throw new Error("useVideoDisplays used outside of the Provider")
    }

    return VideoDisplaysContextValue
}

export { VideoDisplaysContext, VideoDisplaysProvider, useVideoDisplays }