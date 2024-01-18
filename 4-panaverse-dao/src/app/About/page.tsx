"use client";
import { useState } from "react";

const page = () => {
  const [toggle, setToggle] = useState(false);
  const [togle, setTogle] = useState(false);
  const [toglle, setToglle] = useState(false);
  const [toogll, setToogll] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  const togleHandler = () => {
    setTogle(!togle);
  };
  const toglleHandler = () => {
    setToglle(!toglle);
  };
  const toogllHandler = () => {
    setToogll(!toogll);
  };
  return (
    <>
      {/* toggle effect */}
      <div className="px-24">
      <h1 className="text-3xl font-bold sm:text-blue-800 lg:text-orange-600">
      
      this is about us page
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex error
      non cumque, aliquid laborum quas debitis veniam quo similique maiores
      quasi ea rem officia iusto! Nobis architecto earum recusandae
      repudiandae voluptas ea, iste velit ipsam harum quos? Aperiam
      consequatur numquam quae assumenda eaque expedita quia reiciendis fuga,
      tempore rerum sequi similique corrupti deserunt libero sint perspiciatis
      nulla sed nam officiis molestiae. Illum in eligendi ratione doloremque
      illo cum excepturi quasi? Quae repudiandae, aliquam esse consequuntur
      sit, commodi praesentium nihil inventore maiores voluptatum iusto
      delectus! Delectus, eum consectetur nihil odit eveniet dicta cum
      repudiandae incidunt, dolore similique quasi possimus obcaecati. Nihil,
      veritatis corrupti unde asperiores illum exercitationem autem
      consequatur dignissimos vitae voluptatum aspernatur placeat dolorem
      eveniet, sit quia in quasi sint harum aliquid tempore, adipisci
      molestiae enim. Labore commodi voluptate consectetur ullam, aperiam ipsa
      dolorem est? Sunt molestias cumque soluta voluptas est quidem nobis quo.
      Sed, aspernatur voluptatum nulla fugiat nesciunt odit facilis illum
      mollitia iste molestias a, culpa blanditiis maxime! Ducimus, aut! Omnis
      sint, blanditiis repellat ex dicta laborum dolorem voluptatum aut unde
      harum, deleniti quasi exercitationem. Accusantium labore pariatur, enim
      quas, at nihil suscipit asperiores obcaecati libero nesciunt nisi
      architecto, aliquid dignissimos saepe consequuntur corporis et quae. Sed
      et eveniet alias laboriosam illo molestias quasi, voluptate quaerat
      nisi! Quod dolorem nesciunt quibusdam consectetur consequuntur deserunt
      adipisci qui, voluptas voluptatem dolor blanditiis incidunt voluptatum
      labore fugiat accusamus earum in voluptates, laboriosam beatae
      dignissimos asperiores minima. Quo possimus veniam officia vero
      praesentium distinctio ipsam minus, rerum necessitatibus voluptates
      ipsum obcaecati cumque. Expedita quo impedit est distinctio assumenda
      laborum maxime amet vitae optio, deleniti eius culpa atque provident
      itaque numquam, a consequuntur debitis quaerat ex facere voluptates
      repellat! Soluta quasi deserunt fugiat obcaecati laboriosam neque
      blanditiis ea suscipit fuga. Illo voluptatum non voluptate qui quam iste
      nisi explicabo quae ullam incidunt.
    </p>
    <br />

<h1 className="text-3xl font-bold sm:text-blue-800 lg:text-pink-500">Managing State with useState</h1>
<h1 className="text-3xl font-bold sm:text-pink-500 lg:text-blue-800"> Conditional Rendering and Conditional Styling With React </h1>
    
    <div className=" px-10 py-10 mt-10 cursor-pointer ">
      <h1 className="text-3xl font-bold sm:text-blue-800 lg:text-green-500 mx-10 my-10 pt-10">Frequently Asked Questions</h1>
      <div>
      <div className="1">
        <div onClick={toglleHandler}>
          <h1>
            You want to know about the smooth animation with an toggle effect!
          </h1>
        </div>

        <div>
          <p className={`text-yellow-400 ${toglle ?  "bg-pink-600" : "bg-blue-600"} duration-700`}>
       duration is use for smooth animation effect</p>
          <hr />
        </div>
    
      </div>
     
       <div className="2">
       <div onClick={togleHandler}>
          <h1>
            You want to know about the simple toggle effect!
          </h1>
        </div>

        <div>
          {togle && (
            <div>
              <p>
               simple toggle effect means same button with open and close state
              </p>
            </div>
          )}
          <hr />
        </div>
       </div>
       <div className="3">

<div onClick={toggleHandler}>
<h1>
  You want to know about the height and duration property!
</h1>
</div>

<div>
<p className={`overflow-hidden ${toggle ? "h-auto" : "h-0"}`}>
  the duration property doesnot work with height property but works with width property
</p>
<hr />
</div>
</div>
       <div className="4">

<div onClick={toogllHandler}>
<h1>
  You want to know about the toggle effect with max height and duration property!
</h1>
</div>

<div>
<p className={`bg-orange-200 text-black duration-500 overflow-hidden ${toogll ? "max-h-40" : "max-h-0"}`}>
  the duration property  work with max height property 
</p>
<hr />
</div>
</div>
      </div>

    
    </div>
      </div>
     
    </>
  );
};

export default page;
