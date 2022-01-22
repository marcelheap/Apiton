import React from "react";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const ContactPage = () => (
  <div>
    <Layout pageTitle="MarcelHeap | Contact Us">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <Contact />
      <Footer />
    </Layout>
  </div>
);

export default ContactPage;
