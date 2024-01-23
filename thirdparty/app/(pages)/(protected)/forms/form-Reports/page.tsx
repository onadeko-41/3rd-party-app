'use client'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import React from 'react';
import DatePicker from '@/components/DatePicker/DatePicker'
import Link from "next/link";
import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Form Layout Page | Next.js E-commerce Dashboard Template",
//   description: "This is Form Layout page for NoorTakaful Next.js",
//   // other metadata
// };

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
                                    <option value=""></option>
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
                            <DatePicker/>
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
      <div className="grid grid-cols-1 mt-8 gap-9">
      
        <div className="flex flex-col w-full">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark shadow">
              <h3 className="font-medium text-black dark:text-white">
                    Reports
              </h3>
            </div>
            <form action="#">   
                    <div className="w-[90%] ml-4 mr-4 xl:w-1/2 flex">
                        <button className="w-[10%] mt-9 justify-center rounded-none bg-bodydark1 p-2 font-medium text-sm  mb-5 cursor-pointer text-black dark:bg-form-input dark:text-gray">
                          <span className="text-sm">Copy</span>
                        </button>
                        <button className="w-[10%] mt-9 justify-center rounded-none bg-bodydark1 p-2 font-medium text-sm  mb-5 cursor-pointer text-black dark:bg-form-input dark:text-gray">
                          <span className="text-sm">CSV</span>
                        </button>
                        <button className="w-[10%] mt-9 justify-center rounded-none bg-bodydark1 p-2 font-medium text-sm  mb-5 cursor-pointer text-black dark:bg-form-input dark:text-gray">
                          <span className="text-sm">PDF</span>
                        </button>
                        <button className="w-[10%] mt-9 justify-center rounded-none bg-bodydark1 p-2 font-medium text-sm  mb-5 cursor-pointer text-black dark:bg-form-input dark:text-gray">
                          <span className="text-sm">Excel</span>
                        </button>
                        <button className="w-[10%] mt-9 justify-center rounded-none bg-bodydark1 p-2 font-medium text-sm  mb-5 cursor-pointer text-black dark:bg-form-input  dark:text-gray">
                          <span className="text-sm">Print</span>
                        </button>
                    </div>
                    <div className="w-[90%] ml-4 mr-4 xl:w-1/2 flex mb-8 mt-2">
                          <label className="mb-2.5 block text-black dark:text-white text-sm  font-bold mt-2">
                            Search :
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            className="w-[40%] rounded-none border-[1.5px] text-sm ml-2  border-stroke bg-transparent py-0.5 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                    
                    <table className="w-[98%] ml-2 border-collapse mb-8 text-bodydark2 border-stroke dark:text-bodydark">
                        <thead className="text-xs">
                                <tr >
                                    <th className="border p-2">Customer</th>
                                    <th className="border p-2">Customer Email</th>
                                    <th className="border p-2">policy No.</th>
                                    <th className="border p-2">policy</th>
                                    <th className="border p-2">Registration No.</th>
                                    <th className="border p-2">Vehicle Year</th>
                                    <th className="border p-2">Vehicle Purpose</th>
                                    <th className="border p-2">Actual Amount</th>
                                    <th className="border p-2">Dis. Amount</th>
                                    <th className="border p-2">Start Dt.</th>
                                    <th className="border p-2">Exp. Dt.</th>
                                </tr>
                        </thead>
                        <tbody className="text-xs">
                          <tr className="">
                            
                            <td className="border p-2">Tajudeen Oni</td>
                            <td className="border p-2">Falilatoni@yahoo.co.uk</td>
                            <td className="border p-2">LA/E/MOT/OM/11-23/P80133</td>
                            <td className="border p-2">Renewal</td>
                            <td className="border p-2">SMK838EE</td>
                            <td className="border p-2">2005</td>
                            <td className="border p-2"></td>
                            <td className="border p-2">15000.00</td>
                            <td className="border p-2">9000.00</td>
                            <td className="border p-2">23-11-24</td>
                            <td className="border p-2">25-11-24</td>

                          </tr>
                          <tr className="">
                            
                          <td className="border p-2">Tajudeen Oni</td>
                            <td className="border p-2">Falilatoni@yahoo.co.uk</td>
                            <td className="border p-2">LA/E/MOT/OM/11-23/P80133</td>
                            <td className="border p-2">Renewal</td>
                            <td className="border p-2">SMK838EE</td>
                            <td className="border p-2">2005</td>
                            <td className="border p-2"></td>
                            <td className="border p-2">15000.00</td>
                            <td className="border p-2">9000.00</td>
                            <td className="border p-2">23-11-24</td>
                            <td className="border p-2">25-11-24</td>

                          </tr>
                          

                        </tbody>
                     </table>

                     <div className="mb-4.5 flex-col mt-2 justify-between xl:flex-row dark:boxdark text-sm">
                        <div className="flex justify-between">
                          <div className="ml-3 text-black dark:text-white">
                            Showing 1 to 4 of 4 entries
                          </div>
                          <div className="border-collapse border h-7.5 rounded border-stroke mr-3 dark:border-form-strokedark">
                            <button className="w-15 justify-center  rounded bg-white p-1 font-medium text-sm  mb-5 cursor-pointer text-bodydark dark:bg-form-input ">
                              <span className="text-sm">Previous</span>
                            </button>
                            <button className="w-10 justify-center rounded-none bg-meta-1 p-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                              <span className="text-sm">1</span>
                            </button>
                            <button className="w-15 justify-center rounded bg-white p-1 font-medium text-sm  mb-5 cursor-pointer text-bodydark dark:bg-form-input">
                              <span className="text-sm">Next</span>
                            </button>
                          </div>
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
