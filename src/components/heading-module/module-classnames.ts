import { ModuleClassnamesParams, textOptionsClassnames } from '@divi/module';
import { HeadingModuleAttrs } from './types';


/**
 * Module classnames function for Heading Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<HeadingModuleAttrs>} param0 Function parameters.
 */
export const moduleClassnames = ({
  classnamesInstance,
  attrs,
}: ModuleClassnamesParams<HeadingModuleAttrs>): void => {
  // Text Options.
  classnamesInstance.add(textOptionsClassnames(attrs?.module?.advanced?.text));
};
