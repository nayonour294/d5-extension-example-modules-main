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
  RangeContainer,
  RichTextContainer,
  TextContainer,
  ToggleContainer,
  UploadContainer,
} from '@divi/field-library';

import {
  type Module,
} from '@divi/types';

// console.log(FieldContainer, "=======================")
import {StaticModuleAttrs} from "./types";

export const SettingsContent = ({
    defaultSettingsAttrs,
  }: Module.Settings.Panel.Props<StaticModuleAttrs>): ReactElement => (
    
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
      <FieldContainer
        attrName="content.innerContent"
        label={__('Content', 'd5-extension-example-modules')}
        description={__('Input the main text content for your module here.', 'd5-extension-example-modules')}
        features={{
          sticky: false,
        }}
      >
        <RichTextContainer/>
      </FieldContainer>
      
      <FieldContainer attrName="toggle.innerContent" label={__('Toggle', 'd5-extension-example-modules')} description={__('Input the main text content for your module here.', 'd5-extension-example-modules')} >
        {/* <div style={{width: '100%'}}>
          <select name="toggle" id="toggle" onChange={(e) => {
            selectedValue = e.target.value;
            console.log(selectedValue, "=======================")
          }}>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Khulna">Khulna</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Barishal">Barishal</option>
          </select>
        </div> */}
        <ToggleContainer />
      </FieldContainer>
      <FieldContainer
        attrName="subTitle.innerContent"
        label={__('Sub Title', 'd5-extension-example-modules')}
        description={__('Input the main text content for your module here.', 'd5-extension-example-modules')} features={{
          sticky: false,

        }}
      >
        <TextContainer />
      </FieldContainer>
      
      
    </GroupContainer>
    <GroupContainer id="buttonContent" title={__('Button', 'd5-extension-example-modules')}>
      <FieldContainer attrName="button.innerContent" label={__('Button', 'd5-extension-example-modules')} description={__('Input the main text content for your module here.', 'd5-extension-example-modules')}>
        <TextContainer />
      </FieldContainer>
    </GroupContainer>
    <GroupContainer
      id="image"
      title={__('Image', 'd5-extension-example-modules')}
    >
      <FieldContainer
        attrName="image.innerContent"
        subName="src"
        label={__('Image', 'd5-extension-example-modules')}
        description={__('Upload an Image', 'd5-extension-example-modules')}
        features={{
          sticky: false,
        }}
      >
        <UploadContainer/>
      </FieldContainer>
      <FieldContainer attrName="alt.innerContent" label={__('Alt', 'd5-extension-example-modules')} description={__('Input the main text content for your module here.', 'd5-extension-example-modules')} >
        <TextContainer />
      </FieldContainer>
      <FieldContainer attrName="image2.innerContent" subName="src"  label={__('Image2', 'd5-extension-example-modules')} description='Upload an Image'>
        <UploadContainer />
      </FieldContainer>
      <FieldContainer attrName="alt2.innerContent" label={__('Alt2', 'd5-extension-example-modules')} description={__('Input the main text content for your module here.', 'd5-extension-example-modules')} >
        <TextContainer />
      </FieldContainer>
      <FieldContainer attrName="text.innerContent" label={__('Text', 'd5-extension-example-modules')} description={__('Input the main text content for your module here.', 'd5-extension-example-modules')}>
        <RangeContainer />
      </FieldContainer>
    </GroupContainer>
    <LinkGroup/>
    <BackgroundGroup
      defaultGroupAttr={defaultSettingsAttrs?.module?.decoration?.background?.asMutable({deep: true}) ?? {}}
    />
    <AdminLabelGroup/>
  </React.Fragment>
);
