import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type ColumnProps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnProps) => {
  return (
    <div className="footer_column">
      <h4 className="font-semibold">{title}</h4>
      <ul className="flex flex-col gap-2 font-normal">
        {links.map((link) => (
          <Link href={"/"} key={link}>
            {link}
          </Link>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src={"/logo-purple.svg"} width={115} height={38} alt="dribble" />
          <p className="text-start text-sm font-normal mt-5 mx-w-xs">
            {" "}
            Flexible is the world leading community for creators to share, grow and hired.
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          {footerLinks.map((footer) => (
            <FooterColumn title={footer.title} links={footer.links} />
          ))}
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@2023 Flexibble. All Rights reserved</p>
        <p className="text-gray">
          <span className="text-black">10,214</span> projects submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
