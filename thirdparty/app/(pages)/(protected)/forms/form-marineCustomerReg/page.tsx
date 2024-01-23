"use client"
import axios from 'axios';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";
import React, { useEffect, useState } from 'react';
import { server } from "@/constants/server";
import { useRouter } from 'next/navigation';
// export const metadata: Metadata = {
//   title: "Form Layout Page | Next.js E-commerce Dashboard Template",
//   description: "This is Form Layout page for NoorTakaful Next.js",
//   // other metadata
// };



const FormLayout = () => {


  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [titles, setTitles] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [lgas, setLgas] = useState([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    otherName: '',
    title: '',
    state: '',
    lga: '',
    address: '',
    gsm: '',
    tin: '',
    email: '',
    contactGsm: '',
    designation: '',
  });

  // Fetch states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(`${server}noor_takaful_service/api/states`);
        const data = response.data;
        setStates(data.data);
      } catch (error) {
        console.error("Error fetching states:", error);
        // Handle error as needed
      }
    };

    fetchStates();
  }, []);


  const handleStateChange = async (event) => {
    const selectedStateId = event.target.value;
  
    // Fetch LGAs based on the selected state_id
    try {
      const response = await axios.get(`${server}noor_takaful_service/api/local_govt/state/${selectedStateId}`);
      const data = response.data;
      console.log("LGAs data:", data.result.localGovts);
  
      // Update the formData state with the selected state_id and LGAs array

setFormData({
  ...formData,
  state: selectedStateId,
  lga: Array.isArray(data.result.localGovts) ? data.result.localGovts : [data.result.localGovts],
});

// Update the lgas state
setLgas(data.result.localGovts);

      console.log("FormData after update:", formData);
      console.log("LGAs after update:", lgas);
    } catch (error) {
      console.error("Error fetching LGAs:", error);
      // Handle error as needed
    }
  };
  
  
  
  const handleLgaChange = (event) => {
    const selectedLgaId = event.target.value;
  
    // Update the formData state with the selected LGA ID
    setFormData({
      ...formData,
      lga: selectedLgaId,
    });
  };
  

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${server}participants`, formData, {
        withCredentials: true, // Include credentials (cookies) in the requests
        timeout: 10000,
        headers: {
          "ngrok-skip-browser-warning": true,
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        console.log(response.data, "ooooooooo")
        router.push(`/forms/form-getMarinePolicy?id=${response.data.data._id}`);
        setLoading(false);

        console.log('Customer created successfully!');
      } else {
        const errorData = await response.json();
        console.error('Error creating customer:', errorData.error);
      }
    } catch (error) {
      console.error('Error creating customer:', error.message);
    }

    
  };



  return (
    <>
      <Breadcrumb pageName="  Marine Customer Registration" />
     

      <div className="grid grid-cols-1 gap-9">
      
        <div className="flex flex-col w-full">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark shadow">
              <h3 className="font-medium text-black dark:text-white">
                   Marine Customer Upadate Details
              </h3>
            </div>
            <form action="#">
                  
                  
                    <div className="mb-4.5 flex flex-col gap-2 mt-3 xl:flex-row text-sm">
                        
                        <div className="w-[90%] ml-4   xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white font-bold">
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="Pet Association"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
      
                        <div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white font-bold">
                            TIN
                          </label>
                          <input
                            type="text"
                            placeholder="TIN0012334"
                            name="tin"
                            value={formData.tin}
                            onChange={handleInputChange}
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white font-bold">
                    Phone Number <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your gsm"
                    name="gsm"
                    value={formData.gsm}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                    </div>
                    <div className="mb-4.5 flex flex-col gap-2 mt-3 xl:flex-row text-sm">
                        
                    <div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white font-bold">
                    Email <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
      
                        <div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white font-bold">
                            Rate
                          </label>
                          <input
                            type="text"
                            placeholder="1.7"
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>
                        <div className="w-[90%] ml-4 mr-4 xl:w-1/2">
                              
                  </div>
                    </div>


 
                    <div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white font-bold">
                    State <span className="text-meta-1">*</span>
                  </label>
              <select
                      className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      name="state"
                      value={formData.state}
                      onChange={handleStateChange}
                    >
                      <option value="">Select State</option>
                      {Array.isArray(states) && states.map((state) => (
                        <option key={state._id} value={state.state_id}>
                          {state.state}
                        </option>
                      ))}
                    </select>

     
                </div>
                <div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white font-bold">
                Local Govt. Area <span className="text-meta-1">*</span>
                  </label>
                  <select
  className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
  name="lga"
  value={formData.lga}
  onChange={handleLgaChange}  // Use the new event handler for local government changes
>
<option value="">Select Local Govt. Area</option>
    {Array.isArray(lgas) && lgas.map((lga) => (
      <option key={lga.lga_id} value={lga.lga_id}>
        {lga.local_name}
      </option>
    ))}

</select>




                </div>
                <div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white font-bold">
                    Address <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                    
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                        <div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white font-bold">
                            State Code
                          </label>
                          <input
                            type="text"
                            placeholder="LA"
                            disabled
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          />
                        </div>      
                        
                    </div>
                    

                    
                    
                    <div className=" border-b border-stroke py-4 px-6.5 dark:border-strokedark shadow">
                        <span className="mb-4 font-bold text-black dark:text-white text-2xl ml-4">
                            Customer Details
                        </span>
                    </div>
                    <div className="mb-4.5 flex flex-col gap-2 mt-3 xl:flex-row text-sm">
                        
                        <div className="w-[90%] ml-4   xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white font-bold">
                            Name
                          </label>
                          <input
                          type="text"
                          placeholder="Enter your first name"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        </div>
      
                        <div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white font-bold">
                            Designation
                          </label>
                          <input
                          type="text"
                          placeholder="Enter your first name"
                          name="designation"
                          value={formData.designation}
                          onChange={handleInputChange}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        </div>
                        <div className="w-[90%] ml-4 mr-4 xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white font-bold">
                            Phone Number
                          </label>
                          <input
                          type="text"
                          placeholder="Enter your first name"
                          name="contactGsm"
                          value={formData.contactGsm}
                          onChange={handleInputChange}
                          className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        />
                        </div>
                    </div>


                  <div className="mb-4.5 flex-col mt-2 justify-between xl:flex-row dark:boxdark text-sm">
                      <div className="flex justify-between">
                      <div className="ml-3 text-black">
                      <button
                onClick={handleSubmit}
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                >
                  Submit
                </button>
                      </div>
                      <div className="border-collapse border h-7.5 rounded border-stroke mr-3">
                      <button className="w-40 justify-center rounded bg-meta-5 p-2 font-medium text-sm  mb-5 cursor-pointer text-gray">
                          <span className="text-sm">List Marine Customer</span>
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
