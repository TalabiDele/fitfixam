import { useState } from "react";
import { Container, Wrapper } from "./Style";

const FaqComponent = ({ artisanFaq, clientFaq, generalFaq }) => {
  const [isFAQ, setIsFAQ] = useState(false);
  const [isArtisan, setIsArtisan] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isGeneral, setIsGeneral] = useState(false);
  const [isQuestion, setIsQuestion] = useState(false);
  const [isComplaint, setIsComplaint] = useState(false);

  const getFaq = () => {
    setIsFAQ(!isFAQ);

    // setIsArtisan(false);
    // setIsClient(false);
    // setIsGeneral(false);
    // setIsQuestion(false);
    // setIsComplaint(false);
  };

  const getArtisanFaq = () => {
    setIsArtisan(true);
    setIsClient(false);
    setIsGeneral(false);
    setIsQuestion(false);
    setIsComplaint(false);
  };

  const getClientFaq = () => {
    setIsArtisan(false);
    setIsClient(true);
    setIsGeneral(false);
    setIsQuestion(false);
    setIsComplaint(false);
  };

  const getGeneralFaq = () => {
    setIsArtisan(false);
    setIsClient(false);
    setIsGeneral(true);
    setIsQuestion(false);
    setIsComplaint(false);
  };

  const getQuestion = () => {
    setIsArtisan(false);
    setIsClient(false);
    setIsGeneral(false);
    setIsQuestion(true);
    setIsComplaint(false);
  };

  const getComplaint = () => {
    setIsArtisan(false);
    setIsClient(false);
    setIsGeneral(false);
    setIsQuestion(false);
    setIsComplaint(true);
  };

  return (
    <Container>
      <Wrapper>
        <div className="container">
          <div className="help">
            <h1>Help</h1>
            <div className="faq">
              <div className="dot"></div>
              <div className="category">
                <p className="header" onClick={() => getFaq()}>
                  FAQs
                </p>
                {isFAQ ? (
                  <div className="dropdown">
                    <p onClick={() => getArtisanFaq()}>
                      Artisans/Service providing companies
                    </p>
                    <p onClick={() => getClientFaq()}>Non-artisans/clients</p>
                    <p onClick={() => getGeneralFaq()}>General question</p>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="question">
              <div className="dot"></div>
              <p className="hearder" onClick={() => getQuestion()}>
                Ask a question
              </p>
            </div>
            <div className="complaint">
              <div className="dot"></div>
              <p className="header" onClick={() => getComplaint()}>
                Lodge a complaint
              </p>
            </div>
            <div className="about">
              <div className="dot"></div>
              <p className="header">About us</p>
            </div>
            <div className="contact">
              <div className="dot"></div>
              <div className="header">Contact us</div>
            </div>
          </div>
          <div className="frequently">
            <>
              {isArtisan ? (
                <div>
                  <h1>Frequently Asked Questions</h1>
                  <h2>Artisans / Service Providing companies</h2>
                  {artisanFaq.map((e) => (
                    <div key={e.id} className="wrap">
                      <p>
                        Q{e.id}: {e.question}
                      </p>
                      <p>{e.answer}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </>
            <>
              {isClient ? (
                <div>
                  <h1>Frequently Asked Questions</h1>
                  <h2>Non-artisans/clients</h2>
                  {clientFaq.map((e) => (
                    <div key={e.id} className="wrap">
                      <p>
                        Q{e.id}: {e.question}
                      </p>
                      <p>{e.answer}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </>
            <>
              {isGeneral ? (
                <div>
                  <h1>Frequently Asked Questions</h1>
                  <h2>General Questions</h2>
                  {generalFaq.map((e) => (
                    <div key={e.id} className="wrap">
                      <p>
                        Q{e.id}: {e.question}
                      </p>
                      <p>{e.answer}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </>
            <>
              {isQuestion ? (
                <div className="question">
                  <h2>Ask Questions</h2>
                  <p>How can we help you?</p>
                  <form>
                    <input type="email" placeholder="Enter Email" />
                    <textarea
                      placeholder="Leave a question or comment..."
                      rows="15"
                    ></textarea>
                    <button>Send your Questions</button>
                  </form>
                </div>
              ) : (
                <></>
              )}
            </>
            <>
              {isComplaint ? (
                <div className="question">
                  <h2>Lodge a complaint</h2>
                  <p>
                    Having trouble navigating the website? Send a message and
                    we‘ll get right back to you
                  </p>
                  <form>
                    <input type="email" placeholder="Enter Email" />
                    <textarea
                      placeholder="Leave your complaints here..."
                      rows="15"
                    ></textarea>
                    <button>Send your Complaints</button>
                  </form>
                </div>
              ) : (
                <></>
              )}
            </>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default FaqComponent;
