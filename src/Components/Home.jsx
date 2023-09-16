import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <>
    <nav class="bg-white p-4">
        <div class="container mx-auto flex justify-between items-center">
            <ul class="flex space-x-4 font-semibold">
                <li><a href="#" class="text-black hover:underline hover:text-green-500">Home</a></li>
                <li><a href="#" class="text-black hover:underline hover:text-green-500">Service</a></li>
                <li><a href="#" class="text-black hover:underline hover:text-green-500">Contact Us</a></li>
            </ul>
            <ul class="flex space-x-4 text-bold">
            <li> <button class="bg-green-300 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">Sign Up</button></li> 
            <li> <button class="bg-green-300 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">Login</button></li> 
            </ul>
        </div>
    </nav>
    <section class=" relative hero  text-black flex  h-6/12  ">
       
        <div class="content text-center p-10 h-auto w-6/12 flex flex-col justify-center	items-center  ">
            <h1 class="text-3xl font-semibold">Welcome to Our Website</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <div className='flex gap-3 space-between'>
            <a href="#" class="btn bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md inline-block mt-4">Learn More</a>
            <a href="#" class="btn bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md inline-block mt-4">Learn More</a>
            </div>
           
        </div>
        <div class="h-full w-6/12 flex flex-col items-center justify-center" >
      
        
       
            <img src="https://shrikrishnahrudayalaya.com/wp-content/uploads/2022/12/111-DxQieEVoW-transformed-Edited-1-768x666.png" alt="Doctor" class="w-full h-fit " />
        
        </div>
        <div className='absolute w-4/6 bg-green-100  h-20 bottom-10 left-10 rounded-md p-5 hover:bg-green-500 hover:text-white '> 
           <h1 className='absolute top-0 font-semibold text-xl'>Find a Doctor</h1>
           
         <div class=" absolute bottom-0 bg-white rounded-md w-6/12 py-3 px-6 shadow-lg text-black">
            <input type="text" placeholder="Enter your address" class="w-full h-full bg-transparent focus:outline-none"/>
        </div>
    
        </div>
  
    
        
    </section>

    </>
  )
}

export default Home
