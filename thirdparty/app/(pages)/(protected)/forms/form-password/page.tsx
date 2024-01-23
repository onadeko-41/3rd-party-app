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
      <Breadcrumb pageName=" Change Password" />

      <div className="grid grid-cols-1 gap-9">
      
        <div className="flex flex-col w-full">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white ">
                   Change Password
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                
              <div className="mb-4.5 text-sm">
                  <label className="mb-2.5 block text-black dark:text-white font-bold">
                    Password
                  </label>
                  <input
                    type="text"
                    placeholder="Enter New Password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5 text-sm">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                    Confirm Password
                  </label>
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                
                
                

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </>
  );
};

export default FormLayout;
