"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Link from "next/link";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "@/constants/server";
import { useRouter, useSearchParams } from "next/navigation";
// export const metadata: Metadata = {
//   title: "Form Layout Page | Next.js E-commerce Dashboard Template",
//   description: "This is Form Layout page for NoorTakaful Next.js",
//   // other metadata
// };

const FormLayout = () => {
  const router = useRouter();
  const searchParams = useSearchParams()
  const id: string | null = searchParams.get('id')
  const [participant, setParticipant] = useState(null); // State to store participant data
  const [voyageoriginations, setvoyageoriginations] = useState([]);
  const [voyagedestinations, setvoyagedestinations] = useState([]);
  const [marineFormData, setMarineFormData] = useState({
    transaction_id: '',
    email: '',
    negotiated_rate: '',
    invoice_value: '',
    transaction_currency_id: '',
    exchange_rate: '',
    marine_policy_type_id: '',
    per_id: '',
    packing_type_id: '',
    co_insurance: '',
    excess: '',
    lien_clause: '',
    voyage_origin_id: '',
    voyage_destination_id: '',
    clause_id: '',
    vessel_name: '',
    sum_assured_fx: '',
    contribution_lc: '',
    sum_assured_lc: '',
    proforma_invoice_no: '',
    lien: '',
    description_of_goods: '',
    rate: '',
    name: '',
    state: '',
    address: '',
    gsm: '',
    tin: '',
});

useEffect(() => {
  const fetchData = async () => {
    try {
      if (!id) return;

      const response = await axios.get(`${server}participants/${id}`);

      if (response && response.data && response.data.data) {
        setParticipant(response.data.data);

        // Assuming you want to set participant data into the form fields
        setMarineFormData({
          ...marineFormData,
          name: response.data.data.name,
          // lastName: response.data.data.lastName,
          // otherName: response.data.data.otherName,
          state: response.data.data.state,
          address: response.data.data.address,
          gsm: response.data.data.gsm,
          tin: response.data.data.tin,
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

// Fetch voyageoriginations on component mount
useEffect(() => {
  const fetchvoyageoriginations = async () => {
    try {
      const response = await axios.get(`${server}noor_takaful_service/api/voyage_origination`);
      const data = response.data;

      setvoyageoriginations(data.result);
    } catch (error) {
      console.error("Error fetching voyageoriginations:", error);
      // Handle error as needed
    }
  };

  fetchvoyageoriginations();
}, []);



// Fetch voyagedestinations on component mount
useEffect(() => {
  const fetchvoyagedestinations = async () => {
    try {
      const response = await axios.get(`${server}noor_takaful_service/api/voyage_destination`);
      const data = response.data;
      setvoyagedestinations(data.result);
    } catch (error) {
      console.error("Error fetching voyagedestinations:", error);
      // Handle error as needed
    }
  };

  fetchvoyagedestinations();
}, []);


const handleChange = (e: { target: { name: any; value: any; }; }) => {
  setMarineFormData({
    ...marineFormData,
    [e.target.name]: e.target.value,
  });
};

const handlevoyageoriginationsChange = (event) => {
  const selectedvoyageoriginationsId = event.target.value;
  setMarineFormData({
    ...marineFormData,
    voyage_origin_id: selectedvoyageoriginationsId,
  });
};

const handlevoyagedestinationsChange = (event) => {
  const selectedvoyagedestinationsId = event.target.value;
  setMarineFormData({
    ...marineFormData,
    voyage_destination_id: selectedvoyagedestinationsId,
  });
};

const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();

  try {
    const response = await axios.post(`${server}noor_takaful_service/api/generate_marine_certificate_external_post/frontend`, marineFormData, {
      withCredentials: true, // Include credentials (cookies) in the requests
      timeout: 10000,
      headers: {
        "ngrok-skip-browser-warning": true,
        "Content-Type": "application/json",
      },
    });

    if (response.data) {
      console.log('Customer created successfully!');
      router.push(`/forms/form-marinepolicyTrans?id=${response.data.result.data.id}`);
      
    } else {
      console.error('Error creating customer:');
    }
  } catch (error) {
    console.error('Error creating customer:', error);
  }
};
  return (
    <>
      <Breadcrumb pageName=" Get Marine Policy" />
     

      <div className="grid grid-cols-1 gap-9">
      
        <div className="flex flex-col w-full">
          {/* <!-- Contact Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark shadow">
              <h3 className="font-medium text-black dark:text-white">
                  {marineFormData.name}
              </h3>
            </div>
            <form action="#">
                  
                  
                    <div className="mb-4.5 flex flex-col gap-2 mt-3 xl:flex-row text-sm">
                        
                        <div className="w-[90%] ml-4   xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white font-bold">
                            Rate
                          </label>
                          <input
                            type="text"
                            placeholder="1.7"
                            disabled
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          
                            name="rate"
                            value={marineFormData.rate}
                            onChange={handleChange}/>
                        </div>
      
                        <div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white font-bold">
                            Negotiate Rate
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            name="negotiated_rate"
                            value={marineFormData.negotiated_rate}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="w-[90%] ml-4 mr-4 xl:w-1/2">
                          <label className="mb-2.5 block text-black dark:text-white font-bold">
                            Invoice Value <span className="text-meta-1">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                            name="invoice_value"
                            value={marineFormData.invoice_value}
                            onChange={handleChange}
                          />
                        </div>
                    </div>
                    <div className="mb-4.5 flex flex-col gap-2 mt-3 xl:flex-row text-sm">
                        
{/* Transaction Currency */}
<div className="w-[90%] ml-4 mr-4 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Transaction Currency <span className="text-meta-1">*</span>
  </label>
  <div className=" mb-2.5 block text-black dark:text-white ">
    <select
      className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      name="transaction_currency_id"
      value={marineFormData.transaction_currency_id}
      onChange={handleChange}
    >
      <option value="">Select Transaction Currency</option>
      <option value="NGN">Naira - NGN</option>
      <option value="USD">Dollar - USD </option>
      <option value="GBP">Pounds - GBP</option>
    </select>
  </div>
</div>

{/* Exchange Rate */}
<div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Exchange Rate <span className="text-meta-1">*</span>
  </label>
  <input
    type="text"
    placeholder=""
    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    name="exchange_rate"
    value={marineFormData.exchange_rate}
    onChange={handleChange}
  />
</div>

{/* Proforma Invoice No. */}
<div className="w-[90%] ml-4 mr-4 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Proforma Invoice No. <span className="text-meta-1">*</span>
  </label>
  <input
    type="text"
    placeholder=""
    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    name="proforma_invoice_no"
    value={marineFormData.proforma_invoice_no}
    onChange={handleChange}
  />
</div>
                    </div>
                    
                    <div className="mb-4.5 flex flex-col gap-6 xl:flex-row text-sm">
{/* Contribution (LC) */}
<div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Contribution (LC)
  </label>
  <input
    type="text"
    placeholder=""
    disabled
    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    name="contribution_lc"
    value={marineFormData.contribution_lc}
    onChange={handleChange}
  />
</div>

{/* Sum Assured (LC) */}
<div className="w-[90%] ml-4 xl:ml-3 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Sum Assured (LC)
  </label>
  <input
    type="text"
    placeholder=""
    disabled
    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    name="sum_assured_lc"
    value={marineFormData.sum_assured_lc}
    onChange={handleChange}
  />
</div>

{/* Sum Assured (FX) */}
<div className="w-[90%] ml-4 mr-4 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Sum Assured (FX)
  </label>
  <input
    type="text"
    placeholder=""
    disabled
    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    name="sum_assured_fx"
    value={marineFormData.sum_assured_fx}
    onChange={handleChange}
  />
</div>
                        
    
                        
                    </div>
                    
                    <div className="mb-4.5 flex flex-col gap-2 mt-3 xl:flex-row text-sm">
                        
                    {/* Marine Policy Type */}
                    <div className="w-[90%] ml-4 mr-4 xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white font-bold">
                        Marine Policy Type <span className="text-meta-1">*</span>
                      </label>
                      <div className=" mb-2.5 block text-black dark:text-white ">
                        <select
                          className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          name="marine_policy_type_id"
                          value={marineFormData.marine_policy_type_id}
                          onChange={handleChange}
                        >
                                    <option value="">Select Marine Policy Type</option>
                                    <option value="Open Cover">Open Cover</option>
                                    <option value="Single Transit">Single Transit</option>
                        </select>
                      </div>
                    </div>

                    {/* Per */}
                    <div className="w-[90%] ml-4 mr-4 xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white font-bold">
                        Per <span className="text-meta-1">*</span>
                      </label>
                      <div className=" mb-2.5 block text-black dark:text-white ">
                        <select
                          className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          name="per_id"
                          value={marineFormData.per_id}
                          onChange={handleChange}
                        >
                          <option value="Sea">Sea</option>
                          <option value="Air">Air</option>
                          {/* Add more options if needed */}
                        </select>
                      </div>
                    </div>

                    {/* Packing Type */}
                    <div className="w-[90%] ml-4 mr-4 xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white font-bold">
                        Packing Type <span className="text-meta-1">*</span>
                      </label>
                      <div className=" mb-2.5 block text-black dark:text-white ">
                        <select
                          className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          name="packing_type_id"
                          value={marineFormData.packing_type_id}
                          onChange={handleChange}
                        >
                          <option value="Containalized">Containalized</option>
                          <option value="Non Containalized">Non Containalized</option>
                          {/* Add more options if needed */}
                        </select>
                      </div>
                    </div>

                    {/* Co-Insurance */}
                    <div className="w-[90%] ml-4 mr-4 xl:w-1/2">
                      <label className="mb-2.5 block text-black dark:text-white font-bold">
                        Co-Insurance <span className="text-meta-1">*</span>
                      </label>
                      <div className=" mb-2.5 block text-black dark:text-white ">
                        <select
                          className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                          name="co_insurance"
                          value={marineFormData.co_insurance}
                          onChange={handleChange}
                        >
                          <option value="No">No</option>
                          <option value="Yes">Yes</option>
                          {/* Add more options if needed */}
                        </select>
                      </div>
                    </div>
                    </div>  
                    <div className="mb-4.5 flex flex-col gap-2 mt-3 xl:flex-row text-sm">
                        
{/* Lien */}
<div className="w-[90%] ml-4 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Lien
  </label>
  <input
    type="text"
    placeholder=""
    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    name="lien"
    value={marineFormData.lien}
    onChange={handleChange}
  />
</div>

{/* Excess */}
<div className="w-[90%] ml-4 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Excess
  </label>
  <input
    type="text"
    placeholder=""
    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    name="excess"
    value={marineFormData.excess}
    onChange={handleChange}
  />
</div>

{/* Voyage Origin(From) */}
<div className="w-[90%] ml-4 mr-4 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Voyage Origin(From) <span className="text-meta-1">*</span>
  </label>
  <div className=" mb-2.5 block text-black dark:text-white ">
  <select
                  className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  value={marineFormData.voyage_origin_id} 
                  onChange={handlevoyageoriginationsChange}  
                >
                  <option value="">Select voyageoriginations</option>
                  {Array.isArray(voyageoriginations) &&
                    voyageoriginations.map((voyageorigination) => (
                      <option key={voyageorigination._id} value={voyageorigination.voyage_id}>
                        {voyageorigination.location}
                      </option>
                    ))}
                </select>
  </div>
</div>

{/* Voyage Destination(To) */}
<div className="w-[90%] ml-4 mr-4 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Voyage Destination(To) <span className="text-meta-1">*</span>
  </label>
  <div className=" mb-2.5 block text-black dark:text-white ">
  <select
                  className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                  value={marineFormData.voyage_destination_id} 
                  onChange={handlevoyagedestinationsChange}  
                >
                  <option value="">Select voyagedestinations</option>
                  {Array.isArray(voyagedestinations) &&
                    voyagedestinations.map((voyagedestination) => (
                      <option key={voyagedestination._id} value={voyagedestination.voyage_id}>
                        {voyagedestination.location}
                      </option>
                    ))}
                </select>
  </div>
</div>
                    </div>  
                    
                    <div className="mb-4.5 flex flex-col gap-2 mt-3 xl:flex-row text-sm">
                        
{/* Clause */}
<div className="w-[90%] ml-4 mr-4 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Clause <span className="text-meta-1">*</span>
  </label>
  <div className=" mb-2.5 block text-black dark:text-white ">
    <select
      className="relative text-body z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      name="clause_id"
      value={marineFormData.clause_id}
      onChange={handleChange}
    >
      <option value="">Select Clause</option>
      <option value="ICC 'A'">ICC "A"</option>
      <option value="ICC 'C'">ICC "C"</option>
    </select>
  </div>
</div>

{/* Vessel Name */}
<div className="w-[90%] ml-4 mr-4 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Vessel Name <span className="text-meta-1">*</span>
  </label>
  <input
    type="text"
    placeholder=""
    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    name="vessel_name"
    value={marineFormData.vessel_name}
    onChange={handleChange}
  />
</div>

{/* Description Of Goods */}
<div className="w-[90%] ml-4 mr-4 xl:w-1/2">
  <label className="mb-2.5 block text-black dark:text-white font-bold">
    Description Of Goods <span className="text-meta-1">*</span>
  </label>
  <input
    type="text"
    placeholder=""
    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
    name="description_of_goods"
    value={marineFormData.description_of_goods}
    onChange={handleChange}
  />
</div>
                    </div>


                  <div className="mb-4.5 flex-col mt-2 justify-between xl:flex-row dark:boxdark text-sm">
                      <div className="flex justify-between">
                      <div className="ml-3 text-black">
                      <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray" onClick={handleSubmit}>
                          <span className="text-sm">Submit</span>
                        </button>
                      </div>
                      <div className="border-collapse border h-7.5 rounded border-stroke mr-3">
                     
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
