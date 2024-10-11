import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "../authContext";

const HomeContext = createContext()

const HomeProvider = ({ children }) => {

    const { server } = useAuthContext()

    const [homeCarousel, setHomeCarousel] = useState([])
    const [homeProduct, setHomeProduct] = useState([])
    const [application, setApplication] = useState([])

    const getAllHomeCarousel = async () => {
        try {

            const response = await fetch(`${server}/api/v1/homecontent/homecarousel`, {
                method: "GET"
            })
            const res = await response.json()
            setHomeCarousel(res)
        } catch (error) {
            toast.error("Failed to get Home Carousels")
        }
    }

    const getAllHomeProduct = async () => {
        try {
            const response = await fetch(`${server}/api/v1/homecontent/homeproduct`, {
                method: "GET"
            })
            const res = await response.json()

            setHomeProduct(res)
        } catch (error) {
            toast.error("Failed to get Home Products")
        }
    }


    const getAllApplications = async () => {
        try {
            const response = await fetch(`${server}/api/v1/application/getapplication`, {
                method: "GET",
            })

            const res = await response.json()
            setApplication(res)
        } catch (error) {
            toast.error("Failed to get Applications")
        }
    }

    useEffect(() => {
        getAllHomeCarousel();
        getAllHomeProduct();
        getAllApplications();
    }, []);


    return (
        <HomeContext.Provider value={{ homeCarousel, getAllHomeCarousel, homeProduct, getAllHomeProduct, application, getAllApplications }}>
            {children}
        </HomeContext.Provider>
    )
}

const useHome = () => {

    const HomeContextValue = useContext(HomeContext)

    if (!HomeContextValue) {
        throw new Error("useCDI used outside of the Provider")
    }

    return HomeContextValue
}

export { HomeContext, HomeProvider, useHome }