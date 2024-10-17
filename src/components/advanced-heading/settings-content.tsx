// External dependencies.
import React, { ReactElement, useState } from 'react';

// WordPress dependencies
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  AdminLabelGroup,
  BackgroundGroup,
  Field,
  FieldContainer,
  LinkGroup,
} from '@divi/module';
import {
  GroupContainer
} from '@divi/modal';
import {
  Select,
  SelectContainer,
  TextContainer,
  ToggleContainer,
} from '@divi/field-library';
import {
  type Module
} from '@divi/types';


import { AdvancedHeadingAttrs } from "./types";



export const SettingsContent = ({
  defaultSettingsAttrs,
}: Module.Settings.Panel.Props<AdvancedHeadingAttrs>): ReactElement => {

  const [options, setOptions] = useState();
  const [hideShow, setHideShow] = useState(false);


  const handleSelects = (e: any) => {
    setOptions(e.target.value);
  };
  return (
    <React.Fragment>

      <div style={{margin: '10px 20px'}}>
        <label style={{ display: 'block' }}>Show\Hide</label>
        <label className="switch" >
          <input onChange={() => setHideShow(!hideShow)} name='showHide' type="checkbox" />
          <span className="slider round" />
        </label>
      </div>

      {hideShow && (
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
          <TextContainer />
        </FieldContainer>

        <FieldContainer
          attrName="title2.innerContent"
          label={__('Title Two', 'd5-extension-example-modules')}
          description={__('Input your value to action title here.', 'd5-extension-example-modules')}
          features={{
            sticky: false,
          }}
        >
          <TextContainer />
        </FieldContainer>
        <FieldContainer
          attrName="title3.innerContent"
          label={__('Title Three', 'd5-extension-example-modules')}
          description={__('Input your value to action title here.', 'd5-extension-example-modules')}
          features={{
            sticky: false,
          }}
        >
          <TextContainer />
        </FieldContainer>



        <div style={{ marginBottom: '20px' }}>
          <label>Show\Hide</label>
          <select className='toggle_select' name='options' onChange={handleSelects}>
            <option value="of" selected>No</option>
            <option value="on">Yes</option>
          </select>
        </div>
        {options === 'on' ? (
          <FieldContainer
            attrName="selectOption.innerContent"
            label={__('Select Option', 'd5-extension-example-modules')}
            description={__('Input your value to action title here.', 'd5-extension-example-modules')}
            features={{
              sticky: false,
            }}
          >
            <TextContainer />
          </FieldContainer>
        ) : null}

      </GroupContainer>
      )}

      <LinkGroup />
      <BackgroundGroup
        defaultGroupAttr={defaultSettingsAttrs?.module?.decoration?.background?.asMutable({ deep: true }) ?? {}}
      />
      <AdminLabelGroup />
    </React.Fragment>
  );
};

