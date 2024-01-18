import Wrapper from "@/components/shared/Wrapper"

const coreTracks = [
    {
        header: 'CS-101',
        description: 'Object Oriented Programming using Typescript',
        Prerequisite: 'Html,CSS,Javascript',
        track: 'I'
    },
    {
        header: 'CS-201',
        description: 'Next.js using Tailwind css ',
        Prerequisite: 'React.js,Chakra UI',
        track: 'II'
    },
    {
        header: 'CS-301',
        description: 'Object Oriented Programming using Typescript',
        Prerequisite: 'Javascript',
        track: 'III'
    },
    {
        header: 'CS-401',
        description: 'Object Oriented Programming using Typescript',
        Prerequisite: 'Javascript',
        track: 'IV'
    },
]
const Boxs = () => {
  return (
    <>
      <section className="bg-pink-100">
    <Wrapper>
      <div>
        <h2 className="flex text-6xl font-semibold p-8  justify-center">Core Tracks</h2>
        <p className="flex mb-12 text-lg justify-center">You don't have to struggle alone, you've got our assistance and help now.</p>
      </div>
            <div className="flex gap-x-4 justify-evenly">
                {
                    coreTracks.map((currElem,index)=>{
                        return(
                            <>
                 <div className="bg-gray-800  border rounded-md">
                 <div className="text-white relative px-20 h-60 mt-20">

<p className="text-4xl text-white font-semibold mt-10">Track {currElem.track}</p>
<h3 className="font-semibold text-1xl mt-2">{currElem.header} - {index+1}</h3>
<p className="text-1xl text-gray-50 font-extrabold">{currElem.Prerequisite}</p>

<p>{currElem.description}</p> 


</div>
              </div>

              
                            </>

                        )
                    })
                }
               
             </div>
       
    </Wrapper>
    </section>
    </>
  )
}

export default Boxs
