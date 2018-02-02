const fs = require('fs');
const pathRegex = /\sd="(.*)"/;

const svgFiles = fs.readdirSync(`${__dirname}/../mdi/svg`);
for (let svgFile of svgFiles) {
  const name = svgFile.split(/-/g).map(part => {
    return part.charAt(0).toUpperCase() + part.slice(1);
  }).join('').slice(0, -4);

  const content = fs.readFileSync(`${__dirname}/../mdi/svg/${svgFile}`);
  const pathMatches = pathRegex.exec(content);
  const path = pathMatches && pathMatches[1];
  // Skip on empty path
  if (!path) continue;

  const fileContent =
`import * as React from 'react';

export interface Props {
    className?: string;
}

class ${name}Icon extends React.Component<Props, Object> {
    render() {
        let classes = 'mdi-icon';
        let width = 24, height = 24, viewBox = '0 0 24 24';
        if (this.props.className!=null) classes += this.props.className;
        return (
            <svg {...this.props} width={width} height={height} viewBox={viewBox} className={classes}>
                <path d="${path}" />
            </svg>
        );
    }
}

export default ${name}Icon;
`;

  fs.writeFileSync(`${__dirname}/../build/${name}Icon.tsx`, fileContent);
}
