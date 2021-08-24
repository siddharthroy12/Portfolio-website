---
title: Build a free blog with Next.js and Netlify CMS
description: Learn how to build using Next.js and Netlify CMS and host it for free!
date: 2021-08-23T06:52:52.811Z
---
## Table of contents

1. [What is Next.js](#what-is-next-js)
2. [What is Netlify CMS](#what-is-netlify-cms)
3. [Why Next.js and Netlify CMS](#why-next-js-and-netlify-cms)
4. [Getting started](#getting-started)
5. [Home Page](#home-page)
6. [Listing Blogs](#listing-blogs)
7. [Blog Page](#blog-page)
8. [Connect Nextlify CMS](#connect-netlify-cms)

## What is Next.js

Next.js is a React Framework for building fast SEO-friendly websites. It supports serverside rendering, static site generation, optimizations,  and much more. Basically, you can write serverside web apps using React which is necessary for building a blog because every page will be pre-rendered which is necessary for SEO. You will learn more about Next.js and how it works in this tutorial below.

## What is Netlify CMS

It's a git-based Headless CMS build using React. It provides a rich text editor, real-time preview, media uploads all for free If you are hosting your site on Netlify.

## Why Next.js and Netlify CMS

If you are a React Developer and want to build a website with a CMS but hate WordPress then Next.js with Netlify CMS is the best option for you.

## Getting Started

Getting set up Next.js is simple, enter this command and it will set up a basic Next.js project for you:

```shell
npx create-next-app nextjs-blog
# or
yarn create next-app nextjs-blog
```

After the setup is complete \`cd\` into the folder and run this command to start the app in the development server:

```shell
cd nextjs-blog
yarn dev
# or
npm dev
```

Visit `localhost:3000` to view your app

![Welcome to Next.js](https://nextjs.org/static/images/learn/create-nextjs-app/welcome-to-nextjs.png)

If you look at the folder you will see 3 folders:

1. pages
2. public
3. styles

They are pretty self-explanatory, I don't think I need to explain what they do.

Inside the pages folder, you will notice an API folder. This is for writing REST API and we will not use this folder for this project so you can delete that.

The `_app.js` this is the entry point of our app just like index.js in create-react-app.

The `index.js` returns a react component and it will render when you visit the front page of the app.

Routing in Next.js is different from traditional create-react-app, we do not use react-router here instead we create a new react component in the pages folder with the name of route as the filename. For example, create a new file `testpage.js` in the pages folder with the following:

```jsx
export default function Testpage() {
  return (
    <div>
      <p>Hello</p>
	</div>
  )
}
```

Here the name of the function doesn't matter.

Now if you visit `localhost:300/testpage` you will see this

> To learn more about pages check out [Next.js Docs](https://nextjs.org/docs/basic-features/pages)

![Page Screenshot](https://i.imgur.com/wzFwiYy.png)

Each page is associated with a route based on its filename.

## Home Page

Now it's time to make our Home Page to show the list of blogs.

First, replace everything in the \`index.js\` with this:

```jsx
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<div className={styles['container']}>
    <h1 className={styles['header']}>Welcome to my blog</h1>
    <p className={styles['subtitle']}>This is a subtitle idk what to type here</p>
    <ul className={styles['blog-list']}>
      <li>A cool blog</li>
      <li>How to train a dragon</li>
      <li>How to catch a pokemon</li>
    </ul>
  </div>)
}
```

If you are wondering what is happening in the first line, Next.js allows us to import CSS files as a module then you can access the classes as a key from styles. The name of the CSS file must end with \`.module.css\` for it to work. This allows you to use the same CSS class name in different files without worrying about collisions.

Then replace everything in the \`Home.module.css\` file in the styles folder with this:

```css
.container {
  text-align: center;
  padding-top: 10rem;
  color: #445566;
}

.header {
  font-size: 3rem;
}

.subtitle {
  margin-bottom: 2rem;
}

.blog-list {
  text-align: start;
  margin: auto;
  width: max-content;
}

.blog-list a {
  color: rgb(4, 165, 165);
  text-decoration: underline;
}
```

Now it should look like this

![Home Page Screenshot](https://imgur.com/kJECvlJ.png)

## Listing Blogs

Now It's time to add some dummy blogs and list them on Home Page.

First, make a new folder at the root of the project called \`content\`.

> Note: The name of this folder doesn't matter, you can rename it to anything but make sure to modify the code below accordingly.

Inside the \`content\` folder create another folder named 'blogs' this is where we are going to store all our blogs in markdown files.

Inside the \`blogs\` folder create a file named \`my-first-blog.md\` and fill it with this:

```markdown
---
title: My First Blog
date: 24, August, 2021
---

# Welcome to my blog

This is an markdown file with some front matter.
Yes you have key value pair in yaml format covered by --- on the of markdown file.
The yaml style key value pair on the top is called front matter.

## Header 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

> a blockquote
```

Before listing our newly created blog on my Home Page we have to install a library to parse the "front matter"

```shell
npm install gray-matter
# or
yarn add gray-matter
```

Then modify the \`index.js\` file to like this:

```jsx
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home({ blogs }) {
  return (<div className={styles['container']}>
    <h1 className={styles['header']}>Welcome to my blog</h1>
    <p className={styles['subtitle']}>This is a subtitle idk what to type here</p>
    <ul className={styles['blog-list']}>
      {blogs.map(blog => (
        <li key={blog.slug}>
          <Link href={blog.slug}>
            <a>{blog.date}:{blog.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>)
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync('./content/blogs')

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map(filename => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8')
	const matterData = matter(file)
    
    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf('.'))
    }
  })

  return {
    props: {
      blogs
    }
  }

}
```

Explanation:

* In a typical create-react-app, all the rendering happens at the client-side but Next.js allows us to pre-render pages and it has two forms **Static Generation** (Using \`getStaticProps\`) and **Server Side Rendering** (Using \`getServerSideProps\`). [Learn more](https://nextjs.org/docs/basic-features/pages#pre-rendering)
* In the getStaticProps function, we are listing all the files in the blogs folder, parse the front matter and slug based on filename, and return them.
* In the Component function, we are simply listing all the blogs from the \`blogs\` array given from \`getStaticProps\` and using \`Link\` from Next.js for fast client-side page transition.