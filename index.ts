export const VERSION = "2.0.0"

import Plugins from "~plugins"

const PLUGINS = [

]

for (const plugin of PLUGINS) {
    (plugin.tags??=[]).push("Johannes7k75")
}

const name = Symbol("Johannes7k75-userplugins")
export default {name}

Set = new Proxy(Set, {
    construct(target,args) {
        if (Plugins && Plugins[name as any]) {
            Set = target;
            delete Plugins[name as any];
            for (const plugin of PLUGINS) {
                Plugins[plugin.name] = plugin
            }
        }
        return Reflect.construct(target, args)
    }
})