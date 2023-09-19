import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html'

const comicPagesDirectory = path.join(process.cwd(), '/public/comic-pages');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(comicPagesDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.jpg$/, '');

    // Read markdown file as string
    const fullPath = path.join(comicPagesDirectory, fileName);

    // Use gray-matter to parse the post metadata section

    // Combine the data with the id
    return {
      id
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(comicPagesDirectory);
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
      return {
        params: {
          id: fileName.replace(/\.jpg$/, ''),
        },
      };
    });
  }

export async function getPostData(id) {
  const fullPath = path.join(comicPagesDirectory, `${id}.jpg`);

  return id;
}