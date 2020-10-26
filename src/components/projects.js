import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import Footer from "./footer";


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(

        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: "450", margin: "auto",marginBottom:"30px"}}>
            <CardTitle style={{color: "black", height: "176px", background: 'url("image/img.png") center / cover'}} >Pizza 4 U</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored
              href="https://github.com/Pihonak18/Pizza4you.git"
              rel="noopener noreferrer"
              target="_blank">
              <i className="github" aria-hidden="true" />
              GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: "450", margin: "auto",marginBottom:"30px"}}>
            <CardTitle style={{color: "black", height: "176px", background: 'url("image/img.png") center / cover'}} >Covid Tracker</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <Button colored
              href="https://github.com/aimeemillard/Project2.git"
              rel="noopener noreferrer"
              target="_blank">
              <i className="github" aria-hidden="true" />
              GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={6} style={{minWidth: "450", margin: "auto",marginBottom:"30px"}}>
            <CardTitle style={{color: "black", height: "176px", background: 'url("image/img.png") center / cover'}} >Dionysus</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
            <Button colored
              href="https://github.com/pierre8237/4CODERZ.git"
              rel="noopener noreferrer"
              target="_blank">
              <i className="github" aria-hidden="true" />
              GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Grid>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: "450", margin: "auto",marginBottom:"30px"}}>
            <CardTitle style={{color: "black", height: "176px", background: 'url("image/img.png") center / cover'}} >Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: "450", margin: "auto",marginBottom:"30px"}}>
            <CardTitle style={{color: "black", height: "176px", background: 'url("image/img.png") center / cover'}} >Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={6} style={{minWidth: "450", margin: "auto",marginBottom:"30px"}}>
            <CardTitle style={{color: "black", height: "176px", background: 'url("image/img.png") center / cover'}} >Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Grid>


      )
    } else if(this.state.activeTab === 2) {
      return (
        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: "450", margin: "auto",marginBottom:"30px"}}>
            <CardTitle style={{color: "black", height: "176px", background: 'url("image/img.png") center / cover'}} >Project #1</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: "450", margin: "auto",marginBottom:"30px"}}>
            <CardTitle style={{color: "black", height: "176px", background: 'url("image/img.png") center / cover'}} >Project #2</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={6} style={{minWidth: "450", margin: "auto",marginBottom:"30px"}}>
            <CardTitle style={{color: "black", height: "176px", background: 'url("image/img.png") center / cover'}} >Project #3</CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: "#fff"}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </Grid>


      )
    // } else if(this.state.activeTab === 3) {
    //   return (
    //     <div><h1>Projects</h1></div>
    //   )
    }

  }



  render() {
    return(
      <div className="projects">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projects</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          {/* <Tab>Tab 4</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
          <Footer />
      </div>
    )
  }
}

export default Projects;
