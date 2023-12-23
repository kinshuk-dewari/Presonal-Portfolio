import React from "react";
import { PhoneIcon,MapPinIcon,EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

type Inputs = {
    name:string;
    email:string;
    subject:string;
    message:string;
  };
  
type Props ={}

function ContactMe ({}:Props){
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:kinshukdewariwastakne@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name} :
         ${formData.message} (${formData.email})`;
    };
return (
        <div className="h-screen flex relative flex-col  text-center overflow-hidden
        md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center z-0">
            
            <div className="text-5xl  text-center text-[#E2711E]   lg:text-7xl font-bold px-10  top-24 uppercase tracking-[4px] md:tracking-[14px] "> 
                Contact Me                
            </div>  

            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibold text-center">
                    Lets get in  {" "}
                    <span className='underline decoration-[#D26412] xl:p-2'>
                        Touch ! 
                    </span> 
                </h4>

                <div className="space-y-10 flex md:flex-row gap-4 flex-col "> 
                       
                        <div className="flex flex-col items-center justify-evenly">
                            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full text-left text-sm font-light">                                        
                                            <tbody>
                                                <tr 
                                                className="border-b border-t dark:border-neutral-500">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium"><PhoneIcon className="text-[#E69254] h-7 w-7 animate-pulse"/></td>
                                                    <td className="whitespace-nowrap px-6 py-4"><p className="text-2xl">+91-7417751712</p></td>                                            
                                                </tr>

                                                <tr 
                                                className="border-b dark:border-neutral-500">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium"><EnvelopeIcon className="text-[#E69254] h-7 w-7 animate-pulse"/></td>
                                                    <td className="whitespace-nowrap px-6 py-4"><p className="text-2xl">kinshukdewariwastaken@gmail.com</p></td>                                            
                                                </tr>

                                                <tr 
                                                className="border-b  dark:border-neutral-500">
                                                    <td className="whitespace-nowrap px-6 py-4 font-medium"><MapPinIcon className="text-[#E69254] h-7 w-7 animate-pulse"/></td>
                                                    <td className="whitespace-nowrap px-6 py-4"><p className="text-2xl">Dehradun,Uttarkhand,India</p></td>                                    
                                                </tr>                                            
                                                                                          
                                                                                        
                                            </tbody>
                                        </table>
                                        <div className="pl-96 rotate-3 invisible md:visible">                                                    
                                                        <Image  src="/arrow.svg"
                                                            width={100}
                                                            height={60}
                                                            alt="Picture of the author" 
                                                        /> 
                                        </div>  
                                    </div>
                                </div>
                            </div>
                            
                           
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit ">
                        <div className="flex space-x-2">
                            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                            <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                        </div>
                        <input {...register('subject')} placeholder="Subject" className="contactInput"  type="text" />
                        <textarea {...register('message')} placeholder="Message" className="contactInput" />
                        <button type="submit" className="py-5 px-10 rounded-md text-[#D7CBC4] uppercase font-bold bg-[#D26412]">Submit</button>
                    </form>
                  
                        
                    </div>
                    
                    

                </div>
            </div>
        
    )
}
export default ContactMe    
