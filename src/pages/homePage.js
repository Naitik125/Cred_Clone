import React from 'react'
import HeroSection from '../components/HeroSection';
import ProductShowCase from '../components/ProductShowCase';
import Header from '../components/common/Header'
import FeelSpecial from '../components/FeelSpecial';
import CredExperience from '../components/CredExperience';
import CredSecurity from '../components/CredSecurity';
import BrandsLove from '../components/BrandsLove';
import WindowPeak from '../components/WindowPeak';
import MobileScroll from '../components/MobileScroll';
import CredStory from '../components/CredStory';
import AppRating from '../components/AppRating';
import Footer from '../components/common/Footer';

export const HomePage = () => {
  return (
  <>
  {/* <Header/> */}
  <HeroSection/> 
  <ProductShowCase/>
  <FeelSpecial/>
  <BrandsLove/>
  <CredExperience/>
  <MobileScroll/>
  <div className='non-mobile'>
  <WindowPeak/>
  </div>
  <CredSecurity/>
  <CredStory/>
  <AppRating/>
  <Footer/>
  </>
  
  );
  
};

export default HomePage;
