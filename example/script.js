// template
  // vue-loaders第一次输出的结果如下：
  import { render, staticRenderFns } from "./source.vue?vue&type=template&id=27e4e96e&lang=pug&"
//  输出如下：
//   var render = function() {
//     var _vm = this
//     var _h = _vm.$createElement
//     var _c = _vm._self._c || _h
//     return _c(
//       "div",
//       {
//         attrs: {
//           ok: ""
//         }
//       },
//       [
//         _c(
//           "h1",
//           {
//             class: _vm.$style.red
//           },
//         [_vm._v("hello")
//       ])
//     ])
//   }

//   var staticRenderFns = []

//   render._withStripped = true

  // script
//   来自 
  import script from "./source.vue?vue&type=script&lang=js&"
//  输出如下：
//   var script = {
//     data () {
//       return {
//         msg: 'fesfff'
//       }
//     }
//   }

  // style
  import style0 from "./source.vue?vue&type=style&index=0&module=true&lang=css&"
//  输出如下：
//   .red {
//     color: red;
//   }

  // 注入style 及 style热加载
  var cssModules = {}
    var disposed = false

    function injectStyles (context) {
      if (disposed) return

      cssModules["$style"] = (style0.locals || style0)
      Object.defineProperty(this, "$style", {
        configurable: true,
        get: function () {
          return cssModules["$style"]
        }
      })
    }

    module.hot && module.hot.dispose(function (data) {
      disposed = true
    })

    module.hot && module.hot.accept(["./source.vue?vue&type=style&index=0&module=true&lang=css&"], function () {
      var oldLocals = cssModules["$style"]
      if (oldLocals) {
        var newLocals = require("./source.vue?vue&type=style&index=0&module=true&lang=css&")
        if (JSON.stringify(newLocals) !== JSON.stringify(oldLocals)) {
          cssModules["$style"] = newLocals
          require("/Users/zhangxixi/knowledge collect/vue-loader/node_modules/_vue-hot-reload-api@2.3.3@vue-hot-reload-api/dist/index.js").rerender("27e4e96e")
        }
      }
    })

    // normalize component
    import normalizer from "!../lib/runtime/componentNormalizer.js"
    var component = normalizer(
      script,
      render,
      staticRenderFns,
      false,
      injectStyles,
      null,
      null
    )

    // custom blocks
    // 来自 import block0 from "./source.vue?vue&type=custom&index=0&blockType=foo" 的结果
    var block0 = comp => {
      console.log(comp.options.data())
    }

    if (typeof block0 === 'function') block0(component)

    // hot reload
    // script 和 template的热加载
    if (module.hot) {
      var api = require("/Users/zhangxixi/knowledge collect/vue-loader/node_modules/_vue-hot-reload-api@2.3.3@vue-hot-reload-api/dist/index.js")
      api.install(require('vue'))
      if (api.compatible) {
        module.hot.accept()
        if (!module.hot.data) {
          api.createRecord('27e4e96e', component.options)
        } else {
          api.reload('27e4e96e', component.options)
        }
        module.hot.accept("./source.vue?vue&type=template&id=27e4e96e&lang=pug&", function () {
          api.rerender('27e4e96e', {
            render: render,
            staticRenderFns: staticRenderFns
          })
        })
      }
    }
    component.options.__file = "example/source.vue"
    export default component.exports