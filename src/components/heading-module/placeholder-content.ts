// Divi dependencies.
import {placeholderContent as placeholder} from '@divi/module';

// Local dependencies.
import {HeadingModuleAttrs} from './types';


export const placeholderContent: HeadingModuleAttrs = {
  title: {
    innerContent: {
      desktop: {
        value: placeholder.title,
      },
    }
  }
};
