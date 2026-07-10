type Task = {
  name: string;
  completed: boolean;
};

const tasks: Task[] = [
  { name: "Restaurant Name", completed: false },
  { name: "Brand Identity", completed: false },
  { name: "Logo Concepts", completed: false },
  { name: "Menu Design", completed: false },
  { name: "Food Photos", completed: false },
  { name: "Website", completed: false },
  { name: "Facebook Campaign", completed: false },
  { name: "Grand Opening Promotion", completed: false },
];

type Props = {
  goal: string;
};

export default function MissionDashboard({
  goal,
}: Props) {
  return (
  <div className="mt-6 rounded-2xl border border-violet-700/30 bg-gradient-to-r from-violet-950/40 to-zinc-900 p-6">

  <div className="flex items-center gap-3">

    <div className="text-3xl">
      🧠
    </div>

    <div>

      <h3 className="font-bold text-xl">
        AIForge Brain
      </h3>

      <p className="text-zinc-400 text-sm">
        Mission Analysis in Progress
      </p>

    </div>

  </div>

  <div className="mt-6 space-y-4 text-zinc-300 leading-8">

    <p>
      I understand your goal.
    </p>

    <p>
      My job is to transform your idea into a complete execution plan instead of giving you just a single AI response.
    </p>

    <p>
      Right now I'm analyzing your request, estimating its complexity, identifying the work required, and preparing the smartest workflow to achieve the best possible outcome.
    </p>

    <p>
      Once the analysis is complete, I'll begin building your mission step by step.
    </p>

</div>
<div className="mt-8 space-y-3">

  <ThinkingItem
    done={true}
    text="Goal received"
  />

  <ThinkingItem
    done={true}
    text="Understanding your objective"
  />

  <ThinkingItem
    done={false}
    text="Planning the best workflow"
  />

  <ThinkingItem
    done={false}
    text="Preparing your mission"
  />

</div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <InfoCard title="Mission">
          Launch a Restaurant
        </InfoCard>

        <InfoCard title="Confidence">
          98%
        </InfoCard>

        <InfoCard title="Complexity">
          Medium
        </InfoCard>

        <InfoCard title="Selected Provider">
          Gemini Flash
        </InfoCard>

      </div>

      <div className="mt-10">

        <h3 className="text-xl font-semibold">
          Mission Plan
        </h3>

        <div className="mt-5 space-y-3">

          {tasks.map(task => (

            <div
              key={task.name}
              className="rounded-xl bg-zinc-900 p-4 flex justify-between"
            >

              <span>{task.name}</span>

              <span className="text-yellow-400">
                Pending
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl bg-zinc-900 p-5">

      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-bold">
        {children}
      </p>

    </div>
  );
}
function ThinkingItem({
  done,
  text,
}: {
  done: boolean;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="text-xl">

        {done ? "✅" : "🟣"}

      </div>

      <span className="text-zinc-300">

        {text}

      </span>

    </div>
  );
}