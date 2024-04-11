import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4a539dda-48a4-479a-90e0-82580349f28d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} />
        </h3>
        <p>
          Need assistance or have a question? We're here to help! Our dedicated
          support team is committed to providing you with prompt and friendly
          assistance. Feel free to reach out to us via the contact form below,
          and we'll get back to you as soon as possible
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> sudeepkarki74@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" /> +977 9808463970
          </li>
          <li>
            <img src={location_icon} alt="" /> Tinkune-4, Kathmandu , Nepal
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name"></input>
          <label> Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Send Message
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
