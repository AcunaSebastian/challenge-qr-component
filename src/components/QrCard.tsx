import { Component } from "solid-js"
import image from '../assets/image-qr-code.png';

 const QrCard:Component = () => {
    return (
        <div class='flex flex-col sm:flex-row items-center bg-neutral-100 max-w-[200px] sm:max-w-sm  box-content rounded-xl p-2'>
        <div class=''>
          <img src={image} alt="QR Image" class='rounded-xl w-auto h-30  ' />
        </div>
        <div class='p-2 flex flex-col sm:mx-2'>
          <h1 class=' font-outfit text-center sm:text-left text-sm  font-extrabold py-4'>
            Improve your front-end skills by building projects
          </h1>
          <h5 class='font-outfit text-[15px] text-gray-500 py-2'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </h5>
        </div>

      </div>
    );
}

export default QrCard;