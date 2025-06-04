import AppBarChart from "@/components/AppBarChart";
import AppCard from "@/components/AppCard";
import { DatePicker } from "@/components/DataPicker";
import MyTabs from "@/components/Tabs";
import { TextareaDemo } from "@/components/TextareaDemo";
import { ToggleGroupDemo } from "@/components/ToggleGroupDemo";
import { Button } from "@/components/ui/button";
import { CirclePlusIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppCard />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <DatePicker />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <ToggleGroupDemo />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <MyTabs />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <TextareaDemo />
      </div>
    </div>
  );
}
