
import Greybutton from "./Greybutton"
import Headline from "./Headline"
import Whitebutton from "./Whitebutton"

const Solarroof = () => {
  return (
    <>
        <div className="relative bg-[url('https://tesla-cdn.thron.com/delivery/public/image/tesla/4a41ec0e-7316-46a8-8ce9-e2f195ba644d/bvlatuR/std/2880x1800/Homepage-SolarRoof-Desktop-Global?quality=auto-medium&format=auto')] h-screen bg-center bg-cover">
            {/* Main Body */}
            <div className="flex flex-col absolute top-20 left-[50%] translate-x-[-50%]">
            <Headline name={'Solar Roof'}/>
                    <p className="pt-1 text-[16px] whitespace-nowrap">
                    Produce Clean Energy From Your Roof </p>
              
            </div>
              {/* Buttons */}
              <div className="md:space-x-4 absolute bottom-[80px] left-[50%] translate-x-[-50%] flex flex-col md:flex-row ">
            <Greybutton name={'order now'}/>
            <Whitebutton name={'learn more'}/>
            </div>
           
          </div>
    </>
  )
}

export default Solarroof
