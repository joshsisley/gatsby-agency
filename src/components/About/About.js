import React from "react";

import SkewBg from '#common/SkewBg';
import PageHeader from '#common/PageHeader';
import Flex from "#common/Flex";

import Quote from './Quote';
import Avatar from './Avatar';

import { AboutWrapper, AboutInfo } from './About.style';


const About = () => {
  return (
    <AboutWrapper id="about">
      <PageHeader>About Me</PageHeader>
      <SkewBg />
      <AboutInfo>
        <div>
          <Avatar src="profile_avatar.jpg" />
        </div>
        <p>
          Hi, I'm Joshua Sisley, a passionate self-taught full stack developer. I build Full Stack SaaS Applications for early to mid stage Startups with a focus on stability and scalability.
          <br />
          <br />
          <b>What does it mean to focus on stability? </b>
          <br />
          While it is important to get feedback from your target audience as quickly as possible, it is also important to make sure that the app provides a great experience without bugs.
          <br />
          <br />
          <b>What does it mean to focus on scalability? </b>
          <br />
          While creating each application there is always a focus on the future growth of the company. I want to make sure that you are able to easily build new features and bring on new members as your team grows.
        </p>
      </AboutInfo>

      <Flex justify="space-between" className="quotes__wrapper">
        <Quote>
          <p>“It's kind of fun to do the impossible“</p>
          <br />
          <i>- Walt Disney</i>
        </Quote>
        <Quote>
          <p>“Risk more than others think is safe. Dream more than others think is practical.“</p>
          <br />
          <i>- Howard Schultz</i>
        </Quote>
        <Quote>
          <p>“The best way to predict the future is to create it.”</p>
          <br />
          <i>- Peter Drucker</i>
        </Quote>
      </Flex>

    </AboutWrapper>
  )
}

export default About;