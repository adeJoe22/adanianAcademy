import React from "react";
import Hero from "../../components/blog/Hero";
import BlogList from "../../components/blog/BlogList";
import Popular from "../../components/blog/Popular";
import Last from "../../components/blog/Last";

export default function Blog() {
  return (
    <>
      <Hero />
      <BlogList />
      <Popular />
      <Last />
    </>
  );
}
