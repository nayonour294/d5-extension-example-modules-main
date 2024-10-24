// External Dependencies.
import React, { ReactElement } from 'react';
import classnames from 'classnames';

// WordPress Dependencies.
declare const wp: any;

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

  console.log(attrs, 'attrs==================')


  // const toggle = attrs?.hideShow?.innerContent?.desktop?.value;

  // all vairables here
  const containerDisplayType = attrs?.containerDisplayType?.innerContent?.desktop?.value ?? '';
  const containerDisplayDirection = attrs?.containerDisplayDirection?.innerContent?.desktop?.value ?? '';
  const containerAlignment = attrs?.containerAlignment?.innerContent?.desktop?.value ?? '';
  const containerAlignment2 = attrs?.containerAlignment2?.innerContent?.desktop?.value ?? '';
  const title1DisplayType = attrs?.title1DisplayType?.innerContent?.desktop?.value ?? '';
  const title2DisplayType = attrs?.title2DisplayType?.innerContent?.desktop?.value ?? '';
  const title3DisplayType = attrs?.title3DisplayType?.innerContent?.desktop?.value ?? '';
  const title3PositionType = attrs?.title3PositionType?.innerContent?.desktop?.value ?? '';
  const title3PositionTop = attrs?.title3PositionTop?.innerContent?.desktop?.value ?? '';

  //toggle variables
  const title3PositionSet = attrs?.title3PositionSet?.innerContent?.desktop?.value ?? '';

  //Container inline dynamic Style
  const containerStyle = {
    display: containerDisplayType,
    flexDirection: containerDisplayDirection as any,
    justifyContent: containerAlignment,
    alignItems: containerAlignment2,
  }

  //Titles inline dynamic Style
  const title1Style = {
    display: title1DisplayType,
  }

  const title2Style = {
    display: title2DisplayType,
  }

  const title3Style = {
    display: title3DisplayType,
    ...(title3PositionSet === 'on' ? {
      position: title3PositionType,
      top: title3PositionTop,
    } : {}),
  };


  console.log(attrs, 'attrs=================')
  // console.log(id, 'id=================')
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
      <div className="advanced_heading__container" style={containerStyle}>
        {elements.render({
          attrName: 'title1',
          htmlAttributes: {
            style: title1Style
          }
        })}
        {elements.render({
          attrName: 'title2',
          htmlAttributes: {
            style: title2Style
          }
        })}
        {elements.render({
          attrName: 'title3',
          htmlAttributes: {
            style: title3Style
          }
        })}

      </div>
    </ModuleContainer>
  );
};
