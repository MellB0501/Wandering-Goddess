export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string"
        },
        {
            name: "image",
            type: "image"
        },
        {
            name: "place",
            type: "string"
        },
        {
            name: "description",
            type: "text"
        },
        {
            name: "projectType",
            title: "Project type",
            type: "string",
            options: {
                list: [
                    { value: "necklaces", title: "Necklaces"},
                    { value: "earrings", title: "Earrings"},
                    { value: "chokers", title: "Chokers"},
                ],
            },
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            },
        },
    ],
};