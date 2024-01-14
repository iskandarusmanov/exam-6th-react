import React from "react";
import { forwardRef } from "react";

function Input({ type, placeholder, className, ...restProps }, ref) {
  return (
    <div>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`border border-gray-300 w-[350px] p-2 rounded-[4px] mt-[10px] h-[38px] focus:outline-none focus:border-blue-600 ${className}`}
        {...restProps}
      />
    </div>
  );
}

export default forwardRef(Input);
