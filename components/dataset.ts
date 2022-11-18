export type Data = {
    works: WorkData[];
    blogs: BlogData[];
};

export type WorkData = {
    title: string;
    explain: string;
    image: string; 
    url: string;
};

export type BlogData = {
    date: string;
    image: string;
    url: string;
};

const dataset: Data = {
    works: [
        {
            title: "画像レイアウト",
            explain: "javascriptライブラリ",
            image: "/noimage.png",
            url: "https://github.com/myuto7/image_layout"
        },
        {
            title: "おすすめ曲表示サイト",
            explain: "好きなジャンルからおすすめの曲をランダムで表示する",
            image: "/noimage.png",
            url: "https://github.com/myuto7/spotify_recommendation"
        }
    ],
    blogs: [
        {
            date: "2022/07/23",
            image: "https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUU3JTk0JUJCJUU1JTgzJThGJUUzJTgxJUFFJUU2JTlFJTlBJUU2JTk1JUIwJUUzJTgxJUFCJUU1JUJGJTlDJUUzJTgxJTk4JUUzJTgxJTlGJUUzJTgzJUFDJUUzJTgyJUE0JUUzJTgyJUEyJUUzJTgyJUE2JUUzJTgzJTg4JUUzJTgyJTkyJUU4JTg3JUFBJUU1JThCJTk1JUUzJTgxJUE3JUU3JTk0JTlGJUU2JTg4JTkwJUUzJTgxJTk5JUUzJTgyJThCSmF2YVNjcmlwdCVFMyU4MyVBOSVFMyU4MiVBNCVFMyU4MyU5NiVFMyU4MyVBOSVFMyU4MyVBQSVFMyU4MiU5MiVFNCVCRCU5QyVFNiU4OCU5MCVFMyU4MSU5NyVFMyU4MSU5RiZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTU2JnR4dC1jbGlwPWVsbGlwc2lzJnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NDdiZmY0ZjlkMDk0YWUzMjIyMzg3NjkwNWQ5NTViYzU&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwbXl1dG83JnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9MzYmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz0yM2Q3ODFkZTM1ODdjN2QyYWZmYjBkNDg4NTk1YzdhMA&blend-x=142&blend-y=491&blend-mode=normal&s=210c30109d087568f3889c35c8fa78ac",
            url: "https://qiita.com/myuto7/items/8d7a09744e56ec31ed3c"
        },
        {
            date: "2022/07/23",
            image: "https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUU3JTk0JUJCJUU1JTgzJThGJUUzJTgxJUFFJUU2JTlFJTlBJUU2JTk1JUIwJUUzJTgxJUFCJUU1JUJGJTlDJUUzJTgxJTk4JUUzJTgxJTlGJUUzJTgzJUFDJUUzJTgyJUE0JUUzJTgyJUEyJUUzJTgyJUE2JUUzJTgzJTg4JUUzJTgyJTkyJUU4JTg3JUFBJUU1JThCJTk1JUUzJTgxJUE3JUU3JTk0JTlGJUU2JTg4JTkwJUUzJTgxJTk5JUUzJTgyJThCSmF2YVNjcmlwdCVFMyU4MyVBOSVFMyU4MiVBNCVFMyU4MyU5NiVFMyU4MyVBOSVFMyU4MyVBQSVFMyU4MiU5MiVFNCVCRCU5QyVFNiU4OCU5MCVFMyU4MSU5NyVFMyU4MSU5RiZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTU2JnR4dC1jbGlwPWVsbGlwc2lzJnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NDdiZmY0ZjlkMDk0YWUzMjIyMzg3NjkwNWQ5NTViYzU&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwbXl1dG83JnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9MzYmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz0yM2Q3ODFkZTM1ODdjN2QyYWZmYjBkNDg4NTk1YzdhMA&blend-x=142&blend-y=491&blend-mode=normal&s=210c30109d087568f3889c35c8fa78ac",
            url: "https://qiita.com/myuto7/items/8d7a09744e56ec31ed3c"
        },
        {
            date: "2022/07/23",
            image: "https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUU3JTk0JUJCJUU1JTgzJThGJUUzJTgxJUFFJUU2JTlFJTlBJUU2JTk1JUIwJUUzJTgxJUFCJUU1JUJGJTlDJUUzJTgxJTk4JUUzJTgxJTlGJUUzJTgzJUFDJUUzJTgyJUE0JUUzJTgyJUEyJUUzJTgyJUE2JUUzJTgzJTg4JUUzJTgyJTkyJUU4JTg3JUFBJUU1JThCJTk1JUUzJTgxJUE3JUU3JTk0JTlGJUU2JTg4JTkwJUUzJTgxJTk5JUUzJTgyJThCSmF2YVNjcmlwdCVFMyU4MyVBOSVFMyU4MiVBNCVFMyU4MyU5NiVFMyU4MyVBOSVFMyU4MyVBQSVFMyU4MiU5MiVFNCVCRCU5QyVFNiU4OCU5MCVFMyU4MSU5NyVFMyU4MSU5RiZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTU2JnR4dC1jbGlwPWVsbGlwc2lzJnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NDdiZmY0ZjlkMDk0YWUzMjIyMzg3NjkwNWQ5NTViYzU&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwbXl1dG83JnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9MzYmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz0yM2Q3ODFkZTM1ODdjN2QyYWZmYjBkNDg4NTk1YzdhMA&blend-x=142&blend-y=491&blend-mode=normal&s=210c30109d087568f3889c35c8fa78ac",
            url: "https://qiita.com/myuto7/items/8d7a09744e56ec31ed3c"
        },
        {
            date: "2022/07/23",
            image: "https://qiita-user-contents.imgix.net/https%3A%2F%2Fcdn.qiita.com%2Fassets%2Fpublic%2Farticle-ogp-background-9f5428127621718a910c8b63951390ad.png?ixlib=rb-4.0.0&w=1200&mark64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTkxNiZ0eHQ9JUU3JTk0JUJCJUU1JTgzJThGJUUzJTgxJUFFJUU2JTlFJTlBJUU2JTk1JUIwJUUzJTgxJUFCJUU1JUJGJTlDJUUzJTgxJTk4JUUzJTgxJTlGJUUzJTgzJUFDJUUzJTgyJUE0JUUzJTgyJUEyJUUzJTgyJUE2JUUzJTgzJTg4JUUzJTgyJTkyJUU4JTg3JUFBJUU1JThCJTk1JUUzJTgxJUE3JUU3JTk0JTlGJUU2JTg4JTkwJUUzJTgxJTk5JUUzJTgyJThCSmF2YVNjcmlwdCVFMyU4MyVBOSVFMyU4MiVBNCVFMyU4MyU5NiVFMyU4MyVBOSVFMyU4MyVBQSVFMyU4MiU5MiVFNCVCRCU5QyVFNiU4OCU5MCVFMyU4MSU5NyVFMyU4MSU5RiZ0eHQtY29sb3I9JTIzMjEyMTIxJnR4dC1mb250PUhpcmFnaW5vJTIwU2FucyUyMFc2JnR4dC1zaXplPTU2JnR4dC1jbGlwPWVsbGlwc2lzJnR4dC1hbGlnbj1sZWZ0JTJDdG9wJnM9NDdiZmY0ZjlkMDk0YWUzMjIyMzg3NjkwNWQ5NTViYzU&mark-x=142&mark-y=112&blend64=aHR0cHM6Ly9xaWl0YS11c2VyLWNvbnRlbnRzLmltZ2l4Lm5ldC9-dGV4dD9peGxpYj1yYi00LjAuMCZ3PTYxNiZ0eHQ9JTQwbXl1dG83JnR4dC1jb2xvcj0lMjMyMTIxMjEmdHh0LWZvbnQ9SGlyYWdpbm8lMjBTYW5zJTIwVzYmdHh0LXNpemU9MzYmdHh0LWFsaWduPWxlZnQlMkN0b3Amcz0yM2Q3ODFkZTM1ODdjN2QyYWZmYjBkNDg4NTk1YzdhMA&blend-x=142&blend-y=491&blend-mode=normal&s=210c30109d087568f3889c35c8fa78ac",
            url: "https://qiita.com/myuto7/items/8d7a09744e56ec31ed3c"
        }
    ]
};

export default dataset;