import React from "react";
import Layout from "../components/Layout";
import MobileMenu from "../components/MobileMenu";
import Header from "../components/Header";
import CTAOne from "../components/CTAOne";
import CTATwo from "../components/CTATwo";
import Footer from "../components/Footer";

const DesignPage = () => (
  <div>
    <Layout pageTitle="MarcelHeap | Contact Us">
      <Header
        btnClass="main-nav__btn"
        extraClassName="site-header-one__fixed-top"
      />
      <MobileMenu />
      <CTAOne />
      <CTATwo />
      <Footer />
    </Layout>
  </div>
);

export default DesignPage;