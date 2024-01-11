"use client";
import Link from "next/link";
import "../../app/globals.css";
const otherBlogs = [
  { id: 1, title: "Title of Blog3", slug: "/posts/Blog3" ,img :"https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg"},
  { id: 2, title: "Title of Blog1", slug: "/posts/Blog1" ,img :"https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg"},
];

export default function Blog2() {
  return (
    
    <div className="flex">
      
      <div className=" w-2/3 p-8">
        <div className="mb-8">
          <Link href="/">
            <div className="text-blue-500 hover:underline">Return</div>
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-4">Title of the Blog Post 2</h1>
        <p className="text-gray-600 mb-4">Published on January 10, 2024</p>

        <img
          src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-600nw-1029506242.jpg"
          alt="Blog Post Image"
          className="w-full mb-4 rounded-lg"
        />

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          sollicitudin tellus nec nisi feugiat, nec ultricies purus posuere.
          Fusce ut magna sit amet odio fermentum aliquet. Nullam suscipit urna
          et justo commodo, eu viverra elit tristique. Aenean vel aliquet velit.
          In hac habitasse platea dictumst. Sed vestibulum eu sem vitae laoreet.
        </p>

        <p>
          Curabitur bibendum ultrices metus, id dapibus elit venenatis sed.
          Integer nec mauris in justo aliquam fermentum. Proin sed metus vel
          dolor congue dictum. Sed nec justo at felis gravida consectetur.
          Suspendisse vel arcu ac odio aliquet vehicula. Fusce sed neque vel sem
          iaculis fermentum sit amet vel quam.
        </p>

        <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4">
          "The only way to do great work is to love what you do." - Steve Jobs
        </blockquote>

        <p>
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Phasellus quis libero in metus consectetur
          varius eu vel turpis. Praesent fringilla nisl a nunc bibendum cursus.
        </p>

        <p className="mt-4">
          In conclusion, lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Vestibulum varius justo eget semper efficitur. Praesent
          sagittis velit nec ante placerat, vel posuere nulla volutpat.
        </p>
      </div>

      
      <div className="w-1/4  bg-gray-200 p-8 ml-4 mb-4 mt-44 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Other Blogs</h2>
        <ul>
          {otherBlogs.map((blog) => (
            <li key={blog.id} className="mb-2 flex ">
              
                <div className="w-14 mr-4"><img src={blog.img}/></div>
                <Link href={blog.slug}>
                  <div className="text-blue-500 hover:underline">{blog.title}</div>
                </Link>
              
            </li>
          ))}
        </ul>
      </div>
    </div> 
    
  );
}
