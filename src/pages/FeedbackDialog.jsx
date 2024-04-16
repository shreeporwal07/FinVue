import React, { useState } from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function FeedbackDialog({ open, onClose }) {
  const SERVICE_ID = "service_0adgvio";
  const TEMPLATE_ID = "template_pyo0yiq";
  const PUBLIC_KEY = "YgL3FhpRzJyqFRhau";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          title: "Message Sent Successfully",
          icon: "success",
        });
        onClose(); // Close the dialog after submission
      })
      .catch((error) => {
        console.log(error.text);
        Swal.fire({
          title: "Ooops, something went wrong",
          text: error.text,
          icon: "error",
        });
      });
    e.target.reset();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="bg-gradient-to-r from-[#434974] to-[#242949]"><h2 className="font-kalam text-white text-xl md:text-3xl">Give Feedback</h2></DialogTitle>
      <DialogContent className="p-4  md:p-2 w-64 md:w-80 bg-gradient-to-r from-[#434974] to-[#242949]">
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label htmlFor="user_email" className="block text-white text-lg font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="Email…"
              required
              className="w-full rounded-md p-2 bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user_name" className="block text-white text-lg font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="Name…"
              required
              className="w-full rounded-md p-2 bg-gray-800 text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user_message" className="block text-white text-lg font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="user_message"
              name="user_message"
              placeholder="Type your message here!"
              required
              className="w-full rounded-md p-2 bg-gray-800 text-white"
            />
          </div>
          <button type="submit" className="btn bg-[#8C52FF] text-2xl sm:text-xl hover:bg-[#9461F8] text-black hover:text-white rounded-3xl border-white pl-4 pr-4">
            Submit
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default FeedbackDialog;
