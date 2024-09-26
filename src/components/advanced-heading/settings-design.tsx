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

export const SettingsDesign = ({
   defaultSettingsAttrs,
 }: Module.Settings.Panel.Props<AdvancedHeadingAttrs>): ReactElement => (
  <React.Fragment>
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
      <BackgroundGroup attrName="title1.decoration.background" />
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
