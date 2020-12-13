import React, { useState } from "react";

import Header from "../common/header/header";
import Footer from "../common/header/footer";
import Input1, { Textarea } from "../common/inputs";

import Api from "app/config/api";

const Contact = () => {
  const form_ = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const [form, setForm] = useState({ ...form_ });

  const handleName = (e) => {
    var obj = { ...form };
    obj.name = e.target.value;
    setForm(obj);
  };

  const handleEmail = (e) => {
    var obj = { ...form };
    obj.email = e.target.value;
    setForm(obj);
  };

  const handleSubject = (e) => {
    var obj = { ...form };
    obj.subject = e.target.value;
    setForm(obj);
  };

  const handleMessage = (e) => {
    var obj = { ...form };
    obj.message = e.target.value;
    setForm(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("formBtn").disabled = "disabled";
    document.getElementById("formBtn").innerText = "Submitting...";

    // ApiPost(`${URLS().FORM}`, form)
    Api.form
      .post(form)
      .then((res) => {
        document.getElementById("contact-form").style.display = "none";
        document.getElementById("success_message").style.display = "block";
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("fail_message").style.display = "block";
        document.getElementById("formBtn").disabled = "";
        document.getElementById("formBtn").innerText = "Submit";
      });
  };

  return (
    <>
      <h1 className="playfair-xlg align-center gold mg-v-50">Contact Us</h1>

      <p className="lato-m align-center" id="success_message">
        Your Message has been sent! We will reply as soon as possible!
      </p>

      <form id="contact-form" onSubmit={handleSubmit}>
        <Input1
          label="Name"
          value={form.name}
          onChange={handleName}
          type="text"
          ph="Your Full name"
          required
        />
        <Input1
          label="Email"
          value={form.email}
          onChange={handleEmail}
          type="email"
          ph="Email Address"
          required
        />
        <Input1
          label="Subject"
          value={form.subject}
          onChange={handleSubject}
          type="text"
          ph="Subject of the matter"
          required
        />
        <Textarea
          label="Message"
          value={form.message}
          onChange={handleMessage}
          ph="What is on your mind?"
          required
        />

        <p className="lato-m i align-center" id="fail_message">
          Apologies! Your message could not be sent at this time. Try contacting
          us through our social media accounts.
        </p>
        <button className="btn-black" id="formBtn">
          Submit
        </button>
      </form>

      <div className="mg-v-50 align-center">
        <p className="lato-lg" id="socials">
          <span className="mg-v-20">
            <a href="https://www.instagram.com/motiontalentafrica/">
              {" "}
              <i className="fab fa-instagram"></i> @motiontalentafrica{" "}
            </a>{" "}
          </span>
          <span className="mg-v-20">
            <a href="https://www.facebook.com/motiontalentafrica/">
              {" "}
              <i className="fab fa-facebook"></i> @motiontalentafrica{" "}
            </a>{" "}
          </span>
          <span className="mg-v-20">
            <a href="https://twitter.com/mtalent_africa/">
              {" "}
              <i className="fab fa-twitter"></i> @motiontalentafrica{" "}
            </a>{" "}
          </span>
          <span className="mg-v-20">
            <i className="fas fa-phone"></i>+254 738 085 111
          </span>
          <span className="mg-v-20">
            <a href="mailto:info@motiontalentafrica.co.ke">
              <i className="fas fa-envelope"></i> info@motiontalentafrica.co.ke{" "}
            </a>{" "}
          </span>
        </p>
      </div>
    </>
  );
};

const Index = () => {
  return (
    <>
      <Header />
      <div className="full-section">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Index;
