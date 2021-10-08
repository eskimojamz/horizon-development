import React from 'react';
import './App.css'
import logo from './assets/logo.svg'
import logoLine from './assets/logo-line.svg'
import logoText from './assets/logo-text.svg'
import logoTitle from './assets/logo-title.svg'
import phoneIcon from './assets/call.svg'
import heroImg1 from './assets/hero-img1.png'
import heroImg2 from './assets/hero-img2.png'

function App() {
  return <HomeDesktop {...homeDesktopData} />;
}

export default App;

function HomeDesktop(props) {
  const {
    overlapGroup,
    spanText,
    spanText2,
    text12,
    learnMore,
    communities,
    agents,
    aboutUs,
    contactUs,
    phone,
    recentListings,
    text11,
    viewAllListings,
    testimonials,
    text10,
    recentListingProps,
    recentListing2Props,
    recentListing3Props,
    testimonialProps,
    testimonial2Props,
    testimonial3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home-desktop">
          <div className="navbar container">
            <div className="logo-container">
              <div className="logo">
                <img
                  className="logo-img"
                  src={logo}
                />
              </div>
              <div className="company-title">
                <img
                  className="logo-title"
                  src={logoTitle}
                />
                <img
                  className="logo-line"
                  src={logoLine}
                />
                <img
                  className="logo-text"
                  src={logoText}
                />
              </div>
            </div>
            <div className="nav-links">
              <div className="navlink">
                Communities
              </div>
              <div className="navlink">
                Agents
              </div>
              <div className="navlink">
                About Us
              </div>
              <div className="navlink">
                Contact Us
              </div>
            </div>
            <div className="phone-link">
              <img className="phone-icon" src={phoneIcon} />
              <div className="phone-number cabin">
                718-3322-3232
              </div>
            </div>
          </div>  
          <div className="hero-bg">
            <div className="hero container">
              <div className="overlap-group1">
                <div>
                  <img className="hero-img-1" src={heroImg1} />
                </div>
                
                <div className="overlap-group2">
                  <img className="hero-img-2" src={heroImg2} />
                </div>
              </div>
              <div className="hero-text">
                <div className="hero-text-primary">
                  <h1>
                    <span className="span0">{spanText}</span>
                    <span className="span1 primary">{spanText2}</span>
                  </h1>
                </div>
                <div className="hero-text-secondary">
                  <div className="text-12">
                    {text12}
                  </div>
                </div>
                <div className="hero-btn">
                  <button className="learn-more cabin">
                    {learnMore}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
      </div>
    </div>
  );
}

const recentListingData = {
    recentListingImg: "genmid-1.png",
    address: "5 bed / 2 bath",
    baysideQueens: "Bayside, Queens",
    price: "$ 1,300,000",
};

const recentListing2Data = {
    recentListingImg: "371982507-1.png",
    address: "2 bed / 2 bath",
    baysideQueens: "Chelsea, Manhattan",
    price: "$ 400,000",
    className: "recent-listing-2",
};

const recentListing3Data = {
    recentListingImg: "1d266c66750ff96500e86b467d3cb476l-m1345003320xd-w1020-h770-q80-1.png",
    address: "3 bed / 2 bath",
    baysideQueens: "Flushing, Queens",
    price: "$ 1,230,000",
    className: "recent-listing",
};

const testimonialData = {
    profileImg: "b1hs2qbybas-1-1.png",
    name: "Alan Durant",
    text7: "Home Buyer from Syosset",
    text8: <>The folks at Horizon Development<br />helped me every step of the way in buying my first home. They negotiated on my behalf to lower the final buying price and I couldn’t be happier. I’d highly recommend their services to anyone looking to buy a home in New York.</>,
};

const testimonial2Data = {
    profileImg: "b1hs2qbybas-1.png",
    name: "Arun Paresh",
    text7: "Home Buyer from Bayside",
    text8: "I want to thank agent Chouhan and his team for the excellent services they provided for me and my family through the entire process of selling my home. They are professionals in real estate with the highest quality in Queens!",
    className: "testimonial-1",
};

const testimonial3Data = {
    profileImg: "istockphoto-1149504274-612x612-1.png",
    name: "Steve Kim",
    text7: "Home Buyer from Flushing",
    text8: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dictum et ligula non facilisis. Maecenas ultricies facilisis turpis vitae fringilla. Suspendisse pharetra facilisis turpis eget tincidunt. Cras laoreet nunc et nisi auctor condimentum.",
    className: "testimonial-2",
};

const homeDesktopData = {
    overlapGroup: "image-2.png",
    spanText: <>Let’s find your <br />dream home<br />in </>,
    spanText2: "New York",
    text12: <>Horizon Development has helped <br />New Yorkers find a home they love. <br />We guarantee that we’ll find <br />something great for you.</>,
    learnMore: "Learn More",
    communities: "Communities",
    agents: "Agents",
    aboutUs: "About Us",
    contactUs: "Contact Us",
    phone: "718-3322-3232",
    recentListings: "Recent Listings",
    text11: "Browse through the latest real estate listings",
    viewAllListings: "View All Listings",
    testimonials: "Testimonials",
    text10: "See what our clients have to say about us",
    recentListingProps: recentListingData,
    recentListing2Props: recentListing2Data,
    recentListing3Props: recentListing3Data,
    testimonialProps: testimonialData,
    testimonial2Props: testimonial2Data,
    testimonial3Props: testimonial3Data,
};