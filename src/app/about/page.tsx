import Card from "@/components/ui/card";
import { FaGraduationCap, FaLightbulb } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function AboutPage() {
  return (
    <section className="flex flex-col my-6 px-10">
      <h1 className="text-5xl font-bold mb-3">About Me</h1>
      <p className="mb-6 text-xl">
        Hi, I’m Danielle — a developer and designer based in rural Alberta with
        over a decade of experience in admin and accounting, and a deep-rooted
        passion for creating user-focused digital tools.
      </p>
      <p className="mb-6 text-xl">
        I’ve called Lac Ste. Anne County home for over 10 years, and while I’m
        open to working on a wide range of projects, I’m especially excited to
        bring thoughtful, modern tech solutions to rural communities and small
        businesses. I’m looking forward to new challenges where I can create
        meaningful, efficient, and beautiful digital experiences. Let’s build
        something great together!
      </p>

      <section className="grid grid-cols-3 gap-6">
        <Card
          icon={<FaGraduationCap />}
          children={
            <>
              <p>
                I recently completed NAIT’s Digital Media and IT (DMIT) diploma
                in Software Development, with a focus on frontend technologies.
              </p>
              <p>
                Before that, I took Python training and started with a
                foundation in bookkeeping. I'm always eager to keep learning and
                expanding both my technical and business skills.
              </p>
            </>
          }
        />
        <Card
          icon={<MdWork />}
          children={
            <>
              <p>
                Before transitioning to tech, I spent over 10 years in
                administrative and accounting roles where I focused heavily on
                data entry and workflow efficiency.
              </p>
              <p>
                That background shaped how I approach development today: I
                prioritize user experience by aiming for maximum output with
                minimum effort on the user's part. Simple, intuitive, and smart
                interfaces are at the heart of everything I build.
              </p>
            </>
          }
        />
        <Card
          icon={<FaLightbulb />}
          children={
            <>
              <p>
                I also care deeply about scalability and dynamic design — I
                build systems that are flexible from day one, minimizing the
                need for rework as needs evolve. Future-proofing is always part
                of my process.
              </p>
              <p>
                Visually, I’m a stickler for detail. If something doesn’t look
                quite right, I’ll fine-tune it until it does. Clean, purposeful
                design is more than a preference — it’s a principle I work by.
              </p>
            </>
          }
        />
      </section>
    </section>
  );
}
