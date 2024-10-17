// External Dependencies.
import React, { ReactElement } from 'react';
import classnames from 'classnames';

// Divi Dependencies.
import { ModuleContainer } from '@divi/module';

// Local Dependencies.
import { AdvancedHeadingEditProps } from './types';
import { ModuleStyles } from './styles';
import { moduleClassnames } from './module-classnames';
import { ModuleScriptData } from './module-script-data';

/**
 * Advanced Heading edit component of visual builder.
 *
 * @since ??
 *
 * @param {AdvancedHeadingEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
export const AdvancedHeadingEdit = (props: AdvancedHeadingEditProps): ReactElement => {
  const {
    attrs,
    elements,
    id,
    name,
  } = props;

  console.log(attrs, 'attrs=================')
  console.log(id, 'id=================')
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
      <div className="advanced_heading__container">
        {elements.render({
          attrName: 'title1',
          className: 'custom-classname'
        })}

        {elements.render({
          attrName: 'title2',
        })}
        {elements.render({
          attrName: 'title3',
        })}

      </div>
    </ModuleContainer>
  );
};
