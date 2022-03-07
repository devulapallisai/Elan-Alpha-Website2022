import React from "react";
import Footer from "./Footer";

function Infocard({
  width,
  pagecard,
  name,
  description,
  statement,
  submissionformat,
  regdetails,
  struct,
  judgingcriteria,
  eventrules,
  certifications,
  contactdetails,
  timeline,
}) {
  return (
    <div
      className={`w-[${width}] ${
        pagecard ? "mt-[8vh] lg:mt-[14vh]" : "mt-[20px]"
      }`}
    >
      {pagecard ? (
        <div className="mt-[20px]">
          <img
            src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt="EventsImg"
            className="mx-auto max-w-[85vw] md:max-w-[50vw]"
          />
        </div>
      ) : (
        ""
      )}
      <div className="text-center text-black font-headingbold text-xl md:text-2xl mt-[5px] md:mt-[12px]">
        {name}
      </div>
      <div className="container mx-auto mt-[2vh]">
        {description ? (
          <>
            <div className="font-heading font-bold md:text-lg text-sm text-black mx-[2vw] mt-[2vh] md:mt-[2vw]">
              Introduction
            </div>
            <p className="mx-[2vw] my-[5px] text-black font-text">
              {description}
            </p>
          </>
        ) : (
          ""
        )}
        {struct ? (
          <>
            <div className="font-heading font-bold md:text-lg text-sm text-black mx-[2vw] mt-[2vh] md:mt-[2vw]">
              Structure:
            </div>
            <p className="mx-[2vw] my-[5px] text-black font-text">{struct}</p>
          </>
        ) : (
          ""
        )}
        {timeline ? (
          <>
            <div className="font-heading font-bold md:text-lg text-sm text-black mx-[2vw] mt-[2vh] md:mt-[2vw]">
              Timeline:
            </div>
            <div className="mx-[2vw] my-[5px] text-black font-text">
              <table class="table-auto max-w-[400px]">
                <thead>
                  <tr>
                    <th className="font-text text-black border-2 border-solid border-black w-3/5">
                      Registration Start Date
                    </th>
                    <td className="font-text text-black border-2 border-solid border-black">
                      {timeline[0]}
                    </td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th className="font-text text-black border-2 border-solid border-black w-3/5">
                      Registration End Date
                    </th>
                    <td className="font-text text-black border-2 border-solid border-black">
                      {timeline[1]}
                    </td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th className="font-text text-black border-2 border-solid border-black w-3/5">
                      Event time
                    </th>
                    <td className="font-text text-black border-2 border-solid border-black">
                      {timeline[2]}
                    </td>
                  </tr>
                </thead>
                <thead>
                  <tr>
                    <th className="font-text text-black border-2 border-solid border-black w-3/5">
                      Winner Announcement
                    </th>
                    <td className="font-text text-black border-2 border-solid border-black">
                      {timeline[3]}
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
          </>
        ) : (
          ""
        )}
        {statement ? (
          <>
            <div className="font-heading font-bold md:text-lg text-sm text-black mx-[2vw] mt-[2vh] md:mt-[2vw]">
              Problem Statement:
            </div>
            <div className="mx-[2vw] pl-[5px] md:pl-[20px]">
              {statement.map((item) => (
                <li className="my-[2px] text-black font-text">{item}</li>
              ))}
            </div>
          </>
        ) : (
          ""
        )}
        {judgingcriteria ? (
          <>
            <div className="font-heading font-bold md:text-lg text-sm text-black mx-[2vw] mt-[2vh] md:mt-[2vw]">
              Judging Criteria:
            </div>
            <div className="mx-[2vw] pl-[5px] md:pl-[20px]">
              {statement.map((item) => (
                <li className="my-[2px] text-black font-text">{item}</li>
              ))}
            </div>
          </>
        ) : (
          ""
        )}
        {submissionformat ? (
          <>
            <div className="font-heading font-bold md:text-lg text-sm text-black mx-[2vw] mt-[2vh] md:mt-[2vw]">
              Submission format:
            </div>
            <p className="mx-[2vw] my-[5px] text-black font-text">
              {submissionformat}
            </p>
          </>
        ) : (
          ""
        )}
        {eventrules ? (
          <>
            <div className="font-heading font-bold md:text-lg text-sm text-black mx-[2vw] mt-[2vh] md:mt-[2vw]">
              Event Rules:
            </div>
            <div className="mx-[2vw] pl-[5px] md:pl-[20px]">
              {eventrules.map((item) => (
                <li className="my-[2px] text-black font-text">{item}</li>
              ))}
            </div>
          </>
        ) : (
          ""
        )}
        {regdetails ? (
          <>
            <div className="font-heading font-bold md:text-lg text-sm text-black mx-[2vw] mt-[2vh] md:mt-[2vw]">
              Registration Details:
            </div>
            <div className="mx-[2vw] font-text my-[5px] text-black">
              {regdetails}
            </div>
          </>
        ) : (
          ""
        )}
        {certifications ? (
          <>
            <div className="font-heading font-bold md:text-lg text-sm text-black mx-[2vw] mt-[2vh] md:mt-[2vw]">
              Certifications and Prizes:
            </div>
            <div className="mx-[2vw] pl-[5px] md:pl-[20px]">
              {certifications.map((item) => (
                <li className="my-[2px] text-black font-text">{item}</li>
              ))}
            </div>
          </>
        ) : (
          ""
        )}
        {contactdetails ? (
          <>
            <div className="font-heading font-bold md:text-lg text-sm text-black mx-[2vw] mt-[2vh] md:mt-[2vw]">
              CONTACT DETAILS:
            </div>
            <div className="mt-[5px] mx-[2vw] flex w-full justify-between">
              {contactdetails.map(([item1, item2]) => (
                <div className="font-text text-black flex-col">
                  <div className="font-text text-black">
                    Organiser Name : {item1}
                  </div>
                  <div className="font-text text-black">
                    Mobile Number : {item2}
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <br />
      {pagecard ? (
        <div className="container mx-auto">
          <Footer />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Infocard;
