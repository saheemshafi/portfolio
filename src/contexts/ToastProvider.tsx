"use client";

import { Toaster } from "react-hot-toast";

export const ToastProvider = () => {
  return (
    <Toaster
      position="top-left"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 1500,
        className: "toast",
      }}
    />
  );
};
