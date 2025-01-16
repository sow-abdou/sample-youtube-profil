import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const links = [
    {
        href: "#",
        label:"Twitter",
        icon : <FaTwitter className="w-6 h-6 text-blue-500" />
    },

    {
        href: "#",
        label:"Youtube",
        icon : <FaYoutube className="w-6 h-6 text-blue-500" />
    },

    {
        href: "https://github.com/sow-abdou",
        label:"Github",
        icon : <FaGithub className="w-6 h-6 text-blue-500" />
    },

    {
        href: "https://instagram.com/abdou_sow404",
        label:"Instagram",
        icon : <FaInstagram className="w-6 h-6 text-blue-500" />
    }
]


const Contact = () => {
  return (
    <section className="px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-3xl font-extrabold text-gray-900">Contact me</h2>
      
      <div className="flex items-center">
        {links.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-900 hover:text-gray-600 mr-[2rem]"
            >
                {link.icon}
                <span className="text-lg">{link.label}</span>
            </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
