import Lottie from "lottie-react";

const LottieBase = ({animationScene}) => {
  return (
    <Lottie animationData={animationScene} style={{height: 200}} />
  )
}

export default LottieBase