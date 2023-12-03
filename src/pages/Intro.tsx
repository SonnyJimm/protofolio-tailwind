import {
  CardWrapper,
  PageHeader,
  PageHeaderMid,
  PageHeaderSmall,
  Paragraph,
  SkillCard,
  SkillCardWrapper,
} from "components";
import { PageProp } from "interfaces";
import React from "react";
const IntroPage: React.FC<PageProp> = ({ activeIndex, index }) => {
  return (
    <CardWrapper activeIndex={activeIndex} index={index}>
      <PageHeader>Introduction</PageHeader>
      <div className="flex flex-col sm:flex-row gap-4 my-5">
        <div className="flex sm:w-2/6 h-max align-middle justify-center ">
          <img
            src="/profile.JPG"
            alt="profile"
            className="w-28 h-28 rounded-full"
          />
        </div>
        <div className="flex sm:w-4/6 h-max border-l-2 border-l-indigo-700 px-4 m-auto text-base">
          <Paragraph>
            My name is Tserenpuntsag Zorigt (Jimmy). Im a Back End developer
            with 2 years of experience. I enjoy experimenting with new
            technologies.
          </Paragraph>
        </div>
      </div>

      <PageHeaderMid>SkillSet</PageHeaderMid>
      <Paragraph>
        The main techonoly that i use is Golang and React.js but im not only
        limited to these technologies i have been constantly improving myself
        and exploring new technologies.
      </Paragraph>
      <PageHeaderSmall>Programming Languages</PageHeaderSmall>
      <SkillCardWrapper>
        <SkillCard>Golang</SkillCard>
        <SkillCard>JavaScript</SkillCard>
        <SkillCard>Java</SkillCard>
        <SkillCard>Python</SkillCard>
        <SkillCard>Ruby</SkillCard>
      </SkillCardWrapper>
      <PageHeaderSmall>FrameWorks</PageHeaderSmall>
      <SkillCardWrapper>
        <SkillCard>GoFiber</SkillCard>
        <SkillCard>React.js</SkillCard>
        <SkillCard>SpringBoot</SkillCard>
        <SkillCard>Flask</SkillCard>
        <SkillCard>Ruby on Rails</SkillCard>
      </SkillCardWrapper>
      <PageHeaderSmall>Database</PageHeaderSmall>
      <SkillCardWrapper>
        <SkillCard>PostgreSQL</SkillCard>
        <SkillCard>MySQL</SkillCard>
        <SkillCard>MongoDB</SkillCard>
      </SkillCardWrapper>
      <PageHeaderSmall>Cloud</PageHeaderSmall>
      <SkillCardWrapper>
        <SkillCard>AWS</SkillCard>
        <SkillCard>AWS Lambda</SkillCard>
        <SkillCard>EC2</SkillCard>
        <SkillCard>SQS</SkillCard>
        <SkillCard>SNS</SkillCard>
        <SkillCard>Aurora</SkillCard>
        <SkillCard>ECS</SkillCard>
        <SkillCard>EKS</SkillCard>
        <SkillCard>CloudFormation</SkillCard>
      </SkillCardWrapper>
      <PageHeaderMid>The role im looking for</PageHeaderMid>
      <Paragraph>
        Im currently looking for Back-End developer position. If im given the
        chances i want to work with IoT devices and realtime application.
      </Paragraph>
    </CardWrapper>
  );
};
export default IntroPage;
