import styled from "@emotion/styled";
import { Box } from "@mui/material";

const ImgBox=styled('div')({
    width:'330px',
    height:'550px',
    backgroundColor:'gray',
    position:'relative'
})

const TextBox = styled('p')({
    position:'absolute',
    right:'-100px',
    fontSize:'40px',
    color:'#22A39F'
})

export default function About(){
    return(
        <Box>
            
            <ImgBox>
            <img src="" alt="" />
                <TextBox>
                prepare for<br/> a NEW START
                </TextBox>
            </ImgBox>
        </Box>
           
    )
}