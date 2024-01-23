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
      <Link 
                     href="/forms/form-marineCustomerReg"
                >
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
      </Link>
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
                  <div className="mb-4.5 flex-col mt-2 justify-between xl:flex-row dark:boxdark text-sm">
                      <label className="mt-3 ml-3"> Show 
                        <select name="example1_length" 
                          aria-controls="example1" 
                          className="custom-select custom-select-sm 
                          form-control w-15 h-10 form-control-sm 
                          outline-none border ml-2 rounded-md dark:boxdark"
                          >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                      </select> entries
                    </label>
                    <div className="w-30 md:w-1/2 flex float-right justify-end">
                    <label className=" mr-5 mt-3 text-sm md:text-md text-black dark:text-white ">
                      Search  
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="md:w-40 w-20 h-10 mr-3 rounded-none border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                  </div>
                  <div>
                      
                      <table className="w-[98%] ml-2 border-collapse mb-8 text-bodydark2 border-stroke dark:text-bodydark">
                        <thead className="shadow">
                          <tr className="">
                            <th className="border p-2 w-[20%] ">S/N</th>
                            <th className="border p-2 w-[40%] ">Name</th>
                            <th className="border p-2 w-[40%]">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="">
                            <td className="border p-2 w-1/4">1</td>
                            <Link 
                                href="/forms/form-getMarinePolicy"
                            >
                            <td className="border p-2" >Pet Association</td>
                            </Link>
                            <td className="border p-2">
                                <button className="w-30 justify-center rounded bg-meta-1 p-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      <span className="text-sm">Edit profile</span>
                                </button>
                                <button className="w-20 justify-center rounded bg-primary p-1 ml-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      Details
                                </button>
                            </td>
                          </tr>
                          <tr className="">
                            <td className="border p-2 w-1/4">2</td>
                            <td className="border p-2">Sunshine Brokers </td>
                            <td className="border p-2">
                                <button className="w-30 justify-center rounded bg-meta-1 p-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      <span className="text-sm">Edit profile</span>
                                </button>
                                <button className="w-20 justify-center rounded bg-primary p-1 ml-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      Details
                                </button>
                            </td>
                          </tr>
                          <tr className="">
                            <td className="border p-2 w-1/4">3</td>
                            <Link 
                                href="/forms/form-getMarinePolicy"
                            >
                                <td className="border p-2">Tripple Gee</td>
                            </Link>
                            <td className="border p-2">
                                <button className="w-30 justify-center rounded bg-meta-1 p-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      <span className="text-sm">Edit profile</span>
                                </button>
                                <button className="w-20 justify-center rounded bg-primary p-1 ml-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      Details
                                </button>
                            </td>
                          </tr>
                          <tr className="">
                            <td className="border p-2 w-1/4">4</td>
                            <td className="border p-2">Noor Takaful</td>
                            <td className="border p-2">
                            <button className="w-30 justify-center rounded bg-meta-1 p-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      <span className="text-sm">Edit profile</span>
                                </button>
                                <button className="w-20 justify-center rounded bg-primary p-1 ml-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                                      Details
                                </button>
                            </td>
                          </tr>
                          

                        </tbody>
                     </table>

                  </div>
                  <div className="mb-4.5 flex-col mt-2 justify-between xl:flex-row dark:boxdark text-sm">
                      <div className="flex justify-between">
                      <div className="ml-3 text-black">
                          Showing 1 to 4 of 4 entries
                      </div>
                      <div className="border-collapse border h-7.5 rounded border-stroke mr-3">
                        <button className="w-15 justify-center  rounded bg-white p-1 font-medium text-sm  mb-5 cursor-pointer text-bodydark ">
                          <span className="text-sm">Previous</span>
                        </button>
                        <button className="w-10 justify-center rounded-none bg-meta-1 p-1 font-medium text-sm  mb-5 cursor-pointer text-gray">
                          <span className="text-sm">1</span>
                        </button>
                        <button className="w-15 justify-center rounded bg-white p-1 font-medium text-sm  mb-5 cursor-pointer text-bodydark ">
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
