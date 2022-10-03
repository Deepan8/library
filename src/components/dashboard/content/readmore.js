
import { useLocation } from "react-router-dom"
import { article } from "./content";
import { Title ,Id,Date,TagContainer,Tag, Paragraph,Month,Monthandid,Readingpart,Combain,Rotate} from "./readmorestyle"
export default function Readmore() {
    const {state}=useLocation();
    
  return(
   <>
   {article.map((feedback, i) => {


return (

    <>
    {state.id===feedback.logid && (
      <>

       <Combain>
        
        <Monthandid>
        <Date >{feedback.date}</Date>
        <Month>{feedback.month}</Month>
       
        <Rotate>
        <Id > {feedback.id}</Id> 
         </Rotate> 
        </Monthandid> 
        <Readingpart>
        <Title> {feedback.heading}</Title> 
        <Paragraph >{feedback.paragraph}</Paragraph>
        <TagContainer>  
        <Tag >{feedback.tag1}</Tag> 
        <Tag >{feedback.tag2}</Tag> 
        </TagContainer> 
        </Readingpart>
      </Combain>
      </>
    )}
        
    </>

);
})}
   
   </>


  )
       
        
  }
