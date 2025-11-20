export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    content?: any; // Svelte component
}

export const fetchPosts = async (): Promise<BlogPost[]> => {
    const allPostFiles = import.meta.glob('$lib/posts/*.md');
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = (await resolver()) as any;
            const slug = path.split('/').pop()?.slice(0, -3) ?? ''; // remove .md

            return {
                slug,
                ...metadata
            };
        })
    );

    return allPosts.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
};

export const getFeaturedPost = (posts: BlogPost[]): BlogPost | null => {
    if (posts.length === 0) return null;
    // Deterministic random based on date
    const today = new Date().toDateString();
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
        hash = today.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % posts.length;
    return posts[index];
};
