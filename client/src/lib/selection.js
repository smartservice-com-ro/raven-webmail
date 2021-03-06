import { writable } from "./store";
export const createSelection = (items = []) => {
    const selection = writable(items);
    const clear = () => selection.set([]);
    const add = (...args) => {
        const helper = selection.get().slice();
        for (const item of args) {
            if (!helper.includes(item)) {
                helper.push(item);
            }
            selection.set(helper);
        }
    };
    const remove = (...args) => selection.update($selection => $selection.filter(i => !args.includes(i)));
    const has = (item) => selection.get().includes(item);
    const toggle = (item) => {
        has(item) ? remove(item) : add(item);
    };
    const isSelected = writable(has);
    selection.subscribe(isSelected.invalidate);
    return { ...selection, clear, add, remove, toggle, isSelected };
};
