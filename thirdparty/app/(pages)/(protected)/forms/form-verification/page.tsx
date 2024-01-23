import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
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
      <Breadcrumb pageName=" Policy Verification" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white ">
                    Policy Verification
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                      Number Plate
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Plate Number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                      Policy Number 
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Policy Number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
                
                
                

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-9">
         
         <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
         <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
           <h3 className="font-medium text-black dark:text-white">
             Folders
           </h3>
         </div>
         <div className="p-5 ">
             <Link 
                  href="/"
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
                  href="/"
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
                  href="/"
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
                  href="/"
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
                       Policy Reprint
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

export default FormLayout;
