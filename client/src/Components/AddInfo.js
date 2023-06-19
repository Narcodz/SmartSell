import { Row, Col, Card, Steps, Button, notification } from "antd";
// import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ClientInfoForm from "./addInfo/ClientInfoForm";
import ShopInfoForm from "./addInfo/ShopInfoForm";
import RegisterInfoForm from "./addInfo/RegisterInfoForm";
import BgProfile from "../aseets/img/images/bg-profile.jpg";
import ReviewPage from "./addInfo/reviewPage/ReviewPage";





const AddInfo = () => {
  const [currentSteps, setCurrentSteps] = useState(0);
  const [api, contextHolder] = notification.useNotification();
  // const profileReducer = useSelector((state) => state.profile);

  // useEffect(() => {
  //   getUserAccount()
  //     .then((res) => console.log(res.data))
  //     .then((err) => console.log(err));
  // }, []);

  // const handleNextDisable = () => {
  //   if (currentSteps === 0 && profileReducer.personalInformation.length === 0) {
  //     return true;
  //   } else if (
  //     currentSteps === 1 &&
  //     profileReducer.educationInformation.length === 0
  //   ) {
  //     return true;
  //   } else if (
  //     currentSteps === 2 &&
  //     profileReducer.experienceInformation.length === 0
  //   ) {
  //     return true;
  //   } else if (currentSteps === 3) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  const handlePreviousDisable = () => {
    if (currentSteps === 0 || currentSteps === 3) {
      return true;
    } else {
      return false;
    }
  };

  const handleNext = () => {
    // console.log("profileReducer", profileReducer.personalInformation);
    setCurrentSteps((prev) => prev + 1);
  };

  const handlePrevious = () => {
    // console.log("profileReducer", profileReducer.personalInformation);
    setCurrentSteps((prev) => (prev >= 1 ? prev - 1 : prev));
  };

  return (
    <>
      {contextHolder}
      <div
        className="profile-nav-bg pb-12"
        style={{ backgroundImage: "url(" + BgProfile + ")" }}
      ></div>

      <br></br>
      <Card
        bordered={false}
        className="header-solid mb-24"
        title={
          <>
            <h6 className="font-semibold">Add Profile</h6>
            <p>More relevant information speeds up work.</p>
          </>
        }
      >
        <Row>
          <Col span={24} md={24} lg={24} xl={24}>
            {/* ------------------------------------------------------------ */}
            <Steps
              progressDot
              current={currentSteps}
              items={[
                {
                  title: "Register",
                  description: "Information",
                },
                {
                  title: "Client",
                  description: "Information",
                },
                {
                  title: "Shop",
                  description: "Information",
                },
                {
                  title: "Review",
                  description: "Application",
                },
              ]}
            />
            {/* ------------------------------------------------------------ */}

            <>
              {currentSteps === 0 ? (
                <RegisterInfoForm />
              ) : currentSteps === 1 ? (
                <ClientInfoForm />
              ) : currentSteps === 2 ? (
                <ShopInfoForm />
              ) : currentSteps === 3 ? (
                <ReviewPage />
              ) : null}
            </>
          </Col>
        </Row>

        <Row>
          <Col md={22}>
            <Button type="default" onClick={handlePrevious} 
            // disabled={handlePreviousDisable()}
            >
              Previous
            </Button>
          </Col>
          <Col md={2}>
            <Button
              type="primary"
              onClick={handleNext}
              // disabled={handleNextDisable()}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default AddInfo