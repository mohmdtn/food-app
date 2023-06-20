import React from "react";
import clipboardIcon from "../pictures/icons/clipboardIcon.svg";
import clipboardTickIcon from "../pictures/icons/clipboardTickIcon.svg";
import { MoreContext } from "../contexts/more_context";

export const FaqItem = ({ id, question, answer }) => {
  const { faqItem, faq_item } = React.useContext(MoreContext);

  return (
    <section className={`item px-4 ${faq_item === id && "active"}`} onClick={() => faqItem(id)}>
      <h5>
        <img className="ms-2" src={clipboardIcon} alt="" />
        {question}
      </h5>
      <p>
        <img src={clipboardTickIcon} alt="" />
        {answer}
      </p>
    </section>
  );
};
