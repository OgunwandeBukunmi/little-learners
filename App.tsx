import Logo from "./assets/Logo.png";
import Icon from "./assets/Icon.png";
import ChildImage from "./assets/Image.png"
import SchoolCap from "./assets/Icon (1).png"
import Crown from "./assets/Icon (2).png"
import CoofieCup  from "./assets/Icon (3).png"
import Flag from "./assets/Icon (4).png"
import Ball from "./assets/Icon (5).png"
import People from "./assets/Icon (6).png"
import Profile1 from "./assets/Profile Container.png"
import Profile2 from "./assets/Profile Container (1).png"
import Profile3 from "./assets/Profile Container (2).png"
import Stars from "./assets/Container (1).png"
import Line from "./assets/Container.png"
import Mail from "./assets/Icon (7).png"
import Phone from "./assets/Icon (8).png"
import Pin from "./assets/Icon (9).png"
import Facebook from "./assets/Button.png"
import Twitter from "./assets/Button (2).png"
import LinkedIn from "./assets/Button (1).png"
import { useState } from "react";


const App = () => {
  const [hidden, setHidden] = useState(true);

  function view() {
    setHidden((prev) => !prev);
  }


  let benefits = [
      {
        image : SchoolCap,
        title :"Holistic Learning Approach",
        description : "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education."
      },
       {
        image : Crown,
        title :"Experienced Educators",
        description : "Our passionate and qualified teachers create a supportive and stimulating learning environment."
       },
       {
        image : CoofieCup,
        title :"Nurturing Environment",
        description : "We prioritize safety and provide a warm and caring atmosphere for every child."
       },
       {
        image : Flag,
        title :"Play-Based Learning",
        description : "We believe in the power of play to foster creativity, problem-solving skills, and imagination."
       }
       ,{
        image : Ball,
        title :"Individualized Attention",
        description : "Our small class sizes enable personalized attention, catering to each child's unique needs."
       },{
        image : People,
        title :"Parent Involvement",
        description : "We foster a strong parent-school partnership to ensure seamless communication and collaboration."
       }
       
  ]
    let testimonials = [
      {
        image : Profile1,
        name :"Jennifer B",
        description : "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
      },
       {
        image : Profile2,
        name :"David K",
        description : "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
       },
       {
        image : Profile3,
        name :"Emily L",
        description : "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
       }
       
  ]
  let accordion = [
    {
      title : "What are the school hours at Little Learners Academy?",
      content : "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
    },
     {
      title : "How do you handle food allergies and dietary restrictions?",
      content : "We work closely with families to understand each student’s needs, provide safe meal options, avoid cross-contamination, and train staff to respond to any allergic reactions."
    },
     {
      title : "Is there a uniform policy for students?",
      content : "Yes, students are required to wear the approved school uniform to promote equality and a sense of community."
    },
     {
      title : "What is the teacher-to-student ratio at Little Learners Academy?",
      content : "Here’s the teacher-to-student ratio for Little Learners Academy (as presented on its official website) 2 teachers per classroom, with a maximum of 16 students per class. That works out to about 1 teacher for every 8 students "
    },
     {
      title : "How do you handle discipline and behavior management?",
      content : "We use positive reinforcement, clear expectations, and consistent consequences to guide behavior, focusing on helping students learn from their actions and make better choices."
    },
     {
      title : "What extracurricular activities are available for students?",
      content : "We offer activities like sports, arts and crafts, music, dance, cooking, language classes, gardening, and educational excursions."
    },
     {
      title : "How do I apply for admission to Little Learners Academy?",
      content : "Complete an application form, submit required documents, and pay the registration fee to secure your child’s spot."
    }
  ]
  let navigation = [
      {
        title : "About Us",
        description : "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education."
      },
      {
        title : "Academics",
        description : "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development."
      },
      {
        title : "Student Life",
        description : "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable."
      },
      {
        title : "Admissions",
        description : "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces."
      }

  ]

  return (
    <>
      <main className="min-h-screen px-4 py-2 md:px-18 md:py-6 bg-[#FFF6F0] scroll-smooth">
        {/* Top Banner */}
        <section className="w-full p-1 mb-2 bg-brandOrange border border-2 rounded-md">
          <div className="text-center font-outfit text-sm md:text-lg">
            Admission is Open, Grab your Seats now
          </div>
        </section>

        {/* Header */}
        <header className="flex justify-between  bg-white border border-3 rounded-lg relative mb-2 md:mb-5">
          <div className="bg-darkOrange p-2">
            <img
              src={Logo}
              alt="something"
              className="w-[115px] md:w-[155px]"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex font-outfit">
            <div className="bg-[#FFF6F0] p-3 flex items-center h-full">
              <a href="#">Home</a>
            </div>
            <div className="p-3 flex items-center h-full">
              <a href="#benefits">About Us</a>
            </div>
            <div className="p-3 flex items-center h-full">
              <a href="#navigation">Academics</a>
            </div>
            <div className="p-3 flex items-center h-full">
              <a href="#navigation">Admissions</a>
            </div>
            <div className="p-3 flex items-center h-full">
              <a href="#faq">Student Life</a>
            </div>
            <div className="bg-darkOrange p-3 flex items-center h-full">
              <a href="#footer" className="w-full text-center">
                Contact
              </a>
            </div>
          </nav>

          {/* mobile nav */}
            {!hidden && (
          <nav className=" absolute top-15 z-20 w-full text-center flex flex-col font-outfit mt-2 bg-white border border-3 rounded-lg overflow-hidden md:hidden">
            <a
              href="#"
              className="bg-[#FFF6F0] p-3 border-b border-gray-200"
            >
              Home
            </a>
            <a href="#benefits" className="p-3 border-b border-gray-200">
              About Us
            </a>
            <a href="#navigation" className="p-3 border-b border-gray-200">
              Academics
            </a>
            <a href="#navigation" className="p-3 border-b border-gray-200">
              Admissions
            </a>
            <a href="#faq" className="p-3 border-b border-gray-200">
              Student Life
            </a>
            <a href="#footer" className="bg-darkOrange p-3 text-center">
              Contact
            </a>
          </nav>
        )}

        
          <button
            className="md:hidden bg-[#FFF6F0] p-2 px-2 rounded"
            onClick={view}
          >
            <img src={Icon} alt="Menu" />
          </button>

        
        </header>
        {/* hero section  */}
        <section className="px-4 w-full mx-auto flex flex-col md:flex-row items-stretch  gap-3 md:gap-10mt-8 mb-4 md:mb-5  ">
        <div className="flex items-center justify-center md:w-1/2">
          <img
            src={ChildImage}
            alt="childimage"
            className="bg-darkOrange w-full md:h-[663px] object-fit rounded-lg"
          />
        </div>
        <div id="something" className="h-full md:w-1/2 md:h-[663px] flex flex-col align-center gap-3 justify-center ">
            <h5 className="border-b-2 text-xl  py-3 font-bold w-full md:w-2/3">Welcome to Little Learners Academy</h5>
        <h1 className="font-extrabold  font-raleway text-4xl tracking-wider">Where Young Minds Blossom <br/> and<span className="text-darkOrange ">Dreams Take Flight.</span>  </h1>
        <p className="text-md font-outfit max-w-4xl">Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
        
        <section className=" font-outfit w-full flex flex-col md:flex-row gap-3 border-2 rounded-lg  py-2 px-5 shadow-2xl shadow-brandOrange/50 text-center">
          <div className="flex flex-col  justify-center border-b-2 md:border-b-0 p-2">
          <h2 className="text-3xl font-extrabold">+7000</h2>
          <p>Students Passed Out</p>
          </div>
          <div className="flex flex-col  justify-center border-b-2 md:border-b-0 p-2">
          <h2 className="text-3xl font-extrabold">+37</h2>
          <p>Award & Recognition</p>
          </div>
          <div className="flex flex-col  justify-center  p-2">
          <h2 className="text-3xl font-extrabold">+15</h2>
          <p>Expericenced Educators</p>
          </div>
        </section>
        </div>
      
      </section>
        {/* benefits  */}
        <section className="p-4 mx-auto mt-12 mb-2 md:mb-5 " id="benefits">
          <main className="flex flex-col gap-8 items-center justify-center">
            <div>
                 <h1 className="text-5xl font-raleway font-extrabold text-center mb-3">Our Benefits</h1>
                 <p className="max-w-4xl text-center font-outfit">With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.</p>
            </div>
           
            <div className=" grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6 mt-8">
              {benefits && benefits.map((item,index)=>(
                <article key={index} className="relative p-8 bg-white rounded-lg shadow-2xl font-outfit  ">
                <img src={item.image} alt={`${item.image}`} className="absolute -top-5 p-3 bg-brandOrange border-1 rounded-md " />
                <h1 className="font-raleway text-xl font-bold my-3">{item.title}</h1>
                <p>{item.description}</p>
              </article>
              ))}
              
            </div>
          </main>
        </section>

        {/* testimonials  */}
         <section className="p-4 mx-auto mt-12 mb-4 md:mb-5  ">
          <main className="flex flex-col gap-8 items-center justify-center">
            <div>
                 <h1 className="text-5xl font-raleway font-extrabold text-center mb-3">Our Testimonials</h1>
                 <p className="max-w-4xl text-center font-outfit">Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.</p>
            </div>
           
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-6 mt-8 mb-0">
  {testimonials && testimonials.map((item, index) => (
    <article
      key={index}
      className="relative p-8 bg-white rounded-lg shadow-2xl font-outfit flex flex-col items-center border border-1 shadow-md"
    >
            {/* Top section */}
             <div className="p-3 flex flex-col items-center">
              <img
                src={item.image}
                alt={item.name}
                className="rounded-full"
              />
              <h1 className="font-raleway text-xl font-bold my-3">
                {item.name}
              </h1>
            </div>

            {/* Fixed height stars section */}
            <div className="flex items-center justify-center" style={{ minHeight: "40px" }}>
              <img
                src={Stars}
                alt="stars"
                className="mx-auto"
              />
            </div>

            {/* Description pushes to bottom */}
            <p className="text-center mt-3 ">{item.description}</p>
          </article>
        ))}
      </div>

          </main>
        </section>
        {/* frequently asked questions  */}
       <section className="mt-12 mb-4" id="faq">
            <main className="flex flex-col gap-2 items-center justify-center">
            <div>
                 <h1 className="text-5xl font-raleway font-extrabold text-center mb-3">Frequently Asked Questions</h1>
                 <p className="max-w-4xl text-center font-outfit">Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.</p>
            </div>
           
        <div className="grid grid-cols-1 grid-rows-6 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-2 lg:grid-rows-4 gap-6  items-start">
  {accordion && accordion.map((item, index) => (
    <Accordion key={index} title={item.title} content={item.content}/>
        ))}
      </div>

          </main>
       </section>
       {/* navigation  */}
      <section className="p-4 mx-auto mt-12 mb-4 md:mb-5  " id="navigation">
          <main className="flex flex-col gap-8 items-center justify-center">
            <div>
                 <h1 className="text-5xl font-raleway font-extrabold text-center mb-3">Navigate through our Pages</h1>
                 <p className="max-w-4xl text-center font-outfit">Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school</p>
            </div>
           
        <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 gap-6 mt-8 mb-0">
  {navigation &&  navigation.map((item, index) => (
      <article
      key={index}
      className="relative p-8 bg-white rounded-lg shadow-2xl font-outfit flex flex-col gap-5  items-center border border-1 shadow-md text-center"
    >
      {/* Top section */}
      <div className="p-3 flex flex-col items-center">
        <h1 className="font-raleway text-2xl font-bold my-3 ">
          {item.title}
        </h1> 
        <img src={Line} alt="line separator" />
      </div>

      {/* Description */}
      <p className="" style={{ minHeight: "150px" }} >{item.description}</p>

      {/* Link */}
      <a href="#" className="p-3 bg-brandOrange w-full rounded-lg shadow-lg border border-1 ">Learn More</a>
    </article>
         ))
}
      </div>

          </main>
        </section>
        {/* footer  */}
        <footer className="bg-white rounded-lg border border-2 shadow-2xl   p-8 md:p-12 " id="footer">
          <main className="flex flex-col md:flex-row items-center  font-outfit border-b-2 p-4">
            <div className="">
              <img src={Logo} alt="logo" className="p-3 mb-2" />
              <p className="my-2 max-w-2xl text-md">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
              <div className="flex flex-row items-center gap-2 p-3">
                <img src={Mail} alt="mail" />
                <p>hello@littlelearners.com</p>
              </div>
              <div className="flex flex-row  items-center gap-2 p-3">
                 <img src={Phone} alt="mail" />
                <p>+91 91813 23 2309</p>
              </div>
              <div className="flex flex-row  items-center gap-2 p-3">
                <img src={Pin} alt="mail" />
                <p>Somewhere in the World</p>
              </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 gap-2">
            <div>
            <h1 className="font-bold mb-5">Home</h1>
            <nav className="p-2 flex flex-col gap-2">
              <p>Features</p>
              <p>Our Testimonials</p>
              <p>FAQ</p>
            </nav>
            </div>
            <div>
              <h1 className="font-bold mb-5">About Us</h1>
            <nav className="p-2 flex flex-col gap-2">
              <p>Our Mission</p>
              <p>Our Vision</p>
              <p>Awards and Recogniton</p>
            </nav>
            </div>
            <div>
              <h1 className="font-bold mb-5">Academics</h1>
                <nav className="p-2 flex flex-col gap-2">
              <p> Special Features</p>
              <p>Gallery</p>
            </nav>
            </div>
            <div>
              <h1 className="font-bold mb-5">Contact Us</h1>
            <nav className="p-2 flex flex-col gap-2">
              <p>Information</p>
              <p>Map & Direction</p>
            </nav></div>
            </div>
          </main>
          <section className="flex flex-col md:flex-row justify-between  items-center border-b-1 p-4 gap-3">
            <div>
              <h4>Terms Of Service | Privacy Policy | Cookie Policy</h4>
              </div>
            <div className="flex flex-row gap-4 ">
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={LinkedIn} alt="" />
            </div>
          </section>
          <p className="text-center w-full m-2 text-sm">Copyright © [2023] Little Learners Academy. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
};

export default App;

interface MyProps {
  title: string;
  content: string;
}



export function Accordion({ title , content }  : MyProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? "border border-1 bg-white p-4 rounded-md shadow-md font-outfit" : "border border-1 bg-brandOrange p-4 rounded-md shadow-md font-outfit"}>
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none p-2"
      >
        <span className={isOpen ? "font-medium text-lg border-b p-2" : "font-medium text-lg p-2"}>
          {title}
        </span>

        <svg
          className="w-6 h-7 rounded-sm p-1 border-1 bg-brandOrange"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
          {!isOpen && (
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14" />
          )}
        </svg>
      </button>

      {/* Accordion Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="p-2 text-gray-600">{content}</p>
        </div>

    </div>
  );
}


