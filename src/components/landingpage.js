import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell col={12}>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXMzMzPz8+vr6/Ly8vAwMCRkZHDw8PGxsaWlpaenp6Tk5PCwsK2trahoaG6urqsrKympqZJMGkaAAAFGElEQVR4nO2dbZfbKAyFEWAD5vX//9q9giT2ZLbT9pw2TXfv0zMuiWUfXQsJ/EUxhhBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQ8lsR8OXwi+vks/F3r3s5bRyxeqfD0OPR9/mts2mr/ovLJI94pOKejVs6YnO/1+Wfo8UtqVM6TltMW5ruWR3GLySGeMQUN/tk3CA7xvL7/f5hJB0lhLbVYKRtfQ/9KJhlOdYcylG/OeGkI9rBJ9V1MQ718MEfKbxSw9fkrRv1N+7GJXXMVQTR9W2Hv317eHpLrofikDTW4vE8LsZ4SHg+6/guLGekbFl8HDLFNgk16rBFe/M0WKtis73PvzyNTcDlF2MZh6ZxiN8O/ssJWT2XEXconE9ewxLS8n/9p6QZnPoIjlvXtY/GUuf8dCO+j0Ile3t0B29nrdCw7Ct4F4U+Hk78Nq5VMvgSkb8XY0nTwPXjrRTKdhxpx0ydM8y4zco+yw0ys96N4LR1NfqL54joceCLi7HEfqvEr5XwHVRhtA656NZHi/ozVw+p6REzH1OP48N1CRciZhdjmXXLiN3eakU04kpEHp4xNJ9jqCE+4sdFQKQl5O6/xvC9FGoB3TwkZB1f8tCdeQiw33nOLqwL9mos8f3ysLUZl7Y1lPs521Yt7U+VRpe+I51+5zKv04BfjKXWd6ulWCbWZgvrYZ6ein2sh+ZcD1VATId9XFfWuuEe6+E0njuHuR14H4VlJtH0bG1TTEVddWs3Y7dzY1pibzHt94+37UFbe5q7MYQ30XDbt1GIrEu7oFjo7NItKeaqFswWuyCo8bRLkDHOICKkTTR8/oPxHhP2dynmPyDlG2AHHee7hT50vGbUbRXMsUUM2+NtsW+YwuF4uI7oHakeK1gXY1TcGs8H8Q6EnuDrrDHGw7m6VIUBueVR88Om2qDz3HCWhBelbp6MncVblX2jVwvgQs53j8L+GLpzqJ/8PpeBfHljVGP3yRjD/d0WQ0IIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEELIm5PLefzL8N7/SI85Pxvw+aeeibOnmwu7n3eZN9p3/N3Pu331ggs+u3UKw1/o/I8g0dq+r3byZ9NrWQe5d8IWyXeFcjfRP+vnl83WYb02uDVuJJFHd8zebYeJH310MxsRO7u9uLEkvJFSpNcu0p144zDwtQcjvaTdde1EiKNdCuFqlt0iIKtbqNdumJBts2iT2iAQeyos1kkIJkCls0WqbRL6q9ufLoVwBRJKc9HkLm0YD53JGhnN9KbHOhXmtOcRTPdS7FRYMD2LKvTabLhZN8IZQ7n18fWzmWSVFIaz7dXtwOcsDXV64HrrpXmxw9oIP9fZYfUpPPJQ4+aH6bPlt1qqwVKYDDTKFwoF+syrG7xKyj7AFYEHMuw+MN+szTlrdPHncw5wHbNvKuxLDCbtvBjGM0VvCqVEfyrEtNeWrqgwmP7SOr7WxumvV7jyC/+QecPYirwZfs5S0UzypQnKRVoKYynaEdqvRqj3SvNQKDKPMaO0ShRXC8oQ7jKQnm4+Mnm5QjNXOIRIW5t6b3b1OSCK64xrtqAAFttWT/dWtIvyykIVp0K1/s9Bud0Qk8BiLuNjwIV6BncJ5/k/w8cHe/kpkqffTTCrNfR3bnb5OZRPN/wbyKn9XQ7/PP91fYT8j/gHpIIpSX4o390AAAAASUVORK5CYII="
            alt="img"
            className="land-img"
          />

          <div className="banner-text">
            <h1>Full-stack Developer</h1>

            <hr />

            <p>
              HTML | CSS | Javascript | JQuery | Bootstrap | MERN 
            </p>

            <div className="social-links">
              {/* LinkedIn */}
              <a
                href="www.linkedin.com/in/aimee-navarro-millard-5a19b9102"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />
              </a>

              {/* Github */}
              <a
                href="https://github.com/aimeemillard"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

            </div>
          </div>
        </Cell>
      </Grid>
    );
  }
}

export default Landing;
