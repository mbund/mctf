import { AiFillInstagram } from "solid-icons/ai";
import { FaBrandsDiscord } from "solid-icons/fa";
import { VsGithubInverted, VsTwitter } from "solid-icons/vs";
import { For, Show } from "solid-js";
import { config } from "~/config";

export default function Footer() {
  return (
    <footer class="footer p-10 bg-base-300 text-base-content">
      <Show when={config.hosts}>
        <div>
          <span class="footer-title">Hosted by</span>
          <For each={config.hosts}>{(host) => <div>{host.name}</div>}</For>
        </div>
      </Show>
      <Show when={config.connect}>
        <div>
          <span class="footer-title">Connect</span>
          <div class="grid grid-flow-col gap-4">
            <Show when={config.connect?.twitter}>
              <a href="https://twitter.com/cscosu">
                <VsTwitter class="text-lg" />
              </a>
            </Show>
            <Show when={config.connect?.github}>
              <a href="https://github.com/cscosu">
                <VsGithubInverted class="text-lg" />
              </a>
            </Show>
            <Show when={config.connect?.instagram}>
              <a href="https://www.instagram.com/cscosu">
                <AiFillInstagram class="text-lg" />
              </a>
            </Show>
            <Show when={config.connect?.discord}>
              <a href="https://discord.gg/WyUcFqrDjP">
                <FaBrandsDiscord class="text-lg" />
              </a>
            </Show>
          </div>
        </div>
      </Show>
    </footer>
  );
}
