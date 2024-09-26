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
import {AdvancedHeadingAttrs} from './types';
import {cssFields} from './custom-css';

/**
 * Advanced Heading's style components.
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
  }: StylesProps<AdvancedHeadingAttrs>): ReactElement => {
  const textSelector = `${orderClass} .advanced_heading__container`;

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

      {/* Title 1*/}
      {elements.style({
        attrName: 'title1',
      })}
      {/* Title 2 */}
      {elements.style({
        attrName: 'title2',
      })}
      {/* Title 3 */}
      {elements.style({
        attrName: 'title3',
      })}

    </StyleContainer>
  );
};
