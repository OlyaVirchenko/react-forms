import {Component, useState} from "react";
import Toolbar from "../Toolbar/Toolbar";
import ProjectList from "../ProjectList/ProjectList";
import Data from '../Data/Data'

import classes from './Portfolio.module.css';

const filters = ["All", "Websites", "Flayers", "Business Cards"];
const imageData = Data;

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentFilter: 'All',
      filteredImage: imageData
    }
    this.onSelectFilterHandler = this.onSelectFilterHandler.bind(this);
  }

  onSelectFilterHandler(event) {
    const filter = event.target.textContent;
    let filteredImage;
    if (filter === 'All') {
      filteredImage = imageData;
    } else {
      filteredImage = imageData.filter(image => image.category === filter)
    }
    this.setState({filteredImage, currentFilter: filter})
  }


  render() {
    return (
      <div className={classes.container}>
        <Toolbar
          filters={filters}
          selected={this.state.currentFilter}
          onSelectFilter={this.onSelectFilterHandler}
        />
        <ProjectList images={this.state.filteredImage}/>
      </div>
    )
  }

}

export default Portfolio;