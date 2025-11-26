import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  homepageLink?: string;
}

export const OfficialWebsite = ({ homepageLink }: Props) => {
  if (homepageLink) {
    return (
      <section>
        <a
          href={homepageLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Visit Official Website
          <FaExternalLinkAlt className="w-5 h-5" />
        </a>
      </section>
    );
  }
};
