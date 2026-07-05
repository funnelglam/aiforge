import {
  Image,
  Video,
 PenTool,
  Code2,
  Music4,
  Briefcase,
} from "lucide-react";

const categories = [
  {
    icon: Image,
    title: "Image AI",
    desc: "Generate stunning artwork",
  },
  {
    icon: Video,
    title: "Video AI",
    desc: "Create cinematic videos",
  },
  {
    icon: PenTool,
    title: "Writing AI",
    desc: "Blogs, emails & SEO",
  },
  {
    icon: Code2,
    title: "Coding AI",
    desc: "Generate production code",
  },
  {
    icon: Music4,
    title: "Music AI",
    desc: "Compose music instantly",
  },
  {
    icon: Briefcase,
    title: "Business AI",
    desc: "Plans, ads & strategy",
  },
];

export default function Categories() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Choose Your AI
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-2xl"
            >
              <item.icon className="mb-6 h-10 w-10 text-violet-400" />

              <h3 className="mb-2 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}