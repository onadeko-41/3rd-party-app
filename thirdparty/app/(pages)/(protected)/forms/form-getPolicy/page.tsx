"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";
import axios from "axios";
import { server } from "@/constants/server";
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from "next/navigation";

const FormLayout = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const id: string | null = searchParams.get('id')
  const [participant, setParticipant] = useState(null); // State to store participant data
  const [vehicleColorIds, setVehicleColorIds] = useState([]);  
  const [vehiclePurposeIds, setVehiclePurposeIds] = useState([]);  
  const [vehicleMakeIds, setVehicleMakeIds] = useState([]);
const [selectedvehicleMakeId, setSelectedVehicleMakeId] = useState("");
const [vehicleModelIds, setVehicleModelIds] = useState([]);

  const [formData, setFormData] = useState({
    transactionId: '',
    email: '',
    state: '',
    numberPlate: '',
    insurancePolicyId: '',
    vehiclePurposeId: '',
    vehicleModelId: '',
    vehicleMakeId: '',
    vehicleModeId: '',
    vehicleColorId: '',
    insuranceTypeId: '',
    name: '',
    address: '',
    engineNo: '',
    chassisNo: '',
    engineCapacity: '',
    yearOfMake: '',
    vehicleCategoryId: '',
    insuranceTypeCode: '',
    sumCover: '',
    rate: '',
    certificateNo: '',
    gsm: '',
    lga: '',
    title: '',
});



// Fetch vehicleMakeIds on component mount
useEffect(() => {
  const fetchvehicleMakeIds = async () => {
    try {
      const response = await axios.get(`${server}noor_takaful_service/api/vehicle_make`);
      const data = response.data;
      setVehicleMakeIds(data.data);
    } catch (error) {
      console.error("Error fetching vehicleMakeIds:", error);
      // Handle error as needed
    }
  };

  fetchvehicleMakeIds();
}, []);

useEffect(() => {
  const fetchvehicleColorIds = async () => {
    try {
      const response = await axios.get(`${server}noor_takaful_service/api/vehicle_color`);
      const data = response.data;
      setVehicleColorIds(data.data);
    } catch (error) {
      console.error("Error fetching vehicleColorIds:", error);
      // Handle error as needed
    }
  };

  fetchvehicleColorIds();
}, []);



useEffect(() => {
    const fetchvehiclePurposeIds = async () => {
      try {
        const response = await axios.get(`${server}noor_takaful_service/api/vehicle_purposes`);
        const data = response.data;
        setVehiclePurposeIds(data.data);
      } catch (error) {
        console.error("Error fetching vehiclePurposeIds:", error);
        // Handle error as needed
      }
    };

    fetchvehiclePurposeIds();
  }, []);





  const handleVehicleMakeIdChange = async (event) => {
      const selectedVehicleMakeIdId = event.target.value;
    
      // Fetch vehicleModelIds based on the selected VehicleMakeId_id
      try {
        const response = await axios.get(`${server}noor_takaful_service/api/vehicle_models/vehicleMake/${selectedVehicleMakeIdId}`);
        const data = response.data;
        console.log("vehicleModelIds data:", data.result.vehicleModels);
    
        // Update the formData VehicleMakeId with the selected VehicleMakeId_id and vehicleModelIds array
  
  setFormData({
    ...formData,
    vehicleMakeId: selectedVehicleMakeIdId,
    // vehicleModelId: Array.isArray(data.result.vehicleModels) ? data.result.vehicleModels : [data.result.vehicleModels],
  });
  
  // Update the vehicleModelIds VehicleMakeId
  setVehicleModelIds(data.result.vehicleModels);
  
        console.log("FormData after update:", formData);
        console.log("vehicleModelIds after update:", vehicleModelIds);
      } catch (error) {
        console.error("Error fetching vehicleModelIds:", error);
        // Handle error as needed
      }
    };
    
    
    
    const handleVehicleModelIdChange = (event) => {
      const selectedvehicleModelIdId = event.target.value;
    
      // Update the formData VehicleMakeId with the selected vehicleModelId ID
      setFormData({
        ...formData,
        vehicleModelId: selectedvehicleModelIdId,
      });
    };
    
    const handleYearOfMakeChange = (event) => {
      const selectedYearOfMake = event.target.value;
    
      // Update the formData VehicleMakeId with the selected vehicleModelId ID
      setFormData({
        ...formData,
        yearOfMake: selectedYearOfMake,
      });
    };
    


    const handleVehiclePurposeIdChange = (event) => {
      const selectedvehiclePurposeIdId = event.target.value;
    
      // Update the formData state with the selected vehiclePurposeId ID
      setFormData({
        ...formData,
        vehiclePurposeId: selectedvehiclePurposeIdId,
      });
    };
    
  
    const handleVehicleColorIdChange = (event) => {
      const selectedvehicleColorIdId = event.target.value;
      setFormData({
        ...formData,
        vehicleColorId: selectedvehicleColorIdId,
      });
    };

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) return;
  
        const response = await axios.get(`${server}participants/${id}`);
  
        if (response && response.data && response.data.data) {
          setParticipant(response.data.data);
  
          // Assuming you want to set participant data into the form fields
          setFormData({
            ...formData,
            name: response.data.data.name,
            // lastName: response.data.data.lastName,
            // otherName: response.data.data.otherName,
            title: response.data.data.title,
            state: response.data.data.state,
            lga: response.data.data.lga,
            address: response.data.data.address,
            gsm: response.data.data.gsm,
            email: response.data.data.email,
          });
  
        } else {
          // Handle error case here
          console.error("Error fetching participant info");
        }
      } catch (error) {
        console.error("Error fetching participant info", error);
      }
    };
  
    fetchData(); // Call the function to fetch data
  
  }, [id]);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${server}noor_takaful_service/api/generate_vehicle_certificate_external/frontend`, formData, {
        withCredentials: true, // Include credentials (cookies) in the requests
        timeout: 10000,
        headers: {
          "ngrok-skip-browser-warning": true,
          "Content-Type": "application/json",
        },
      });

      if (response.data) {
        console.log('Customer created successfully!');
        router.push(`/forms/form-policyTrans?id=${response.data.result.data.id}`);
        
      } else {
        console.error('Error creating customer:');
      }
    } catch (error) {
      console.error('Error creating customer:', error);
    }
  };
  return (
    <>
      <Breadcrumb pageName=" Transaction Information Details" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      
        <div className="flex flex-col gap-9">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white ">
                    3rd Party Motor Insurance
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                      Registration Number 
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your number Plate"
                    name="numberPlate"
                    value={formData.numberPlate}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  </div> 
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                      Engine Number
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your engine Plate"
                    name="engineNo"
                    value={formData.engineNo}
                    onChange={handleInputChange}
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
                    placeholder="Enter your chasis number"
                    name="chassisNo"
                    value={formData.chassisNo}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  />
                  </div>

                  <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white font-bold">
                    VehicleMakeId <span className="text-meta-1">*</span>
                  </label>
              <select
                      className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                      name="VehicleMakeId"
                      value={formData.vehicleMakeId}
                      onChange={handleVehicleMakeIdChange}
                    >
                      <option value="">Select VehicleMakeId</option>
                      {Array.isArray(vehicleMakeIds) && vehicleMakeIds.map((vehicleMakeId) => (
                        <option key={vehicleMakeId._id} value={vehicleMakeId.vehicle_make_id}>
                          {vehicleMakeId.make}
                        </option>
                      ))}
                    </select>

     
                </div>
                </div>
                
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                <div className="w-full xl:w-1/2">
                <label className="mb-2.5 block text-black dark:text-white font-bold">
                Vehicle Model <span className="text-meta-1">*</span>
                  </label>
                  <select
  className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
  name="VehicleModelId"
  value={formData.vehicleModelId}
  onChange={handleVehicleModelIdChange}  // Use the new event handler for local government changes
>
<option value="">Select vehicle Model</option>
    {Array.isArray(vehicleModelIds) && vehicleModelIds.map((vehicleModelId) => (
      <option key={vehicleModelId.vehicleModelId_id} value={vehicleModelId.vehicle_model_id}>
        {vehicleModelId.model}
      </option>
    ))}

</select>




                </div>

                  <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                              Vehicle Year
                            </label>
                            <div className=" mb-2.5 block text-black dark:text-white ">
                             <select className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                              name="yearOfMake"
                              value={formData.yearOfMake}
                              onChange={handleYearOfMakeChange}
                             >
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
                    vehicleColorId <span className="text-meta-1">*</span>
                  </label>
                  <select
                  className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  value={formData.vehicleColorId} 
                  onChange={handleVehicleColorIdChange}  
                >
                  <option value="">Select vehicleColorId</option>
                  {Array.isArray(vehicleColorIds) &&
                    vehicleColorIds.map((vehicleColorId) => (
                      <option key={vehicleColorId._id} value={vehicleColorId.vehicle_color_id}>
                        {vehicleColorId.color}
                      </option>
                    ))}
                </select>
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white font-bold">
                    vehiclePurposeId <span className="text-meta-1">*</span>
                  </label>
                  <select
                  className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  value={formData.vehiclePurposeId} 
                  onChange={handleVehiclePurposeIdChange}  
                >
                  <option value="">Select vehiclePurposeId</option>
                  {Array.isArray(vehiclePurposeIds) &&
                    vehiclePurposeIds.map((vehiclePurposeId) => (
                      <option key={vehiclePurposeId._id.$oid} value={vehiclePurposeId.vehicle_purpose_id}>
                        {vehiclePurposeId.purpose}
                      </option>
                    ))}
                </select>
                </div>
                </div>
                
                <div className="mb-4">
                    Customer Info.
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                    InsuredName
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    readOnly
                  />
                  </div> 
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                      Phone Number
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your number"
                    name="lastName"
                    value={formData.gsm}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    readOnly
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                     Email Address
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    readOnly
                    />
                  </div> 
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                      Address
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your address"
                    name="lastName"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    readOnly
                    />
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                State
                            </label>
                            <div className=" mb-2.5 block text-black dark:text-white ">
                            <input
                    type="text"
                    placeholder="Enter your stateCode."
                    name="stateCode"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    readOnly
                    />
                            </div>
                            
                  </div>
                  <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                Local Govt. Area
                            </label>
                            <div className=" mb-2.5 block text-black dark:text-white ">
                            <input
                    type="text"
                    placeholder="Enter your local govt."
                    name="lastName"
                    value={formData.lga}
                    onChange={handleInputChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    readOnly
                    />
                            </div>
                            
                  </div>
                </div>
               

                

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray" onClick={handleSubmit}>
                  
                  Next
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
