import { A } from "@solidjs/router";
import { config } from "~/config";

export default function Navbar() {
  return (
    <div class="navbar bg-base-300">
      <div class="flex-1">
        <A href="/" class="btn btn-ghost normal-case text-xl">
          {config.name}
        </A>
      </div>
      <div class="flex-none gap-2">
        <div>
          <button class="btn">Sign up</button>
        </div>
        <div>
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <A href="/profile">
                <img src="https://placeimg.com/80/80/people" />
              </A>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
