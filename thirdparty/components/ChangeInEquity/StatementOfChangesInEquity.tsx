// components/StatementOfFinancialPosition.tsx
import React from 'react';


interface StatementProps {
  date: string;
  assets: Record<string, number>;
  liabilities: Record<string, number>;
  equity: Record<string, number>;
}


const StatementOfChangesInEquity: React.FC<StatementProps> = ({ date, assets, liabilities, equity }) => {
  return (
    <>
    <div className="p-6.5 bg-white dark:bg-form-input">
    <div className='mt-20 font-bold'>
          <h2 className='mt-5'>NOOR TAKAFUL INSURANCE LIMITED</h2>
            <h3>FINANCIAL STATEMENTS FOR THE YEAR ENDED 31 DECEMBER 2022</h3>

            <h3>
              STATEMENT OF CHANGES IN EQUITY
            </h3>
    </div>

      <table>
      
      <thead>
      
        {/* <tr>
          <th></th>
          <th>Share Capital</th>
          <th>Share Premium</th>
          <th>Contingency Reserve</th>
          <th>Retained Earning</th>
          <th>Fair Value Reserve</th>
          <th>Total</th>
        </tr> */}
        <tr>
      <th className=" w-[10] text-center "></th>
      <th className="border-slate-600 w-[10%] text-center">Share Capital</th>
      <th className="border-slate-600 w-[10%] text-center">Share Premium</th>
      <th className="border-slate-600 w-[15%] text-center ">Contingency Reserve</th>
      <th className="border-slate-600 w-[10%] text-center">Retained Earning</th>
      <th className=" border-slate-600 text-center">Fair Value Reserve</th>
      <th className=" border-slate-600 text-center">Total</th>
    </tr>
      </thead>
      <tbody>
      <tr>
          <td className="  text-center"></td>
          <td className="  text-center">Note 21b</td>
          <td className="  text-center">Note 21c</td>
          <td className="  text-center">Note 21d</td>
          <td className="  text-center">Note 21e</td>
          <td className="  text-center">Note 21f</td>
          <td className="  text-center"></td>
          

        </tr>
      <tr>
          
          <td className="  text-center"></td>
          <td className="  text-center">N'000</td>
          <td className="  text-center">N'000</td>
          <td className="  text-center">N'000</td>
          <td className="  text-center">N'000</td>
          <td className="  text-center">N'000</td>
          

        </tr>
        <tr>
          <td className="  text-left font-bold mb-3">Attributable to shareholders' fund:</td>
        </tr>
        <tr>
          <td className="  text-left">At 1 January 2022</td>
          <td className="  text-center">604,584</td>
          <td className="  text-center">179,587</td>
          <td className="  text-center">95,329</td>
          <td className="  text-center">376,333</td>
          <td className="  text-center">7,918</td>
          <td className="  text-center">1,263,752</td>
          

        </tr>
        <tr>
          <td className="  text-left">Issue of shares during the year</td>
          <td className="  text-center">176,179</td>
          <td className="  text-center"> 352,357 </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> 528,536 </td>
        </tr>
        
        <tr>
          <td className="  text-left">Profit for the year</td>
          <td className="  text-center">-</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">318,009</td>
          <td className="  text-center"> - </td>
          <td className="  text-center">318,009</td>
          
        </tr>
        <tr>
          <td className="  text-left">Attributable to Takaful funds:</td>
         
          
        </tr>
       
        <tr>
          <td className="  text-left"> At 1 January 2022</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
        </tr>
        <tr>
          <td className="  text-left">Transfers from profit or loss-</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
        </tr>
        
        <tr>
          <td className="  text-left">Family Takaful </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">171,868</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> 171,868 </td>
        </tr>
        <tr>
          <td className="  text-left">General Takaful </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">(11,829)</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> (11,829)</td>
        </tr>
        <tr>
          <td className="  text-left">Transfer from OCI </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">33,999</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> 33,999</td>
        </tr>
        <tr>
          <td className="  text-left">Transfer to contingency </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> 79,194</td>
          <td className="  text-center">(79,194)</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
        </tr>
        <tr className='mb-4 font-bold'>
          <td className="  text-left">At 31 December 2022 </td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 780,763 </td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 531,944 </td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 174,523</td>
          <td className="text-center border-b border-t border-Stroke border-solid">775!188</td>
          <td className="text-center border-b border-t border-Stroke border-solid">27,420 </td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 2,289,838 </td>
        </tr>
      </tbody>
      <tr>
        <td className=" block text-bodydark text-center mt-4.5  font-bold">
              
        </td>
    </tr>
      <tbody>
      
        <tr className='mt-5'>
          <td className="  text-left font-bold">Attributable to shareholders' fund:</td>
        </tr>
        <tr>
          <td className="  text-left">At 1 January 2021</td>
          <td className="  text-center">604,584</td>
          <td className="  text-center">179,587</td>
          <td className="  text-center">95,329</td>
          <td className="  text-center">376,333</td>
          <td className="  text-center">7,918</td>
          <td className="  text-center">1,263,752</td>
          

        </tr>
        
        <tr>
          <td className="  text-left">Profit for the year</td>
          <td className="  text-center">-</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">318,009</td>
          <td className="  text-center"> - </td>
          <td className="  text-center">318,009</td>
          
        </tr>
        <tr>
          <td className="  text-left">Transfer from OCI </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">-</td>
          <td className="  text-center"> (2,378) </td>
          <td className="  text-center">(2,378)</td>
        </tr>
        <tr>
          <td className="  text-left font-bold">Attributable to Takaful funds:</td>
         
          
        </tr>
       
        <tr>
          <td className="  text-left"> At 1 January 2021</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
        </tr>
        <tr>
          <td className="  text-left">Transfers from profit or loss-</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
          <td className="  text-center">-</td>
        </tr>
        
        <tr>
          <td className="  text-left">Family Takaful </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">171,868</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> 171,868 </td>
        </tr>
        <tr>
          <td className="  text-left">General Takaful </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">(11,829)</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> (11,829)</td>
        </tr>
        <tr>
          <td className="  text-left">Transfer from OCI </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">33,999</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> 33,999</td>
        </tr>
        <tr>
          <td className="  text-left">Transfer to contingency </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> 79,194</td>
          <td className="  text-center">(79,194)</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
        </tr>
        <tr className='font-bold'>
          <td className="  text-left">At 31 December 2021 </td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 780,763 </td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 531,944 </td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 174,523</td>
          <td className="text-center border-b border-t border-Stroke border-solid">775!188</td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 27,420 </td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 2,289,838 </td>
        </tr>
      </tbody>
    </table>
      <div className='font-bold mt-4'>
          <h2 className='mt-5'>NOOR TAKAFUL INSURANCE LIMITED</h2>
          <h3>FINANCIAL STATEMENTS FOR THE YEAR ENDED 31 DECEMBER 2022</h3>

          <h3>
            STATEMENT OF CASH FLOWS
          </h3>
      </div>
      

      <table>
      
      <thead>
      
        
        <tr>
              <th className=" w-[10] text-center "></th>
              <th className="border-slate-600 w-[5%] text-center"></th>
              <th className="border-slate-600 w-[5%] text-center"></th>
              <th className="border-slate-600 w-[5%] text-center "></th>
              <th className="border-slate-600 w-[20%] text-center">Notes</th>
              <th className=" border-slate-600 w-[20%] text-center">2022</th>
              <th className=" border-slate-600 w-[20%] text-center">2021</th>
      </tr>
      </thead>
      <tbody>
      <tr className=' font-bold '>
          
          <td className="  text-left ">Cash flows from operating activities:</td>
          <td className="  text-center"></td>
          <td className="  text-center"></td>
          <td className="  text-center"></td>
          <td className="  text-center"></td>
          <td className="  text-center">N'000</td>
          <td className="  text-center">N'000</td>

        </tr>
        
        <tr>
          <td className="  text-left">Takaful contributions received</td>
          <td className="  text-center"></td>
          <td className="  text-center"></td>
          <td className="  text-center"></td>
          <td className="  text-center">23</td>
          <td className="  text-center">4,971,178</td>
          <td className="  text-center">3,971,178</td>
          

        </tr>
        <tr>
          <td className="  text-left">Deposit liabilities - contributions during the year</td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 16 </td>
          <td className="  text-center"> 57,337 </td>
          <td className="  text-center"> 111,152 </td>
        </tr>
        
        <tr>
          <td className="  text-left">Deposit liabilities - withdrawals during the year</td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 16 </td>
          <td className="  text-center"> (57,337) </td>
          <td className="  text-center"> (111,152) </td>
          
        </tr>
       
        <tr>
          <td className="  text-left">Retakaful contributions paid</td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 24.1 </td>
          <td className="  text-center"> (57,337 )</td>
          <td className="  text-center"> (111,152 )</td>
        </tr>
        <tr>
          <td className="  text-left">Commission paid</td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 24.1 </td>
          <td className="  text-center"> (57,337 )</td>
          <td className="  text-center"> (111,152 )</td>
        </tr>
        
        <tr>
          <td className="  text-left">Claims paid during the year </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 26 </td>
          <td className="  text-center"> (57,337 )</td>
          <td className="  text-center"> (111,152 )</td>
        </tr>
        <tr>
          <td className="  text-left">Claims recovered from retakaful </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 26.1 </td>
          <td className="  text-center"> (57,337 )</td>
          <td className="  text-center"> (111,152 )</td>
        </tr>
        <tr>
          <td className="  text-left">Fees and commission </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 26.1 </td>
          <td className="  text-center"> (57,337 )</td>
          <td className="  text-center"> (111,152 )</td>
        </tr>
        <tr>
          <td className="  text-left">Other underwriting expenses </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 26.1 </td>
          <td className="  text-center"> (57,337 )</td>
          <td className="  text-center"> (111,152 )</td>
        </tr>
        <tr>
          <td className="  text-left">Takaful operations charges on risk funds </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 26.1 </td>
          <td className="  text-center"> (57,337 )</td>
          <td className="  text-center"> (111,152 )</td>
        </tr>
        <tr>
          <td className="  text-left">Cash paid to and on behalf of employees </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 26.1 </td>
          <td className="  text-center"> (57,337 )</td>
          <td className="  text-center"> (111,152 )</td>
        </tr>
        <tr>
          <td className="  text-left">Other administrative expenses paid </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">  </td>
          <td className="text-center border-b  border-Stroke border-solid"> (57,337 )</td>
          <td className="text-center border-b  border-Stroke border-solid"> (111,152 )</td>
        </tr>
        <tr>
          <td className="  text-center"> </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 57,337 </td>
          <td className="  text-center"> 111,152 </td>
        </tr>
        <tr>
          <td className="  text-left">Changes in net assets/liabilities </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 36.2 </td>
          <td className="  text-center"> 57,337 </td>
          <td className="  text-center"> 111,152 </td>
        </tr>
        <tr className='font-bold'>
          <td className="  text-left">Net cash flows operating activities </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">  </td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 757,337 </td>
          <td className="text-center border-b border-t border-Stroke border-solid">911,152 </td>
        </tr>
      </tbody>
      <tbody>
      
        <tr className='mt-5'>
          <td className="  text-left">Cash flows from investing activities:</td>
        </tr>
        <tr>
          <td className="  text-left">Addition to financial assets at FVOCI</td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">7.1 & 7.2 </td>
          <td className="  text-center"> 57,337 </td>
          <td className="  text-center"> 111,152 </td>
          

        </tr>
        
        <tr>
          <td className="  text-left">Addition to financial assets at amortised cost</td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">7.3 </td>
          <td className="  text-center"> 57,337 </td>
          <td className="  text-center"> 111,152 </td>
          
        </tr>
        <tr>
          <td className="  text-left">Acquisition of property, plant and equipment </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">7.3 </td>
          <td className="  text-center"> 57,337 </td>
          <td className="  text-center"> 111,152 </td>
        </tr>
        <tr>
          <td className="  text-left">Proceeds from sale of property, plant and equipment</td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">7.3 </td>
          <td className="  text-center"> 57,337 </td>
          <td className="  text-center"> 111,152 </td>  
          
        </tr>
       
        <tr>
          <td className="  text-left">Acquisition of leased property</td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">7.3 </td>
          <td className="  text-center"> 57,337 </td>
          <td className="  text-center"> 111,152 </td>  
        </tr>
        <tr>
          <td className="  text-left">Repayment of ijarah financing</td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">7.3 </td>
          <td className="  text-center"> 57,337 </td>
          <td className="  text-center"> 111,152 </td>  
        </tr>
        
        <tr>
          <td className="  text-left">Investment and other income </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">7.3 </td>
          <td className="  text-center"> 57,337 </td>
          <td className="  text-center"> 111,152 </td>  
        </tr>
        <tr>
          <td className="  text-left">Net cash used from investing activities </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">  </td>
          <td className="  text-center"> 757,337 </td>
          <td className="  text-center"> 911,152 </td>
        </tr>
        <tr>
          <td className="  text-left">Cash flows from financing activities:</td>
        </tr>
        <tr>
          <td className="  text-left">Deposits for shares/Net receipt/(refund) </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 20 </td>
          <td className="  text-center"> 757,337 </td>
          <td className="  text-center"> 911,152 </td>
        </tr>
        <tr>
          <td className="  text-center"></td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">  </td>
          <td className="  text-center"> 757,337 </td>
          <td className="  text-center"> 911,152 </td>
        </tr>
        <tr>
          <td className="  text-left">Net (decrease)/increase in cash and cash equivalents </td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center">  </td>
          <td className="  text-center"> 757,337 </td>
          <td className="  text-center"> 911,152 </td>
        </tr>
        <tr>
          <td className="  text-left">Cash and cash equivalents at 1 January</td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 4 </td>
          <td className="  text-center"> 757,337 </td>
          <td className="  text-center"> 911,152 </td>
        </tr>
        <tr>
          <td className="  text-left">Cash and cash equivalents at 31 December</td>
          <td className="  text-center"></td>
          <td className="  text-center">  </td>
          <td className="  text-center"> </td>
          <td className="  text-center"> 4 </td>
          <td className="  text-center"> 757,337 </td>
          <td className="  text-center"> 911,152 </td>
        </tr>
      </tbody>
    </table>
    </div>
    </>
)};

export default StatementOfChangesInEquity;
