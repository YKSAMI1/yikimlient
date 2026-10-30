import { pages } from "../main";
import { renderHome } from "./home";
import { renderInstances } from "./instances";
import { renderExplore } from "./explore";
import { renderNews } from "./news";
import { renderSettings } from "./settings";
import { renderSkins } from "./skins";
import { renderKozmetik } from "./kozmetik";

export function registerPages(): void {
  pages["home"] = renderHome;
  pages["instances"] = renderInstances;
  pages["explore"] = renderExplore;
  pages["news"] = renderNews;
  pages["settings"] = renderSettings;
  pages["skins"] = renderSkins;
  pages["kozmetik"] = renderKozmetik;
}
