
import Greybutton from "./Greybutton"
import Headline from "./Headline"
import Whitebutton from "./Whitebutton"

const ModelX = () => {
    return (
      <>
              <div className="relative bg-[url('../public/model-x.jpg')] h-screen bg-center bg-cover">
          {/* Main Body */}
          <div className="flex flex-col absolute top-20 left-[50%] translate-x-[-50%]">
              <Headline name={'Model X'}/>
                  <p className="pt-1 text-[16px] whitespace-nowrap">
                  <span className="underline underline-offset-4 hover:decoration-2 cursor-pointer">Schedule a demo drive</span>
                  </p>
            
          </div>
          {/* Buttons */}
          <div className="md:space-x-4 absolute bottom-[80px] left-[50%] translate-x-[-50%] flex flex-col md:flex-row ">
            <Greybutton name={'custom order'}/>
            <Whitebutton name={'view inventory'}/>
            </div> 
         
        </div>
      </>
    )
  }
  
  export default ModelX
  