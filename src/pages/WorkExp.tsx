import {
  CardWrapper,
  List,
  ListItem,
  PageHeader,
  PageHeaderSmall,
  Paragraph,
  SkillCard,
  SkillCardWrapper,
} from "components";
import { PageProp } from "interfaces";

const WorkExperiencePage: React.FC<PageProp> = ({ activeIndex, index }) => {
  return (
    <CardWrapper activeIndex={activeIndex} index={index}>
      <PageHeader>Professional Experience</PageHeader>
      <PageHeaderSmall>Zamdaa LLC 2021-2022 Backend developer</PageHeaderSmall>
      <Paragraph>
        An online platform connecting car renters with car rental businesses
      </Paragraph>
      <List>
        <ListItem>
          Normalized previous database overhauled the relations of the tables,
          indexing search fields resulting 20% faster query time and eliminated
          the fields with overlapping responsibility on SQL(PostgreSQL)
        </ListItem>
        <ListItem>
          Engineered a RESTful API while implementing intricate business logics
          within backend. Integrated additional functionalities, including a
          robust mailing service powered by SendGrid, and seamlessly
          incorporated a third-party payment system, QPAY.
        </ListItem>
        <ListItem>
          Configured Nginx, containerized back end and front end using docker,
          deploying front end and back end to the production servers on AWS.
        </ListItem>
        <ListItem>
          Wrote Unit test for the business logics and API end points
          successfully prevented multiple bugs to reaching production
          environment.
        </ListItem>
        <ListItem>
          Implementing security features for the sensitive information’s to
          protect users privacy by generating short lived JWT token to retrieve
          the users detail. (Information’s such as users driver’s license cars,
          insurance details previously it was just an URL for providing picture
          it had no security measures).
        </ListItem>
      </List>
      <SkillCardWrapper>
        <SkillCard>Golang</SkillCard>
        <SkillCard>GoFiber</SkillCard>
        <SkillCard>PostreSQL</SkillCard>
        <SkillCard>Docker</SkillCard>
        <SkillCard>AWS</SkillCard>
        <SkillCard>EC2</SkillCard>
        <SkillCard>Aurora</SkillCard>
        <SkillCard>RespAPI</SkillCard>
      </SkillCardWrapper>
      <PageHeaderSmall>
        Unimedia Solutions 2021 – 2021 Backend developer Intern
      </PageHeaderSmall>
      <Paragraph>
        Provides web marketing, web system development, and smartphone
        application development services.
      </Paragraph>
      <List>
        <ListItem>
          Spearheaded the development of a dynamic blog post platform during the
          internship, enabling users to submit multimedia content, including
          images and audio. Assumed ownership of the back-end service, excelling
          in the implementation of audio and image compression techniques,
          optimizing data storage efficiency and enhancing overall site
          performance.
        </ListItem>
      </List>
      <SkillCardWrapper>
        <SkillCard>Ruby</SkillCard>
        <SkillCard>RubyOnRails</SkillCard>
        <SkillCard>PostreSQL</SkillCard>
        <SkillCard>Heroku</SkillCard>
      </SkillCardWrapper>
      <PageHeaderSmall>
        Odo EcoSystem 2020 – 2021 Software Developer Intern
      </PageHeaderSmall>
      <Paragraph>
        Provides web marketing, web system development, and smartphone
        application development services.
      </Paragraph>
      <List>
        <ListItem>
          Contributed in the development of a streamlined POS system enhancing
          cashier efficiency and customer service through collaborative
          contributions.
        </ListItem>
        <ListItem>
          Successfully implemented an image compression feature for user uploads
          significantly reducing data transfer times and enhancing the overall
          user experience.
        </ListItem>
        <ListItem>
          Contributed to the development of a robust API for the POS systems
          enabling seamless retrieval of data and efficient processing of sales
          taxes thereby ensuring accurate financial transaction compliance.
        </ListItem>
      </List>
      <SkillCardWrapper>
        <SkillCard>React</SkillCard>
        <SkillCard>ReactNative</SkillCard>
        <SkillCard>Python</SkillCard>
        <SkillCard>Flask</SkillCard>
        <SkillCard>SQLAlchemy</SkillCard>
        <SkillCard>MySQL</SkillCard>
      </SkillCardWrapper>
    </CardWrapper>
  );
};

export default WorkExperiencePage;
