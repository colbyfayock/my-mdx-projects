import { FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

import Section from '@/components/Section';
import Container from '@/components/Container';
import LogoSpaceJelly from '@/components/LogoSpaceJelly';

const Footer = () => {
  const authorName = 'Colby Fayock';
  const authorUrl = 'https://twitter.com/colbyfayock';

  return (
    <footer className="bg-spacejelly-gray-dark text-blue-100">
      <Section className="text-center py-2 md:py-4 m-0">
        <Container className="flex flex-row items-center justify-center text-center py-4">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex items-center justify-center gap-5">
              <p className="text-lg">
                &copy; { new Date().getFullYear() }, <a href={authorUrl} className="font-semibold hover:text-white">{ authorName }</a>
              </p>
              <ul className="flex list-none gap-4 p-0">
                <li>
                  <a href="https://twitter.com/colbyfayock">
                    <span className="sr-only">Twitter</span>
                    <FaTwitter className="text-blue-100 hover:text-white w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/colbyfayock">
                    <span className="sr-only">YouTube</span>
                    <FaYoutube className="text-blue-100 hover:text-white w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/colbyfayock">
                    <span className="sr-only">GitHub</span>
                    <FaGithub className="text-blue-100 hover:text-white w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
            <a href="https://spacejelly.dev">
              <LogoSpaceJelly
                className="h-6 w-auto"
              />
            </a>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer;