import Footer from "./Footer"
import Greybutton from "./Greybutton"
import Headline from "./Headline"

const Accessories = () => {
  return (
    <>
        <div className="relative bg-[url('../public/accessories.jpg')] h-screen bg-center bg-cover">
            {/* Main Body */}
            <div className="flex flex-col absolute top-20 left-[50%] translate-x-[-50%]">
                
            <Headline name={'Accessories'}/>
              
            </div>
            {/* button */}
             <div className="md:space-x-4 absolute bottom-[40px] left-[50%] translate-x-[-50%] flex flex-col md:flex-row ">
          <Greybutton name={'shop now'}/> </div>
          
          </div>
          <Footer/>
    </>
  )
}

export default Accessories
