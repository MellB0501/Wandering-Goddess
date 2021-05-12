import React, { useEffect, useState} from "react";
import sanityClient from "../client.js"
import image from "../moonwhite.jpeg";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            image,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-green-100 min-h-screen p-12">
             <img 
            src={image} 
            alt="Moon Goddess" 
            className="absolute object-cover w-full h-full opacity-100"
            /> 
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive">Goddess Gallery</h1>
                <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to the Goddess Gallery</h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
                            <a
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{project.title}</a>
                            </h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                            <img 
                                src={project.image.asset} 
                                alt={project.image.alt}
                                // className="w-full h-full rounded-r"
                                /> 
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="m6-6 trxt-lg text-gray-700 leading-relaxed">
                                {project.description}
                             </p>
                             <a href={project.link} rel="noopener noreferrer" target="_blank" className="text-green-500 font-bold hover:underline hover:text-red-400 text-xl">
                                 Look at this item on Etsy!{" "}
                            <span role="img" aria-label="left moon">☽
                            </span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}