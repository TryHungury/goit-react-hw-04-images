import { ImageGalleryItem } from "components/imagegalleryitem/ImageGalleryItem";
import ImageGallery_css from "./ImageGallery.module.css";
import { Button } from "components/button/Button";
import { Spinner } from "components/spinner/Spinner";
import { Modal } from "components/modal/Modal";
import { Box } from "components/box/Box";
import { useState, useEffect } from "react";

export const ImageGallery = ({ searchText, page, onClick }) => {
  const [activeSpinner, setActiveSpinner] = useState(false)
  const [activeModal, setActiveModal] = useState(false)
  const [modalImageView, setModalImageView] = useState("")
  const [user, setUser] = useState("")
  const [firstRender, setFirstRender] = useState(true)
  const [images, setImages] = useState(null)
  const [imagesHits, setImagesHits] = useState(null)
  
  const setStateImages = (images) => {
    const totalHits = images.hits;

    setImages(images) 

    if (page > 1) {
      setImagesHits((prev)=>([...prev, ...totalHits]))
      return 
    }

    setImagesHits(totalHits)
  }

  useEffect(()=>{
    if (firstRender) {
      return setFirstRender(false)
    }

    const BASE_URL = "https://pixabay.com/api/";
    const API_KEY = "31470169-9c9cb372459e41628308e9796";
    const imageType = "photo";
    const oriental = "horizontal";
    const perPage = 12;

    setActiveSpinner(true)
      fetch(`${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=${imageType}&orientation=${oriental}&per_page=${perPage}`)
      .then(response => response.json())
      .then((images) => setStateImages(images))
      .catch(err => err.json)
      .finally(()=>setActiveSpinner(false))
  }, [searchText, page, firstRender])
  // помилка 48 рядок, що я не знадаю залежності, але якщо задаю то це бескінечний цикл, що я роблю не так?

  const handleActiveModalToggle = () => {
    setActiveModal((prevState)=>(!prevState))
  }

  const handleOnImageClick = (modalImageView, user) => {
  handleActiveModalToggle();

  setModalImageView(modalImageView)
  setUser(user)
  }

  return (
  <>
  <ul className={ImageGallery_css.ImageGallery}>
      <ImageGalleryItem onClick={handleOnImageClick} images={imagesHits}></ImageGalleryItem>
  </ul>
      {activeSpinner && <Box justifyContent="center"><Spinner ></Spinner></Box>}
      {images && images.total > (page * 12) && <Button onClick={onClick}></Button>}
      {activeModal && <Modal onClick={handleActiveModalToggle} url={modalImageView} alt={user}></Modal>}
  </>
)
}

// export class ImageGallery extends Component {
//   state = {
//     images: null,
//     activeSpinner: false,
//     activeModal: false,
//     modalImageView: "",
//     user: "",
//   }

//   componentDidUpdate(prevProps) {
//     const { searchText, page } = this.props;

//     if (prevProps.searchText !== searchText || prevProps.page !== page) {
//     const BASE_URL = "https://pixabay.com/api/";
//     const API_KEY = "31470169-9c9cb372459e41628308e9796";
//     const imageType = "photo";
//     const oriental = "horizontal";
//     const perPage = 12;

//     this.setState({activeSpinner: true})
//       fetch(`${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=${imageType}&orientation=${oriental}&per_page=${perPage}`)
//       .then(response => response.json())
//       .then((images) => this.setState({ images }))
//       .catch(err => err.json)
//       .finally(()=>this.setState({activeSpinner: false}))

//       // this.setState((prevState)=>{
//       //   if (prevProps.searchText === searchText && prevProps.page !== page) {
//       //     return ({images: [...prevState.images, ...this.state.images.hits]})
//       //   }
//       //   return
//       // })
//     }

//     return
//   }

//   handleActiveModalToggle = () => {
//     this.setState((prevState)=>({activeModal: !prevState.activeModal}))
//   }

//   handleOnImageClick = (modalImageView, user) => {
//   this.handleActiveModalToggle();

//   this.setState({modalImageView})
//   this.setState({user})
//   }

//   render () {
//     const { activeSpinner, images, activeModal, modalImageView, user } = this.state;
//   return (
//   <>
//   <ul className={ImageGallery_css.ImageGallery}>
//       <ImageGalleryItem onClick={this.handleOnImageClick} images={images}></ImageGalleryItem>
//   </ul>
//       {activeSpinner && <Box justifyContent="center"><Spinner ></Spinner></Box>}
//       {images && images.total > 12 && <Button onClick={this.props.onClick}></Button>}
//       {activeModal && <Modal onClick={this.handleActiveModalToggle} url={modalImageView} alt={user}></Modal>}
//   </>
// )
// }
// }