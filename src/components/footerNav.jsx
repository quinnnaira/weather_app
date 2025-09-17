import React from "react";

const FooterNav = (props) => {
  

  return (
    <React.Fragment>
      <section className="footer-nav d-flex flex-row align-items-center justify-content-around ">
      
        <section
          role="button"
          className="footer-settings-section  brand-text-mute"
          onClick={props.onClick}
        >
          <section className="footer-icons footer-settings-svg-section d-flex align-items-center justify-content-center my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={"15px"}
              height={"15px"}
              className="footer-svgs text-center m-auto"
              fill="#ffffff"
              viewBox="0 0 512 512"
            >
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
            </svg>
          </section>
          Search
        </section>

      </section>
    </React.Fragment>
  );
};

export default FooterNav;
