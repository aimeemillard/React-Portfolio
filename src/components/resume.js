import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Footer from "./footer";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                id="resumeImg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXMzMzPz8+vr6/Ly8vAwMCRkZHDw8PGxsaWlpaenp6Tk5PCwsK2trahoaG6urqsrKympqZJMGkaAAAFGElEQVR4nO2dbZfbKAyFEWAD5vX//9q9giT2ZLbT9pw2TXfv0zMuiWUfXQsJ/EUxhhBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ8lsR8OXwi+vks/F3r3s5bRyxeqfD0OPR9/mts2mr/ovLJI94pOKejVs6YnO/1+Wfo8UtqVM6TltMW5ruWR3GLySGeMQUN/tk3CA7xvL7/f5hJB0lhLbVYKRtfQ/9KJhlOdYcylG/OeGkI9rBJ9V1MQ718MEfKbxSw9fkrRv1N+7GJXXMVQTR9W2Hv317eHpLrofikDTW4vE8LsZ4SHg+6/guLGekbFl8HDLFNgk16rBFe/M0WKtis73PvzyNTcDlF2MZh6ZxiN8O/ssJWT2XEXconE9ewxLS8n/9p6QZnPoIjlvXtY/GUuf8dCO+j0Ile3t0B29nrdCw7Ct4F4U+Hk78Nq5VMvgSkb8XY0nTwPXjrRTKdhxpx0ydM8y4zco+yw0ys96N4LR1NfqL54joceCLi7HEfqvEr5XwHVRhtA656NZHi/ozVw+p6REzH1OP48N1CRciZhdjmXXLiN3eakU04kpEHp4xNJ9jqCE+4sdFQKQl5O6/xvC9FGoB3TwkZB1f8tCdeQiw33nOLqwL9mos8f3ysLUZl7Y1lPs521Yt7U+VRpe+I51+5zKv04BfjKXWd6ulWCbWZgvrYZ6ein2sh+ZcD1VATId9XFfWuuEe6+E0njuHuR14H4VlJtH0bG1TTEVddWs3Y7dzY1pibzHt94+37UFbe5q7MYQ30XDbt1GIrEu7oFjo7NItKeaqFswWuyCo8bRLkDHOICKkTTR8/oPxHhP2dynmPyDlG2AHHee7hT50vGbUbRXMsUUM2+NtsW+YwuF4uI7oHakeK1gXY1TcGs8H8Q6EnuDrrDHGw7m6VIUBueVR88Om2qDz3HCWhBelbp6MncVblX2jVwvgQs53j8L+GLpzqJ/8PpeBfHljVGP3yRjD/d0WQ0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEELIm5PLefzL8N7/SI85Pxvw+aeeibOnmwu7n3eZN9p3/N3Pu331ggs+u3UKw1/o/I8g0dq+r3byZ9NrWQe5d8IWyXeFcjfRP+vnl83WYb02uDVuJJFHd8zebYeJH310MxsRO7u9uLEkvJFSpNcu0p144zDwtQcjvaTdde1EiKNdCuFqlt0iIKtbqNdumJBts2iT2iAQeyos1kkIJkCls0WqbRL6q9ufLoVwBRJKc9HkLm0YD53JGhnN9KbHOhXmtOcRTPdS7FRYMD2LKvTabLhZN8IZQ7n18fWzmWSVFIaz7dXtwOcsDXV64HrrpXmxw9oIP9fZYfUpPPJQ4+aH6bPlt1qqwVKYDDTKFwoF+syrG7xKyj7AFYEHMuw+MN+szTlrdPHncw5wHbNvKuxLDCbtvBjGM0VvCqVEfyrEtNeWrqgwmP7SOr7WxumvV7jyC/+QecPYirwZfs5S0UzypQnKRVoKYynaEdqvRqj3SvNQKDKPMaO0ShRXC8oQ7jKQnm4+Mnm5QjNXOIRIW5t6b3b1OSCK64xrtqAAFttWT/dWtIvyykIVp0K1/s9Bud0Qk8BiLuNjwIV6BncJ5/k/w8cHe/kpkqffTTCrNfR3bnb5OZRPN/wbyKn9XQ7/PP91fYT8j/gHpIIpSX4o390AAAAASUVORK5CYII="
                alt="img"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Aimee Millard</h2>
            <h4 style={{ color: "grey" }}>Full-stack Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Milfrod, CT 06460</p>
            <h5>Phone</h5>
            <p>(650) 278-9899</p>
            <h5>Email</h5>
            <p>an.millard19@gmail.com</p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2020}
              endYear={2020}
              schoolName="Trilogy Education at UConn"
              schoolDescription="Certificate in Full-Stack Development"
            />

            <Education
              startYear={2013}
              endYear={2018}
              schoolName="Thomas Edison State University"
              schoolDescription="Bachelors Degree in Respiratory Care"
            />
            <hr style={{ borderTop: "3px solid white" }} />

            <h2>Work History</h2>

            <Experience
              startYear={2018}
              endYear={2020}
              jobName="West Haven Connecticut Veterans Affairs Medical Center"
              jobDescription="Resgistered Respiratory Therapist"
            />

            <Experience
              startYear={2013}
              endYear={2018}
              jobName="US Army Reserves"
              jobDescription="Respiratory Specialist"
            />
            <hr style={{ borderTop: "3px solid white" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" />
            <Skills skill="HTML/CSS" />
            <Skills skill="NodeJS" />
            <Skills skill="React" />
            <Skills skill="Express" />
          </Cell>
          <Footer />
        </Grid>
      </div>
    );
  }
}

export default Resume;
import React from "react";
import ReactDOM from "react-dom";
import Container from "../components/Container";
import Col from "../components/Col";
import Row from "../components/Row";
import Resumepdf from "../images/Shelby_Palumbo_Resume.pdf";
import createReactClass from "create-react-class";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wrapper from "../components/Wrapper";
import Jumbotron from "../components/Jumbotron";

function SPResume() {
  const style = {
    resumeStyle: {
      width: "100%",
      height: "450px",
    },
  };
  var Resume = createReactClass({
    render() {
      return (
        <iframe style={style.resumeStyle} title="resume" src={Resumepdf} />
      );
    },
    componentDidMount() {
      this.renderFrameContents();
    },
    renderFrameContents() {
      var doc = ReactDOM.findDOMNode(this).contentDocument;
      if (doc.readyState === "complete") {
        ReactDOM.render(this.props.children, doc.body);
      } else {
        setTimeout(this.renderFrameContents, 0);
      }
    },
    componentDidUpdate() {
      this.renderFrameContents();
    },
    componentWillUnmount() {
      ReactDOM.unmountComponentAtNode(
        ReactDOM.findDOMNode(this).contentDocument.body
      );
    },
  });
  return (
    <div>
      <Jumbotron />
      <Wrapper>
        <Container>
          <Row>
            <Col size="lg-2 sm-12">
              <Navbar />
            </Col>
            <Col size="lg-10 sm-12">
              <h2 className="page-title">My Resume</h2>
              <hr />
              <Resume />
            </Col>
          </Row>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default SPResume;
