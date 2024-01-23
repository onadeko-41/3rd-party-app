// pages/index.js
import React from 'react';
import StatementOfFinancialPosition from '@/components/FinancialPosition/StatementOfFinancialPosition';

const Home = () => {
  const date = "2024-01-01";
  const assets = {"Cash": 10000, "Inventory": 50000, "Property": 150000};
  const liabilities = {"Loans": 75000, "Accounts Payable": 20000};
  const equity = {"Common Stock": 50000, "Retained Earnings": 55000};

  return (
    <div>
      
      <StatementOfFinancialPosition date={date} assets={assets} liabilities={liabilities} equity={equity} />
    </div>
  );
};

export default Home;
