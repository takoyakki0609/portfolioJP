import { Link } from 'react-router-dom';
import * as St from './contact.styled';

export default function Contact() {
  return (
    <>
      <St.Container>
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <St.Title>Contact</St.Title>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <St.ContactWrapper>
            <St.ContactBox>
              <St.ContactList>
                <span>Phone :</span>
                <span> 82+ 10 - 4479 - 7077</span>
              </St.ContactList>
              <St.ContactList>
                <span>E-mail : </span>
                <span>jiyekim0415@gmail.com</span>
              </St.ContactList>
              <St.ContactList>
                <St.Linked
                  href="https://github.com/takoyakki0609"
                  target="_blank"
                >
                  <span>Github : </span>
                  <span>https://github.com/takoyakki0609</span>
                </St.Linked>
              </St.ContactList>
            </St.ContactBox>
            <St.IconWrapper>
              <St.GithubIconWrapper>
                <Link to="https://github.com/takoyakki0609" target="_blank">
                  <St.GithubIcon></St.GithubIcon>
                </Link>
              </St.GithubIconWrapper>
              <St.GmailIconWrapper>
                <a href="mailto:jiyekim0415@gmail.com" target="_blank">
                  <St.GmailIcon></St.GmailIcon>
                </a>
              </St.GmailIconWrapper>
            </St.IconWrapper>
          </St.ContactWrapper>
        </div>
      </St.Container>
    </>
  );
}
