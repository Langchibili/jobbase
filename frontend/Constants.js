// let api_uri
// const ENV = process.env.NODE_ENV
// api_uri =  process.env.REMOTE_API_URL
// if(ENV === 'production'){
//    api_uri =  process.env.REMOTE_API_URL
// }
// else{
//    api_uri = process.env.LOCAL_API_URL
// }\
// return data as props object
// jwt stuff

const fakeStr1 = 'kahs3lahebblo2uwb00an~#va5lwi_ad_fgaljdj'; // security stuff
const fakeStr2 ='klahewi_ad_fgalloanv;;aitalkjfajhsbbluwba==hn3vajd5j=+;'
  /*localhost: */ export const api_url = 'http://localhost:1337/api'

 // /*liveserver: */ export const api_url = 'https://api.driverbase.app/api' // for production's sake

 // /*testserver: */ export const api_url = 'https://testapi.driverbase.app/api' // the api to be used when deployed to the test site

export function getJwt(){
    userHasConnection() // check the internet connection
    let jwt = localStorage.getItem('jwt')
    if(jwt === undefined || jwt === null){
        localStorage.setItem('jwt','o')
        return null
    }
    else{
        if(jwt === 'o'){
          return null
        }
        jwt = localStorage.jwt.split(fakeStr1)[1]
        return jwt.split(fakeStr2)[0]
    }
   
} 

export const driver_populate_url = 'populate=driverProfile,driverProfile.details,driverProfile.details.address,driverProfile.details.profile_cover_image,driverProfile.details.profile_thumbnail_image,driverProfile.driving_license_front,driverProfile.drivers_license_back,driverProfile.driving_certificate_front,driverProfile.driving_certificate_back,driverProfile.nrc_front,driverProfile.nrc_back'
export const minimal_driver_populate_url = 'populate=driverProfile,driverProfile.details,driverProfile.details.profile_thumbnail_image'
export const car_owner_populate_url = 'populate=carOwnerProfile,carOwnerProfile.details,carOwnerProfile.details.address,carOwnerProfile.details.profile_cover_image,carOwnerProfile.details.profile_thumbnail_image'
export const minimal_car_owner_populate_url = '?populate=details,details.profile_thumbnail_image'

async function userHasConnection(){
  const checkConnection = await fetch(api_url+'/featured-users',{
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if(!checkConnection.ok){
     alert('You seem to have an internet connection problem, this app requires an internet connection. So this screen shall continue reloading until an active connection is set.')
     window.location = ''
    return
  }
}

export async function getLoggedInUserData(populateExtension={carOwnerProfile: '', driverProfile: ''}){
    if(getJwt() === null) return 'logged-out' // you are looged out
    let url
    const user = await fetch(api_url+'/users/me',{
      headers: {
        'Authorization': `Bearer ${getJwt()}`,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
    if(user === undefined) return 'logged-out' // means couldn't connect well, so leave u logged out
    if('error' in user) return 'logged-out' //it means you are looged out
      //.catch(error => return 'logged-out')
     // get user first to check type, coz we don't know whether user is a driver or car owner
    if(user.type === 'driver') url = api_url+'/users/me/?'+driver_populate_url+populateExtension.driverProfile
    if(user.type === 'car-owner') url = api_url+'/users/me/?populate=carOwnerProfile,carOwnerProfile.details,carOwnerProfile.details.address,carOwnerProfile.details.profile_cover_image,carOwnerProfile.details.profile_thumbnail_image'+populateExtension.carOwnerProfile
    
    return await fetch(url,{
      headers: {
        'Authorization': `Bearer ${getJwt()}`,
        'Content-Type': 'application/json'
      }
     }).then(response => response.json())
      .then(data => data)
      .catch(error => console.error(error))
  }
  
  export const imageUrlFormat = (image,formatWanted)=>{
    if(image === undefined || image === null) return '/default-profile.png' 
    
    if(formatWanted === 'original'){
      return image.url
    }
    if(image.hasOwnProperty('formats')){
       if(image.formats.hasOwnProperty(formatWanted)){
        return image.formats[formatWanted].url
       }
    }
    if(!image.url){
        if(formatWanted === 'cover'){
          return '/no-cover-photo.jpg'
        }
        return '/default-profile.png' 
    }
    return image.url
  }