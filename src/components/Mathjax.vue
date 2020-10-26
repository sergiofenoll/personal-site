<template>
  <span ref="mathJaxEl">{{ formula }}</span>
</template>

<script>
export default {
  name: "Mathjax",
  props: {
    formula: {
      type: String,
      default: "",
    },
  },
  watch: {
    formula() {
      this.renderMathJax();
    },
  },
  mounted() {
    this.renderMathJax();
  },
  methods: {
    renderMathJax() {
      if (window.MathJax) {
        const mathjaxNode = this.$refs.mathJaxEl;
        window.MathJax.typesetClear([mathjaxNode]);
        mathjaxNode.innerHTML = this.formula;
        window.MathJax.typesetPromise([mathjaxNode]).then(() => {});
      }
    },
  },
};
</script>
