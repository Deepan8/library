 import { Link } from "react-router-dom";
// import Readmore from "./readmore";


import { Title ,Id,Date,TagContainer,Tag, Paragraph,Month,Monthandid,Readingpart,Combain,Rotate} from "./middlecontentstyle"
function Content(props)
{
 
    return(
        
        
        <div>
       <Combain>
        
          <Monthandid>
          <Date >{props.Date}</Date>
          <Month>{props.Month}</Month>
         
          <Rotate>
          <Id > {props.Id}</Id> 
           </Rotate> 
          </Monthandid> 
          <Readingpart>
          <Title> {props.Heading}</Title> 
         
          {props.Paragraph.length<=300 &&
          <Paragraph>{props.Paragraph}</Paragraph>}

            {props.Paragraph.length>300 &&
          <Paragraph>{props.Paragraph.substring(0,300)+"..."}<Link to="/Readmore" state={{id:props.Key}}>read more</Link></Paragraph>}
          <TagContainer>  
          <Tag >{props.Tag1}</Tag> 
          <Tag >{props.Tag2}</Tag> 
          </TagContainer> 
          </Readingpart>
        </Combain>

       
</div>

    );
}
export default Content;