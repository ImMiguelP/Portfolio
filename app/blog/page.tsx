"use client";
import { Badge } from "@/components/ui/badge";
import React from "react";

const myBlog = () => {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 mt-20 lg:p-24">
      <h1 className="text-2xl">My Personal WordPress Blogs</h1>
      <Badge className="mt-5 bg-secondary text-primary text-2xl rounded-sm p-4">
        Coming Soon
      </Badge>
    </main>
  );
};

export default myBlog;
