import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000} // milliseconds, set to 5000 for 5 seconds
        style={{ height: "80px", fontSize: "14px" }} // Adjust height and font size as needed
        toastClassName="toast-container-class"
      />
    </>
  );
}
