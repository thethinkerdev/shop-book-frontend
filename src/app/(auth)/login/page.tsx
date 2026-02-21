import FormLogin from "@/components/features/FormLogin";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import React from "react";

const Login = () => {
  return (
    <div className="bg-[#f5f6f8] dark:bg-[#0a0b14] min-h-screen flex flex-col font-display overflow-x-hidden">
      <Header/>
      <FormLogin/>
      <Footer />
    </div>
  );
};

export default Login;
