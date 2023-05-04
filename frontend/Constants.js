//192.168.43.207
const LOCAL_API_URL = 'http://192.168.43.207:1337/api' // localhost api
const REMOTE_API_URL = 'https://driverbabase.thenetworkzambia.com:1337/api' // remote server url
export const api_url = LOCAL_API_URL
// return data as props object
// jwt stuff
const fakeStr1 = 'kahs3lahebblo2uwb00an~#va5lwi_ad_fgaljdj'; // security stuff
const fakeStr2 ='klahewi_ad_fgalloanv;;aitalkjfajhsbbluwba==hn3vajd5j=+;'
export function getJwt(){
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