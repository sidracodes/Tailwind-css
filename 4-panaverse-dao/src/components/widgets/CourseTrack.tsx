import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/shared/Button";

const CourseTrack = () => {
  const header = 'Core Courses \n (Common in all Specializations):' ;
  return (
    <>
      <section className="bg-slate-100">
        <Wrapper>
          <div className="pt-16 lg:pt-28 max-w-screen-sm">
            <h4 className="text-teal-800 font-semibold text-lg mt-14">Program of Studies</h4>
            <h2 className="text-4xl sm:text-4xl font-bold whitespace-pre-line ">{header}</h2>
            <p className="mt-6 text-xl text-slate-600">
            Web 3.0 has the potential to change the internet as we know it forever. You're still early in catching the trend and building your first blockchain application, acquiring the skills to get a high- paying job, or creating your own web 3.0 projects that can make you money. In Web 2.0 all the data is controlled by the Big Tech companies, such as Google, Apple, etc. In the decentralized web, no single person/ company owns any data or information about anyone, and everything is visible to the public. Web3, also known as the decentralized web, is the third and latest" phase” of the internet. Web3 is built on peer-to-peer networks of computers that talk to each other without middlemen.
            </p>
<div className="mt-5">
<Button text="Read More" />
</div>
           
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default CourseTrack;
