export interface Project {
    title: string;
    description: string;
    link: string;
}

export const projects: Project[] = [
    {
        title: "mymosque",
        description: "my masjid ran everything through a group chat, so i built the thing it should have been",
        link: "https://mymosque.app"
    },
    {
        title: "multicore os",
        description: "built across a semester of cs439h",
        link: "/cs439-syllabus.pdf"
    }
]
