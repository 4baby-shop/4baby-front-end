import clsx from 'clsx';

export default function mapPropsToStyles(props = {}, styles: any) {
  const mappedClassNames = Object.entries(props).reduce((mappedStyles, [prop, value]) => {
    let className = '';
    switch (typeof value) {
      case 'boolean':
        className = prop;
        break;
      case 'string':
        className = `${prop}-${value}`;
        break;
    }
    if (className === '' || typeof styles[className] === 'undefined') return mappedStyles;
    return { ...mappedStyles, [styles[className]]: true }
  }, {});

  return clsx(styles?.root, mappedClassNames);
}