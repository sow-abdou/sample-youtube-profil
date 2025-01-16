
type Props = {
    title:string;
    description:string;
    image:string;
    link:string;
}

const Card = ({title, description, image, link}:Props) => {
  return (
    <div className="max-w-sm mx-auto m-[1rem]  rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={title} className="object-cover w-full h-48" />

        <div className="p-6">
            <h2 className="mb-2 text-2xl font-bold">{title}</h2>
            <p className="mb-4 text-gray-700">{description}</p>

            <a href={link} className="inline-block px-4 py-2 font-semibold transition duration-200 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-600 hover:text-white">
                Learn more
            </a>
        </div>
    </div>
  )
}

export default Card
