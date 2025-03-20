import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    window.electron.subscribeStatistics((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh bg-gray-900">
      <Button className="bg-blue-500" asChild>
        <a href="">Teste</a>
      </Button>
    </div>
  );
}
