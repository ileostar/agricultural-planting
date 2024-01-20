/**
 * @function eventListener
 * @description 一个Vue Composition API Hook，用于在组件挂载时添加指定事件监听器，并在卸载时移除该监听器。
 * @param {keyof WindowEventMap} eventName - 要监听的事件名称。
 * @param {(event: Event) => void} eventHandler - 当指定事件触发时调用的回调函数。
 */
export const eventListener = (eventName: keyof WindowEventMap, eventHandler: (e: any) => void) => {
  onMounted(() => {
    // 绑定监听事件
    window.addEventListener(eventName, eventHandler);
  });
  onUnmounted(() => {
    // 销毁事件
    window.removeEventListener(eventName, eventHandler);
  });
};
