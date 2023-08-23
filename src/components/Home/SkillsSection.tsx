import { FC } from "react";
import {
  BiLogoTailwindCss,
  BiLogoDocker,
  BiLogoTypescript,
  BiLogoNodejs,
} from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import {
  IoLogoReact,
  IoLogoAngular,
  IoLogoSass,
  IoLogoHtml5,
} from "react-icons/io5";
import { SiSupabase, SiHeadlessui } from "react-icons/si";
import { TbBrandNextjs, TbBrandRadixUi } from "react-icons/tb";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Separator from "../ui/Separator";

interface SkillsSectionProps {}

const SkillsSection: FC<SkillsSectionProps> = ({}) => {
  return (
    <Container id="skills">
      <Heading>
        <Heading.SubHeading>SKILLS</Heading.SubHeading>
        <Heading.Element level="h2">
          Techstack For Seamless Development
        </Heading.Element>
        <Heading.Description>
          I have hands-on experience with a variety of technologies, which you
          can explore in detail through my portfolio.
        </Heading.Description>
      </Heading>

      <div className="mt-8 grid grid-cols-2 gap-2 text-sm font-semibold sm:gap-4 sm:text-base md:grid-cols-4 xl:grid-cols-5">
        <div className="flex items-center gap-4 p-2">
          <IoLogoReact
            size={40}
            className="shrink-0 rounded-md bg-blue-400/5 p-1.5 text-blue-400"
          />{" "}
          <span>React</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <IoLogoAngular
            size={40}
            className="shrink-0 rounded-md bg-red-500/5 p-1.5 text-red-500"
          />{" "}
          <span>Angular</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <IoLogoSass
            size={40}
            className="shrink-0 rounded-md bg-pink-500/5 p-1.5 text-pink-500"
          />{" "}
          <span>Sass</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <BiLogoTailwindCss
            size={40}
            className="shrink-0 rounded-md bg-sky-500/5 p-1.5 text-sky-500"
          />{" "}
          <span>TailwindCSS</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <IoLogoHtml5
            size={40}
            className="shrink-0 rounded-md bg-orange-500/5 p-1.5 text-orange-500"
          />{" "}
          <span>HTML</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <TbBrandNextjs
            size={40}
            className="shrink-0 rounded-md bg-white/5 p-1.5 text-white"
          />{" "}
          <span>NextJS</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <SiSupabase
            size={40}
            className="shrink-0 rounded-md bg-emerald-500/5 p-1.5 text-emerald-500"
          />{" "}
          <span>Supabase</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <BsGit
            size={40}
            className="shrink-0 rounded-md bg-rose-500/5 p-1.5 text-rose-500"
          />{" "}
          <span>Git</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <BiLogoDocker
            size={40}
            className="shrink-0 rounded-md bg-blue-400/5 p-1.5 text-blue-400"
          />{" "}
          <span>Docker</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <BiLogoTypescript
            size={40}
            className="shrink-0 rounded-md bg-sky-500/5 p-1.5 text-sky-500"
          />{" "}
          <span>Typescript</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <CgFigma
            size={40}
            className="shrink-0 rounded-md bg-violet-400/5 p-1.5 text-violet-400"
          />{" "}
          <span>Figma</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <BiLogoNodejs
            size={40}
            className="shrink-0 rounded-md bg-lime-500/5 p-1.5 text-lime-500"
          />{" "}
          <span>NodeJS</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <TbBrandRadixUi
            size={40}
            className="shrink-0 rounded-md bg-yellow-500/5 p-1.5 text-yellow-500"
          />{" "}
          <span>RadixUi</span>
        </div>
        <div className="flex items-center gap-4 p-2">
          <SiHeadlessui
            size={40}
            className="shrink-0 rounded-md bg-cyan-500/5 p-1.5 text-cyan-500"
          />{" "}
          <span>HeadlessUi</span>
        </div>
      </div>
      <Separator className="mt-12 max-w-lg" />
    </Container>
  );
};

export default SkillsSection;
