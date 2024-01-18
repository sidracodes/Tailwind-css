import Greybutton from "./Greybutton"
import Header from "./Header"
import Headline from "./Headline"
import Whitebutton from "./Whitebutton"


const Model3 = () => {
  return (
    <>
   
     <div className="relative bg-[url('../public/redcar.jpg')] h-screen bg-center bg-cover">
     <Header/>
       {/* Main Body */}
       <div className="flex flex-col absolute top-20 left-[50%] translate-x-[-50%]">
           
             <Headline name={'Model 3'}/>
             <p className="pt-1 text-[16px] whitespace-nowrap">Order Online for &nbsp;
               <span className="underline underline-offset-4 hover:decoration-2 cursor-pointer">Touchless Delivery!</span>
               </p>
         
       </div>
      
      {/* Buttons */}
      <div className="md:space-x-4 absolute bottom-[80px] left-[50%] translate-x-[-50%] flex flex-col md:flex-row ">
            <Greybutton name={'custom order'}/>
            <Whitebutton name={'demo drive'}/>
            </div> 
       {/* Hero icon */}
       <div className="absolute left-[50%] translate-x-[-50%] bottom-3">
       <svg className="h-7 w-7 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
 <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

       </div>
     </div>
      
    </>
  )
}

export default Model3
