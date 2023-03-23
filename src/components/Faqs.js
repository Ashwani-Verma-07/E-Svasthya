import React, { useState } from "react";
import { questions } from "./api";
import Accordion from "./Accordion";
import "./Faqs.css";
function Faqs() {
  const [data] = useState(questions);
  return (
    <div>
      <div className="faq">
        <section className="main-div">
          <h1>Some of the Frequently asked Questions</h1>

          {data.map((curElem) => {
            return <Accordion key={curElem.id} {...curElem} />;
          })}
        </section>
      </div>
    </div>
  );
}

export default Faqs;
