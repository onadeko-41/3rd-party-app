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

      <div className="grid grid-cols-1 gap-9 md:grid-cols-1">
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

              
              <table className="w-[98%] ml-2 border-collapse mb-8 text-bodydark2 border-stroke dark:text-bodydark">
                        <thead className="shadow">
                          <tr className="">
                            <th className="border p-2 w-[20%] ">Name</th>
                            <th className="border p-2 w-[40%] ">Phone Number</th>
                            <th className="border p-2 w-[40%]">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="">
                            <td className="border p-2 w-1/4">Mr. Kolawole Jimoh</td>
                            <td className="border p-2">07056281577</td>
                            <td className="border p-2">
                                <button className="w-30 justify-center rounded bg-meta-1 p-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      <span className="text-sm">View Details</span>
                                </button>
                                <button className="w-30 justify-center rounded bg-primary p-1 ml-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      Add Vehicle
                                </button>
                            </td>
                          </tr>
                          <tr className="">
                            <td className="border p-2 w-1/4">Mr. Kolawole Jimoh</td>
                            <td className="border p-2">07056281577</td>
                            <td className="border p-2">
                                <button className="w-30 justify-center rounded bg-meta-1 p-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      <span className="text-sm">View Details</span>
                                </button>
                                <button className="w-30 justify-center rounded bg-primary p-1 ml-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      Add Vehicle
                                </button>
                            </td>
                          </tr>

                        </tbody>
                     </table>


              {/* <div>
                <label className="mb-3 block text-black dark:text-white">
                  Active Input
                </label>
                <input
                  type="text"
                  placeholder="Active Input"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div> */}

              {/* <div>
                <label className="mb-3 block font-medium text-black dark:text-white">
                  Disabled label
                </label>
                <input
                  type="text"
                  placeholder="Disabled label"
                  disabled
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
                />
              </div> */}
            </div>
          </div>

          {/* <!-- Toggle switch input --> */}
          {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Toggle switch input
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <SwitcherOne />
              <SwitcherTwo />
              <SwitcherThree />
              <SwitcherFour />
            </div>
          </div> */}

          {/* <!-- Time and date --> */}
          {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Time and date
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Date picker
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Select date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="custom-input-date custom-input-date-2 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </div> */}

          {/* <!-- File upload --> */}
          {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                File upload
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                />
              </div>
            </div>
          </div> */}
        </div>

         
      </div>
    </>
  );
};

export default FormElements;
