import { Box } from "@mui/material";
import contactInfo from '../api/contact.json'
import styled from "@emotion/styled";

const ContactBox = styled('div')({
    color:'white'
})

export default function Contact(){
    return(
        <Box sx={{display:'flex', justifyContent:'center', marginTop:'80px'}}>
           <Box>
           {contactInfo.info.map((value, idx)=>{
                return( <ContactBox key={idx}>
                        <span>{value.title}</span>
                        <span>{value.sub}</span>
                    </ContactBox>)
 
               
            })}

           </Box>
    </Box>
    )
    
}