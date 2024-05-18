import {type App, type Component} from "vue";

import Btn from "@/components/base/NBtn.vue";

interface ComponentSetting {
  name: string;
  importCallback: Component;
}

const componentsList: ComponentSetting[] = [
  {
    name: "btn",
    importCallback: Btn,
  }
]

export const initComponents = (app: App): void => {
  componentsList.forEach((component: ComponentSetting) => {
    app.component(`n-${component.name}`, component.importCallback)
  })
}
