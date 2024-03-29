import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdDownload } from "react-icons/md";

const ShareButtons = ({ qrValue, handleDownload }) => {
  const handleLinkedin = () => {
    const LinkedinUrl = `https://www.linkedin.com/in/yunusemresalcan/`;
    window.open(LinkedinUrl, "_blank");
  };

  const handleGitHub = () => {
    const GitHubUrl = `https://github.com/Yemresalcan`;
    window.open(GitHubUrl, "_blank");
  };

  return (
    <div className="flex flex-col items-center justify-around mt-10 ml-8">
      <button
        title="İndir"
        className="mr-4 p-2 flex shadow-xl items-center justify-center transition duration-500 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full"
        onClick={handleDownload}
      >
        <MdDownload className="transition duration-300 text-white" size={30} />
      </button>
      <button
        title="Linkedin | yunusemresalcan"
        className="mr-4 p-2 flex shadow-xl items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 rounded-full text-white"
        onClick={handleLinkedin}
      >
        <FaLinkedinIn size={32} />
      </button>
      <button
        title="GitHub | Yemresalcan"
        className="mr-4 p-2 flex shadow-xl items-center justify-center bg-gradient-to-r from-gray-500 to-gray-600 rounded-full text-white"
        onClick={handleGitHub}
      >
        <FaGithub className="text-white" size={32} />
      </button>
    </div>
  );
};

export default ShareButtons;
