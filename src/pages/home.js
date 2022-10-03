import { article } from "../../src/components/dashboard/content/content";
import { image } from "../resources/images";
import Content from "../components/dashboard/content/middlecontent";
// import Readmore from "../components/dashboard/content/readmore";
import { ContentWrapper,Late,Latestimg,Latest } from "../components/dashboard/content/middlecontentstyle";
export default function Home() {

    const sessionBlogs = sessionStorage.getItem('blog');
    let sessionBlogContent;
  if (sessionBlogs) {
    sessionBlogContent = JSON.parse(sessionBlogs);
    console.log(sessionBlogContent);
    
  }
  else{
    sessionBlogContent=[];

  }
    return(
        <>
        <Late>
        <Latestimg src={image.rectangle} alt="latest"/>
        <Latest>Latest</Latest>
        </Late>
        <ContentWrapper>
            {article.map((feedback, i) => {
                return (
                    <>
                        <Content Key={i}
                            
                            Heading={feedback.heading}
                            Id={feedback.id}
                            Date={feedback.date}
                            Month={feedback.month}
                            Paragraph={feedback.paragraph}
                            Tag1={feedback.tag1}
                            Tag2={feedback.tag2}
                        />
                    </>

                );
            })}

{sessionBlogContent.map((feedback, i) => {

return (
    <>
        <Content Key={i}
            

            Heading={feedback.message}
            Id={feedback.name}
            Date={feedback.date}
            Month={feedback.month}
            Paragraph={feedback.messagepara}
            Tag1={feedback.tag1}
            Tag2={feedback.tag2}

           
        />
    </>

);
})} 

         

        </ContentWrapper>

    </>


)
}