import Wrapper from "@/components/shared/Wrapper"
import heroPoster from '@/public/hero-poster.png'
import Image from "next/image"
import Button from "@/components/shared/Button"
const Herosection = () => {
  return (
    <>
     <section className=" bg-pink-100">
     <Wrapper>
    
      <div className="flex flex-col md:flex-row  items-center">
    <div className="flex-1">
    <h4 className="text-teal-800 font-semibold text-lg mt-14">
    Presidential Initiative for Artificial Intelligence and Computing (PIAIC)
 </h4>
 <h1 className="text-5xl sm:text-6xl font-bold text-black md:text-red-500 lg:text-blue-600">Certified Web 3.0 and Metaverse Developer</h1>
 <div className="max-w-screen-lg">
 <p className="mt-6 text-xl text-slate-600">A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
    <p className="mt-6 text-xl text-slate-600 mb-6">Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>

 </div>
 <div className="mt-5">
<Button text="Enroll Now"/>

</div>
     </div>
    <div className="flex-1">
        <Image src={heroPoster} alt='hero poster' />
    </div>
    </div>
   
     </Wrapper>
     </section>
    </>
  )
}

export default Herosection
