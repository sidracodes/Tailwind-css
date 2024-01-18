
import Greybutton from './Greybutton'
import Headline from './Headline'
import Whitebutton from './Whitebutton'

const Solarpannels = () => {
  return (
    <div className="relative bg-[url('../public/solarpanels.jpg')] h-screen bg-center bg-cover">
            {/* Main Body */}
            <div className="flex flex-col absolute top-20 left-[50%] translate-x-[-50%]">
            <Headline name={'Solar Panels'}/>
                    <p className="pt-1 text-[16px] whitespace-nowrap">
                    Lowest Cost Solar Panels in America </p>
              
            </div>
            {/* Buttons */}
            <div className="md:space-x-4 absolute bottom-[80px] left-[50%] translate-x-[-50%] flex flex-col md:flex-row ">
            <Greybutton name={'order now'}/>
            <Whitebutton name={'learn more'}/>
            </div>
         
          </div>
        
    
  )
}

export default Solarpannels
