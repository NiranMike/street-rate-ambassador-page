import React from "react";
import manImage from "../images/Rectangle 160.svg";
import manImage2 from '../images/Rectangle 160 2.png'
import {
  Header,
  HeroContainer,
  HeroContentContainer,
  HeroSecondContentContainer,
  NextToImageItemBody,
  Paragraph,
  
} from "../styles/AmbassadorHero";

const AmbassadorHero = () => {
  
  return (
    <HeroContainer>
      <HeroContentContainer>
        <div className='meet--ambassador'>
          <Header>Meet our brand ambassadors</Header>
          <Paragraph>
            At Street Rate App we believe in the spirit of community, without
            the customers who use our app, we would not exist and keep rising.
            The customers are part of the ambassadors of the app as they will
            use and interact with it everyday because it serves their needs as
            well as offers quality service to them. The user is one of the
            strongest types of ambassadors because they spread word of the app
            to other people who are likely in need of the app.
          </Paragraph>
        </div>
        <HeroSecondContentContainer>
          <img className="myImage" src={manImage} alt="" />
          
          <NextToImageItemBody>
            <Paragraph colour="white">
              Our ambassadors are at the forefront of everything we do, and no
              we don’t have any special procedure of selecting who we consider
              an ambassador. All the people that work to make the app a success,
              the team behind the existence of this app are our esteemed
              ambassadors. The time and our will to see this app work makes
              everyone in the team an ambassador. A team of like minded
              individuals with one goal.
            </Paragraph>
            <Paragraph colour="white">
              We also have several ambassadors in the exchange world who are
              spreading information about the app and are also financially
              aware. Through all of these people, the app would grow and attract
              more users.
            </Paragraph>
          </NextToImageItemBody>
        </HeroSecondContentContainer>
      </HeroContentContainer>
    </HeroContainer>
  );
};

export default AmbassadorHero;
