import {createClient} from 'contentful'
import {space_ID,access_Token} from './ytco/myData'
 
 
export default createClient({
    space:space_ID, //"0plibpvgcaz1",
    accessToken:access_Token //"2g8xtSsumzmfhZuQ9nZPAayg4j_6PFnYJcWBhL-W24Y"
})

 