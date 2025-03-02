import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const SocialLinks = ({ links, className = "" }) => {
  const icons = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram,
    linkedin: Linkedin,
  };

  return (
    <div className={`flex space-x-4 ${className}`}>
      {links.map(({ name, url }) => {
        const Icon = icons[name.toLowerCase()];
        return (
          Icon && (
            <Link
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <Icon size={24} />
            </Link>
          )
        );
      })}
    </div>
  );
};

export default SocialLinks;
