import React from 'react';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';
import Lightbox from 'react-images';
import axios from 'axios';

/*
Static image files for testing

const images = [
  { src: 'https://www.gettyimages.com/gi-resources/images/Embed/new/embed2.jpg', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
  { src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
  { src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
  { src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
];
*/


//Gallery Component for building image gallery
class GalleryComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: -1,
      images: [] };    
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

//Lightbox implements for opening, closing, and iterating
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  //Retrieve image data from server and populate into list for Gallery
  componentDidMount() {
      axios.get('http://localhost:4200/imageport')
        .then(res => {
            //console.log(res.data); 
            const images = res.data.map(obj => ({src: obj.url, width: obj.width, height: obj.height}));
            this.setState({ images });
            console.log(images); 

          })
        .catch(function (error) {
            console.log(error);
        });
    }



  render() {
    const width = this.state.width;
    return (
      
      //Dynamic Column implement for Gallery
      <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
        {
        ({measureRef}) => {
          if (width < 1 ){
            return <div ref={measureRef}></div>;
          }
          let columns = 1;
          if (width >= 480){
            columns = 2;
          }
          if (width >= 1024){
            columns = 3;
          }
          if (width >= 1824){
            columns = 4;
          }
          return <div ref={measureRef}>

          <Gallery photos= {this.state.images} onClick={this.openLightbox} columns={columns} />
            <Lightbox images={this.state.images}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
        />
       </div>
        }
      }
      </Measure>
    )
  }
}
export default GalleryComponent;
