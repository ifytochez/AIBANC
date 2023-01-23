import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./FAQs.css";

function FAQs() {
  return (
    <div className="faqsection">
      <h3 className="faqheadline">Frequently Asked Questions</h3>
      <div
        className="test"
        style={{
          margin: "auto",
          width: "90%",
        }}
      >
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                fontSize: "22px",
                fontWeight: "600",
                lineHeight: "29px",
                display: "flex",
                alignItems: "center",
                color: "#172B4D",
                boxshadow: "none",
                padding: "5px 0px",
              }}
            >
              <p className="question">Why request my BVN?</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "17px",
                lineHeight: "23px",
                color: "#5B5971",
              }}
            >
              <p className="answer">
                The regulators require the BVN to know your Customer (KYC) to
                access our credit tool.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          elevation={0}
          style={{
            border: "0",
            borderBottomWidth: "0",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{
                fontSize: "22px",
                fontWeight: "600",
                lineHeight: "25px",
                display: "flex",
                alignItems: "center",
                color: "#172B4D",
                boxshadow: "none",
                padding: "10px 0px",
              }}
            >
              <p className="question">How can I get my banks statement?</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "17px",
                lineHeight: "23px",
                color: "#5B5971",
              }}
            >
              <p className="answer">
                You can get your bank statement through your bank's mobile
                application or by requesting one from a local branch near you.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{
                fontSize: "22px",
                fontWeight: "600",
                lineHeight: "25px",
                display: "flex",
                alignItems: "center",
                color: "#172B4D",
                boxshadow: "none",
                padding: "10px 0px",
              }}
            >
              <p className="question">
                Unable to sign in, BVN registered to another user?
              </p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "17px",
                lineHeight: "23px",
                color: "#5B5971",
              }}
            >
              <p className="answer">
                This is possible if you have created an account in the past. To
                find out if this is the case, please contact{" "}
                <a
                  href="mailto:support@aibanc.co"
                  style={{ textDecoration: "none" }}
                >
                  support@aibanc.co
                </a>{" "}
                via email.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion elevation={0}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography
              style={{
                fontSize: "22px",
                fontWeight: "600",
                lineHeight: "25px",
                display: "flex",
                alignItems: "center",
                color: "#172B4D",
                boxshadow: "none",
                padding: "10px 0px",
              }}
            >
              <p className="question">What should I do if I need more help?</p>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontFamily: "Inter",
                fontStyle: "normal",
                fontWeight: "400",
                fontSize: "17px",
                lineHeight: "23px",
                color: "#5B5971",
              }}
            >
              <p className="answer">
                {" "}
                Kinly contact{" "}
                <a
                  href="mailto:support@aibanc.co"
                  style={{ textDecoration: "none" }}
                >
                  support@aibanc.co
                </a>{" "}
                via email for further inquires.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQs;
