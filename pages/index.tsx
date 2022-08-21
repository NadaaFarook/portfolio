import { Suspense } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';
import {
  SiChakraui,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiTwitter,
  SiHtml5,
  SiCss3,
  SiJavascript
} from 'react-icons/si';
import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
const STACK_TO_ICON = {
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  posgresql: SiPostgresql,
  chakraui: SiChakraui,
  html: SiHtml5,
  css: SiCss3,
  js: SiJavascript
} as const;
import clsx from 'clsx';
import cn from 'classnames';
import ExternalLink from 'components/ExternalLink';
export default function Home() {
  const career = [
    {
      title: 'neoG Camp.',
      description: `Managed the frontend of the main website. I also was a part of building internal tools and LMS and dashboard that benefitted neoG Camp.
         Mockman was one of the internal tool I made which is used by over 1000+ times.`,
      time: 'April 2022 - June 2021 • 3 months',
      type: 'SDE Intern',
      url: 'https://neog.camp/',
      logo: 'https://neog-lms.vercel.app/favicon.png'
    },
    {
      title: 'Strivio Fit',
      description:
        'I worked as a freelancer and developed the frontend UI for the user and admin interfaces.',

      time: 'March 22 - April 2022 • 1 month',
      type: 'Freelance Frontend Development',
      url: 'https://strivio.fit/',
      logo: '/favicon.svg'
    }
  ];
  const redGradient =
    'bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-transparent bg-clip-text';

  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="w-full justify-between flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                Nada Farook
              </h1>
              <h2 className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                Learning Web Development
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                I am a
                <span
                  className={clsx(
                    redGradient,
                    'transition-transform duration-500 ease-in-out hover:duration-300'
                  )}
                >
                  {' '}
                  MERN stack developer{' '}
                </span>
                working in Mumbai, India. <br />I am a 18 years old Hustler,
                Learner & Explorer at heart.
              </p>
              <span className="h-8" />
              <div className="mt-3 text-gray-600 dark:text-gray-400 mb-16 ">
                <h2 className="text-gray-700 dark:text-gray-300 text-lg mb-4">
                  My favorite tech &nbsp;
                </h2>
                <div className="mt-2">
                  <div className="inline-flex items-center space-x-2 mr-2">
                    <SiReact color={'#61DBFB'} />
                    <p>React</p>
                  </div>
                  &nbsp; &nbsp;
                  <div className="inline-flex items-center space-x-2 mr-2">
                    <SiNextdotjs className="text-black dark:text-white" />
                    <p>NextJS</p>
                  </div>
                  &nbsp;
                  <div className="inline-flex items-center space-x-2 mr-2">
                    <SiChakraui color={'#4fd1c5'} />
                    <p>Chakra UI</p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" sm:w-[176px] relative mb-8 sm:mb-0">
              <Image
                alt="Nada Farook"
                height={120}
                width={120}
                src="/avatar.png"
                sizes="30vw"
                priority
                className="rounded-full filter grayscale ml-auto"
              />
            </div>
          </div>
          <span className="h-8" />

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I created a few projects to learn more about the technologies I use.
            You can check them out here. Let me know what you think!
          </p>
          <div className="w-full">
            <ProjectCard
              href="https://declutr-app-t.vercel.app/"
              title="Declutr"
              brandColor={'#1DA1F2'}
              projectLogo={SiTwitter}
              stack={['nextjs', 'react', 'nodejs', 'chakraui']}
              footerNote="A project built on Twitter API v2"
              description=" Declutr makes it easy to quickly save and explore bookmarks later."
              link={false}
            />
            <ProjectCard
              href="https://github.com/neogcamp/mockman"
              title="Mockman"
              projectLogo={
                'https://github.com/neogcamp/mockman/raw/main/src/assets/Mockman.png'
              }
              brandColor={'#1DA1F2'}
              stack={['html', 'css', 'js']}
              footerNote="Mockman was one of the internal tool I made which is used 1000+ times."
              description="MockmanJS gives plug and play React Component to test your fake mock-backend APIs."
              link={true}
            />
            <ProjectCard
              href="https://strivio.fit/"
              title="Strivio"
              brandColor={'#ffffff'}
              projectLogo={'/favicon.svg'}
              stack={['react', , 'html', 'css', 'chakraui']}
              description="Strivio is built to help you find your version of success though fitness."
              footerNote="* Freelance Project"
              link={true}
            />
          </div>

          <div>
            <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
              Work Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              My work experience so far.
            </p>
            <ul className="w-full ">
              {career.map((c, index) => (
                <CareerCard
                  key={index}
                  last={index === career.length - 1}
                  career={c}
                />
              ))}
            </ul>
          </div>
          <span className="h-16" />
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Posts
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <BlogPostCard
              title="Introduction to Typescript"
              slug="https://nadaa.hashnode.dev/introduction-to-typescript"
              gradient="from-[#D8B4FE] to-[#818CF8]"
            />
            <BlogPostCard
              title="A detailed guide to start with WEB DEVELOPMENT"
              slug="https://nadaa.hashnode.dev/a-detailed-guide-to-start-with-web-development"
              gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
            />
            <BlogPostCard
              title="Some Lesser Known HTML Tags Worth Knowing"
              slug="https://nadaa.hashnode.dev/some-lesser-known-html-tags-worth-knowing"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
            />
          </div>
          <p className="mt-10 text-gray-700 inline-flex items-center">
            Original Portfolio by Lee Robinson.
          </p>
        </div>
      </Container>
    </Suspense>
  );
}
const CareerCard = ({
  career: { title, description, time, type, url, logo },
  last
}) => {
  return (
    <li className=" transform hover:scale-[1.01] transition-all border border-gray-200 my-5 dark:border-gray-800 p-4 rounded-lg animate-scale">
      <div className="relative">
        {!last && (
          <span
            className="hidden md:block absolute top-4 left-3 md:left-5 h-full w-0.5 bg-accent"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start md:space-x-3">
          <img
            className="items-center justify-center hidden w-6 h-6 rounded-full md:flex md:w-10 md:h-10"
            src={logo}
            alt="career"
          />
          <div className="w-full">
            <div className="flex items-center justify-between">
              <ExternalLink
                href={url}
                className="flex flex-col md:flex-row space-y-1 md:space-y-0"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-gray-200">
                  {type}
                </span>
              </ExternalLink>
              <p className="text-sm text-secondary text-gray-500">{time}</p>
            </div>
            <p className="text-gray-500 text-sm mt-1 md:mt-0">{title}</p>
            <p className="mb-1.5 mt-2 prose text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

function ProjectCard({
  title,
  link,
  description,
  href,
  projectLogo,
  stack,
  brandColor,
  footerNote = ''
}) {
  const Logo = projectLogo;
  return (
    <Link href={href} passHref aria-label={title}>
      <a className="mb-4" href={href}>
        <div className=" my-6 transform hover:scale-[1.01] transition-all bg-white dark:bg-gray-900 w-full flex items-center justify-between border border-gray-200 dark:border-gray-800 rounded p-4">
          <div className="flex items-center">
            <div
              className={cn(
                ' ml-2 mr-4 !bg-opacity-10 bg-yellow-700 p-2 rounded-full'
              )}
            >
              <span className="sr-only">{title}</span>
              {link == true ? (
                <img
                  src={Logo}
                  style={{ color: brandColor }}
                  className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                />
              ) : (
                <Logo
                  className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100"
                  style={{ color: brandColor }}
                />
              )}
            </div>
            <div>
              <div className="flex space-x-2">
                <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  {title}
                </h4>
              </div>
              <p className="leading-5 text-gray-700 dark:text-gray-300 ">
                {description}
              </p>
              <div className="flex flex-wrap mt-2 gap-2">
                {stack.map((stackItem, idx) => {
                  const Icon = STACK_TO_ICON[stackItem];
                  return (
                    <span
                      key={idx}
                      className="inline-flex items-center py-1 text-xs font-semibold opacity-60 text-gray-600 dark:text-gray-300"
                    >
                      <span className="mr-1">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-xs font-light capitalize">
                        {' '}
                        {stackItem}
                      </p>
                    </span>
                  );
                })}
              </div>
              <p className="mt-2 text-xs font-light text-gray-500 dark:text-gray-500">
                {footerNote}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
