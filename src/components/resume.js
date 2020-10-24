import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: "center"}}>
              <img id="resumeImg"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXMzMzPz8+vr6/Ly8vAwMCRkZHDw8PGxsaWlpaenp6Tk5PCwsK2trahoaG6urqsrKympqZJMGkaAAAFGElEQVR4nO2dbZfbKAyFEWAD5vX//9q9giT2ZLbT9pw2TXfv0zMuiWUfXQsJ/EUxhhBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ8lsR8OXwi+vks/F3r3s5bRyxeqfD0OPR9/mts2mr/ovLJI94pOKejVs6YnO/1+Wfo8UtqVM6TltMW5ruWR3GLySGeMQUN/tk3CA7xvL7/f5hJB0lhLbVYKRtfQ/9KJhlOdYcylG/OeGkI9rBJ9V1MQ718MEfKbxSw9fkrRv1N+7GJXXMVQTR9W2Hv317eHpLrofikDTW4vE8LsZ4SHg+6/guLGekbFl8HDLFNgk16rBFe/M0WKtis73PvzyNTcDlF2MZh6ZxiN8O/ssJWT2XEXconE9ewxLS8n/9p6QZnPoIjlvXtY/GUuf8dCO+j0Ile3t0B29nrdCw7Ct4F4U+Hk78Nq5VMvgSkb8XY0nTwPXjrRTKdhxpx0ydM8y4zco+yw0ys96N4LR1NfqL54joceCLi7HEfqvEr5XwHVRhtA656NZHi/ozVw+p6REzH1OP48N1CRciZhdjmXXLiN3eakU04kpEHp4xNJ9jqCE+4sdFQKQl5O6/xvC9FGoB3TwkZB1f8tCdeQiw33nOLqwL9mos8f3ysLUZl7Y1lPs521Yt7U+VRpe+I51+5zKv04BfjKXWd6ulWCbWZgvrYZ6ein2sh+ZcD1VATId9XFfWuuEe6+E0njuHuR14H4VlJtH0bG1TTEVddWs3Y7dzY1pibzHt94+37UFbe5q7MYQ30XDbt1GIrEu7oFjo7NItKeaqFswWuyCo8bRLkDHOICKkTTR8/oPxHhP2dynmPyDlG2AHHee7hT50vGbUbRXMsUUM2+NtsW+YwuF4uI7oHakeK1gXY1TcGs8H8Q6EnuDrrDHGw7m6VIUBueVR88Om2qDz3HCWhBelbp6MncVblX2jVwvgQs53j8L+GLpzqJ/8PpeBfHljVGP3yRjD/d0WQ0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEELIm5PLefzL8N7/SI85Pxvw+aeeibOnmwu7n3eZN9p3/N3Pu331ggs+u3UKw1/o/I8g0dq+r3byZ9NrWQe5d8IWyXeFcjfRP+vnl83WYb02uDVuJJFHd8zebYeJH310MxsRO7u9uLEkvJFSpNcu0p144zDwtQcjvaTdde1EiKNdCuFqlt0iIKtbqNdumJBts2iT2iAQeyos1kkIJkCls0WqbRL6q9ufLoVwBRJKc9HkLm0YD53JGhnN9KbHOhXmtOcRTPdS7FRYMD2LKvTabLhZN8IZQ7n18fWzmWSVFIaz7dXtwOcsDXV64HrrpXmxw9oIP9fZYfUpPPJQ4+aH6bPlt1qqwVKYDDTKFwoF+syrG7xKyj7AFYEHMuw+MN+szTlrdPHncw5wHbNvKuxLDCbtvBjGM0VvCqVEfyrEtNeWrqgwmP7SOr7WxumvV7jyC/+QecPYirwZfs5S0UzypQnKRVoKYynaEdqvRqj3SvNQKDKPMaO0ShRXC8oQ7jKQnm4+Mnm5QjNXOIRIW5t6b3b1OSCK64xrtqAAFttWT/dWtIvyykIVp0K1/s9Bud0Qk8BiLuNjwIV6BncJ5/k/w8cHe/kpkqffTTCrNfR3bnb5OZRPN/wbyKn9XQ7/PP91fYT8j/gHpIIpSX4o390AAAAASUVORK5CYII="
                alt="img"
                style={{height: "200px"}}
                 />
            </div>

            <h2 style={{paddingTop: "2em"}}>Aimee Millard</h2>
            <h4 style={{color: "grey"}}>Full-stack Developer</h4>
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
            <h5>Address</h5>
            <p>Milfrod, CT 06460</p>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>someone@example.com</p>
            
            <hr style={{borderTop: "3px solid #833fb2", width: "50%"}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={2020}
              schoolName="University"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2020}
                 endYear={2020}
                 schoolName="University"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: "3px solid white"}} />

              <h2>Work History</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Job 1"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Job 2"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid white'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"/>
              <Skills
                skill="HTML/CSS"/>
              <Skills
                skill="NodeJS"/>
              <Skills
                skill="React"/>
              <Skills
                skill="Express"/>
              
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
