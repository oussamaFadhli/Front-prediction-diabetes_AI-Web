import React, { useEffect } from "react";

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = title; 
    return () => {
      document.title = "MediLabAI"; 
    };
  }, [title]); 
  return null;
};

export default PageTitle;
