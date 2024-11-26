import { CardProps } from "@yext/search-ui-react";
import { FaFile } from "react-icons/fa";
import Cta from "../cta";
import ResponseComponent from "../ResponseComponent";

const DocumentStandard = ({ result }: CardProps<any>) => {
  const { id, name, landingPageUrl, c_generatedDescription } = result.rawData;
  return (
    <article id={`file-card-${id}`} className={`border rounded-lg p-4`}>
      <section className={`relative flex flex-col gap-4`}>
        <h2 className="text-lg md:text-xl font-medium">
          <a href={landingPageUrl}>{name}</a>
        </h2>
        {c_generatedDescription && (
          <article className="flex items-center justify-start">
            <ResponseComponent response={c_generatedDescription} />
          </article>
        )}
        {landingPageUrl && (
          <Cta
            cta={{
              label: "Learn more",
              link: landingPageUrl,
              linkType: "URL",
            }}
            ctaType="primaryCta"
            aria-label="Primary call to action"
          />
        )}
      </section>
    </article>
  );
};

export default DocumentStandard;
