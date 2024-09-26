// External dependencies.
import React, {ReactElement} from 'react';

// WordPress dependencies
import {__} from '@wordpress/i18n';

// Divi dependencies.
import {
  AdminLabelGroup,
  BackgroundGroup,
  FieldContainer,
  LinkGroup,
} from '@divi/module';
import {
  GroupContainer
} from '@divi/modal';
import {
  TextContainer,
} from '@divi/field-library';
import {
  type Module,
} from '@divi/types';


import {AdvancedHeadingAttrs} from "./types";

export const SettingsContent = ({
    defaultSettingsAttrs,
  }: Module.Settings.Panel.Props<AdvancedHeadingAttrs>): ReactElement => (
  <React.Fragment>
    <GroupContainer
      id="mainContent"
      title={__('Text', 'd5-extension-example-modules')}
    >
      <FieldContainer
        attrName="title1.innerContent"
        label={__('Title One', 'd5-extension-example-modules')}
        description={__('Input your value to action title here.', 'd5-extension-example-modules')}
        features={{
          sticky: false,
        }}
      >
        <TextContainer/>
      </FieldContainer>
      <FieldContainer
        attrName="title2.innerContent"
        label={__('Title Two', 'd5-extension-example-modules')}
        description={__('Input your value to action title here.', 'd5-extension-example-modules')}
        features={{
          sticky: false,
        }}
      >
        <TextContainer/>
      </FieldContainer>
      <FieldContainer
        attrName="title3.innerContent"
        label={__('Title Three', 'd5-extension-example-modules')}
        description={__('Input your value to action title here.', 'd5-extension-example-modules')}
        features={{
          sticky: false,
        }}
      >
        <TextContainer/>
      </FieldContainer>
    </GroupContainer>
    <LinkGroup/>
    <BackgroundGroup
      defaultGroupAttr={defaultSettingsAttrs?.module?.decoration?.background?.asMutable({deep: true}) ?? {}}
    />
    <AdminLabelGroup/>
  </React.Fragment>
);
