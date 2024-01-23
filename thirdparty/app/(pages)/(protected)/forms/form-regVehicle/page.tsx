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
      <Breadcrumb pageName=" Register New Vehicle" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white ">
                    Register Vehicle
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                    <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white font-bold">
                            First Name 
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>
                    <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                      Phone Number 
                    </label>
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                <div className="w-full xl:w-1/2">
                     <label className="mb-3 block font-bold text-black dark:text-white ">
                        Number Plate
                     </label>
                     <input
                        type="text"
                        placeholder="Enter Plate Number"
                        className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary dark:disabled:bg-black"
                     />
                   </div>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                      Engine Number 
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Engine No."
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                    <div className="w-full xl:w-1/2">
                        <label className="mb-2.5 block text-black dark:text-white font-bold">
                            Chasis Number 
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Chasis No."
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                    </div>

                    <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                              Vehicle Year
                            </label>
                            <div className=" mb-2.5 block text-black dark:text-white ">
                             <select className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                <option value="">Select Vehicle Year</option>
                                <option value="2000">2000</option>
                                <option value="2001">2001</option>
                                <option value="2002">2002</option>
                                <option value="2003">2003</option>
                                <option value="2004">2004</option>
                                <option value="2005">2005</option>
                                <option value="2006">2006</option>
                                <option value="2007">2007</option>
                                <option value="2008">2008</option>
                                <option value="2009">2009</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                             </select>
                            </div>
                            
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                Vehicle Make
                            </label>
                            <div className=" mb-2.5 block text-black dark:text-white ">
                                <select className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option value="">Select Vehicle Make</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Chevrolet">Chevrolet</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="BMW">BMW</option>
                                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                                    <option value="Audi">Audi</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                    <option value="Hyundai">Hyundai</option>
                                    <option value="Kia">Kia</option>
                                    <option value="Mazda">Mazda</option>
                                    <option value="Subaru">Subaru</option>
                                    <option value="Jeep">Jeep</option>
                                    <option value="Lexus">Lexus</option>
                                    <option value="Acura">Acura</option>
                                    <option value="Infiniti">Infiniti</option>
                                    <option value="Tesla">Tesla</option>
                                    <option value="Volvo">Volvo</option>
                                    <option value="Porsche">Porsche</option>
                                    <option value="Jaguar">Jaguar</option>
                                    <option value="Land Rover">Land Rover</option>
                                    <option value="Mitsubishi">Mitsubishi</option>
                                    <option value="Buick">Buick</option>
                                    <option value="Chrysler">Chrysler</option>
                                    <option value="Dodge">Dodge</option>
                                    <option value="Fiat">Fiat</option>
                                    <option value="GMC">GMC</option>
                                </select>
                            </div>
                            
                  </div>
                  <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                              Vehicle Model
                            </label>
                            <div className=" mb-2.5 block text-black dark:text-white ">
                                    <select className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                        <option value="">Select Vehicle Model</option>
                                        <option value="Camry">Camry</option>
  		                                <option value="Civic">Civic</option>
  		                                <option value="F-150">F-150</option>
 	 	                                <option value="Corolla">Corolla</option>
  		                                <option value="Accord">Accord</option>
  		                                <option value="Mustang">Mustang</option>
                                        <option value="Silverado">Silverado</option>
                                        <option value="RAV4">RAV4</option>
                                        <option value="3 Series">3 Series</option>
                                        <option value="A4">A4</option>
                                        <option value="Explorer">Explorer</option>
                                        <option value="CR-V">CR-V</option>
                                        <option value="Escape">Escape</option>
                                        <option value="Wrangler">Wrangler</option>
                                        <option value="Cayenne">Cayenne</option>
                                        <option value="Model 3">Model 3</option>
                                        <option value="XC90">XC90</option>
                                        <option value="911">911</option>
                                        <option value="Cherokee">Cherokee</option>
                                        <option value="Pilot">Pilot</option>
                                        <option value="Altima">Altima</option>
                                        <option value="Tahoe">Tahoe</option>
                                        <option value="Sienna">Sienna</option>
                                    </select>
                            </div>
                            
                  </div>
                </div>
                

                

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                Vehicle Category
                            </label>
                            <div className=" mb-2.5 block text-black dark:text-white ">
                                <select className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option value="">Select Vehicle Category</option>
                                    <option value="">Car</option>
                                    <option value="">SUV</option>
                                    <option value="">Bus</option>
                                    <option value="">Truck</option>
                                    <option value="">Tricycle</option>
                                    <option value="">Motorcycle</option>
                                </select>
                            </div>
                            
                  </div>
                  <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                Vehicle Color
                            </label>
                            <div className=" mb-2.5 block text-black dark:text-white ">
                                <select className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option value="">Select Color</option>
                                    <option value="Red">Red</option>
                                    <option value="Blue">Blue</option>
                                    <option value="Green">Green</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Black">Black</option>
                                    <option value="White">White</option>
                                    <option value="Silver">Silver</option>
                                    <option value="Gray">Gray</option>
                                    <option value="Brown">Brown</option>
                                    <option value="Orange">Orange</option>
                                    <option value="Purple">Purple</option>
                                    <option value="Pink">Pink</option>
                                    <option value="Gold">Gold</option>
                                    <option value="Beige">Beige</option>
                                    <option value="Turquoise">Turquoise</option>
                                    <option value="Copper">Copper</option>
                                    <option value="Magenta">Magenta</option>
                                    <option value="Lime">Lime</option>
                                    <option value="Teal">Teal</option>
                                    <option value="Maroon">Maroon</option>
                                    <option value="Navy">Navy</option>
                                    <option value="Olive">Olive</option>
                                    <option value="Periwinkle">Periwinkle</option>
                                </select>
                            </div>
                            
                  </div>

                  <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                Vehicle Purpose
                            </label>
                            <div className=" mb-2.5 block text-black dark:text-white ">
                                <select className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                                    <option value="">Select Vehicle Purpose</option>
                                    <option value="Toyota">Private</option>
                                    <option value="Honda">Commercial</option>
                                </select>
                            </div>
                            
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
            {/* <div className="flex flex-col gap-5.5 p-6.5">
              <CheckboxOne />
              <CheckboxTwo />
              <CheckboxThree />
              <CheckboxFour />
              <CheckboxFive />
            </div> */}
          </div>
          {/* <!-- Sign Up Form --> */}
          {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Sign Up Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <div className="mb-5.5">
                  <label className="mb-2.5 block text-black dark:text-white">
                    Re-type Password
                  </label>
                  <input
                    type="password"
                    placeholder="Re-enter password"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Sign Up
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FormLayout;
