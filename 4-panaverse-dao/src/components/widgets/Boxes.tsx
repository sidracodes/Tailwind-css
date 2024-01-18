import Wrapper from "@/components/shared/Wrapper"
import Box from "@/components/shared/Box"

const Boxes = () => {
  return (
    <>
      <section className="bg-green-100">
    <Wrapper>
      <div>
        <h2 className="flex text-6xl font-semibold p-8 justify-center">We Are Proud</h2>
        <p className="flex mb-12 justify-center text-lg">You don't have to struggle alone, you've got our assistance and help now.</p>
      </div>
            <div className="flex gap-x-4 justify-evenly">
                <div className="bg-blue-700  border rounded-md"><Box text='Students Enrolled' value={5000} val="1" />
              </div>
               <div className="bg-pink-700  border rounded-md"><Box text='Skilled Instructors' value={1000} val="2" />
              </div> 
              <div className="bg-purple-700  border rounded-md"><Box text='Students Enrolled' value={12000} val="3"/>
              </div> 
               <div className="bg-green-700  border rounded-md"><Box text='Class Completed' value={1000} val="4"/>
           </div> </div>
       
    </Wrapper>
    </section>
    </>
  )
}

export default Boxes
