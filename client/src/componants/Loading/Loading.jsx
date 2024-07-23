import FadeLoader from "react-spinners/FadeLoader";

const Loading = () => {
    return (
        <>
            <FadeLoader
                height={15}
                margin={2}
                radius={2}
                speedMultiplier={3}
                width={5}
            />
        </>
    )
}

export default Loading;