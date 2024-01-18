

const Title = () => {
  return (
    //   <h1 id = "title" key="h1">
    //   Food Villa
    // </h1>
    <img
      className="logo"
      alt="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMkML6BRWil3kliTdFT-6LYBEeRsnkd_hmMNAowM3oalP-VbwLnT7vvG70rlP2_gcxbd0&usqp=CAU"
    />
  );
};
const Header = () => {
  return (
    <div className="header">
      <Title />
      {/* <h1>Food villa</h1> */}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//When we make our website dynamic - we call it as config driven UI (it is a good practice to follow in industry)
//Big companies uses this config driven UI - all the UI is driven by a config which is send by backend
//When our application is running on different region like foodpanda for isb, lahore, karachi. So for such cases we donot create seperate website for every region - we control our frontend using config that is why it is known as config driven UI and backend is driving that config and the data is coming from the API
//So our website looks different for isb, different content for lahore and different for karachi 

//Now how to design this config driben UI:


const restaurantList = [{
  name: "Burger King",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusins: ["Burgers","American"],
  rating: "4.3"
},
{
  name: "KFC",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusins: ["Burgers","American"],
  rating: "4.3"
},
{
  name: "McDonalds",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusins: ["Burgers","American"],
  rating: "4.3"
},
{
  name: "The Spice Factory",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusins: ["Burgers","American"],
  rating: "4.3"
},
{
  name: "Cheezious",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusins: ["Burgers","American"],
  rating: "4.3"
},
{
  name: "Tikka 'n' Talk",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusins: ["Burgers","American"],
  rating: "4.3"
},
{
  name: "Mr. Tandoor",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusins: ["Burgers","American"],
  rating: "4.3"
},
{
  name: "SoftSwirl",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusins: ["Burgers","American"],
  rating: "4.3"
},
{
  name: "The Naan House",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusins: ["Burgers","American"],
  rating: "4.3"
},
{
  name: "The Paneer Bar",
  image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e33e1d3ba7d6b2bb0d45e1001b731fcf",
  cusins: ["Burgers","American"],
  rating: "4.3"
}
]

const RestaurantCard = (props:any) => {
  console.log("restaurant data is: ",props);
  return (
    <div className="card">
      <img src= {props.image} />
      <h2>{props.name}</h2>
      <h3>{props.cusins.join(", ")}</h3>
      <h4>{props.rating} stars</h4>
    </div>
  );
};

//props - properties
//passing props into the components means passing data into component like shown in below code 


// const Body = () => {
//   return (
//     <div className = "restaurant-list">
//       {/* {RestaurantCard(restaurantList[0])} */}
//       <RestaurantCard restaurant = {restaurantList[0]} />
//       <RestaurantCard restaurant = {restaurantList[1]}/>
//       {/* <RestaurantCard restaurant = {restaurantList[2]}/> */} 
//       {/* We can also write like that */}
//       <RestaurantCard name = {restaurantList[2].data.name} cusine = {restaurantList[2].data.cusine} />
//       {/* <RestaurantCard restaurant = {restaurantList[3]}/> */}
//       {/* We can also write the above like that it is equal to above line 125  */}
//       {/* here it will take everything i.e name, cuisine, images and rating */}
//       <RestaurantCard restaurant = {...restaurantList[3].data}/> 
//     </div>
//   );
// };

const Body = () => {
  return(
    <div className = "restuarant-list">
      {restaurantList.map((restaurant, index)=> {
        return <RestaurantCard {...restaurant} key={index}/>
      })}
    </div>
  )
}

const Footer = () => {
  return <h4>Footer...</h4>;
};

//We should have only 1 parent div that is known as - React.Fragment
// React.Fragment is a component which is exported by react
//How can we use this React.Fragment component inside my code? Ans intead of div as a parent use React.Fragment that wrap up whole jsx then it will work

//Important interview questions -
//JSX can only have one parent
//What if I want to have multiple elements as a parent and I dont want an unneccessary div in my html Ans: React gives us an acces to component React.Fragment and it comes from React library that we import



const AppLayout = () => {
  return (
    //React.Fragment here is like an empty tag
    //Instead of this <React.Fragment>  component we can use empty tag as this tag looks ugly but this empty tag is React Fragment behind the scene and this empty tag is short hand for <React.Fragment></React.Fragment> tag
    //Suppose I have to pass style to parent then I can't pass style to <> </> empty tag
    // <React.Fragment>
    <>
      <Header />
      <Body />
      <Footer />
    </>
    // </React.Fragment>
  );
};

export default  AppLayout