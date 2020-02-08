import {createClient} from 'contentful'
//import {space_ID,access_Token} from './ytco/myData'
 
 

 export default createClient({
    space:process.env.REACT_APP_API_SPACE,
    accessToken:process.env.REACT_APP_ACCESS_TOKEN

})

/* export default function Contentfuls(){

    return(
        {
            createClient({
                space:space_ID, //"0",
    accessToken:access_Token //"4" 
            })
        }
    )
}*/



 