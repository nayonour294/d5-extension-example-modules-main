// External dependencies.
import React, {ReactElement} from 'react';

// Divi dependencies.
import {
  StyleContainer,
  StylesProps,
  CssStyle,
  TextStyle,
} from '@divi/module';

// Local dependencies.
import {HeadingModuleAttrs} from './types';
import {cssFields} from './custom-css';

/**
 * Heading Module's style components.
 *
 * @since ??
 */
export const ModuleStyles = ({
    attrs,
    elements,
    settings,
    orderClass,
    mode,
    state,
    noStyleTag,
  }: StylesProps<HeadingModuleAttrs>): ReactElement => {
  const textSelector = `${orderClass} .example_heading_module__content-container`;

  return (
    <StyleContainer mode={mode} state={state} noStyleTag={noStyleTag}>
      {/* Module */}
      {elements.style({
        attrName: 'module',
        styleProps: {
          disabledOn: {
            disabledModuleVisibility: settings?.disabledModuleVisibility,
          },
        },
      })}
      <TextStyle
        selector={textSelector}
        attr={attrs?.module?.advanced?.text}
      />
      <CssStyle
        selector={orderClass}
        attr={attrs.css}
        cssFields={cssFields}
      />

      {/* Title */}
      {elements.style({
        attrName: 'title',
      })}

    </StyleContainer>
  );
};
