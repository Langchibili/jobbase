import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
const boundary = "--fij;MSIPajwhfq0opogyswfbWJOVB" + Math.random().toString(36).substring(2);
import Strapi from 'strapi-sdk-javascript'
import Image from 'next/image';
import ContentLoader from '../Includes/ContentLoader';


export default class ImageUploader extends React.Component{
     constructor(props) {
        super(props);
        this.state = {
          imageSrc: '/no-cover-photo.jpg',
          imageWidth: '245px',
          imageHeight: '113px',
          uploading: false,
          fileSelected: false
      };
        this.form =  React.createRef()
        this.strapi = new Strapi(this.props.api_url);
     }
     componentDidMount(){
       const uploads_url = this.props.api_url.replace('/api','')
       const image = this.props.image

       if(image === null || image === undefined) return
       if(image.formats === null){
           this.setState({
            imageSrc: uploads_url+image.url,
            imageWidth: image.width,
            imageHeight: image.height
           })
       }
       else{
          this.setState({
            imageSrc: uploads_url+image.formats.thumbnail.url,
            imageWidth : image.formats.thumbnail.width,
            imageHeight: image.formats.thumbnail.height
          })
       }
     }
     handleChange = (e)=>{
        if(e.target.files.length > 0){
          this.setState({fileSelected: true})
        }
     }
     
     handleUpload = async (e) =>{
      this.setState({uploading: true})
      const formData = new FormData(this.form.current)
      this.strapi.upload(formData, {
        headers: {
          Authorization: `Bearer ${this.props.jwt}`
        }
          })
      .then(response => {
        if(this.props.fieldName === 'profile_thumbnail_image' || this.props.fieldName === 'profile_cover_image'){
           this.props.updateProfileImages(response[0],this.props.fieldName,this.props.userProfile,this.props.updateRequest)
        }
        const uploads_url = this.props.api_url.replace('/api','')
        this.setState({
          uploading: false,
          imageSrc: uploads_url+response[0].formats.thumbnail.url,
          imageWidth : response[0].formats.thumbnail.width,
          imageHeight: response[0].formats.thumbnail.height
        })
        
      })
      .catch(error => {
        this.setState({uploading: false})
      });
    }
    render(){
      return ( 
          <div style={{minHeight:'200px', border:'1px solid lightgrey'}} className='mb-4 p-3'>
              <div><h5>{this.props.imageName}</h5></div>
              <Stack direction="row" alignItems="center" spacing={2}>
              <IconButton style={{background:'rgba(0, 0, 0, 0.050)'}} color="primary" aria-label="upload picture" component="label">
                  <form ref={this.form}>
                    <input onChange={this.handleChange} hidden accept="image/*" type="file" name="files"/>
                    <input type="hidden" name="ref" value={this.props.refName} />
                    <input type="hidden" name="refId" value={this.props.refId} />
                    <input type="hidden" name="field" value={this.props.fieldName} />
                  </form>
                  <PhotoCamera />
              </IconButton>
              
               <Button disabled={!this.state.fileSelected || this.state.uploading} onClick={this.handleUpload} variant="contained" component="label">
                    Upload
              </Button> 
              </Stack>
               <div className='mt-1'>{this.state.uploading? <ContentLoader text="uploading file..."/>  : <img src={this.state.imageSrc} width={this.state.imageWidth} height={this.state.imageHeight} alt={this.props.imageName}/> }</div> 
          </div>
      );
  }
}

