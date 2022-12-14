import { Webview } from "https://deno.land/x/webview@0.7.5/mod.ts";
import { dirname, join } from "https://deno.land/std@0.158.0/path/mod.ts";

const worker = new Worker(
  join(dirname(import.meta.url), "main.ts"),
  { type: "module" },
);

worker.onmessage = () => {
  const webview = new Webview();
  webview.title = "Youtube Downloader";

  webview.navigate("http://localhost:8000/");
  webview.run();

  worker.terminate();
};
