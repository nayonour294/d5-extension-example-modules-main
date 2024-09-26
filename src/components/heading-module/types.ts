// Divi dependencies.
import { ModuleEditProps } from '@divi/module-library';
import {
  FormatBreakpointStateAttr,
  InternalAttrs,
  type Element,
  type Module,
} from '@divi/types';

// export interface Image {
//   src?: string;
//   alt?: string;
// }

export interface HeadingModuleCssAttr extends Module.Css.AttributeValue {
  contentContainer?: string;
  title?: string;
}

export type HeadingModuleCssGroupAttr = FormatBreakpointStateAttr<HeadingModuleCssAttr>;

export interface HeadingModuleAttrs extends InternalAttrs {
  // CSS options is used across multiple elements inside the module thus it deserves its own top property.
  css?: HeadingModuleCssGroupAttr;

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

  

  // Title
  title?: Element.Types.Title.Attributes;

}

export type HeadingModuleEditProps = ModuleEditProps<HeadingModuleAttrs>;
