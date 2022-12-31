import React, { Component } from "react";

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ContactSection from "../components/Contact/Contact";

class Contact extends Component {
  render() {
    return (
      <div className="main">
        <Breadcrumb title="Contact" subpage="Pages" page="Contact" />
        <ContactSection />
      </div>
    );
  }
}

export default Contact;
