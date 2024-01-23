"use client";
import { useState } from "react";

const CheckboxOne = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor="checkboxLabelOne"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelOne"
            className="sr-only"
            onChange={() => {
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`mr-2 flex h-3 w-3 items-center justify-center rounded-full border ${
              isChecked && "border-primary bg-gray dark:bg-transparent"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${isChecked && "bg-primary"}`}
            ></span>
          </div>
        </div>
        <div className="text-boxdark">
            Wallet Payment
        </div>
      </label>
    </div>
  );
};

export default CheckboxOne;
