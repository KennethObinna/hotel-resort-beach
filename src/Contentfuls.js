import {createClient} from 'contentful'
import {space_ID,access_Token} from './ytco/myData'
 
 

 export default createClient({
    space:process.env.REACT_APP_API_SPACE, //"0plibpvgcaz1",
    accessToken:process.env.REACT_APP_ACCESS_TOKEN//"2g8xtSsumzmfhZuQ9nZPAayg4j_6PFnYJcWBhL-W24Y"

})

/* export default function Contentfuls(){

    return(
        {
            createClient({
                space:space_ID, //"0plibpvgcaz1",
    accessToken:access_Token //"2g8xtSsumzmfhZuQ9nZPAayg4j_6PFnYJcWBhL-W24Y" 
            })
        }
    )
}*/



 