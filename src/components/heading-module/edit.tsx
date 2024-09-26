// External Dependencies.
import React, { ReactElement } from 'react';
import classnames from 'classnames';

// Divi Dependencies.
import { ModuleContainer } from '@divi/module';

// Local Dependencies.
import { HeadingModuleEditProps } from './types';
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';

/**
 * Heading Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {HeadingModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
export const HeadingModuleEdit = (props: HeadingModuleEditProps): ReactElement => {
  const {
    attrs,
    elements,
    id,
    name,
  } = props;

  return (
    <ModuleContainer
      attrs={attrs}
      elements={elements}
      id={id}
      name={name}
      stylesComponent={ModuleStyles}
      classnamesFunction={moduleClassnames}
      scriptDataComponent={ModuleScriptData}
    >
      {elements.styleComponents({
        attrName: 'module',
      })}
      <div className="example_heading_module__container">
          {elements.render({
            attrName: 'title',
          })}
      </div>
    </ModuleContainer>
  );
};
