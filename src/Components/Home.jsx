import React from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Typography,
  Avatar,
  Tooltip,
  CardFooter,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import htmllogo from "/html5-01-svgrepo-com.svg"
import csslogo from "/css3-svgrepo-com.svg" 
import bootslogo from "/bootstrap-fill-svgrepo-com.svg"
import primg from "/Screenshot 2024-10-13 115157.png"
import pr2img from "/Screenshot 2024-10-13 114614.png"
import pr3img from "/Screenshot 2024-10-13 121017.png"
import jslogo from "/javascript-155-svgrepo-com.svg"
import tclogo from "/tailwindcss-svgrepo-com.svg"
import pr4img from "/Screenshot 2024-10-13 145257.png"
import pr5img from "/Screenshot 2024-10-13 145802.png"
import pr6img from "/Screenshot 2024-10-13 150326.png" 
import resume from "/resume.pdf"
function Home({ f }) { 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <div>
      <header className="p-8">
        <div className="grid mt-16 min-h-[82vh] w-full lg:h-[54rem] md:h-[34rem] place-items-stretch">
          <div className="container mx-auto px-4 text-center">
            
            {f.map(y => (
              <Avatar
               
                src={y.src}
                alt="avatar"
                size="xxl"
                style={{ width: '190px', height: '190px' }}
              />
            ))}

            <Typography
              variant="h1"
              color="blue-gray"
              className="mx-auto my-6 w-full leading-snug !text-2xl lg:max-w-3xl lg:!text-5xl text-white"
            >
              Hello My name is{" "}
              <span className="text-green-500 leading-snug">
                MARTIN ANTONY
              </span>{" "}
              <br />
              and I am a{" "}
              <span className="leading-snug text-green-500">
                MERN STACK DEVELOPER
              </span>
              .
            </Typography>
    
            <div className="mt-8 grid w-full place-items-start md:justify-center">
              <div className="mb-2 flex w-full flex-row gap-36">
                <a href="tel:+91 9109011964"><Button
                  color="gray"
                  className="w-56 px-5 md:w-[12rem] hover:bg-white hover:text-black"
                >
                  Connect With Me
                </Button></a>
                <a href={resume}><Button
                  color="gray"
                  className="w-56 px-4 md:w-[12rem] hover:bg-white hover:text-black"
                >
                  My Resume
                </Button></a>
                
              </div>
            </div>
            
          </div>
          <h1 className='text-white text-4xl text-center '><b>About Me</b></h1>
        </div>
        
        <Card shadow={false} className="border border-gray-500 bg-[#1a1a1a] rounded-2xl">
    <CardHeader shadow={false} className="h-60 !rounded-lg">
      <img
        src="https://cdn.pixabay.com/photo/2017/06/26/13/03/webdesigner-2443766_1280.jpg"
        alt="dark"
        className="w-full h-full object-cover"
      />
    </CardHeader>
    <CardBody className="p-8">
      <div className="flex lg:gap-8 gap-6 flex-wrap justify-between items-center">
        <div className="flex items-center gap-4">
          {f.map(i => (
            <Avatar
              src={i.src}
              size="xl"
              alt="avatar"
              className="border border-gray-500"
            />
          ))}
          <div>
            <Typography color="white" variant="h6">
              Martin Antony
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-[#b3b3b3]"
            >
              martinantony054@gmail.com
            </Typography>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
  <Button
    variant="outlined"
    className="border-[#b3b3b3] text-white flex items-center gap-2 hover:bg-white hover:text-black"
  >
    <FontAwesomeIcon icon={faGithub} className="text-base" />
    Github
  </Button>
  <Button
    variant="outlined"
    className="border-[#b3b3b3] text-white flex items-center gap-2 hover:bg-white hover:text-black"
  >
    <FontAwesomeIcon icon={faFacebook} style={{ color: "#e8dede" }} />
    Facebook
  </Button>
  <Button
    variant="outlined"
    className="border-[#b3b3b3] text-white flex items-center gap-2 hover:bg-white hover:text-black"
  >
    <FontAwesomeIcon icon={faInstagram} className="text-base" />
    Instagram
  </Button>
  </div>
      </div>

      <Typography
        variant="small"
        className="font-normal text-[#b3b3b3] mt-8 leading-relaxed"
      >
        Passionate web developer specializing in building responsive and user-friendly websites. 
        Skilled in modern web technologies such as HTML, CSS, JavaScript, and frameworks like React. 
        Committed to delivering high-quality digital experiences that meet user needs and exceed expectations.
      </Typography>
    </CardBody>
  </Card>
        <section className="container mx-auto px-8 py-12">
  
  </section>
  </header>
  <h1 className='text-white text-4xl text-center'><b>PROJECTS</b></h1>
  <br />
  <br />
  <div className='flex flex-wrap justify-center gap-4 p-4'>
  <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={primg}
          alt=""  width={'500vh'}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            Pizza Palace Website
          </Typography>
          
        </div>
        <Typography color="gray">
        A modern, responsive website for a pizza palace, featuring a red-themed navbar and a dynamic carousel with brick and wooden texture backgrounds. The design ensures a seamless user experience across devices while maintaining consistent branding and visual appeal.It invites visitors to explore the menu and order their favorite pizzas with ease.


        </Typography>
        <br />
        <Typography>  Languages Used: </Typography>
      
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="HTML">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <img src={htmllogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="CSS">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={csslogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="Bootstrap">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={bootslogo} alt="" />
            </span>
          </Tooltip>
         
        
        </div>
      </CardBody>
      <CardFooter className="pt-3">
      <a href="https://martiantony054.github.io/food-delivery-app/"><Button size="lg" fullWidth={true} className='hover:bg-white hover:text-black'>Click </Button></a>
      </CardFooter>
    </Card>
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={pr2img}
          alt=""  width={'500vh'}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            AMTM clone  Website
          </Typography>
          
        </div>
        <Typography color="gray">
        A visually engaging clone of the "Animal Matter To Me" website, designed to raise awareness for animal welfare. The site features a clean layout with easy navigation, highlighting adoptable animals and resources for pet owners. 
        </Typography>
        <br />
        <Typography>  Languages Used: </Typography>
      
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="HTML">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <img src={htmllogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="CSS">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={csslogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="Bootstrap">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={bootslogo} alt="" />
            </span>
          </Tooltip>
         
        
        </div>
      </CardBody>
      <CardFooter className="pt-3">
      <a href="https://martiantony054.github.io/animal-wesbite/"><Button size="lg" fullWidth={true} className='hover:bg-white hover:text-black'>Click </Button></a>
      </CardFooter>
    </Card>
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={pr3img}
          alt=""  width={'500vh'}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            Bank Website
          </Typography>
          
        </div>
        <Typography color="gray">
        A user-friendly banking website featuring a balance withdrawal system. The design includes a responsive layout with a clean interface, allowing users to easily navigate through essential features like deposits, withdrawals, and account balance management. 


        </Typography>
        <br />
        <Typography>  Languages Used: </Typography>
      
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="HTML">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <img src={htmllogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="CSS">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={csslogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="Javascript">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={jslogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="Tailwind CSS">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={tclogo} alt="" />
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="pt-3">
      <a href="https://martiantony054.github.io/Bank-Website/"><Button size="lg" fullWidth={true} className='hover:bg-white hover:text-black'>Click </Button></a>
      </CardFooter>
    </Card>
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={pr4img}
          alt=""  width={'500vh'}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
        
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            Furniture Website
          </Typography>
          
        </div>
        <Typography color="gray">
        A stylish and responsive furniture website showcasing a curated selection of home furnishings. The design features an elegant layout that enhances product visibility, making it easy for users to browse and find their ideal pieces. With a focus on user experience, the site provides seamless navigation and highlights special offers and new arrivals.




        </Typography>
        <br />
        <Typography>  Languages Used: </Typography>
      
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="HTML">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <img src={htmllogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="Bootstrap">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={bootslogo} alt="" />
            </span>
          </Tooltip>
          
          
        </div>
      </CardBody>
      <CardFooter className="pt-3">
      <a href="https://martiantony054.github.io/furniture-Website/"><Button size="lg" fullWidth={true} className='hover:bg-white hover:text-black'>Click </Button></a>
      </CardFooter>
    </Card>
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={pr5img}
          alt=""  width={'500vh'}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
            DJ EVENT Management Website
          </Typography>
          
        </div>
        <Typography color="gray">
        A vibrant and responsive website dedicated to managing DJ events, featuring an intuitive layout that allows users to easily browse upcoming events, book services, and access DJ profiles. The design captures the lively atmosphere of music events while ensuring a seamless user experience, making it easy for visitors to plan and enjoy their next party.
        </Typography>
        <br />
        <Typography>  Languages Used: </Typography>
      
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="HTML">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <img src={htmllogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="CSS">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={csslogo} alt="" />
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="pt-3">
      <a href="https://martiantony054.github.io/furniture-Website/"><Button size="lg" fullWidth={true} className='hover:bg-white hover:text-black'>Click </Button></a>
      </CardFooter>
    </Card>
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={pr6img}
          alt=""  width={'500vh'}
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-medium">
           EVENT Management Website
          </Typography>
          
        </div>
        <Typography color="gray">
        A modern and responsive event management website designed to facilitate the organization and promotion of various events. Featuring a user-friendly interface, the site allows users to easily browse, register, and get updates on upcoming events. 


        </Typography>
        <br />
        <Typography>  Languages Used: </Typography>
      
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          <Tooltip content="HTML">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
            <img src={htmllogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="CSS">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={csslogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="Bootstrap">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={bootslogo} alt="" />
            </span>
          </Tooltip>
          <Tooltip content="Tailwind CSS">
            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              <img src={tclogo} alt="" />
            </span>
          </Tooltip>
        </div>
      </CardBody>
      <CardFooter className="pt-3">
      <a href="https://martiantony054.github.io/furniture-Website/"><Button size="lg" fullWidth={true} className='hover:bg-white hover:text-black'>Click </Button></a>
      </CardFooter>
    </Card>

    
    
    
    
  </div>
  

  
  </div>
  );
}

export default Home;
