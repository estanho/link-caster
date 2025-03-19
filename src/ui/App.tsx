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
        <a href="https://discord.com/oauth2/authorize?client_id=1351292498642866228&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5050&scope=identify+guilds+guilds.members.read+guilds.channels.read">
          Login com o Discord
        </a>
      </Button>
    </div>
  );
}
