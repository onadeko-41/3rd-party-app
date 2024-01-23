import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React from 'react';
import Link from "next/link";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Form Layout Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Layout page for NoorTakaful Next.js",
  // other metadata
};

const FormLayout = () => {
  return (
    <>
      <Breadcrumb pageName=" Third Party Transaction History" />
     

      <div className="grid grid-cols-1 gap-9">
      
        <div className="flex flex-col w-full">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark shadow">
              <h3 className="font-medium text-black dark:text-white">
                    Third Party Transaction Report
              </h3>
            </div>
            <form action="#">
                  
                  
                    
                    
                    <div className="mb-4.5 flex flex-col gap-2 mt-3 xl:flex-row text-sm">
                        
                        <div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white font-bold">
                            Customer Email
                          </label>
                          <input
                            type="text"
                            placeholder="Enter Email"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
      
                        
                        <div className="w-[90%] ml-4 mr-4 xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                            Date From 
                            </label>
                            <div className=" mb-2.5 block text-black dark:text-white ">
                                <select className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option value="">Select Voyage Origin</option>
                                    <option value="Abia">Naira - NGN</option>
                                    <option value="Adamawa">Dollar - USD </option>
                                    <option value="Akwa Ibom">Pounds - GBP</option>
                                    
                                </select>
                            </div>
                            
                        </div>
                        <div className="w-[90%] ml-4 mr-4 xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                Date To 
                            </label>
                            <div className=" mb-2.5 block text-black dark:text-white ">
                                <select className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option value="">Select  Voyage Destination</option>
                                    <option value="Abia">Naira - NGN</option>
                                    <option value="Adamawa">Dollar - USD </option>
                                    <option value="Akwa Ibom">Pounds - GBP</option>
                                    
                                </select>
                            </div>
                            
                        </div>
                        <div className="w-[90%] ml-4 mr-4 xl:w-1/2">
                        <button className="w-[60%] mt-9 justify-center rounded bg-meta-3 p-2 font-medium text-sm  mb-5 cursor-pointer text-gray">
                          <span className="text-sm">Submit</span>
                        </button>
                      </div>
                    </div>  
                    
                    


                  
            </form>
          </div>
        </div>

      </div>
    </>
  );
};

export default FormLayout;
