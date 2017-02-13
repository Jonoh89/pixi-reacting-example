const addChildren = (component, children) => {
  children.forEach(child => {
    if (Array.isArray(child)) {
      addChildren(component, child);
    } else {
      component.addChild(child);
    }
  })
};

export default function createComponent(DisplayObject, args, ...children) {
  const component = new DisplayObject();
  Object.entries(args).forEach(([arg, value]) => {
    component[arg] = value;
  });

  if (children) {
    addChildren(component, children);
  }

  return component;
}