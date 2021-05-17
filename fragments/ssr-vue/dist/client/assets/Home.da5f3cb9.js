import {_ as __vitePreload} from "./index.e9fbd699.js";
import {i as defineAsyncComponent, j as reactive, c as createBlock, a as createVNode, t as toDisplayString, u as unref, F as Fragment, p as pushScopeId, k as popScopeId, o as openBlock} from "./vendor.93f284d9.js";
var _imports_0 = "/assets/logo.03d6d6da.png";
var foo = {msg: "hi"};
var Home_vue_vue_type_style_index_0_scoped_true_lang = "\nh1[data-v-3e414981],\na[data-v-3e414981] {\n  color: green;\n}\n";
function __variableDynamicImportRuntime1__(path) {
  switch (path) {
    case "../components/ImportType.vue":
      return __vitePreload(() => import("./ImportType.550bb33b.js"), true ? ["/assets/ImportType.550bb33b.js","/assets/vendor.93f284d9.js"] : void 0);
    default:
      return Promise.reject(new Error("Unknown variable dynamic import: " + path));
  }
}
pushScopeId("data-v-3e414981");
const _hoisted_1 = /* @__PURE__ */ createVNode("h1", null, "Home", -1);
const _hoisted_2 = /* @__PURE__ */ createVNode("p", null, [
  /* @__PURE__ */ createVNode("img", {
    src: _imports_0,
    alt: "logo"
  })
], -1);
const _hoisted_3 = {class: "virtual"};
popScopeId();
const _sfc_main = {
  expose: [],
  setup(__props) {
    const ImportType = load("ImportType");
    const Foo = defineAsyncComponent(() => __vitePreload(() => import("./Foo.2fe8c7a5.js"), true ? ["/assets/Foo.2fe8c7a5.js","/assets/Foo.a8752494.css","/assets/vendor.93f284d9.js"] : void 0).then((mod) => mod.Foo));
    function load(file) {
      return defineAsyncComponent(() => __variableDynamicImportRuntime1__(`../components/${file}.vue`));
    }
    const state = reactive({count: 0});
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Fragment, null, [
        _hoisted_1,
        _hoisted_2,
        createVNode("button", {
          onClick: _cache[1] || (_cache[1] = ($event) => unref(state).count++)
        }, "count is: " + toDisplayString(unref(state).count), 1),
        createVNode(unref(Foo)),
        createVNode("p", _hoisted_3, "msg from virtual module: " + toDisplayString(unref(foo).msg), 1),
        createVNode(unref(ImportType))
      ], 64);
    };
  }
};
_sfc_main.__scopeId = "data-v-3e414981";
export default _sfc_main;
