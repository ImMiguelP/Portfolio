"use client";
import { Badge } from "@/components/ui/badge";
import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import { urlForImage } from "../../sanity/lib/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { timeStampToDate } from "../../sanity/lib/date";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Post {
  title: string;
  body: string;
  author: string;
  authorBio: string;
  authorImg: string;
  currentSlug: string;
  date: string;
  image: string;
}

async function getPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc)
  {
    title,
          body,
          "author": author->name,
          "authorBio" : author->bio,
          "authorImg" : author->image.asset._ref,
          "currentSlug": slug.current,
          "date": publishedAt,
          "image": mainImage.asset._ref, 
    }`;

  const data = await client.fetch(query);

  return data;
}

const MyBlog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getPosts();
        setPosts(fetchedPosts);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  console.log(posts, "posts");
  return (
    <main className="flex min-h-screen flex-col items-center p-4 mt-20 lg:p-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            My Blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-primary/80">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="flex flex-col items-start justify-between "
            >
              <div className="relative w-full">
                <Image
                  width={500}
                  height={500}
                  src={urlForImage(post.image)}
                  alt=""
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {timeStampToDate(post.date)}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-primary/90 ">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-secondary-foreground/60">
                    hii
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <Avatar>
                    <AvatarImage
                      src={urlForImage(post.authorImg)}
                      className="rounded-full w-12 h-12"
                      alt="Avatar"
                    />
                    <AvatarFallback>{post.author}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm leading-6">
                    <p className="font-semibold ">
                      <span className="absolute inset-0" />
                      {post.author}
                    </p>
                    <p className="text-primary/50">{post.authorBio}</p>
                  </div>
                </div>
              </div>

              <Button asChild className="mt-8 w-full my-4">
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MyBlog;
