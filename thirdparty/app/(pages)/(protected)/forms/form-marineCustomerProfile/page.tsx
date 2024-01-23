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
      <Breadcrumb pageName=" Marine Customer List" />
      <button className="flex w-50 justify-center rounded bg-primary p-2 font-medium text-sm  mb-5 cursor-pointer text-gray">
      <svg xmlns="http://www.w3.org/2000/svg" 
                            fill="none" viewBox="0 0 24 24" 
                            stroke-width="1.5" 
                            stroke="currentColor" 
                            className="w-6 h-6 ml text-white dark:text-white">
                            <path stroke-linecap="round" 
                                stroke-linejoin="round" 
                                d="M12 6v12m6-6H6" 
                            />
                        </svg>

           <div className="mt-1">
                New Marine Customer
           </div>
      </button>

      <div className="grid grid-cols-1 gap-9">
      
        <div className="flex flex-col w-full">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white ">
                   Customer list
              </h3>
            </div>
            <form action="#">
                 
                  <div>
                      
                      <table className="w-[98%] ml-2 border-collapse mb-8 text-bodydark2 border-stroke dark:text-bodydark">
                       
                        <tbody>
                          <tr className="">
                            
                            <td className="border p-2">Company Name</td>
                            <td className="border p-2">
                               Pet Association
                            </td>
                          </tr>
                          <tr className="">
                           
                            <td className="border p-2">Company Phone Number</td>
                            <td className="border p-2">
                               09087191445
                            </td>
                          </tr>
                          <tr className="">
                            
                            <td className="border p-2">Email</td>
                            <td className="border p-2">
                               info@noortakaful.com
                            </td>
                          </tr>
                          <tr className="">
                           
                            <td className="border p-2">Address</td>
                            <td className="border p-2">
                                Jakande Estate, Oke-Afa, Isolo,Lagos
                            </td>
                          </tr>
                          <tr className="">
                           
                            <td className="border p-2">Contact Person</td>
                            <td className="border p-2">
                               Wale
                            </td>
                          </tr>
                          <tr className="">
                           
                            <td className="border p-2">Contact Person Number</td>
                            <td className="border p-2">
                                08023147856
                            </td>
                          </tr>
                          <tr className="">
                           
                            <td className="border p-2">Contact Person Address</td>
                            <td className="border p-2">
                               AGM
                            </td>
                          </tr>
                          

                        </tbody>
                     </table>

                  </div>
                  
            </form>
          </div>
        </div>

      </div>
    </>
  );
};

export default FormLayout;
