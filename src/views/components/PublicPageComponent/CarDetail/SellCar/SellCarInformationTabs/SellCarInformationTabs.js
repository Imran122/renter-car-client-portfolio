import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import useAuth from "../../../../../../hooks/useAuth";
import "./CarInformationTabs.css";

const SellCarInformationTabs = () => {
  const { checkDetailsSellCar, setCheckDetailsSellCar, user } = useAuth();

  return (
    <div className="d-none d-lg-block rent-car-information-tabs">
      <Tabs
        defaultActiveKey="Contact"
        id="uncontrolled-tab-example"
        className="mb-3 car-details-tabss"
      >
        {/* rent car description */}
        <Tab eventKey="Contact" title="Contact">
          <div className="rent-car-description p-4">
            <p>{checkDetailsSellCar?.pickupAddress?.address}</p>
            <p className="mt-2">{checkDetailsSellCar?.socialeMediaLink}</p>
            <p className="mt-2">{checkDetailsSellCar?.contactNumber}</p>
          </div>
        </Tab>

        {/* rent car review lists */}

        {/* rent cart delivery options */}
      </Tabs>
    </div>
  );
};

export default SellCarInformationTabs;
