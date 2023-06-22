import React from "react";
import { HiArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { PolicyAndprivacy, AboutUs, Faq } from "../../components";
import { MoreContext } from "../../contexts/more_context";

export const ContactUs = () => {
  const { contact_us, showContactUs } = React.useContext(MoreContext);

  return (
    <main>
      <section className="profile profile-dark d-flex flex-column">

        <section className="header pb-3 px-3">
          <div className="position-relative d-flex justify-content-center align-items-center">
            <h5 className="page-title page-title-light py-5">پشتیبانی</h5>
            <Link to="/profile" className="back back-light">
              <HiArrowLeft />
            </Link>
          </div>
          {/* buttons */}
          <section>
            <button className={`button-gold mb-3 ${ contact_us.original === "faq" && "button-gold-active" }`} onClick={() => showContactUs("faq", "faq")}> سوالات و پیشنهادات</button>
            <button className={`button-gold mb-3 ${ contact_us.original === "policy" && "button-gold-active" }`} onClick={() => showContactUs("policy", "")}>قوانین و شرایط</button>
            <button className={`button-gold ${ contact_us.original === "aboutus" && "button-gold-active" }`} onClick={() => showContactUs("aboutus", "")}>درباره ی دنجنشین</button>
          </section>
          {/* buttons */}
        </section>

        <section className="content d-flex flex-grow-1">
          {/* faq section */}
          <section className={`w-100 ${contact_us.original === "faq" ? "d-flex" : "d-none" }`}>
            <Faq />
          </section>
          {/* faq section */}

          {/* policy and privecy section */}
          <section className={`w-100  ${contact_us.original === "policy" ? "d-flex" : "d-none" }`}>
            <PolicyAndprivacy />
          </section>
          {/* policy and privecy section */}

          {/* about us section */}
          <section className={`w-100  ${contact_us.original === "aboutus" ? "d-flex" : "d-none" }`}>
            <AboutUs />
          </section>
          {/* about us section */}
        </section>

      </section>
    </main>
  );
};
