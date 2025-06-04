import { Button } from "@/components/ui/button";
import { CirclePlusIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World From shadcn/ui</h1>
      <Button className="bg-custom-color">Click me custom color</Button>

      <Button disabled>Click me disabled</Button>
      {/* variants */}
      <Button variant="destructive" size="lg" className="rounded-full">
        Click me destructive
      </Button>
      {/* custom variants */}
      <Button variant="destructive" size="ederxl" className="rounded-full">
        <CirclePlusIcon />
        Eder xl
      </Button>
    </div>
  );
}
