import { ThreeCircles } from  'react-loader-spinner'

export const Spinner = () => {
    return (
    <ThreeCircles
        height="70"
        width="70"
        wrapperStyle={{display: "flex", justifyContent: "center"}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#212121"
        innerCircleColor="#eee"
        middleCircleColor="#ccc"
    />
    )
}