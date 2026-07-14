type Props = {
  brain: any;
};

export default function BusinessStudio({ brain }: Props) {
  return (
    <div className="rounded-2xl bg-zinc-900 p-8">
      <h2 className="text-3xl font-bold">
        💼 Business Studio
      </h2>

      <p className="mt-4 text-zinc-400">
        AIForge is preparing your business workflow.
      </p>

      <div className="mt-8 space-y-3">
        {brain.tasks.map((task: string) => (
          <div
            key={task}
            className="rounded-lg bg-zinc-800 p-4"
          >
            {task}
          </div>
        ))}
      </div>
    </div>
  );
}