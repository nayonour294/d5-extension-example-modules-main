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


import {HeadingModuleAttrs} from "./types";

export const SettingsContent = ({
    defaultSettingsAttrs,
  }: Module.Settings.Panel.Props<HeadingModuleAttrs>): ReactElement => (
  <React.Fragment>
    <GroupContainer
      id="mainContent"
      title={__('Text', 'd5-extension-example-modules')}
    >
      <FieldContainer
        attrName="title.innerContent"
        label={__('Title', 'd5-extension-example-modules')}
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
