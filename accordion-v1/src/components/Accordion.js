import "./styles.css";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function Accordion() {
  const [curClicked, setCurClicked] = useState(false);

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem
          num={index + 1}
          title={faq.title}
          text={faq.text}
          key={index}
          curClicked={curClicked}
          setCurClicked={setCurClicked}
        />
      ))}
    </div>
  );
}
