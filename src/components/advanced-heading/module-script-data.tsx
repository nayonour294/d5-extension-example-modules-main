import React, {
  Fragment,
  ReactElement,
} from 'react';

import {
  ModuleScriptDataProps,
} from '@divi/module';
import { AdvancedHeadingAttrs } from './types';


/**
 * Advanced heading's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<AdvancedHeadingAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
export const ModuleScriptData = ({
  elements,
}: ModuleScriptDataProps<AdvancedHeadingAttrs>): ReactElement => (
  <Fragment>
    {elements.scriptData({
      attrName: 'module',
    })}
  </Fragment>
);

