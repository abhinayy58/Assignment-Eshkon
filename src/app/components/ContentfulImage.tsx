import Image from "next/image";

// https://nextjs.org/docs/api-reference/next/image#loader
const nextImageLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const ContentfulImage = (props: any) => {
  return <Image alt={props.alt} loader={nextImageLoader} {...props} />;
};

export default ContentfulImage;
