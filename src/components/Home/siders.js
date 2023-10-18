import React,{useState} from 'react';

const Siders = () => {
      const [fly, setfly] = useState(false);
      let toggleFly = () => {
        if (fly === false) {
          setfly(true);
        } else {
          setfly(false);
        }
      };
    return (
      <>
        <div className="laschen links">
          {fly ? (
            <div className="left_flyout">
              <span id="lasche_beratung">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>Consulting</font>
                </font>
              </span>
              <br />
              <span id="lasche_tel">
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    +12 (0)5943 - 1881
                  </font>
                </font>
              </span>
              <br />
              <div className="space" />
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>You can reach </font>
              </font>
              <a href="/unser-team">
                <span style={{ textDecoration: "underline" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>our team</font>
                  </font>
                </span>
              </a>
              <br />
              <br />
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  Monday - Thursday from:
                </font>
              </font>
              <br />
              <b>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    8 a.m. to 5 p.m.
                  </font>
                </font>
              </b>
              <br />
              <br />
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>
                  {" "}
                  and Friday from:{" "}
                </font>
              </font>
              <br />
              <b>
                <font style={{ verticalAlign: "inherit" }}>
                  <font style={{ verticalAlign: "inherit" }}>
                    8 a.m. to 4 p.m
                  </font>
                </font>
              </b>{" "}
            </div>
          ) : (
            ""
          )}

          <div className="left_permanent" onClick={toggleFly}>
            <div className="img_5" />
            <div className="largetext">
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Consulting</font>
              </font>
            </div>
            <i className="icon--arrow-right6" />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>here </font>
            </font>
          </div>
        </div>

        <div className="laschen rechts">
          <a
            className="lasche_anfahrt"
            href="https://www.jansen-versand.de/anfahrt"
          >
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}> DIRECTIONS</font>
            </font>
            <div className="anfahrt_bg" />
            <strong>
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>opening hours</font>
              </font>
            </strong>
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>MON-THU: </font>
            </font>
            <br />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                8:00 a.m. - 5:00 p.m.
              </font>
            </font>
            <br />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>FRI: </font>
            </font>
            <br />
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>
                8:00 a.m. - 4:00 p.m
              </font>
            </font>
          </a>
        </div>
      </>
    );
}

export default Siders;
