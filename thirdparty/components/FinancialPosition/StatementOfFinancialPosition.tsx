// components/StatementOfFinancialPosition.tsx
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';


interface StatementProps {
  date: string;
  assets: Record<string, number>;
  liabilities: Record<string, number>;
  equity: Record<string, number>;
}


const StatementOfFinancialPosition: React.FC<StatementProps> = ({ date, assets, liabilities, equity }) => {
  return (
    <>
    <div className="p-6.5 bg-white dark:bg-form-input">
        <div className=" flex flex-col gap-6 xl:flex-row font-bold">
              <h2>NOOR TAKAFUL INSURANCE LIMITED</h2>
        </div>
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row font-bold">
              <h3>FINANCIAL STATEMENTS FOR THE YEAR ENDED 31 DECEMBER 2022</h3>
        </div>
        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row font-bold">

              <h3>STATEMENT OF FINANCIAL POSITION</h3>
        </div>
        
   


        <table className="border-collapse  border-slate-500">
  <thead>
    <tr>
      <th className=" w-[10] text-center ">Assets</th>
      <th className="border-slate-600 w-[10%] text-center">Notes</th>
      <th className="border-slate-600 w-[15%] text-center">Shareholders</th>
      <th className="border-slate-600 w-[15%] text-center ">Family Takaful</th>
      <th className="border-slate-600 w-[15%] text-center">General Takaful</th>
      <th className=" border-slate-600 text-center">31 December 2022</th>
      <th className=" border-slate-600 text-center">31 December 2021</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className=" border-slate-700"></td>
      <td className=" border-slate-700"></td>
      <td className=" border-slate-700 text-center ">N'000</td>
      <td className=" border-slate-700 text-center">N'000</td>
      <td className=" border-slate-700 text-center ">N'000</td>
      <td className=" border-slate-700 text-center">N'000</td>
      <td className=" border-slate-700 text-center">N'000</td>
    </tr>
    <tr>
      <td className=" w-[50] text-center">Cash and cash equivalents</td>
      <td className=" text-center">4</td>
      <td className=" text-center">348,999</td>
      <td className=" text-center">395,627</td>
      <td className=" text-center">153,271</td>
      <td className=" text-center">897,897</td>
      <td className=" text-center">208,228</td>
    </tr>
    <tr>
      <td className="  text-center">Takaful receivables</td>
      <td className=" text-center">5</td>
      <td className="text-center"> - </td>
      <td className="text-center"> - </td>
      <td className=" text-center">58,188</td>
      <td className=" text-center">58,188</td>
      <td className=" text-center"> - </td>
    </tr>
    <tr>
            <td className="  text-center">Retakaful contract assets</td>
            <td className="  text-center">6</td>
            <td className="  text-center"> - </td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">663,172</td>
            <td className="  text-center">709,265</td>
            <td className="  text-center"> 122,612</td>
            
    </tr>
    <tr>
            <td className="  text-center">Financial assets</td>
            <td className="  text-center">7</td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">663,172</td>
            <td className="  text-center">709,265</td>
            <td className="  text-center"> 122,612</td>
          </tr>
          <tr>
            <td className="  text-center">Prepaid wakalah</td>
            <td className="  text-center">7</td>
            <td className="  text-center"> - </td>
            <td className="  text-center"> - </td>
            <td className="  text-center">58,188</td>
            <td className="  text-center">58,188</td>
            <td className="  text-center"> - </td>
          </tr>
          <tr>
            <td className="  text-center">Deferred acquisition cost</td>
            <td className="  text-center">9</td>
            <td className="  text-center"> - </td>
            <td className="  text-center"> - </td>
            <td className="  text-center">58,188</td>
            <td className="  text-center">58,188</td>
            <td className="  text-center"> - </td>
          </tr>
          <tr>
            <td className="  text-center">Other receivables and prepayments</td>
            <td className="  text-center">10</td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">663,172</td>
            <td className="  text-center">709,265</td>
            <td className="  text-center"> 122,612</td>
          </tr>
          <tr>
            <td className="  text-center">Intangible asset</td>
            <td className="  text-center">11</td>
            <td className="  text-center"> - </td>
            <td className="  text-center"> - </td>
            <td className="  text-center">58,188</td>
            <td className="  text-center">58,188</td>
            <td className="  text-center"> - </td>
          </tr>
          <tr>
            <td className="  text-center">Property, plant and equipment</td>
            <td className="  text-center">12</td>
            <td className="  text-center"> - </td>
            <td className="  text-center"> - </td>
            <td className="  text-center">58,188</td>
            <td className="  text-center">58,188</td>
            <td className="  text-center"> - </td>
          </tr>
          <tr>
            <td className="  text-center">Right of use asset</td>
            <td className="  text-center">13</td>
            <td className="  text-center"> - </td>
            <td className="  text-center"> - </td>
            <td className="  text-center">58,188</td>
            <td className="  text-center">58,188</td>
            <td className="  text-center"> - </td>
          </tr>
          <tr>
            <td className="  text-center">Statutory deposit</td>
            <td className="  text-center">14</td>
            <td className="  text-center border-b border-Stroke border-solid"> - </td>
            <td className="  text-center border-b border-Stroke border-solid"> - </td>
            <td className="  text-center border-b border-Stroke border-solid">58,188</td>
            <td className="  text-center border-b border-Stroke border-solid">58,188</td>
            <td className="  text-center border-b border-Stroke border-solid"> - </td>
          </tr>
    <tr className='font-bold'>
      <td className=" w-[30] text-center">Total Asset</td>
      <td className="text-center"></td>
      <td className="text-center border-b border-Stroke border-solid">1,356,215</td>
      <td className="text-center border-b border-Stroke border-solid">1,105,506</td>
      <td className="text-center border-b border-Stroke border-solid">2,162,799</td>
      <td className="text-center border-b border-Stroke border-solid">4,624,521</td>
      <td className="text-center border-b border-Stroke border-solid">1,356,215</td>
    </tr>
    <div className="mb-1 block text-bodydark ml-4 mt-4.5  font-bold">
        Liabilities and equity
    </div>
    <tr>
        <td className=" block text-bodydark text-center mt-4.5  font-bold">
            Liabilities
        </td>
    </tr>
    <tr>
            <td className="  text-center">Takaful contract liabilities</td>
            <td className="  text-center">4</td>
            <td className="  text-center">348,999</td>
            <td className="  text-center">395,627</td>
            <td className="  text-center">153,271</td>
            <td className="  text-center">897,897</td>
            <td className="  text-center">208,228</td>
            

    </tr>
    <tr>
            <td className="  text-center">Takaful investment contract</td>
            <td className="  text-center">5</td>
            <td className="  text-center"> - </td>
            <td className="  text-center"> - </td>
            <td className="  text-center">58,188</td>
            <td className="  text-center">58,188</td>
            <td className="  text-center"> - </td>
    </tr>
    <tr>
            <td className="  text-center">Trade payables</td>
            <td className="  text-center">6</td>
            <td className="  text-center"> - </td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">663,172</td>
            <td className="  text-center">709,265</td>
            <td className="  text-center"> 122,612</td>
            
          </tr>
          <tr>
            <td className="  text-center">Deferred wakalah fee income</td>
            <td className="  text-center">7</td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">663,172</td>
            <td className="  text-center">709,265</td>
            <td className="  text-center"> 122,612</td>
          </tr>
          <tr>
            <td className="  text-center">Other payables and accruals</td>
            <td className="  text-center">7</td>
            <td className="  text-center"> - </td>
            <td className="  text-center"> - </td>
            <td className="  text-center">58,188</td>
            <td className="  text-center">58,188</td>
            <td className="  text-center"> - </td>
          </tr>
          <tr>
            <td className="  text-center">Deposits for shares</td>
            <td className="  text-center">9</td>
            <td className="  text-center"> - </td>
            <td className="  text-center"> - </td>
            <td className="  text-center">58,188</td>
            <td className="  text-center">58,188</td>
            <td className="  text-center"> - </td>
          </tr>
          <tr>
            <td className="  text-center">Current tax liabilities</td>
            <td className="  text-center">10</td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">663,172</td>
            <td className="  text-center">709,265</td>
            <td className="  text-center"> 122,612</td>
          </tr>
          <tr>
            <td className="  text-center">Deferred Tax Liability</td>
            <td className="  text-center">11</td>
            <td className="text-center border-b border-Stroke border-solid"> - </td>
            <td className="text-center border-b border-Stroke border-solid">- </td>
            <td className="text-center border-b border-Stroke border-solid">58,188</td>
            <td className="text-center border-b border-Stroke border-solid">58,188</td>
            <td className="text-center border-b border-Stroke border-solid"> - </td>
          </tr>
         
          <tr className='font-bold'>
          <td className="text-center ">Total Liability</td>
          <td className="text-center"></td>
          <td className="text-center border-b border-Stroke border-solid">1,356,215 </td>
          <td className="text-center border-b border-Stroke border-solid">1,105,506 </td>
          <td className="text-center border-b border-Stroke border-solid">2,162,799</td>
          <td className="text-center border-b border-Stroke border-solid">4,624,521</td>
          <td className="text-center border-b border-Stroke border-solid">1,356,215 </td>
          </tr>
    <tr>
        <td className=" block text-bodydark text-center mt-4.5  font-bold">
            Equity
        </td>
    </tr>
    <tr>
            <td className="  text-center">Share capital</td>
            <td className="  text-center">4</td>
            <td className="  text-center">348,999</td>
            <td className="  text-center">395,627</td>
            <td className="  text-center">153,271</td>
            <td className="  text-center">897,897</td>
            <td className="  text-center">208,228</td>
            

    </tr>
    <tr>
            <td className="  text-center">Share premium</td>
            <td className="  text-center">5</td>
            <td className="  text-center"> - </td>
            <td className="  text-center"> - </td>
            <td className="  text-center">58,188</td>
            <td className="  text-center">58,188</td>
            <td className="  text-center"> - </td>
    </tr>
    <tr>
            <td className="  text-center">Retained earnings</td>
            <td className="  text-center">6</td>
            <td className="  text-center"> - </td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">663,172</td>
            <td className="  text-center">709,265</td>
            <td className="  text-center"> 122,612</td>
            
          </tr>
          <tr>
            <td className="  text-center">Contingency reserve</td>
            <td className="  text-center">7</td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">46,093</td>
            <td className="  text-center">663,172</td>
            <td className="  text-center">709,265</td>
            <td className="  text-center"> 122,612</td>
          </tr>
          <tr>
            <td className="  text-center">Fair value reserve</td>
            <td className="  text-center">7</td>
            <td className="  text-center"> - </td>
            <td className="  text-center"> - </td>
            <td className="  text-center">58,188</td>
            <td className="  text-center">58,188</td>
            <td className="  text-center"> - </td>
          </tr>
         
         
          <tr className='font-bold'>
            <td className="  text-center">Total equity</td>
            <td className="  text-center"></td>
            <td className="text-center border-b border-t border-Stroke border-solid">1,356,215 </td>
            <td className="text-center border-b border-t border-Stroke border-solid">1,105,506 </td>
            <td className="text-center border-b border-t border-Stroke border-solid">2,162,799</td>
            <td className="text-center border-b border-t border-Stroke border-solid">4,624,521</td>
            <td className="text-center border-b border-t border-Stroke border-solid"> 1,356,215 </td>
          </tr>
          <tr className='font-bold '>
            <td className="  text-center">Total liabilities and equity</td>
            <td className="  text-center"></td>
            <td className="text-center border-b border-Stroke border-solid">1,356,215 </td>
            <td className="text-center border-b border-Stroke border-solid">1,105,506 </td>
            <td className="text-center border-b border-Stroke border-solid">2,162,799</td>
            <td className="text-center border-b border-Stroke border-solid">4,624,521</td>
            <td className="text-center border-b border-Stroke border-solid"> 1,356,215 </td>
          </tr>
  </tbody>
  
</table>
<div className=''>
    <div className="mb-2 flex flex-col mt-8 gap-6 xl:flex-row">
          <h4>
              These financial statements were approved by the Board of Directors at its meeting of ---------------------------------------------- and signed on its behalf by:
          </h4>
    </div>
    <div className="mb-2 flex flex-col mt-8 items-center gap-6 xl:flex-row">
              <div className= "w-full xl:w-1/2 text-center">
                  -----------------------<br/>
                  <p>Chairman</p>
              </div>
              <div className= "w-full xl:w-1/2">
                  -----------------------<br/>
                  <p>Managing Director</p>
              </div>
              <div className= "w-full xl:w-1/2">
                  -----------------------<br/>
                  <p>Chief Financial Officer</p>
              </div>
          </div>
  </div>
     
     
      
      <div className='mt-20 font-bold'>
          <h2>NOOR TAKAFUL INSURANCE LIMITED</h2>
          <h3>FINANCIAL STATEMENTS FOR THE YEAR ENDED 31 DECEMBER 2022</h3>

          <h3>
                          STATEMENT OF PROFIT OR LOSS AND
                          OTHER COMPREHENSIVE INCOME
          </h3>
      </div>
      

      <table className="border-collapse  border-slate-500">
      
      <thead>
      <tr>
      <th className=" w-[10] text-center ">Revenue</th>
      <th className="border-slate-600 w-[10%] text-center">Notes</th>
      <th className="border-slate-600 w-[15%] text-center">Shareholders</th>
      <th className="border-slate-600 w-[15%] text-center ">Family Takaful</th>
      <th className="border-slate-600 w-[15%] text-center">General Takaful</th>
      <th className=" border-slate-600 text-center">31 December 2022</th>
      <th className=" border-slate-600 text-center">31 December 2021</th>
    </tr>
        
      </thead>
      <tbody>
      <tr>
          <td className="  text-center">Attributable to participants' fund:-</td>
          <td className="  text-center"></td>
          <td className="  text-center">N'000</td>
          <td className="  text-center">N'000</td>
          <td className="  text-center">N'000</td>
          <td className="  text-center">N'000</td>
          <td className="  text-center">N'000</td>
          

        </tr>
        
        <tr>
          <td className="  text-center">Gross contributions written</td>
          <td className="  text-center">4</td>
          <td className="  text-center">348,999</td>
          <td className="  text-center">395,627</td>
          <td className="  text-center">153,271</td>
          <td className="  text-center">897,897</td>
          <td className="  text-center">208,228</td>
          

        </tr>
        <tr>
          <td className="  text-center">Changes in unearned contribution</td>
          <td className="  text-center">5</td>
          <td className="text-center border-b border-Stroke border-solid"> - </td>
          <td className="text-center border-b border-Stroke border-solid"> - </td>
          <td className="text-center border-b border-Stroke border-solid">58,188</td>
          <td className="text-center border-b border-Stroke border-solid">58,188</td>
          <td className="text-center border-b border-Stroke border-solid"> - </td>
        </tr>
        
        <tr>
          <td className="  text-center font-bold">Takaful contributions earned</td>
          <td className="  text-center">6</td>
          <td className="text-center border-b border-Stroke border-solid"> - </td>
          <td className="text-center border-b border-Stroke border-solid">46,093</td>
          <td className="text-center border-b border-Stroke border-solid">663,172</td>
          <td className="text-center border-b border-Stroke border-solid">709,265</td>
          <td className="text-center border-b border-Stroke border-solid"> 122,612</td>
          
        </tr>
        <tr>
          <td className="  text-center">Retakaful expenses</td>
          <td className="  text-center">6</td>
          <td className="  text-center"> - </td>
          <td className="  text-center">46,093</td>
          <td className="  text-center">663,172</td>
          <td className="  text-center">709,265</td>
          <td className="  text-center"> 122,612</td>
          
        </tr>
       
        <tr>
          <td className="  text-center"> Net contributions earned</td>
          <td className="  text-center"></td>
          <td className="  text-center">46,093</td>
          <td className="  text-center">46,093</td>
          <td className="  text-center">663,172</td>
          <td className="  text-center">709,265</td>
          <td className="  text-center"> 122,612</td>
        </tr>
        <tr>
          <td className="  text-center">Fees and commission income</td>
          <td className="  text-center">7</td>
          <td className="  text-center">46,093</td>
          <td className="  text-center">46,093</td>
          <td className="  text-center">663,172</td>
          <td className="  text-center">709,265</td>
          <td className="  text-center"> 122,612</td>
        </tr>
        
        <tr className='font-bold'>
          <td className="  text-center font-bold">Total Revenue</td>
          <td className="  text-center"></td>
          <td className="text-center border-b border-t border-Stroke border-solid">1,356,215 </td>
          <td className="text-center border-b border-t border-Stroke border-solid">1,105,506 </td>
          <td className="text-center border-b border-t border-Stroke border-solid">2,162,799</td>
          <td className="text-center border-b border-t border-Stroke border-solid">4,624,521</td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 1,356,215 </td>
        </tr>
    <tr>
        <td className=" block text-bodydark text-center mt-4.5  font-bold">
              Expenses
        </td>
    </tr>
    <tr>
          <td className="  text-center">Gross claims incurred</td>
          <td className="  text-center">4</td>
          <td className="  text-center">348,999</td>
          <td className="  text-center">395,627</td>
          <td className="  text-center">153,271</td>
          <td className="  text-center">897,897</td>
          <td className="  text-center">208,228</td>
          

        </tr>
        <tr>
          <td className="  text-center">Retatakful claims recoveries</td>
          <td className="  text-center">5</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">58,188</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center"> - </td>
        </tr>
        <tr>
          <td className="  text-center">Changes in family life individual fund</td>
          <td className="  text-center">6</td>
          <td className="  text-center"> - </td>
          <td className="  text-center">46,093</td>
          <td className="  text-center">663,172</td>
          <td className="  text-center">709,265</td>
          <td className="  text-center"> 122,612</td>
          
        </tr>
        <tr>
          <td className="  text-center">Retakaful share of claims incurred</td>
          <td className="  text-center">7</td>
          <td className="text-center border-b  border-Stroke border-solid">46,093</td>
          <td className="text-center border-b  border-Stroke border-solid">46,093</td>
          <td className="text-center border-b  border-Stroke border-solid">663,172</td>
          <td className="text-center border-b  border-Stroke border-solid">709,265</td>
          <td className="text-center border-b  border-Stroke border-solid"> 122,612</td>
        </tr>
        <tr>
          <td className="  text-center">Net claims incurred</td>
          <td className="  text-center"></td>
          <td className="  text-center">663,172</td>
          <td className="  text-center"> 663,172</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center"> - </td>
        </tr>
        <tr>
          <td className="  text-center">Takaful operation direct charges on risk</td>
          <td className="  text-center"></td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">58,188</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center"> - </td>
        </tr>
        <tr>
          <td className="  text-center">funds</td>
          <td className="  text-center">10</td>
          <td className="  text-center">46,093</td>
          <td className="  text-center">46,093</td>
          <td className="  text-center">663,172</td>
          <td className="  text-center">709,265</td>
          <td className="  text-center"> 122,612</td>
        </tr>
        <tr>
          <td className="  text-center">Other direct charges on risk funds</td>
          <td className="  text-center">11</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">58,188</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center"> - </td>
        </tr>
       
        <tr className='font-bold mb-4'>
          <td className="  text-center">Total expenses</td>
          <td className="  text-center"></td>
          <td className="text-center border-b border-t border-Stroke border-solid">1,356,215 </td>
          <td className="text-center border-b border-t border-Stroke border-solid">1,105,506 </td>
          <td className="text-center border-b border-t border-Stroke border-solid">2,162,799</td>
          <td className="text-center border-b border-t border-Stroke border-solid">4,624,521</td>
          <td className="text-center border-b border-t border-Stroke border-solid">1,356,215 </td>
        </tr>
        <tr>
        <td className=" block text-bodydark text-center mt-6.5  font-bold">
              
        </td>
        </tr>
        <tr className=''>
          <td className="  text-center">Wakalah fees</td>
          <td className="  text-center">29</td>
          <td className="  text-center">348,999</td>
          <td className="  text-center">395,627</td>
          <td className="  text-center">153,271</td>
          <td className="  text-center">897,897</td>
          <td className="  text-center">208,228</td>
          

        </tr>
        <tr>
          <td className="  text-center">Jualah fees</td>
          <td className="  text-center">5</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">58,188</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center"> - </td>
        </tr>
        <tr>
          <td className="  text-center">Mudarabah income</td>
          <td className="  text-center">6</td>
          <td className="  text-center"> - </td>
          <td className="  text-center">46,093</td>
          <td className="  text-center">663,172</td>
          <td className="  text-center">709,265</td>
          <td className="  text-center"> 122,612</td>
          
        </tr>
        <tr>
          <td className="  text-center">Underwriting expenses</td>
          <td className="text-center">7</td>
          <td className="text-center border-b  border-Stroke border-solid">46,093</td>
          <td className="text-center border-b  border-Stroke border-solid">46,093</td>
          <td className="text-center border-b  border-Stroke border-solid">663,172</td>
          <td className="text-center border-b  border-Stroke border-solid">709,265</td>
          <td className="text-center border-b  border-Stroke border-solid"> 122,612</td>
        </tr>
        <tr className='font-bold'>
          <td className="  text-center">
              Takaful operation results before other
              income
          </td>
          <td className="  text-center"></td>
          <td className="text-center border-b  border-Stroke border-solid">663,172</td>
          <td className="text-center border-b  border-Stroke border-solid"> 663,172</td>
          <td className="text-center border-b  border-Stroke border-solid">58,188</td>
          <td className="text-center border-b  border-Stroke border-solid">58,188</td>
          <td className="text-center border-b  border-Stroke border-solid"> - </td>
        </tr>
        <tr>
        <td className=" block text-bodydark text-center mt-6.5  font-bold">
              
        </td>
        </tr>
        <tr>
          <td className="  text-center">Investment income</td>
          <td className="  text-center"></td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">58,188</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center"> - </td>
        </tr>
        <tr>
          <td className="  text-center">Income from Investment Contract Liabilities</td>
          <td className="  text-center">10</td>
          <td className="  text-center">46,093</td>
          <td className="  text-center">46,093</td>
          <td className="  text-center">663,172</td>
          <td className="  text-center">709,265</td>
          <td className="  text-center"> 122,612</td>
        </tr>
        <tr>
          <td className="  text-center">Other income</td>
          <td className="  text-center">11</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">58,188</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center"> - </td>
        </tr>
        <tr>
          <td className="  text-center">Management expenses</td>
          <td className="  text-center">11</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">58,188</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center"> - </td>
        </tr>
        <tr>
          <td className="  text-center">Information Technology Development Fund</td>
          <td className="  text-center">11</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">58,188</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center"> - </td>
        </tr>
        <tr>
          <td className="  text-center">Levy</td>
          <td className="  text-center">11</td>
          <td className="text-center border-b  border-Stroke border-solid"> - </td>
          <td className="text-center border-b  border-Stroke border-solid"> - </td>
          <td className="text-center border-b  border-Stroke border-solid">58,188</td>
          <td className="text-center border-b  border-Stroke border-solid">58,188</td>
          <td className="text-center border-b  border-Stroke border-solid"> - </td>
        </tr>
        <tr className='font-bold'>
          <td className="  text-center">Profit before taxation</td>
          <td className="  text-center">11</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">58,188</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center"> - </td>
        </tr>
        <tr>
          <td className="  text-center">Tax expense</td>
          <td className="  text-center">11</td>
          <td className="  text-center"> - </td>
          <td className="  text-center"> - </td>
          <td className="  text-center">58,188</td>
          <td className="  text-center">58,188</td>
          <td className="  text-center"> - </td>
        </tr>
       
        <tr className='font-bold'>
          <td className="  text-center">Profit after taxation</td>
          <td className="  text-center"></td>
          <td className="text-center border-b border-t border-Stroke border-solid">1,356,215 </td>
          <td className="text-center border-b border-t border-Stroke border-solid">1,105,506 </td>
          <td className="text-center border-b border-t border-Stroke border-solid">2,162,799</td>
          <td className="text-center border-b border-t border-Stroke border-solid">4,624,521</td>
          <td className="text-center border-b border-t border-Stroke border-solid"> 1,356,215 </td>
        </tr>
        <tr>
        <td className=" block text-bodydark text-center mt-6.5  font-bold">
              
        </td>
        </tr> 
        <div className='font-bold'>
          <h2>Other Comprehensive Income (OCI)</h2>
          <h3>Items that may be reclassified</h3>

          <h3>
              subsequently to profit or loss:
          </h3>
      </div>

      <tr>
    <td className="  text-center">WFair value loss - Sukuk</td>
    <td className="  text-center">21f</td>
    <td className="  text-center">348,999</td>
    <td className="  text-center">395,627</td>
    <td className="  text-center">153,271</td>
    <td className="  text-center">897,897</td>
    <td className="  text-center">208,228</td>
    

  </tr>
  <tr>
    <td className="  text-center">Shariah Fixed Income Funds</td>
    <td className="  text-center">21f</td>
    <td className="text-center border-b border-t border-Stroke border-solid"> - </td>
    <td className="text-center border-b border-t border-Stroke border-solid"> - </td>
    <td className="text-center border-b border-t border-Stroke border-solid">58,188</td>
    <td className="text-center border-b border-t border-Stroke border-solid">58,188</td>
    <td className="text-center border-b border-t border-Stroke border-solid"> - </td>
  </tr>
  <tr className='font-bold'>
    <td className="  text-center">Total Comprehensive Income for the year</td>
    <td className="  text-center"></td>
    <td className="text-center border-b  border-Stroke border-solid">- </td>
    <td className="text-center border-b  border-Stroke border-solid">46,093</td>
    <td className="text-center border-b  border-Stroke border-solid">663,172</td>
    <td className="text-center border-b  border-Stroke border-solid">709,265</td>
    <td className="text-center border-b  border-Stroke border-solid"> 122,612</td>
    
  </tr>
      </tbody>
    </table>
    
    


    </div>
    </>
)};

export default StatementOfFinancialPosition;
