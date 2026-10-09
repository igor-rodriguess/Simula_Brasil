import React from 'react';
import useBrokenLinks from '@docusaurus/useBrokenLinks';

// Âncora para links como /wad/referencias#ref1, registrada na checagem de links do build
export default function Ancora({id}) {
  useBrokenLinks().collectAnchor(id);
  return <span id={id} />;
}
