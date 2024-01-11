import React from "react";
import { Accordion } from "react-bootstrap";
import "./FQAComponent.css";

const FQAComponent = () => {
  // local component
  const FQAComponentItem = ({ quesId, ques, ans }) => {
    return (
      <div className="mb-3 fqa-accordion-card">
        <Accordion.Item eventKey={quesId}>
          <Accordion.Header className="bg-transparent shadow-none">
            {ques}
          </Accordion.Header>
          <Accordion.Body>{ans}</Accordion.Body>
        </Accordion.Item>
      </div>
    );
  };

  return (
    <div className="container fqa-container py-5" id="faq">
      <div className="section-title text-center d-none d-xl-block">
        <h3>Frequently asked questions</h3>
      </div>

      {/* content */}
      <Accordion defaultActiveKey={["4"]} alwaysOpen>
        <div className="row row-cols-1 row-cols-xl-2 g-xl-3">
          <div className="col">
            <div className="content-wrapper">
              <FQAComponentItem
                quesId={1}
                ques={"How does it works?"}
                ans={
                  "Anyone who is living in the United States can list a car in passive-car for rental. However, to rent a car, an individual must be 21 years old or older and can rent a car by selecting the pick-up and return location including the start and the end date of the trip with the car that he/she selects."
                }
              />
              <FQAComponentItem
                quesId={2}
                ques={"How to take Hourly Rent?"}
                ans={
                  "Good for people who park their cars at the office while working inside the building: For example – If you work from 7 AM to 3 PM, During this time your car can be rented out – the renter will pick up and drop off at the same location."
                }
              />
              <FQAComponentItem
                quesId={3}
                ques={"What if car gets on accident?"}
                ans={
                  "Your safety comes first, call 911 and file a police report, then call the passive car and the owner of the vehicle for more assistance."
                }
              />
              <FQAComponentItem
                quesId={4}
                ques={"Do all the cars have insurance?"}
                ans={"Every vehicle must have insurance"}
              />
            </div>
          </div>
          <div className="col">
            <div className="content-wrapper">
              <FQAComponentItem
                quesId={5}
                ques={"What if I want to cancel?"}
                ans={
                  "You can cancel your trip anytime 24 hours before the start of your trip; any cancellations that are less than one day from the pickup time will be charged a cancellation fee."
                }
              />
              <FQAComponentItem
                quesId={6}
                ques={"Do I get refund for cancelling?"}
                ans={"Read the Cancelation rules above"}
              />
              <FQAComponentItem
                quesId={7}
                ques={"How can i signup?"}
                ans={`You can sign up as:
				  a) Renter
				  b) Host
				  c) Seller`}
              />
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  );
};

export default FQAComponent;
