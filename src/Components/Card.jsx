import React from "react";

const Card = () => {
  return (
    <div className="grid gap-2 grid-cols-2 ">
        
        
        <div className="text-black font-bold text-5xl mt-36 mx-36">
            <h1>I'm Greta </h1>
                <h1>Mae Evans</h1>
                
                </div>



        <div><div className="h-screen flex justify-center items-center"> {/* Flex container to center card */}
       <div className="relative max-w-xs overflow-hidden rounded-2xl shadow-lg group flex justify-center items-center">
         <img 
          className="object-cover w-full h-full border border-black  " 
          src="https://images.pexels.com/photos/906106/pexels-photo-906106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Card"
        />
        
      </div>
    </div></div></div>

    
    
  );
};

export default Card;
