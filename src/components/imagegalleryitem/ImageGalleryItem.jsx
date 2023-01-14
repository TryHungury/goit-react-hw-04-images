import ImageGalleryItem_css from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({onClick, images}) => {


    const { ImageGalleryItem, ImageGalleryItem_image } = ImageGalleryItem_css;

    return ( 
  <>
  {images && images.map(({ id, webformatURL, largeImageURL, user})=>{
    return (
    <li key={id} onClick={()=>onClick(largeImageURL, user)} className={ImageGalleryItem}>
      <img className={ImageGalleryItem_image} src={webformatURL} alt={user} />
    </li>
    )
  })}
  </>
  )
  }


// export class ImageGalleryItem extends Component {

//   render() {
//     const { ImageGalleryItem, ImageGalleryItem_image } = ImageGalleryItem_css;
//     const { onClick, images} = this.props;
//     // const { imagesList } = this.state;
//     // console.log(images)

//     return ( 
//   <>
//   {images && images.map(({ id, webformatURL, largeImageURL, user})=>{
//     return (
//     <li key={id} onClick={()=>onClick(largeImageURL, user)} className={ImageGalleryItem}>
//       <img className={ImageGalleryItem_image} src={webformatURL} alt={user} />
//     </li>
//     )
//   })}
//   </>
//   )
//   }
// }