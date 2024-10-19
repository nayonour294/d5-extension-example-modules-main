// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AnimationGroup,
  BorderGroup,
  BoxShadowGroup,
  FiltersGroup,
  FontGroup,
  FontBodyGroup,
  SizingGroup,
  SpacingGroup,
  TextGroup,
  TransformGroup,
  BackgroundGroup,
} from '@divi/module';
import {
  type Module,
} from '@divi/types';
import { GroupContainer } from '@divi/modal';

// Local dependencies.
import {AdvancedHeadingAttrs} from "./types";
import { Select, SelectContainer } from '@divi/field-library';

interface Option {
  value: string;  // this should match the type you're using for values
  Option: string;  // this is for display text
}

export const SettingsDesign = ({
   defaultSettingsAttrs,
 }: Module.Settings.Panel.Props<AdvancedHeadingAttrs>): ReactElement => (
  <React.Fragment>
    {/* <GroupContainer id="headingStyle" title={__('Heading Style', 'd5-extension-example-modules')}>
      <SelectContainer
       name="headingLevel"
        options={[
          { value: 'default', Option: "Hello" },
          { value: 'h1', Option: 'H1' },
          { value: 'h2', Option: 'H2' },
          { value: 'h3', Option: 'H3' },
          { value: 'h4', Option: 'H4' },
        ] as Option[] as any}
      />
    </GroupContainer> */}
    <GroupContainer id="textStyle" title={__('Text One Style', 'd5-extension-example-modules')}>
      <FontGroup
        groupLabel={__('Title One Text', 'd5-extension-example-modules')}
        attrName="title1.decoration.font"
        fieldLabel={__('Title One', 'd5-extension-example-modules')}
        fields={{
          headingLevel: {
            render: true,
          },
        }}
        defaultGroupAttr={defaultSettingsAttrs?.title1?.decoration?.font?.asMutable({ deep: true }) ?? {}}
        
      />
      <BorderGroup attrName="title1.decoration.border" />
      <BackgroundGroup attrName="title1.decoration.background" />
      <SpacingGroup attrName="title1.decoration.spacing" />
    </GroupContainer>
    
    
    <GroupContainer id="textStyle2" title={__('Text Two Style', 'd5-extension-example-modules')}>
      <FontGroup
        groupLabel={__('Title Two Text', 'd5-extension-example-modules')}
        attrName="title2.decoration.font"
        fieldLabel={__('Title Two', 'd5-extension-example-modules')}
        fields={{
          headingLevel: {
            render: true,
          },
        }}
        defaultGroupAttr={defaultSettingsAttrs?.title2?.decoration?.font?.asMutable({ deep: true }) ?? {}}
      />
      <BackgroundGroup attrName="title2.decoration.background" />
      <SpacingGroup attrName="title2.decoration.spacing" />
    </GroupContainer>
    <GroupContainer id="textStyle3" title={__('Text Three Style', 'd5-extension-example-modules')}>
      <FontGroup
        groupLabel={__('Title Three Text', 'd5-extension-example-modules')}
        attrName="title3.decoration.font"
        fieldLabel={__('Title Three', 'd5-extension-example-modules')}
        fields={{
          headingLevel: {
            render: true,
          },
        }}
        defaultGroupAttr={defaultSettingsAttrs?.title3?.decoration?.font?.asMutable({ deep: true }) ?? {}}
      />
      <BackgroundGroup attrName="title3.decoration.background" />
      <SpacingGroup attrName="title3.decoration.spacing" />
    </GroupContainer>
    <FontBodyGroup />
    <SizingGroup />
    <SpacingGroup />
    <BorderGroup />
    <BoxShadowGroup />
    <FiltersGroup />
    <TransformGroup />
    <AnimationGroup />
  </React.Fragment>
);
