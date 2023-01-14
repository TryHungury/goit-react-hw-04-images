import { useState } from "react"
import { Box } from "./box/Box"
import { SearchBar } from "./searchbar/SearchBar"
import App_css from "./App.module.css";
import { ImageGallery } from "./imagegallery/ImageGallery";
import { useEffect } from "react";

export const App = () => {
  const [searchText, setSearchText] = useState("")
  const [page, setPage] = useState(1)

  const handleSubmit = (text) => {
    setSearchText(text)
  }

  useEffect(()=>{
    setPage(1)
  }, [searchText])

  const handlePageIncrement = () => {
    setPage((prevState)=>(prevState + 1))
  }

  return (
    <Box as={"div"} display="flex" flexDirection="column" justifyContent="center">
      <Box className={App_css.App}>
        <SearchBar onSubmit={handleSubmit}></SearchBar>
        <ImageGallery onClick={handlePageIncrement} page={page} searchText={searchText}></ImageGallery>
      </Box>
    </Box>
  )
}