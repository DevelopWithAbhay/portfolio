import React, { useState, useRef } from "react";
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Approach = () => {
  const form = useRef();
  
  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading,setloading]=useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setloading(true);  

    emailjs.sendForm("service_q5zs74r", "template_p1kctyz", form.current, {
        publicKey: "iugeZvBqhlxMWP3tC",
      })
      .then(
        () => {
          setloading(false);
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setformData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {

          console.log("FAILED...", error.text);
          setloading(false);
          toast.error("Failed to send message!", { theme: "dark" });
        }
      );
  };

  return (
    <div>
      <Navbar />
      <section className="mx-auto max-w-4xl p-6 text-2xl bg-gray-900 rounded-xl m-5 h-[88vh]">
        <h2 className="text-white text-3xl text-bold text-center">
          Contact Me
        </h2>
        <form ref={form} onSubmit={sendEmail}>
          <label className="label-class" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="input-class"
            id="name"
            name="name"
            onChange={handlechange}
            value={formData.name}
            required
          />
          <label className="label-class" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input-class"
            id="email"
            onChange={handlechange}
            value={formData.email}
            required
          />
          <label className="label-class" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="input-class"
            onChange={handlechange}
            value={formData.message}
            rows={4}
          ></textarea>
          <div className="text-center py-7">
            <button
              type="submit" 
              disabled={loading}
              className={`px-10 py-3 w-40  bg-blue-600 text-white text-xl rounded-full hover:bg-blue-700 transition duration-300 ease-in-out ${loading?"cursor-not-allowed":" "}`}
            >
         {loading?(<img src="src/image/spinner.svg" className=" mx-4 w-10 h-10 " alt="spinner"/>):("Message")}
         
          
            </button>
          </div>
        </form>
      </section>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Approach;
