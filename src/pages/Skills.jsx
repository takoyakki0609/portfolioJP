import styled from "@emotion/styled";
import { Box } from "@mui/material";
import stack from '../api/skillstacks.json'
const FrontStack = styled('div')({
 display:'flex',
 justifyContent:'space-around',
 transition:'300ms ease',

})

const UsingTool = styled('div')({
    display:'flex',
    justifyContent:'space-around',
})

const StackImg = styled.li`
    display:flex;
    list-style:none;
    border:1px solid rgb(30, 30, 35);
    transition:left 250ms ease, opacity 400ms ease;
    overflow:hidden;
    .show-box{
        opacity:0;
        
    }
    &:hover {
        .show-box{
           opacity: 1;
            width: 180px;
        }
    }
  
`



export default function Skills(){
    return(
        <Box sx={{textAlign:'center'}}>
            <h2 style={{fontSize:'48px', marginTop:'100px'}}>TECH STACK</h2>
            <span>아이콘에 마우스를 올리면 자세한 설명이 나옵니다.</span>
            <p style={{textAlign:'left'}}># FRONT-END SKILL</p>
            <FrontStack>
                {stack.front.map((front, idx)=>{
                    return(
                        <div style={{display:'flex',}} key={idx}>
                            <ul>
                                <StackImg>
                                    <img style={{width:'50px'}} src={front.src} alt={front.title} />
                                    <div className="show-box">
                                        <p>{front.title}</p>
                                        <span>{front.inner}</span>
                                    </div>   
                                </StackImg>                            
                             
                            </ul>                   
                    </div>
                    )                   
                })}
            </FrontStack>
            <p style={{textAlign:'left'}}># USING TOOL</p>
            <UsingTool>
            {stack.tools.map((tool, idx)=>{
                    return(
                        <div style={{display:'flex'}}  key={idx}>
                            <StackImg>
                            <img style={{width:'50px'}} src={tool.src} alt={tool.title} />
                                <div className="show-box">
                                <p>{tool.title}</p>
                                <span>{tool.inner}</span>
                            </div>    
                            </StackImg>                   
                    </div>
                    )                   
                })}
            </UsingTool>
        </Box>
    )
}