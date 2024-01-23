import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Form Elements Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Elements page for NoorTakaful Next.js",
  // other metadata
};

const FormElements = () => {
  return (
    <>
      <Breadcrumb pageName="Search Third Party Customer" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Search Customer
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white font-bold text-sm">
                  Search Customer Phone Number <span className="text-primary text-xs">(use new customer link to add new customer) </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Phonenumber"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                
              </div>
              <Link
                href= "/"
              >
                <div className="mb-5">
                    <input
                        type="submit"
                        value="Search"
                        className="w-30  cursor-pointer rounded-lg border border-primary bg-primary py-1 text-white transition hover:bg-opacity-90"
                     />
                 </div>
              </Link>
              

              

              
            </div>
          </div>

        </div>

        <div className="flex flex-col gap-9">
          

          {/* <!-- Checkbox and radio --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Folders
              </h3>
            </div>
            <div className="p-5 ">
                <Link 
                     href="/forms/form-service"
                >
                  <div className="flex font-satoshi text-boxdark dark:text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6 ml-3 text-boxdark dark:text-white">
                            <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M12 6v12m6-6H6" 
                            />
                        </svg>
                        <span className="ml-4 font-satoshi">
                          Get Policy
                        </span>

                 </div>

                </Link>
                <Link 
                     href="/forms/form-service"
                >
                  <div className="flex font-satoshi text-boxdark dark:text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6 ml-3 text-boxdark dark:text-white">
                            <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M12 6v12m6-6H6" 
                            />
                        </svg>
                        <span className="ml-4 font-satoshi">
                            Policy Verification
                        </span>

                 </div>

                </Link>
                <Link 
                     href="/forms/form-newcustomer"
                >
                  <div className="flex font-satoshi text-boxdark dark:text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6 ml-3 text-boxdark dark:text-white">
                            <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M12 6v12m6-6H6" 
                            />
                        </svg>
                        <span className="ml-4 font-satoshi">
                          New Customer
                        </span>

                 </div>

                </Link>
                <Link 
                     href="/forms/form-service"
                >
                  <div className="flex font-satoshi text-boxdark dark:text-white mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6 ml-3 text-boxdark dark:text-white">
                            <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M12 6v12m6-6H6" 
                            />
                        </svg>
                        <span className="ml-4 font-satoshi">
                          Policy
                        </span>

                 </div>

                </Link>
               
            </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default FormElements;
