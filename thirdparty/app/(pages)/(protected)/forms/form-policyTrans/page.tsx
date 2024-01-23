"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxOne from "@/components/Checkboxes/CheckboxOne";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import Link from "next/link";
import { Metadata } from "next";
import { server } from "@/constants/server";
import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";


const FormLayout = () => {

const router = useRouter();
const searchParams = useSearchParams()
const id: string | null = searchParams.get('id')
const [thirdParty, setThirdParty] = useState(null);

const [formData, setFormData] = useState({
  transactionId: '',
  email: '',
  stateCode: '',
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

useEffect(() => {
  const fetchData = async () => {
    try {
      if (!id) return;

      const response = await axios.get(`${server}noor_takaful_service/api/generate_vehicle_certificate_external/${id}`);

      if (response && response.data && response.data.data) {
        setThirdParty(response.data.data);
      

        // Assuming you want to set participant data into the form fields
        setFormData({
          ...formData,
          name: response.data.data.name,
          // lastName: response.data.data.lastName,
          // otherName: response.data.data.otherName,
          title: response.data.data.title,
          stateCode: response.data.data.stateCode,
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


const formattedDate = new Date(thirdParty?.createdAt).toLocaleDateString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(`${server}noor_takaful_service/api/generate_vehicle_certificate_external/certificate/${id}`, formData, {
      withCredentials: true,
      timeout: 10000,
      headers: {
        "ngrok-skip-browser-warning": true,
        "Content-Type": "application/json",
      },
    });

    if (response.data && response.data.status_code === 0) {
      console.log('Certificate generated successfully!');
      
      // Extract pdfPath from the response
      const pdfPath = response.data.result[0].pdfPath;
    
      console.log("pdfPath:", pdfPath); // Log the actual pdfPath variable
      console.log(response.data.result[0].pdfPath);
      
      // Ensure that the PDF path is properly encoded
      const encodedPdfPath = encodeURIComponent(response.data.result[0].pdfPath);
      console.log("Encoded pdfPath:", encodedPdfPath);
    
      router.push(`/viewpdf?pdfPath=${encodedPdfPath}`);
      
    } else {
      console.error('Error generating certificate.');
    }
    
  } catch (error) {
    console.error('Error generating certificate:', error);
  }
};

  return (
    <>
      <Breadcrumb pageName=" Policy Transaction" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
      
        
        <div className="flex flex-col gap-9">
         
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Purchase Summary
              </h3>
            </div>
            <div className="p-5 ">
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                    <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                Customer Name :
                            </label>
                            
                            
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                     {thirdParty?.insuredName}
                    </label>
                   
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                    <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                               Customer Number :
                            </label>
                            
                            
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                    {thirdParty?.gsm}
                    </label>
                   
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                    <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                Product Name :
                            </label>
                            
                            
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                      Motor Policy
                    </label>
                   
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                    <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                Policy Amount :
                            </label>
                            
                            
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                      15000
                    </label>
                   
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                    <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                Start Cover Date :
                            </label>
                            
                            
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                    {formattedDate} 
                    </label>
                   
                  </div>
                </div>
                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
                    
                    <div className="w-full xl:w-1/2">
                            <label className="mb-2.5 block text-black dark:text-white font-bold">
                                Email :
                            </label>
                            
                            
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-2.5 block text-black dark:text-white font-bold">
                    {thirdParty?.email}
                    </label>
                   
                  </div>
                </div>
               <p className="text-muted well well-sm no-shadow mt-2">
                    
                    <div className="text-sm border border-body rounded-sm p-2 dark:bg-boxdark dark:bg-transparent bg-bodydark1 cursor-pointer bg-transparent">
                        <span className="text-primary font-bold"> DECLARATION</span>
                        <div>
                          By clicking the PAY NOW button I, {thirdParty?.insuredName} declare that to the best of my knowledge, the information supplied in this proposal form and as displayed above is true and complete. I understand that the cover is not effective until the acceptance of this proposal is confirmed and payment effected.
                        </div>
                    </div>
                    
               </p>
               <div className="text-lg mt-2 text-black dark:text-bodydark1">
                    Please Select Your Prefered Payment Type
               </div>
               <div className="mt-2">
                    <label className="flex">
                        <input type="radio" name="optionRadios" id="" value={"option1"}

                        />
                        <div className="ml-2 text-sm text-black dark:text-white">
                            Wallet Payment
                        </div>
                    </label>
               </div>
               <div className="mt-2">
                    <label className="flex">
                        <input type="radio" name="optionRadios" id="" value={"option1"}

                        />
                        <div className="ml-2 text-sm text-black dark:text-white">
                            Card Payment
                        </div>
                    </label>
               </div>

             
               <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm mt-4">
                
                <button className="flex w-full justify-center rounded bg-meta-1 p-3 font-medium text-gray">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>


                    <span className="ml-2">Back</span>
                </button>
                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                  Cancel Transaction
                </button>
                </div>
                <button className="flex w-full justify-center rounded bg-meta-3 p-3 font-medium text-gray " onClick={handleSubmit}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"  stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
                    <span className="ml-2">Generate Certificate</span>
                </button>
               
            </div>

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
