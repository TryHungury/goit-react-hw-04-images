import { Component } from "react"
import { Box } from "./box/Box"
import { SearchBar } from "./searchbar/SearchBar"
import App_css from "./App.module.css";
import { ImageGallery } from "./imagegallery/ImageGallery";

export class App extends Component {
  state = {
    searchText: "",
    page: 1,
  }

  handleSubmit = (text) => {
    this.setState({searchText: text})
    this.setState((prevState)=>{
      if (prevState.searchText !== this.state.searchText) {
        return ({page: 1})
      }
      return
    })
  }

  handlePageIncrement = () => {
    this.setState((prevState)=>({page: prevState.page + 1}))
  }

  render() {
    const { page, searchText } = this.state;
    return (
      <Box as={"div"} display="flex" flexDirection="column" justifyContent="center">
        <Box className={App_css.App}>
          <SearchBar onSubmit={this.handleSubmit}></SearchBar>
          <ImageGallery onClick={this.handlePageIncrement} page={page} searchText={searchText}></ImageGallery>
        </Box>
      </Box>
  )
  }
}
