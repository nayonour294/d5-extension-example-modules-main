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
  TransformGroup,
  BackgroundGroup,
  FieldContainer,
} from '@divi/module';
import {
  type Module,
} from '@divi/types';
import { GroupContainer } from '@divi/modal';

// Local dependencies.
import { AdvancedHeadingAttrs } from "./types";
import { RangeContainer, Select, SelectContainer, TextContainer, ToggleContainer } from '@divi/field-library';
import { prop } from '@divi/field-library/build-types/components/scroll-effect/utils/pure';

interface Option {
  value: string;  // this should match the type you're using for values
  Option: string;  // this is for display text
}

export const SettingsDesign = ({
  defaultSettingsAttrs, ...props
}: Module.Settings.Panel.Props<AdvancedHeadingAttrs>): ReactElement => {
  const {
    attrs,
  } = props;

  //select variable here
  const title3PositionSet = attrs?.title3PositionSet?.innerContent?.desktop?.value ?? '';
  return (
    <React.Fragment>
      <GroupContainer id="textStyle" title={__('Container Style', 'divi5-optimizer-modules')}>
        <FieldContainer
          attrName="containerDisplayType.innerContent"
          label={__('Display Type', 'divi5-optimizer-modules')}
          description={__('Input your value to action.', 'divi5-optimizer-modules')}
          features={{
            sticky: false,
            dynamicContent: {
              type: 'text',
            },
          }}
        >
          <SelectContainer
            options={{
              "flex": { label: 'Flex' },
              "block": { label: 'Block' },
              "inline-block": { label: 'Inline Block' },
              "inline": { label: 'Inline' },
            }}
            grouped={false}
          />

        </FieldContainer>

        <FieldContainer
          attrName="containerDisplayDirection.innerContent"
          label={__('Display Direction', 'divi5-optimizer-modules')}
          description={__('Input your value to action.', 'divi5-optimizer-modules')}
          features={{
            sticky: false,
            dynamicContent: {
              type: 'text',
            },
          }}
        >
          <SelectContainer
            options={{
              "row": { label: 'Row' },
              "row-reverse": { label: 'Row Reverse' },
              "column": { label: 'Column' },
              "column-reverse": { label: 'Column Reverse' },
            }}
            grouped={false}
          />

        </FieldContainer>

        <FieldContainer
          attrName="containerAlignment.innerContent"
          label={__('Alignment', 'divi5-optimizer-modules')}
          description={__('Input your value to action.', 'divi5-optimizer-modules')}
          features={{
            sticky: false,
            dynamicContent: {
              type: 'text',
            },
          }}
        >
          <SelectContainer
            options={{
              "flex-start": { label: 'Flex Start' },
              "center": { label: 'Center' },
              "space-between": { label: 'Space Between' },
              "space-around": { label: 'Space Around' },
              "space-evenly": { label: 'Space Evenly' },
            }}
            grouped={false}
          />

        </FieldContainer>

        <FieldContainer
          attrName="containerAlignment2.innerContent"
          label={__('Alignment', 'divi5-optimizer-modules')}
          description={__('Input your value to action.', 'divi5-optimizer-modules')}
          features={{
            sticky: false,
            dynamicContent: {
              type: 'text',
            },
          }}
        >
          <SelectContainer
            options={{
              "flex-start": { label: 'Flex Start' },
              "flex-end": { label: 'Flex End' },
              "center": { label: 'Center' },
              "baseline": { label: 'Baseline' },
              "stretch": { label: 'Stretch' },
            }}
            grouped={false}
          />

        </FieldContainer>

        <BackgroundGroup attrName="container.decoration.background" grouped={false} />

        <SpacingGroup
          attrName="container.decoration.spacing"
          grouped={false}
        />

      </GroupContainer>
      <GroupContainer id="textStyle" title={__('Text One Style', 'divi5-optimizer-modules')}>
        <FieldContainer
          attrName="title1DisplayType.innerContent"
          label={__('Display Type', 'divi5-optimizer-modules')}
          description={__('Input your value to action title here.', 'divi5-optimizer-modules')}
          features={{
            sticky: false,
            dynamicContent: {
              type: 'text',
            },
          }}
        >
          <SelectContainer
            options={{
              "block": { label: 'Block' },
              "inline-block": { label: 'Inline Block' },
              "inline": { label: 'Inline' },
            }}
            defaultValue="block"
            grouped={false}
          />

        </FieldContainer>
        <FontGroup
          groupLabel={__('Typography', 'divi5-optimizer-modules')}
          attrName="title1.decoration.font"
          fieldLabel={__('Title One', 'divi5-optimizer-modules')}
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


      <GroupContainer id="textStyle2" title={__('Text Two Style', 'divi5-optimizer-modules')}>
        <FieldContainer
          attrName="title2DisplayType.innerContent"
          label={__('Display Type', 'divi5-optimizer-modules')}
          description={__('Input your value to action title here.', 'divi5-optimizer-modules')}
          features={{
            sticky: false,
            dynamicContent: {
              type: 'text',
            },
          }}
        >
          <SelectContainer
            options={{
              "block": { label: 'Block' },
              "inline-block": { label: 'Inline Block' },
              "inline": { label: 'Inline' },
            }}
            defaultValue="block"
            grouped={false}
          />

        </FieldContainer>
        <FontGroup
          groupLabel={__('Typography', 'divi5-optimizer-modules')}
          attrName="title2.decoration.font"
          fieldLabel={__('Title Two', 'divi5-optimizer-modules')}
          fields={{
            headingLevel: {
              render: true,
            },
          }}
          defaultGroupAttr={defaultSettingsAttrs?.title2?.decoration?.font?.asMutable({ deep: true }) ?? {}}
        />
        <BorderGroup attrName="title2.decoration.border" />
        <BackgroundGroup attrName="title2.decoration.background" />
        <SpacingGroup attrName="title2.decoration.spacing" />
      </GroupContainer>
      <GroupContainer id="textStyle3" title={__('Text Three Style', 'divi5-optimizer-modules')}>
        <FieldContainer
          attrName="title3DisplayType.innerContent"
          label={__('Display Type', 'divi5-optimizer-modules')}
          description={__('Input your value to action title here.', 'divi5-optimizer-modules')}
          features={{
            sticky: false,
            dynamicContent: {
              type: 'text',
            },
          }}
        >
          <SelectContainer
            options={{
              "block": { label: 'Block' },
              "inline-block": { label: 'Inline Block' },
              "inline": { label: 'Inline' },
            }}
            defaultValue="block"
            grouped={false}
          />

        </FieldContainer>

        <FieldContainer attrName="title3PositionSet.innerContent" label={__('Add position', 'divi5-optimizer-modules')} description={__('Input your value to action.', 'divi5-optimizer-modules')}>
          <ToggleContainer />
        </FieldContainer>

        <FieldContainer
          attrName="title3PositionType.innerContent"
          label={__('Position Type', 'divi5-optimizer-modules')}
          description={__('Input your value to action.', 'divi5-optimizer-modules')}
          features={{
            sticky: false,
            dynamicContent: {
              type: 'text',
            },
          }}
          visible={title3PositionSet === 'on'}
        >
          <SelectContainer
            options={{
              "absolute": { label: 'Absolute' },
              "relative": { label: 'Relative' },
              "fixed": { label: 'Fixed' },
            }}
            grouped={false}
          />

        </FieldContainer>

        <FieldContainer attrName="title3PositionTop.innerContent"
          label={__('Move top/bottom', 'divi5-optimizer-modules')}
          description={__('Input your value to action.', 'divi5-optimizer-modules')}
          visible={title3PositionSet === 'on'}
        >

          <RangeContainer min={0} max={1000} step={1} defaultValue={0} unit="px" />
        </FieldContainer>



        <FontGroup
          groupLabel={__('Typography', 'divi5-optimizer-modules')}
          attrName="title3.decoration.font"
          fieldLabel={__('Title Three', 'divi5-optimizer-modules')}
          fields={{
            headingLevel: {
              render: true,
            },
          }}
          defaultGroupAttr={defaultSettingsAttrs?.title3?.decoration?.font?.asMutable({ deep: true }) ?? {}}
        />
        <BorderGroup attrName="title3.decoration.border" />
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
  )
}
