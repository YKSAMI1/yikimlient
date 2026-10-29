import { pages } from "../main";
import { renderHome } from "./home";
import { renderInstances } from "./instances";
import { renderExplore } from "./explore";
import { renderNews } from "./news";
import { renderSettings } from "./settings";
import { renderDeneme } from "./deneme";
import { renderSkins } from "./skins";

export function registerPages(): void {
  pages["home"] = renderHome;
  pages["instances"] = renderInstances;
  pages["explore"] = renderExplore;
  pages["news"] = renderNews;
  pages["settings"] = renderSettings;
  pages["deneme"] = renderDeneme;
  pages["skins"] = renderSkins;
}
