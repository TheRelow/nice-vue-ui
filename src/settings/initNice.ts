import type {App} from "vue";
import {initComponents} from "@/settings/initComponents";

export const initNice = {
  install: (app: App): void => {
    initComponents(app)
  }
}
