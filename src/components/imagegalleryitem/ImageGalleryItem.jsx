import { Component } from "react";
import ImageGalleryItem_css from "./ImageGalleryItem.module.css";

export class ImageGalleryItem extends Component {

  // state = {
  //   imagesList: null,
  // }

  // componentDidUpdate(prevProps){
  //   if (prevProps.images !== this.props.images && prevProps.images && this.props.images) {
  //     this.setState({imagesList: [...prevProps.images.hits, ...this.props.images.hits]});
  //   }
  // }

  render() {
    const { ImageGalleryItem, ImageGalleryItem_image } = ImageGalleryItem_css;
    const { onClick, images} = this.props;
    // const { imagesList } = this.state;
    // console.log(images)

    return ( 
  <>
  {images && images.hits.map(({ id, webformatURL, largeImageURL, user})=>{
    return (
    <li key={id} onClick={()=>onClick(largeImageURL, user)} className={ImageGalleryItem}>
      <img className={ImageGalleryItem_image} src={webformatURL} alt={user} />
    </li>
    )
  })}
  </>
  )
  }
}