import { Header } from "./components/header";
import TextTransition from "react-text-transition";
import OwlCarousel from "react-owl-carousel";
import { useForm, ValidationError } from "@formspree/react";
import { Spinner } from "./components/spinner.component";
import { useEffect, useState } from "react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xzbogray");
  if (state.succeeded) {
    return (
      <div className="justify-between md:mt-10 max-w-md w-full mx-auto bg-white  border border-gray-50 p-8 rounded-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-center text-xl font-bold">Thanks for joining !</p>
      </div>
    );
  }
  return (
    <form
      className="justify-between md:mt-10 max-w-md w-full mx-auto bg-white border border-gray-50 p-8 rounded-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onSubmit={handleSubmit}
    >
      <input
        className="p-2 h-12 px-4 mb-4 border border-ydblack border-opacity-10 rounded w-full"
        name="enterprise"
        type="text"
        required={true}
        placeholder="Enterprise name"
      />
      <ValidationError
        prefix="Enterprise"
        field="enterprise"
        errors={state.errors}
      />
      <input
        className="p-2 h-12 px-4 mb-4 border border-ydblack border-opacity-10 rounded w-full"
        name="email"
        type="email"
        required={true}
        placeholder="Please enter your email address"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <input
        className="p-2 h-12 px-4 mb-4 border border-ydblack border-opacity-10 rounded w-full"
        name="phonenumber"
        type="tel"
        required={true}
        placeholder="+223 974 898 92"
      />
      <ValidationError
        prefix="phoneNumber"
        field="phonenumber"
        errors={state.errors}
      />
      <textarea
        className="p-2 h-24 px-4 mb-4 border border-ydblack border-opacity-10 rounded w-full"
        id="message"
        name="message"
        placeholder="Description"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        disabled={state.submitting}
        className="disabled:bg-gray-300 disabled:border disabled:text-white p-2 px-4 h-12 bg-ydgreen rounded text-white w-full"
      >
        {state.submitting ? (
          <Spinner className="h-8 w-8 mx-auto border-2 border-white" />
        ) : (
          "Subscribe"
        )}
      </button>
    </form>
  );
}

function DownloadForm() {
  const [state, handleSubmit] = useForm("xleznbwp");
  if (state.succeeded) {
    return (
      <div className="justify-between md:mt-10 max-w-md w-full mx-auto bg-white  border border-gray-50 p-8 rounded-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="text-center text-xl font-bold">
          Thank you for your interest ! <br />
          <a
            className="text-blue-500 text-sm underline"
            href="static/file/Aisely_1.0.apk"
          >
            Download here
          </a>
        </p>
      </div>
    );
  }
  return (
    <form
      className="justify-between md:mt-10 max-w-md w-full mx-auto bg-white border border-gray-50 p-8 rounded-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      onSubmit={handleSubmit}
    >
      <label className="flex items-center mb-3">
        Email:{" "}
        <span className="text-red-400 text-xs inline-block ml-2">
          (optional)
        </span>{" "}
      </label>
      <input
        className="p-2 h-12 px-4 mb-4 border border-ydblack border-opacity-10 rounded w-full"
        name="email"
        type="email"
        placeholder="Please enter your email address"
        defaultValue="someone@mail.com"
      />
      <ValidationError
        prefix=" Hi! You have a new download! Email address"
        field="email"
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="disabled:bg-gray-300 disabled:border disabled:text-white p-2 px-4 h-12 bg-ydgreen rounded text-white w-full"
      >
        {state.submitting ? (
          <Spinner className="h-8 w-8 mx-auto border-2 border-white" />
        ) : (
          " Get the MVP"
        )}
      </button>
    </form>
  );
}

function PilotCustomer() {
  const [state, handleSubmit] = useForm("xeqnkgln");
  if (state.succeeded) {
    return (
      <div className="md:mt-10 flex justify-between items-center bg-white bg-opacity-90 backdrop-filter backdrop-blur border border-gray-200 border-dashed p-8 rounded-lg">
        <p className="text-center text-xl font-bold">Thanks for joining !</p>
        <button className="p-2 text-center rounded-full text-red-400 text-xl border flex items-center justify-center hover:shadow-lg transition-shadow duration-75 ease h-10 w-10">
          x
        </button>
      </div>
    );
  }
  return (
    <form className="sm:flex justify-between md:mt-10" onSubmit={handleSubmit}>
      <input
        className="p-2 h-12 px-4 border text-ydblack border-ydblack border-opacity-10 rounded-sm w-full sm:w-9/12 mb-2 sm:mr-2"
        name="email"
        type="email"
        required={true}
        placeholder="Your email address"
      />
      <ValidationError
        prefix="GuestEmail"
        field="email"
        errors={state.errors}
      />
      <button
        type="submit"
        disabled={state.submitting}
        className="p-2 disabled:bg-gray-300 disabled:border disabled:text-white px-4 h-12 bg-blue-400 rounded-sm text-white w-full sm:w-4/12"
      >
        {state.submitting ? (
          <Spinner className="h-8 w-8 mx-auto border-2 border-white" />
        ) : (
          "Join Us !"
        )}
      </button>
    </form>
  );
}

const TEXTS = ["complex work.", "highly tasking.", "time-consuming."];
const DOCUMENTS = [
  "invoices",
  "receipts",
  "bills",
  "quotes",
  "orders",
  "shipping documents",
  "contracts",
  "agreements",
  "investment documents and so on",
];
export default function App() {
  const [index, setIndex] = useState(0);
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <section id="main" className="w-screen h-screen overflow-x-hidden">
      <Header />
      <section
        id="PrivacyAndConditions"
        className="fixed transform scale-0 target:scale-100 duration-100 ease-in transition-transform z-[60] h-screen w-screen top-0 left-0 bg-gray-900 bg-opacity-20"
      >
        <a
          href="#"
          className="absolute p-2 text-center rounded-full text-white top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 h-10 w-10"
        >
          x
        </a>
        <div className="justify-between md:mt-10 max-w-screen-md h-[80vh] overflow-y-scroll text-ydblack1 text-base leading-8 text-opacity-80 w-full mx-auto bg-white border border-gray-50 p-8 rounded-lg absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p class="c7">
            <span class="c3">
              Please read this Mobile Application End User License Agreement (“
            </span>
            <span class="c4">EULA</span>
            <span class="c3">
              ”) carefully before downloading or using the Aisely Inc. (“
            </span>
            <span class="c4">Aisely</span>
            <span class="c3">”) mobile application (“</span>
            <span class="c4">Mobile App</span>
            <span class="c3">
              ”), which allows You to access Aisely’s mobile-delivered service
              (“
            </span>
            <span class="c4">Subscription Service</span>
            <span class="c3">
              ”) from Your mobile device. This EULA forms a binding legal
              agreement between you (and any other entity on whose behalf you
              accept these terms) (collectively “
            </span>
            <span class="c4">You</span>
            <span class="c3">” or “</span>
            <span class="c4">Your</span>
            <span class="c3">”) and Aisely (each separately a “</span>
            <span class="c4">Party</span>
            <span class="c3">” and collectively the “</span>
            <span class="c4">Parties</span>
            <span class="c3">
              ”) as of the date you download the Mobile App. Your use of the
              Mobile App is subject to this EULA and Your use of the
              Subscription Service will remain subject to the existing agreement
              governing such use (the “
            </span>
            <span class="c4">Subscription Agreement</span>
            <span class="c3">
              ”). With respect to the use of the Mobile App, and to the extent
              the Subscription Agreement conflicts with this EULA, the terms of
              this EULA will govern and control solely with respect to use of
              the Mobile App.
            </span>
          </p>
          <p class="c11">
            <span class="c4 c6">
              1.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Definitions
            </span>
          </p>
          <p class="c0 c16">
            <span class="c1">
              1.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this
              Agreement, except to the extent expressly provided otherwise:
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Agreement</span>
            <span class="c1">
              " means this agreement including any Schedules, and any amendments
              to this Agreement from time to time;
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Customer Confidential Information</span>
            <span class="c1">" means:</span>
          </p>
          <p class="c5">
            <span class="c1">
              (a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any information
              disclosed by the Customer to the Provider during the Term (whether
              disclosed in writing, orally or otherwise) that at the time of
              disclosure:
            </span>
          </p>
          <p class="c11 c14">
            <span class="c1">
              (i)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;was marked as
              "confidential"; or
            </span>
          </p>
          <p class="c11 c14">
            <span class="c1">
              (ii)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;should have
              been reasonably understood by the Provider to be confidential; and
            </span>
          </p>
          <p class="c5">
            <span class="c1">
              (b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the Customer
              Dat];
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Customer Data</span>
            <span class="c1">
              " means all data, works and materials: uploaded to or stored on
              the Platform by the Customer; transmitted by the Platform at the
              instigation of the Customer; supplied by the Customer to the
              Provider for uploading to, transmission by or storage on the
              Platform; or generated by the Platform as a result of the use of
              theMobile App by the Customer (but excluding analytics data
              relating to the use of the Platform and server log files);
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Customer Personal Data</span>
            <span class="c3">
              " means any Personal Data that is processed by the Provider on
              behalf of the Customer in relation to this Agreement, but
              excluding{" "}
            </span>
            <span class="c3 c12">personal data</span>
            <span class="c1">
              &nbsp;with respect to which the Provider is a data controller;
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Data Protection Laws</span>
            <span class="c1">
              " means the EU GDPR and the UK GDPR and all other applicable laws
              relating to the processing of Personal Data;
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Documentation</span>
            <span class="c1">
              " means the documentation for the Mobile App produced by the
              Provider and delivered or made available by the Provider to the
              Customer;
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Effective Date</span>
            <span class="c1">
              " means the date in which the Customer yields to this Agreement by
              clicking on “I Agree” via the Mobile App;
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">EU GDPR</span>
            <span class="c1">
              " means the General Data Protection Regulation (Regulation (EU)
              2016/679) and all other EU laws regulating the processing of
              Personal Data, as such laws may be updated, amended and superseded
              from time to time;
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Force Majeure Event</span>
            <span class="c1">
              " means [an event, or a series of related events, that is outside
              the reasonable control of the party affected (including failures
              of the internet or any public telecommunications network, hacker
              attacks, denial of service attacks, virus or other malicious
              software attacks or infections, power failures, industrial
              disputes affecting any third party, changes to the law, disasters,
              epidemics, pandemics, explosions, fires, floods, riots, terrorist
              attacks and wars)];
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Mobile App Defect</span>
            <span class="c1">
              " means a defect, error or bug in the Mobile App having an adverse
              effect on the appearance, operation, functionality or performance
              of the Mobile App, but excluding any defect, error or bug caused
              by or arising as a result of:
            </span>
          </p>
          <p class="c5">
            <span class="c1">
              (a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any act or
              omission of the Customer or any person authorised by the Customer
              to use the Platform;
            </span>
          </p>
          <p class="c5">
            <span class="c1">
              (b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any use of the
              Platform contrary to the Documentation, whether by the Customer or
              by any person authorised by the Customer;
            </span>
          </p>
          <p class="c5">
            <span class="c1">
              (c)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a failure of
              the Customer to perform or observe any of its obligations in this
              Agreement; and/or
            </span>
          </p>
          <p class="c5">
            <span class="c1">
              (d)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;an
              incompatibility between the Platform or any of its features and
              any other system, network, application, program, hardware or
              software not specified as compatible in the Mobile App’s features
              on the Mobile App’s page on Google Play;
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Intellectual Property Rights</span>
            <span class="c1">
              " means all intellectual property rights wherever in the world,
              whether registrable or non-registrable, registered or
              unregistered, including any application or right of application
              for such rights (and these "intellectual property rights" include
              copyright and related rights, database rights, confidential
              information, trade secrets, know-how, business names, trade names,
              trade marks, service marks, passing off rights, unfair competition
              rights, patents, petty patents, utility models, semi-conductor
              topography rights and rights in designs);
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Mobile App</span>
            <span class="c3">" means the mobile application known as </span>
            <span class="c3">Aisely</span>
            <span class="c3">
              &nbsp;that is made available by the Provider through the{" "}
            </span>
            <span class="c3">Google Play Store</span>
            <span class="c1">;</span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Personal Data</span>
            <span class="c1">
              " means personal data under any of the Data Protection Laws;
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Platform</span>
            <span class="c1">
              " means the platform managed by the Provider and used by the
              Provider to provide the services within the Mobile App, including
              the application and database software for the Mobile App, the
              system and server software used to provide the Hosted Services,
              and the computer hardware on which that application, database,
              system and server software is installed;
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Services</span>
            <span class="c1">
              " means any services that the Provider provides to the Customer,
              or has an obligation to provide to the Customer, under this
              Agreement;
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">Term</span>
            <span class="c1">
              " means the term of this Agreement, commencing in accordance with
              Clause 5.1 and ending in accordance with Clause 5.2;
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">UK GDPR</span>
            <span class="c1">
              " means the EU GDPR as transposed into UK law (including by the
              Data Protection Act 2018 and the Data Protection, Privacy and
              Electronic Communications (Amendments etc) (EU Exit) Regulations
              2019) and all other UK laws regulating the processing of Personal
              Data, as such laws may be updated, amended and superseded from
              time to time; and
            </span>
          </p>
          <p class="c0">
            <span class="c3">"</span>
            <span class="c4">User Interface</span>
            <span class="c1">
              " means the interface for the Mobile App designed to allow
              individual human users to access and use the Mobile App.
            </span>
          </p>
          <p class="c2">
            <span class="c4">
              2. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;License.{" "}
            </span>
            <span class="c1">&nbsp;</span>
          </p>
          <p class="c2">
            <span class="c4">2.1</span>
            <span class="c1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aisely
              grants You a revocable, non-exclusive, non-transferable, limited
              license to download, install, and use the Mobile App for Your
              personal and internal business purposes strictly in accordance
              with this EULA and the Subscription Agreement.
            </span>
          </p>
          <p class="c2">
            <span class="c4">2.2</span>
            <span class="c1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Except to
              the extent expressly permitted in this Agreement or required by
              law on a non-excludable basis, the licence granted by the Provider
              to the Customer under Clause 1.1 is subject to the following
              prohibitions:
            </span>
          </p>
          <p class="c2 c13">
            <span class="c1">
              (a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the Customer
              must not sub-license its right to access and use the Mobile App;
            </span>
          </p>
          <p class="c2 c13">
            <span class="c1">
              (b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[the Customer
              must not republish or redistribute any content or material from
              the Mobile App;
            </span>
          </p>
          <p class="c2 c13">
            <span class="c1">
              (c)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the Customer
              must not make any alteration to the Mobile App; and
            </span>
          </p>
          <p class="c2 c13">
            <span class="c1">
              (d)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the Customer
              must not conduct or request that any other person conduct any form
              of reverse engineering or related activity on the Mobile App.
            </span>
          </p>
          <p class="c2">
            <span class="c4">2.3</span>
            <span class="c1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For the avoidance
              of doubt, downtime caused directly or indirectly by any of the
              following shall not be considered a breach of this Agreement:
            </span>
          </p>
          <p class="c2 c13">
            <span class="c1">
              (a)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a Force Majeure
              Event;
            </span>
          </p>
          <p class="c2 c13">
            <span class="c1">
              (b)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a fault or
              failure of the internet or any public telecommunications network;
            </span>
          </p>
          <p class="c2 c13">
            <span class="c1">
              (c)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a fault or
              failure of the Customer's device’s system;
            </span>
          </p>
          <p class="c2 c13">
            <span class="c1">
              (d)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;any breach by
              the Customer of this Agreement
            </span>
          </p>
          <p class="c2">
            <span class="c4">2.4</span>
            <span class="c1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For the avoidance
              of doubt, the Customer has no right to access the software code
              (including object code, intermediate code and source code) of the
              Platform, either during or after the Term.
            </span>
          </p>
          <p class="c2">
            <span class="c4">
              3. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Your Account.
            </span>
            <span class="c1">
              &nbsp;Your use of the Mobile App requires that You have an account
              with Aisely and agree to the terms of the Subscription Agreement.
            </span>
          </p>
          <p class="c2">
            <span class="c4">
              4. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Changes to this
              EULA.
            </span>
            <span class="c3">
              &nbsp;Aisely reserves the right to modify this EULA at any time
              and for any reason. Aisely will post the most current version of
              this EULA at
            </span>
            <span class="c3 c9">
              <a
                class="c8"
                href="https://www.google.com/url?q=https://www.aisely.com&amp;sa=D&amp;source=editors&amp;ust=1638201595320000&amp;usg=AOvVaw1927YViHRx3GetX8XKWsxZ"
              >
                &nbsp;https://www.aisely.com
              </a>
            </span>
            <span class="c1">
              . If Aisely makes material changes to this EULA, You will receive
              notification via the Mobile App’s page on Google Play.
              Notwithstanding the foregoing, You are responsible for complying
              with the updated terms posted online at Aisely’s website even if
              these updated terms appear online at Aisely’s website before being
              posted on the Mobile App. Your continued use of the Mobile App
              after Aisely publishes notice of changes to this EULA indicates
              Your consent to the updated terms.
            </span>
          </p>
          <p class="c2">
            <span class="c6 c4">
              5.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Term
            </span>
          </p>
          <p class="c2">
            <span class="c4">5.1</span>
            <span class="c1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This Agreement
              shall come into force upon the Effective Date.
            </span>
          </p>
          <p class="c2">
            <span class="c4">5.2</span>
            <span class="c3">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This Agreement
              shall continue in force until the Customer uninstalls the Mobile
              App, upon which this Agreement shall terminate automatically,
              subject to termination in accordance with Clause 18 or any other
              provision of this Agreement.
            </span>
          </p>
          <p class="c2">
            <span class="c4">
              6. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No Included
              Maintenance and Support.
            </span>
            <span class="c1">
              &nbsp;Aisely may deploy changes, updates, or enhancements to the
              Mobile App at any time. Aisely may provide maintenance and support
              for the Mobile App, but has no obligation whatsoever to furnish
              such services to You and may terminate such services at any time
              without notice. You acknowledge that Google (for Android Mobile
              App) does not have an obligation to furnish any maintenance or
              support services in connection with the Mobile App.
            </span>
          </p>
          <p class="c2">
            <span class="c4">
              7. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acceptable Use.
            </span>
            <span class="c1">
              &nbsp;You agree that You will not use or encourage others to use
              the Mobile App or the Subscription Service as accessed through the
              Mobile App in a way that could harm or impair others’ use of the
              Mobile App or the Subscription Service. You also agree not to
              violate the usage limits or controls set forth by Google Play
              Terms of Service for Android users accessing the Mobile App on an
              Android product. &nbsp;
            </span>
          </p>
          <p class="c2">
            <span class="c4">
              8. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy.
            </span>
            <span class="c3">
              &nbsp;In order to operate and provide the Subscription Service and
              the Mobile App, Aisely may collect certain information about You,
              including technical and telemetry data related to your use of the
              Mobile App. We use third party service providers to help us
              collect and analyze this data, including Google Analytics. Aisely
              uses and protects that information in accordance with the Aisely
              Privacy Policy (a current version of which can be found at
            </span>
            <span class="c9 c3">
              <a
                class="c8"
                href="https://www.google.com/url?q=http://www.asiely.com&amp;sa=D&amp;source=editors&amp;ust=1638201595322000&amp;usg=AOvVaw3VWT5CXbnJMhP-vb_OZOfg"
              >
                &nbsp;www.aisely.com
              </a>
            </span>
            <span class="c1">). &nbsp;</span>
          </p>
          <p class="c2">
            <span class="c6 c4">
              9.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customer Data
            </span>
          </p>
          <p class="c2">
            <span class="c4">9.1</span>
            <span class="c1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Customer
              hereby grants to the Provider a non-exclusive licence to copy,
              reproduce, store, distribute, publish, export, adapt, edit and
              translate the Customer Data to the extent reasonably required for
              the performance of the Provider's obligations and the exercise of
              the Provider's rights under this Agreement. The Customer also
              grants to the Provider the right to sub-license these rights to
              its hosting, connectivity and telecommunications service
              providers, subject to any express restrictions elsewhere in this
              Agreement.
            </span>
          </p>
          <p class="c2">
            <span class="c4">9.2</span>
            <span class="c1">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Customer
              warrants to the Provider that the Customer Data OR the Customer
              Data when used by the Provider in accordance with this Agreement
              will not infringe the Intellectual Property Rights &nbsp;or other
              legal rights of any person, and will not breach the provisions of
              any law, statute or regulation, in any jurisdiction and under any
              applicable law.
            </span>
          </p>
          <p class="c2">
            <span class="c4">
              10. Consent to Electronic Communications and Solicitation.
            </span>
            <span class="c1">
              &nbsp;By downloading the Mobile App, You authorize Aisely to send
              You (including via email and push notifications) information
              regarding the Subscription Service and the Mobile App, such as:
              (a) notices about Your use of the Subscription Service and the
              Mobile App, including notices of violations of use; (b) updates to
              the Subscription Service and Mobile App and new features or
              products; and (c) promotional information and materials regarding
              Aisely's products and services.
            </span>
          </p>
          <p class="c2">
            <span class="c4">11. No Warranty.</span>
            <span class="c1">
              &nbsp;YOUR USE OF THE MOBILE APP IS AT YOUR SOLE RISK. THE MOBILE
              APP IS PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. Aisely
              EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
              IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
            </span>
          </p>
          <p class="c2">
            <span class="c1">
              The Mobile App is only available for supported devices and might
              not work on every device. Determining whether Your device is a
              supported or compatible device for use of the Mobile App is solely
              Your responsibility, and downloading the Mobile App is done at
              Your own risk. Aisely does not represent or warrant that the
              Mobile App and Your device are compatible or that the Mobile App
              will work on Your device.
            </span>
          </p>
          <p class="c2">
            <span class="c3">8.1 &nbsp; &nbsp; &nbsp;</span>
            <span class="c3 c15">iOS Application</span>
            <span class="c1">
              . In the event of Aisely’s failure to conform to any applicable
              warranty, You may notify Apple, and Apple will refund the purchase
              price for the Mobile App. TO THE MAXIMUM EXTENT PERMITTED BY
              APPLICABLE LAW, APPLE WILL HAVE NO OTHER WARRANTY OBLIGATION
              WHATSOEVER WITH RESPECT TO (A) THE MOBILE APP, AND (B) ANY OTHER
              CLAIMS, LOSSES, LIABILITIES, DAMAGES, COSTS, OR EXPENSES
              ATTRIBUTABLE TO ANY FAILURE TO CONFORM TO ANY WARRANTY. &nbsp;
            </span>
          </p>
          <p class="c2">
            <span class="c3">8.2 &nbsp; &nbsp; &nbsp;</span>
            <span class="c3 c15">Android Application</span>
            <span class="c1">
              . GOOGLE EXPRESSLY DISCLAIMS ALL WARRANTIES AND CONDITIONS OF ANY
              KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO
              THE IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS
              FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </span>
          </p>
          <p class="c2">
            <span class="c4">
              9. Suspension and Termination of the Mobile App.
            </span>
            <span class="c1">
              &nbsp;Aisely reserves the right to suspend or terminate Your
              access to the Mobile App at any time based on the status of Your
              account under the Subscription Agreement. You understand that if
              Your account is suspended or terminated, You may no longer have
              access to the content that is stored within the Subscription
              Service.
            </span>
          </p>
          <p class="c2">
            <span class="c4">10. &nbsp;Intellectual Property Rights.</span>
            <span class="c1">
              &nbsp;In the event of a third party claim that the Mobile App, or
              Your possession and use of the Mobile App, infringes third party’s
              intellectual property rights, Aisely will be solely responsible
              for the investigation, defense, settlement and discharge of any
              such intellectual property infringement claim.
            </span>
          </p>
          <p class="c2">
            <span class="c4">11. Legal Compliance.</span>
            <span class="c1">
              &nbsp;You represent and warrant that: (a) You are not located in a
              country that is subject to a United States Government embargo, or
              that is on Title 15, Part 740 Supplement 1 Country Group E of the
              United States Code of Federal Regulations; (b) You are not located
              in a country that has been designated by the United States
              Government as a “terrorist supporting” country; and (c) You are
              not listed on any U.S. Government list of prohibited or restricted
              parties. You further agree not to transport the Mobile App to or
              use the Mobile App in any such country.
            </span>
          </p>
          <p class="c2">
            <span class="c4">12. Governing Law.</span>
            <span class="c1">
              &nbsp;This EULA shall be governed by and construed in accordance
              with the laws governing Your Subscription Agreement.
            </span>
          </p>
          <p class="c2">
            <span class="c4">13. Contact Information.</span>
            <span class="c3">
              &nbsp;If You have any questions regarding this EULA, please
              contact Aisely by email at{" "}
            </span>
            <span class="c9 c3">
              <a class="c8" href="mailto:team.ai@yahoo.com">
                team.ai@yahoo.com
              </a>
            </span>
            <span class="c1">&nbsp;or by phone at 234 (816) 980-0313.</span>
          </p>
          <p class="c2">
            <span class="c4">14. Third Party Beneficiaries.</span>
            <span class="c1">
              &nbsp;This EULA is executed between You and Aisely and not between
              you and any other party, including Google for Android users. You
              agree that any claims brought by You arising out of this EULA or
              Your use of the Mobile App will not be made against Google, as
              applicable. Notwithstanding the foregoing, upon Your acceptance of
              this EULA, Google, as applicable, to enforce this EULA against You
              as a third party beneficiary thereof. Aisely is not responsible
              for any applicable third-party agreement between You and any
              third-party, including your wireless provider.
            </span>
          </p>
          <p class="c2">
            <span class="c1">&nbsp;</span>
          </p>
          <p class="c2">
            <span class="c1">Last Updated: November 2021</span>
          </p>
          <p class="c17">
            <span class="c1"></span>
          </p>
        </div>
      </section>
      <section
        tabIndex="99999999999"
        id="become_our_pilot_customer"
        className="fixed transform scale-0 target:scale-100 duration-100 ease-in transition-transform z-[60] h-screen w-screen top-0 left-0 bg-gray-900 bg-opacity-20"
      >
        <a
          href="#_"
          className="absolute p-2 text-center rounded-full text-white top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 h-10 w-10"
        >
          x
        </a>
        <ContactForm />
      </section>
      <section
        tabIndex="99999999999"
        id="download_mvp"
        className="fixed transform scale-0 target:scale-100 duration-100 ease-in transition-transform z-[60] h-screen w-screen top-0 left-0 bg-gray-900 bg-opacity-20"
      >
        <a
          href="#_"
          className="absolute p-2 text-center rounded-full text-white top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 h-10 w-10"
        >
          x
        </a>
        <DownloadForm />
      </section>
      <section className="w-screen sm:h-[110vh] md:h-[100vh] border-b border-dashed">
        <section className="h-full pt-32 md:pt-40">
          <div className="max-w-screen-lg px-6 lg:p-6 xl:px-0 w-full mx-auto sm:flex justify-between">
            <section className="sm:w-8/12 md:w-7/12 z-10">
              <h3 className="text-3xl md:text-4xl lg:text-5xl text-ydblack text-opacity-100  text-center sm:text-left font-black lg:font-bold leading-normal">
                For every business transaction, an excellent, branded document.
              </h3>
              <p className="my-5 md:mt-10 text-md max-w-lg text-center sm:text-left">
                Aisely lets businesses create their outstanding, branded
                commercial transactions documents{" "}
                <TextTransition
                  text={DOCUMENTS[index % DOCUMENTS.length]}
                  inline={true}
                  className="text-ydgreen font-bold underline border-b border-opacity-70 border-dashed border-ydgreen"
                  direction="up"
                  delay={3000}
                />{" "}
                <br />
                with 10x optimal ease and within minimal time.
              </p>
            </section>
            <section className="max-w-screen-sm mx-auto mt-10 relative sm:-mt-16 transform md:translate-x-1/4 ">
              <div className="p-4 mx-auto h-[60vh] md:h-[80vh] ">
                <img
                  className="h-full w-auto block mx-auto"
                  src="static/img/aisely12.svg"
                />
              </div>
            </section>
          </div>
        </section>
      </section>
      <section className="bg-white relative bg-aisely-2 bg-cover md:h-[60vh] h-[100vh] ">
        <section className="absolute bg-white rounded-sm shadow-md w-11/12 transform -translate-y-1/2 left-1/2 -translate-x-1/2 p-8 px-12 max-w-screen-lg md:flex justify-between mx-auto z-10">
          <div className="md:w-[49%] ">
            <h4 className="text-sm text-ydblack text-opacity-70">
              {" "}
              Download the MVP !
            </h4>
            <p className="my-4 md:h-20 flex items-center">
              Download our Android MVP which lets you create and share lists,
              invoices and receipts very easily, seamlessly and swiftly.
            </p>
            <a
              href="#download_mvp"
              className="p-2 rounded-sm text-green-50 bg-blue-500 bg-opacity-80"
            >
              Download Now
            </a>
          </div>
          <div className="border border-dashed my-4 md:mx-4"></div>
          <div className="md:w-[49%] ">
            <h4 className="text-sm text-ydblack text-opacity-70"> Demo</h4>
            <p className="my-4 md:h-20 flex items-center">
              Watch a demo of our Android MVP and get a glimpse of what we are
              building for you, Aisely !
            </p>
            <a
              href="https://youtu.be/fulkvLgVA80"
              target="_blank"
              className="p-2 rounded-sm text-green-50 bg-blue-500 bg-opacity-80"
            >
              Watch Demo
            </a>
          </div>
        </section>
        <section className="absolute px-6 w-full top-0 h-full bg-white bg-opacity-40 backdrop-filter backdrop-blur-sm z-0">
          <h2 className="text-clip text-2xl md:text-4xl top-1/2 relative text-center max-w-screen-sm mx-auto md:mb-20">
            Creating an excellent transactional document is{" "}
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              inline={true}
              className="text-ydgreen font-bold underline border-b border-opacity-70 border-dashed border-ydgreen"
              direction="up"
            />
          </h2>
        </section>
      </section>
      <section className="bg-ydgreen h-[90vh] py-20">
        <div className="max-w-screen-md mx-auto px-6">
          <p className="text-center  md:mx-32 text-xl leading-relaxed text-green-50">
            That's why we built Aisely to facilitate and optimize 10x the entire
            process of creating and sharing{" "}
            <span className="italic underline">outstanding</span> transactional
            documents.
          </p>
          <div className="bg-aisely-11 h-52 bg-cover w-40 mx-auto mt-20 "></div>
        </div>
      </section>
      <section className="mx-auto relative bg-gradient-to- from-indigo-200 to-teal-50 py-20">
        <div className="">
          <div className="max-w-screen-lg mx-auto px-6 -mb-14 md:-mb-20 lg:px-0">
            <span className="text-ydgreen text-sm">100% AUTOMATION</span>
            <h4 className="text-2xl font-bold">Design automation</h4>
          </div>
          <div className="md:flex items-center">
            <div className="bg-aisely-14 h-[50vh] md:h-[70vh] md:w-[50vw] max-w-sm md:max-w-screen-md bg-cover"></div>
            <div className="max-w-screen-lg md:w-1/2 md:max-w-sm lg:max-w-md mx-auto px-6 lg:px-0 mt-10 text-xl md:text-2xl tracking-wide text-opacity-50 text-ydblack ">
              The pain of distinctive design and branding comes with creating
              transactional documents for your business. Aisely does all the
              work for you. No drag-and-drop, just a few settings and a template
              is all you'll ever need.
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto relative bg-gradient-to- from-indigo-200 to-teal-50 py-20">
        <div className="px-6">
          <div className="max-w-md lg:max-w-xl xl:pl-24">
            Get acces to{" "}
            <span className="text-red-500 text-opacity-70 text-4xl italic font-Titillium font-bold">
              1000+
            </span>{" "}
            professinal templates to suit your brand designed by our team of
            experts to suit your brand perfectly
          </div>
          <div className="md:flex md:w-[130%] lg:w-[100%] xl:pl-24 ">
            <div className="bg-white md:min-w-max md:max-w-max rounded-sm h-auto md:h-40  my-4 px-4 py-2">
              <p className="my-4 text-sm px-4">
                In many ways, we stand out from our competitors
              </p>
              <div
                className="grid grid-flow-row
               md:grid-cols-2 md:grid-rows-2 gap-4"
              >
                <div className="flex items-center">
                  <span className="h-5 w-5 p-1 bg-red-500 block rounded-full mx-4">
                    <img
                      src="static/img/check.svg"
                      alt="check icon"
                      className="h-full w-full block fill-white"
                    />
                  </span>
                  <span>10x more documents</span>
                </div>
                <div className="flex items-center">
                  <span className="h-5 w-5 p-1 bg-red-500 block rounded-full mx-4">
                    <img
                      src="static/img/check.svg"
                      alt="check icon"
                      className="h-full w-full block fill-white"
                    />
                  </span>
                  <span>100x more templates</span>
                </div>
                <div className="flex items-center">
                  <span className="h-5 w-5 p-1 bg-red-500 block rounded-full mx-4">
                    <img
                      src="static/img/check.svg"
                      alt="check icon"
                      className="h-full w-full block fill-white"
                    />
                  </span>
                  <span>100x ease & efficiency</span>
                </div>
                <div className="flex items-center">
                  <span className="h-5 w-5 p-1 bg-red-500 block rounded-full mx-4">
                    <img
                      src="static/img/check.svg"
                      alt="check icon"
                      className="h-full w-full block fill-white"
                    />
                  </span>
                  <span>and lots more</span>
                </div>
              </div>
            </div>
            <div className="bg-aisely-10 h-[40vh] bg-no-repeat bg-center max-w-screen-lg md:w-1/2 md:max-w-sm lg:max-w-md mx-auto px-6 lg:px-0 mt-10 text-xl lg:text-2xl"></div>
          </div>
        </div>
      </section>
      <section className="md:h-[50vh] py-10 bg-ydgreen ">
        <div className="md:flex-row-reverse md:flex max-w-screen-lg mx-auto">
          <div className="bg-aisely-15 w-full h-[40vh] bg-cover bg-right-top-top flex items-start align-center transform lg:translate-x-1/4">
            <div className="text-green-50 px-6 md:backdrop-blur-sm">
              <span className="uppercase text-xs">
                more than want you think
              </span>
              <h2 className="text-2xl font-semibold italic">
                Aisely is All-In-One
              </h2>
            </div>
          </div>
          <p className="flex justify-center items-center px-6 text-green-50 max-w-lg">
            Aisely will offer more than basic documents but top-class
            transactional documents like investments documents. It will provide
            business-must-features like e-stamps, brand settings,
            stats/analytics, synchronization collaboratio, payment reception and
            many more
          </p>
        </div>
      </section>
      <section className="w-ful flex items-center bg-white py-10">
        <div className=" max-w-screen-lg flex mx-auto">
          <div className="min-w-max flex items-center text-sm p-2 border-r border-ydblack border-opacity-50 mx-2">
            Meet our pilot customer
          </div>
          <OwlCarousel
            className="owl-theme"
            dots={false}
            responsive={{
              0: {
                items: 1,
              },
              600: {
                items: 3,
              },
              1000: {
                items: 4,
              },
            }}
            autoplay={true}
            loop={!true}
            autoplayTimeout={2000}
            autoplayHoverPause={true}
            margin={1}
          >
            <div className="item">
              <img src="static/img/customer1.jpeg" className="" />
            </div>
            <div className="item">
              <img src="static/img/customer2.jpeg" className="" />
            </div>
            <div className="item">
              <img src="static/img/customer3.jpeg" className="" />
            </div>
            <div className="item">
              <img src="static/img/customer4.jpeg" className="" />
            </div>
          </OwlCarousel>
        </div>
      </section>
      <section className="mx-auto relative bg-ydgreen py-10">
        <div className="bg-aisely-13 xl:-left-10 absolute top-0 h-[40vh] w-56 bg-cover bg-center "></div>
        <div className="md:max-w-screen-md md:mx-auto bg-green-50 rounded-sm bg-opacity-20 backdrop-blur-xl p-4 md:px-8 text-green-50 mx-4">
          <h2 className="text-center font-semibold text-2xl my-4">
            Become a pilot Customer
          </h2>
          <p className="text-base my-4">
            We would love to work with you. We would love to hear your reviews
            and suggestions about Aisely. We would love you to download our MVP
            on Google Play and use it.And we would love you to be one of our
            first users when we launch the web and cloud-based version for
            Aisely.
          </p>
          <PilotCustomer />
        </div>
      </section>
      <section className="mx-auto relative h-[90vh] md:h-[75vh] bg-white py-10">
        <div className="bg-aisely-16 h-[70vh] w-full bg-no-repeat -right-40 lg:-right-80 bg-center absolute top-0 z-0"></div>
        <div className="px-6 max-w-screen-lg mx-auto relative z-10">
          <div className="py-8">
            <span className="text-ydgreen text-sm uppercase">
              aisely the APP
            </span>
            <h2 className="text-2xl font-bold">Aisely at your fingertips</h2>
          </div>
          <p className="max-w-xs">
            The power of Aisely at the palm of your hand. download our MVP on
            Google Play and taste the power of document automation just on your
            mobile phone.
          </p>
        </div>
        <div className="mt-8 px-6 max-w-screen-lg mx-auto">
          <a href="https://t.co/JzzeY8G5Mm" className="block h-10">
            <img src="static/img/aisely1.svg" className="h-full w-auto" />
          </a>
        </div>
        <div className="mt-4 px-6 max-w-screen-lg mx-auto">
          <a href="https://t.co/JzzeY8G5Mm" className="block h-10">
            <img
              src="static/images/applestore.jpeg"
              className="h-full w-auto"
            />
          </a>
        </div>
        <div className="bg-aisely-16 absolute h-full bg-cover bg-right"></div>
      </section>
      <section className="mx-auto relative py-10">
        <div className="px-6 max-w-screen-lg mx-auto">
          <div className="text-center">
            <span className="text-sm text-ydgreen">GREAT THINGS</span>
            <h2 className="text-2xl font-semibold">The Vision</h2>
          </div>
          <div className="my-4 max-w-screen-md text-center mx-auto">
            To be in 5 years the leading document automation solution for
            transactional documents and the first preference for businesses,
            both small and large.
          </div>
        </div>
        <div className="h-16 mx-auto w-40">
          <img src="static/img/aisely3.svg" className="h-full w-auto" />
        </div>
        <div className="px-6 max-w-screen-lg mt-10 mx-auto">
          <div className="text-center">
            <span className="text-sm text-ydgreen">TO SERVE YOU BETTER</span>
            <h2 className="text-2xl font-semibold">Objectives</h2>
          </div>
          <div className="my-4 max-w-screen flex flex-wrap md:flex-nowrap justify-between ">
            <div className="p-4 before:[content:'#1'] before:h-8 before:w-8 before:absolute relative before:-top-4 before:-left-0 before:bg-white before:text-ydgreen before:p-1.5 before:text-sm before:rounded-full bg-white rounded-sm shadow-sm flex items-center mx-auto max-w-sm my-4 md:mx-1">
              <p>
                Provide a througly simple, user-friendly and interactive
                interface, ase well as a smooth and seamless experience across
                the app
              </p>
            </div>
            <div className="p-4 before:[content:'#2'] before:h-8 before:w-8 before:absolute relative before:-top-4 before:-left-0 before:bg-white before:text-ydgreen before:p-1.5 before:text-sm before:rounded-full bg-white rounded-sm shadow-sm flex items-center mx-auto max-w-sm my-4 md:mx-1">
              <p>
                Automate every task and operation and optimize workflows 10x
                through the app, thereby making 100% efficient process of
                creating and sharing transactional documnents
              </p>
            </div>
            <div className="p-4 before:[content:'#3'] before:h-8 before:w-8 before:absolute relative before:-top-4 before:-left-0 before:bg-white before:text-ydgreen before:p-1.5 before:text-sm before:rounded-full bg-white rounded-sm shadow-sm flex items-center mx-auto max-w-sm my-4 md:mx-1">
              <p>
                Provide 1000 more outstanding templates and business resources
                like e-stamps for transactional documents, more than any other
                existing solution.
              </p>
            </div>
            <div className="p-4 before:[content:'#4'] before:h-8 before:w-8 before:absolute relative before:-top-4 before:-left-0 before:bg-white before:text-ydgreen before:p-1.5 before:text-sm before:rounded-full bg-white rounded-sm shadow-sm flex items-center mx-auto max-w-sm my-4 md:mx-1">
              <p>
                Provide cloud computing solutions for storage, security
                synchronization, collaboration and many more; and business
                features like stats, notes/feedback and payment.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white text-opacity-70">
        <footer className="p-4 text-gray-900 text-opacity-70 sm:p-6 max-w-screen-lg mx-auto">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src="static/images/aisley5.png"
                  className="mr-4 h-8"
                  alt="Aisely logo"
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Aisely
                </span>
              </a>
              <div className="max-w-sm pr-8 text-sm my-2">
                Aisely is a cloud-based software that let's businesses create
                and share excellent, branded transactional documents
                (invoices,receipts,orders,bills,shipping documents, contracts,
                agreemets, investment documents etc.) very easily and within
                minimal time
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Get In touch
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      href="mailto:admin@aisely.com"
                      className="text-gray-600 hover:underline dark:text-gray-400"
                    >
                      admin@aisely.com
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="tel:+2348169800313"
                      rel="nofollow"
                      className="text-gray-600 hover:underline dark:text-gray-400"
                    >
                      +2348169800313
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      rel="nofollow"
                      className="text-gray-600 hover:underline dark:text-gray-400"
                    >
                      Abeokuta, Nigeria
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      href="#Vision"
                      className="text-gray-600 hover:underline dark:text-gray-400"
                    >
                      Watch video
                    </a>
                  </li>
                  <li>
                    <a
                      href="#become_our_pilot_customer"
                      className="text-gray-600 hover:underline dark:text-gray-400"
                    >
                      Become our pilot customer
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      href="#PrivacyAndConditions"
                      className="text-gray-600 hover:underline dark:text-gray-400"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#PrivacyAndConditions"
                      className="text-gray-600 hover:underline dark:text-gray-400"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2022{" "}
              <a href="/" target="_blank" className="hover:underline">
                Aisely™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </footer>
      </section>
    </section>
  );
}
