import { Box } from "@mui/material";
import contactInfo from '../api/contact.json'

export default function Contact(){
    <Box>
        <Box>
            {console.log(contactInfo)}
            {contactInfo.info.map((info, idx)=>{
               return( <Box key={idx}>
                        <span>{info.title}</span>
                        <span>{info.sub}</span>
                    </Box>)
                   
               
            })}
        </Box>
    </Box>
}