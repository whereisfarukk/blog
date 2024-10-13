// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "katex/dist/katex.min.css";
import { defineComponent, h } from "vue";
import katex from "katex";

// Create a component to render LaTeX
const LaTeX = defineComponent({
  props: {
    math: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.renderMath();
  },
  methods: {
    renderMath() {
      try {
        const html = katex.renderToString(this.math, {
          throwOnError: false,
        });
        this.$el.innerHTML = html;
      } catch (error) {
        console.error("Error rendering LaTeX:", error);
      }
    },
  },
  render() {
    return h("span"); // Render a span to replace with LaTeX content
  },
});

export default {
  ...DefaultTheme,
  LaTeX,
};
