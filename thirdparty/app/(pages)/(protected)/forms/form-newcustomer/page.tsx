"use client"
import axios from 'axios';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Form Layout Page | Next.js E-commerce Dashboard Template",
//   description: "This is Form Layout page for NoorTakaful Next.js",
//   // other metadata
// };
import React, { useEffect, useState } from 'react';
import { server } from "@/constants/server";
import { useRouter } from 'next/navigation';




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
    email: '',
  });



  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await axios.get(`${server}titles`);
        const data = response.data;
        setTitles(data.data);
      } catch (error) {
        console.error("Error fetching titles:", error);
        // Handle error as needed
      }
    };

    fetchTitles();
  }, []);



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

  // Fetch LGAs when the selected state changes
  // useEffect(() => {
  //   const fetchLgas = async () => {
  //     try {
  //       if (selectedState) {
  //         const response = await axios.get(`/api/lgas?stateId=${selectedState}`);
  //         const data = response.data;
  //         setLgas(data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching LGAs:", error);
  //       // Handle error as needed
  //     }
  //   };

  //   fetchLgas();
  // }, [selectedState]);



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
  
  
  

  
  const handleTitleChange = (event) => {
    const selectedTitleId = event.target.value;
    setFormData({
      ...formData,
      title: selectedTitleId,
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
        router.push(`/forms/form-getPolicy?id=${response.data.data._id}`);
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
      <Breadcrumb pageName=" Third Party Customer" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Register Customer
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="p-6.5">
                  <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white font-bold">
                    Title <span className="text-meta-1">*</span>
                  </label>
                  <select
                  className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  value={formData.title} 
                  onChange={handleTitleChange}  
                >
                  <option value="">Select Title</option>
                  {Array.isArray(titles) &&
                    titles.map((title) => (
                      <option key={title._id.$oid} value={title.title_id}>
                        {title.title}
                      </option>
                    ))}
                </select>
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white font-bold">
                    First Name <span className="text-meta-1">*</span>
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
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white font-bold">
                    Last Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
                  <label className="mb-2.5 block text-black dark:text-white font-bold">
                    Other Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Other name"
                    name="otherName"
                    value={formData.otherName}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                </div>
                <div className="mb-4.5">
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
                <div className="mb-4.5">
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
                <div className="mb-4.5">
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
                <div className="mb-4.5">
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
                <div className="mb-4.5">
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

                {/* ... (more form fields) */}

                <button
                onClick={handleSubmit}
                  type="submit"
                  className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray"
                >
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

export default FormLayout;
