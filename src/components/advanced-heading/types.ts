// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
} from '@divi/types';


export interface AdvancedHeadingCssAttr extends Module.Css.AttributeValue {
  contentContainer?: string;
  title1?: string;
  title2?: string;
  title3?: string;
  title1DisplayType?: string;
  
}



export type AdvancedHeadingCssGroupAttr = FormatBreakpointStateAttr<AdvancedHeadingCssAttr>;




export interface AdvancedHeadingAttrs extends InternalAttrs {
  
  // CSS options is used across multiple elements inside the module thus it deserves its own top property.
  css?: AdvancedHeadingCssGroupAttr;
  // Module
  module?: {
    meta?: Element.Meta.Attributes;
    advanced?: {
      link?: Element.Advanced.Link.Attributes;
      htmlAttributes?: Element.Advanced.IdClasses.Attributes;
      text?: Element.Advanced.Text.Attributes;
      
    };
    
    decoration?: Element.Decoration.PickedAttributes<
      'animation' |
      'background' |
      'border' |
      'boxShadow' |
      'disabledOn' |
      'filters' |
      'overflow' |
      'position' |
      'scroll' |
      'sizing' |
      'spacing' |
      'sticky' |
      'transform' |
      'transition' |
      'zIndex'
    >;
  };

  

  // Title 1
  title1?: Element.Types.Title.Attributes;

  // Title 2
  title2?: Element.Types.Title.Attributes

  // Title 3
  title3?: Element.Types.Title.Attributes

  // Gallary
  gallary?: Element.Types.Title.Attributes

  // Container Display Type
  containerDisplayType?: Element.Types.Content.Attributes

  // Container Display Direction
  containerDisplayDirection?: Element.Types.Content.Attributes

  // Container Alignment
  containerAlignment?: Element.Types.Content.Attributes

  // Container Alignment 2
  containerAlignment2?: Element.Types.Content.Attributes

  // Title 1 Display Type
  title1DisplayType?: Element.Types.Content.Attributes

  // Title 2 Display Type
  title2DisplayType?: Element.Types.Content.Attributes

  // Title 3 Display Type
  title3DisplayType?: Element.Types.Content.Attributes

  // Title 3 position
  title3PositionSet?: Element.Types.Content.Attributes

  // Title 3 position
  title3PositionType?: Element.Types.Content.Attributes

  // Title 3 position top
  title3PositionTop?: Element.Types.Content.Attributes

  // Title 3 position bottom
  // hideShow?: Element.Types.HideShow.Attributes



}

export type AdvancedHeadingEditProps = ModuleEditProps<AdvancedHeadingAttrs>;
