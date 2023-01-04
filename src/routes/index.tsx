import { createSignal, For } from "solid-js";
import { config } from "~/config";
import Layout from "~/components/layout";

export default function Home() {
  let ctfStartDate = new Date("2023-01-03T24:00:00.000-0500");

  const [time, setTime] = createSignal({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });
  setInterval(() => {
    const difference = (ctfStartDate.getTime() - new Date().getTime()) / 1000;

    setTime({
      seconds: Math.floor(difference % 60),
      minutes: Math.floor((difference / 60) % 60),
      hours: Math.floor((difference / 60 / 60) % 24),
      days: Math.floor(difference / 60 / 60 / 24),
    });
  }, 1000);

  return (
    <Layout>
      <div class="m-2">{config.description}</div>

      <div class="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span style={{ "--value": time().days }}></span>
          </span>
          days
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span style={{ "--value": time().hours }}></span>
          </span>
          hours
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span style={{ "--value": time().minutes }}></span>
          </span>
          min
        </div>
        <div class="flex flex-col">
          <span class="countdown font-mono text-5xl">
            <span style={{ "--value": time().seconds }}></span>
          </span>
          sec
        </div>
      </div>

      <For each={config.sponsors}>
        {(sponsor) => (
          <div class="card w-96 bg-base-100 shadow-xl">
            <a href={sponsor.url}>
              <img src={sponsor.imageUrl} alt={sponsor.name} />
            </a>
          </div>
        )}
      </For>
    </Layout>
  );
}
