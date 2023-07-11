import IconBrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-github.tsx";
import IconBrandLinkedin from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-linkedin.tsx";
import IconLocation from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/location.tsx";
import IconBuildingSkyscraper from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/building-skyscraper.tsx";
import IconGlobe from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/globe.tsx";
import IconPhoneCall from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/phone-call.tsx";
import IconMail from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/mail.tsx";
import IconBrandMedium from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-medium.tsx";

import ListItem from "./ListItem.tsx";
import Card from "../layout/Card.tsx";

type SocialInfoCardProps = {
  name: string;
  github: string;
  location?: string;
  company?: string;
  linkedin?: string;
  medium?: string;
  website?: string;
  phone?: string;
  email?: string;
};

const SocialInfoCard = (props: SocialInfoCardProps) => {
  const data: any = [
    {
      title: "Github",
      icon: <IconBrandGithub className="mr-2" />,
      value: props.github,
      link: `https://github.com/${props.github}`,
    },
  ];

  if (props.location) {
    data.push({
      title: "Based in",
      icon: <IconLocation className="mr-2" />,
      value: props.location,
    });
  }
  if (props.company) {
    data.push({
      title: "Company",
      icon: <IconBuildingSkyscraper className="mr-2" />,
      value: props.company,
    });
  }
  if (props.linkedin) {
    data.push({
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="mr-2" />,
      value: props.linkedin,
      link: `https://www.linkedin.com/in/${props.linkedin}`,
    });
  }
  if(props.medium) {
    data.push({
      title: "Medium",
      icon: <IconBrandMedium className="mr-2" />,
      value: props.medium,
      link: `https://${props.medium}.medium.com/`
    });
  }
  if (props.website) {
    data.push({
      title: "Website",
      icon: <IconGlobe className="mr-2" />,
      value: props.website,
      link: props.website,
    });
  }
  if (props.phone) {
    data.push({
      title: "Phone",
      icon: <IconPhoneCall className="mr-2" />,
      value: props.phone,
      link: `tel:${props.phone}`,
    });
  }
  if (props.email) {
    data.push({
      title: "Email",
      icon: <IconMail className="mr-2" />,
      value: props.email,
      link: `mailto:${props.email}`,
    });
  }

  return (
    <Card>
      <div className="card-body">
        <div className="text-base-content text-opacity-60">
          {data.map((row: any) => <ListItem {...row} />)}
        </div>
      </div>
    </Card>
  );
};

export default SocialInfoCard;
